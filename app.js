    let selectedBranch = "全部";
    let selectedId = "cambridge";
    let currentView = "research";
    const progressKey = "footballTechTreeProgressV3";
    const dragKey = "footballTechTreeDragPositionsV11";
    const zoomKey = "footballTechTreeZoomV5";
    const discoveredKey = "footballTechTreeDiscoveredV2";
    let unlocked = new Set(JSON.parse(localStorage.getItem(progressKey) || "[]"));
    let discovered = new Set(JSON.parse(localStorage.getItem(discoveredKey) || "[]"));
    rootIds.forEach(id => discovered.add(id));
    let dragPositions = JSON.parse(localStorage.getItem(dragKey) || "{}");
    let currentLayout = null;
    let linkFrame = 0;
    let detailOpen = false;
    const mobileQuery = window.matchMedia("(max-width: 760px)");

    const tree = document.getElementById("tree");
    const linksSvg = document.getElementById("links");
    const filters = document.getElementById("filters");
    const legend = document.getElementById("legend");
    const nodeSearch = document.getElementById("nodeSearch");
    const nodeResults = document.getElementById("nodeResults");
    const detail = document.getElementById("detail");
    const timeline = document.getElementById("timeline");
    const map = document.getElementById("map");
    const modeNote = document.getElementById("modeNote");
    const resetProgress = document.getElementById("resetProgress");
    const canvasScale = document.getElementById("canvasScale");
    const zoomIn = document.getElementById("zoomIn");
    const zoomOut = document.getElementById("zoomOut");
    const zoomReset = document.getElementById("zoomReset");
    const zoomLabel = document.getElementById("zoomLabel");
    const mapProgress = document.getElementById("mapProgress");
    const mapScrubber = document.getElementById("mapScrubber");
    const progressStart = document.getElementById("progressStart");
    const progressEnd = document.getElementById("progressEnd");
    let zoom = Number(localStorage.getItem(zoomKey) || "0.6");
    let syncingScrubber = false;

    function isMobileMode() {
      return mobileQuery.matches;
    }

    function setDetailOpen(open) {
      detailOpen = open;
      document.body.classList.toggle("detail-open", detailOpen);
    }

    function setZoom(nextZoom) {
      zoom = Math.max(0.55, Math.min(1.35, nextZoom));
      canvasScale.style.setProperty("--zoom", zoom);
      zoomLabel.textContent = `${Math.round(zoom * 100)}%`;
      localStorage.setItem(zoomKey, String(zoom));
      syncScaledSize();
    }

    function syncScaledSize() {
      const width = Number.parseFloat(tree.style.width) || tree.offsetWidth || 1120;
      const height = Number.parseFloat(tree.style.height) || tree.offsetHeight || 700;
      canvasScale.style.width = `${width * zoom}px`;
      canvasScale.style.height = currentView === "timeline" ? "auto" : `${height * zoom}px`;
      updateMapScrubber();
    }

    function updateMapScrubber() {
      if (!mapScrubber) return;
      if (isMobileMode()) {
        mapProgress.hidden = true;
        return;
      }
      const maxScroll = Math.max(0, map.scrollWidth - map.clientWidth);
      mapScrubber.max = String(Math.max(1, Math.round(maxScroll)));
      mapScrubber.value = String(Math.min(maxScroll, Math.round(map.scrollLeft)));
      mapProgress.hidden = currentView === "timeline" || maxScroll <= 1;
      const years = [...researchNodeIds].map(id => nodes.find(node => node.id === id)?.year).filter(Boolean);
      progressStart.textContent = String(Math.min(...years));
      progressEnd.textContent = String(Math.max(...years));
    }

    function saveProgress() {
      localStorage.setItem(progressKey, JSON.stringify([...unlocked]));
      localStorage.setItem(discoveredKey, JSON.stringify([...discovered]));
    }

    function saveDragPositions() {
      localStorage.setItem(dragKey, JSON.stringify(dragPositions));
    }

    function prerequisitesOf(id) {
      return links
        .filter(([from, to]) => to === id && relationKinds[`${from}->${to}`] !== "sequence")
        .map(([from]) => from);
    }

    function researchPrerequisitesOf(id) {
      return researchEdges
        .filter(([, to]) => to === id)
        .map(([from]) => from)
        .filter(from => researchNodeIds.has(from));
    }

    function researchOutgoingOf(id) {
      return researchEdges
        .filter(([from, to]) => from === id && researchNodeIds.has(to))
        .map(([, to]) => to);
    }

    function isUnlocked(id) {
      return unlocked.has(id);
    }

    function isAvailable(id) {
      if (!researchNodeIds.has(id)) return false;
      if (isUnlocked(id)) return false;
      if (rootIds.has(id)) return true;
      const prerequisites = researchPrerequisitesOf(id);
      return prerequisites.length > 0 && prerequisites.every(from => unlocked.has(from));
    }

    function isTimelineReference(id) {
      if (id === "rules1863" || isUnlocked(id) || isAvailable(id)) return false;
      return prerequisitesOf(id).length === 0 && links.some(([, to]) => to === id);
    }

    function visibleNodeIds() {
      if (currentView === "timeline") return new Set(nodes.map(node => node.id));
      const ids = new Set();
      nodes.forEach(node => {
        if (researchNodeIds.has(node.id) && (isUnlocked(node.id) || discovered.has(node.id) || isAvailable(node.id))) ids.add(node.id);
      });
      if (selectedId && researchNodeIds.has(selectedId)) ids.add(selectedId);
      return ids;
    }

    function revealNextFrom(id) {
      let revealed = 0;
      researchOutgoingOf(id).forEach(nextId => {
        if (isAvailable(nextId) && !discovered.has(nextId)) {
          discovered.add(nextId);
          revealed += 1;
        }
      });
      return revealed;
    }

    function hasUnlockableNext(id) {
      return researchOutgoingOf(id).some(nextId => isAvailable(nextId) && !discovered.has(nextId));
    }

    function isCompleted(id) {
      return isUnlocked(id);
    }

    function researchNode(id) {
      if (!researchNodeIds.has(id)) return;
      unlocked.add(id);
      selectedId = id;
      discovered.add(id);
      revealNextFrom(id);
      if (isMobileMode()) setDetailOpen(true);
      saveProgress();
      render();
    }

    function branchColor(branch) {
      return branches[branch]?.color || "#17362b";
    }

    function hashText(text) {
      return [...String(text || "")].reduce((sum, char) => sum + char.charCodeAt(0), 0);
    }

    function currentPosition(node) {
      if (currentView !== "timeline") return { x: node.x, y: node.y };
      const minYear = 1860;
      const maxYear = 2030;
      const minX = 124;
      const maxX = 1730;
      const x = minX + ((node.year - minYear) / (maxYear - minYear)) * (maxX - minX);
      const offset = ((hashText(node.id) % 5) - 2) * 22;
      return { x, y: (branchLanes[node.branch] || 330) + offset };
    }

    function researchPosition(node, index, total) {
      return layoutVisibleNodes().positions.get(node.id) || currentPosition(node);
    }

    function dependencyDepth(id, trail = new Set()) {
      if (rootIds.has(id)) return 0;
      if (trail.has(id)) return 0;
      trail.add(id);
      const prerequisites = prerequisitesOf(id);
      if (!prerequisites.length) return 0;
      return 1 + Math.max(...prerequisites.map(from => dependencyDepth(from, new Set(trail))));
    }

    function researchLaneY(branch) {
      return {
        "规则科技": 220,
        "战术角色": 520,
        "赛事商业": 820,
        "文化社会": 1080
      }[branch] || 550;
    }

    function layoutVisibleNodes() {
      const visibleIds = visibleNodeIds();
      const activeNodes = nodes
        .filter(node => visibleIds.has(node.id) && visible(node))
        .sort((a, b) => a.year - b.year || dependencyDepth(a.id) - dependencyDepth(b.id) || a.title.localeCompare(b.title, "zh-CN"));
      const branchOrder = Object.keys(branchLanes);
      const positions = new Map();
      const cardWidth = 190;
      const cardHeight = 268;
      const columnGap = 174;
      const yearOrder = [...new Set(nodes
        .filter(node => researchNodeIds.has(node.id))
        .map(node => node.year)
        .sort((a, b) => a - b))];
      const yearColumn = new Map(yearOrder.map((year, index) => [year, index]));
      let maxX = 1280;
      let maxY = 780;
      const placedRects = [];

      function overlapsAny(x, y) {
        return placedRects.some(rect => Math.abs(rect.x - x) < cardWidth && Math.abs(rect.y - y) < cardHeight);
      }

      function compactPosition(baseX, preferredY) {
        const candidates = [
          [0, 0], [92, -76], [-92, 76], [92, 76], [-92, -76],
          [0, -286], [0, 286], [142, -214], [-142, 214],
          [142, 214], [-142, -214], [204, 0], [-204, 0],
          [204, -286], [204, 286], [-204, -286], [-204, 286],
          [0, -572], [0, 572], [260, -120], [-260, 120]
        ];
        for (const [dx, dy] of candidates) {
          const x = Math.max(96, baseX + dx);
          const y = Math.max(112, preferredY + dy);
          if (!overlapsAny(x, y)) return { x, y };
        }
        let y = preferredY;
        while (overlapsAny(baseX, y)) y += cardHeight + 24;
        return { x: baseX, y };
      }

      yearOrder.forEach(year => {
        const yearNodes = nodes
          .filter(node => node.year === year && researchNodeIds.has(node.id))
          .sort((a, b) => branchOrder.indexOf(a.branch) - branchOrder.indexOf(b.branch)
            || dependencyDepth(a.id) - dependencyDepth(b.id)
            || a.title.localeCompare(b.title, "zh-CN"));

        yearNodes.forEach(node => {
          const column = yearColumn.get(node.year) || 0;
          const x = 140 + column * columnGap;
          const preferredY = researchLaneY(node.branch);
          const custom = dragPositions[node.id];
          const placed = custom || compactPosition(x, preferredY);
          positions.set(node.id, placed);
          placedRects.push(placed);
          maxX = Math.max(maxX, placed.x + cardWidth);
          maxY = Math.max(maxY, placed.y + cardHeight);
        });
      });

      return { nodes: activeNodes, positions, width: maxX + 160, height: maxY + 160 };
    }

    function visible(node) {
      return selectedBranch === "全部" || node.branch === selectedBranch;
    }

    function openNode(id) {
      if (!nodes.some(node => node.id === id)) return;
      selectedId = id;
      selectedBranch = "全部";
      if (!isMobileMode()) currentView = "research";
      setDetailOpen(true);
      render();
    }

    function renderNodeSearch() {
      const query = nodeSearch.value.trim().toLowerCase();
      const pool = [...nodes]
        .filter(node => !query || `${node.title} ${node.year} ${node.branch} ${node.summary}`.toLowerCase().includes(query))
        .sort((a, b) => a.year - b.year || a.title.localeCompare(b.title, "zh-CN"));
      nodeResults.innerHTML = pool.map(node => `
        <button class="node-result" data-id="${node.id}" style="--branch-color:${branchColor(node.branch)}">
          <b>${node.title}</b>
          <span>${node.year} · ${node.branch}</span>
        </button>
      `).join("");
      nodeResults.querySelectorAll(".node-result").forEach(button => {
        button.addEventListener("click", () => openNode(button.dataset.id));
      });
    }

    function renderFilters() {
      const names = ["全部", ...Object.keys(branches)];
      filters.innerHTML = names.map(name => {
        const count = name === "全部" ? nodes.length : nodes.filter(node => node.branch === name).length;
        return `<button data-branch="${name}" class="${selectedBranch === name ? "active" : ""}">
          <span>${name}</span><b>${count}</b>
        </button>`;
      }).join("");
      filters.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", () => {
          selectedBranch = button.dataset.branch;
          selectedId = selectedBranch === "全部" ? "worldcup" : "";
          render();
        });
      });

      legend.innerHTML = Object.entries(branches).map(([name, info]) => {
        return `<span style="--branch-color:${info.color}"><i class="dot"></i>${name}</span>`;
      }).join("");
      renderNodeSearch();
    }

    function renderLinks(layout = currentLayout || layoutVisibleNodes()) {
      if (currentView === "timeline") {
        linksSvg.innerHTML = "";
        return;
      }
      const visibleIds = visibleNodeIds();
      const defs = `<defs>
        <marker id="arrow-causal" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(255,255,255,0.78)"></path>
        </marker>
        <marker id="arrow-sequence" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(255,255,255,0.45)"></path>
        </marker>
      </defs>`;
      const graphLinks = currentView === "research"
        ? researchEdges.map(([from, to]) => [from, to])
        : links;
      const paths = graphLinks.filter(([fromId, toId]) => {
        if (!visibleIds.has(fromId) || !visibleIds.has(toId)) return false;
        if (!layout.positions.has(fromId) || !layout.positions.has(toId)) return false;
        return true;
      }).map(([fromId, toId]) => {
        const from = nodes.find(node => node.id === fromId);
        const to = nodes.find(node => node.id === toId);
        const fromPos = layout.positions.get(fromId);
        const toPos = layout.positions.get(toId);
        const isDim = !visible(from) || !visible(to);
        const isActive = selectedId && (selectedId === fromId || selectedId === toId);
        const kind = relationKinds[`${fromId}->${toId}`] || "causal";
        const opacityStroke = kind === "sequence" ? "rgba(255,255,255,0.38)" : "rgba(255,255,255,0.66)";
        return `<path d="M ${fromPos.x} ${fromPos.y} C ${(fromPos.x + toPos.x) / 2} ${fromPos.y}, ${(fromPos.x + toPos.x) / 2} ${toPos.y}, ${toPos.x} ${toPos.y}"
          fill="none"
          stroke="${isDim ? "rgba(255,255,255,0.08)" : isActive ? "rgba(255,255,255,0.8)" : opacityStroke}"
          stroke-width="${isActive ? 4 : kind === "sequence" ? 2.25 : 3}"
          stroke-dasharray="${kind === "sequence" ? "7 8" : "0"}"
          marker-end="${kind === "sequence" ? "url(#arrow-sequence)" : "url(#arrow-causal)"}"
          stroke-linecap="round"><title>${relationText(fromId, toId)}</title></path>`;
      }).join("");
      linksSvg.innerHTML = defs + paths;
    }

    function scheduleRenderLinks() {
      if (linkFrame) return;
      linkFrame = requestAnimationFrame(() => {
        linkFrame = 0;
        renderLinks(currentLayout);
      });
    }

    function bindNodeDrag(el, node) {
      let startX = 0;
      let startY = 0;
      let originX = 0;
      let originY = 0;
      let moved = false;

      el.addEventListener("pointerdown", event => {
        if (currentView === "timeline") return;
        const current = dragPositions[node.id] || currentLayout?.positions.get(node.id) || layoutVisibleNodes().positions.get(node.id) || currentPosition(node);
        startX = event.clientX;
        startY = event.clientY;
        originX = current.x;
        originY = current.y;
        moved = false;
        el.setPointerCapture(event.pointerId);
      });

      el.addEventListener("pointermove", event => {
        if (!el.hasPointerCapture(event.pointerId)) return;
        const dx = (event.clientX - startX) / zoom;
        const dy = (event.clientY - startY) / zoom;
        if (Math.abs(dx) + Math.abs(dy) > 4) moved = true;
        if (!moved) return;
        const next = { x: Math.max(58, originX + dx), y: Math.max(76, originY + dy) };
        dragPositions[node.id] = next;
        currentLayout?.positions.set(node.id, next);
        el.style.setProperty("--x", `${next.x}px`);
        el.style.setProperty("--y", `${next.y}px`);
        scheduleRenderLinks();
      });

      el.addEventListener("pointerup", event => {
        if (el.hasPointerCapture(event.pointerId)) el.releasePointerCapture(event.pointerId);
        if (moved) {
          saveDragPositions();
          el.dataset.dragged = "true";
          setTimeout(() => delete el.dataset.dragged, 0);
        }
      });
    }

    function renderNodes() {
      tree.querySelectorAll(".node, .tick, .lane-label, .lane-line, .decade, .mobile-node-list, .mobile-timeline-list").forEach(node => node.remove());
      if (isMobileMode()) {
        renderMobileNodes();
        return;
      }
      modeNote.textContent = currentView === "research"
        ? `研发模式：精简后的 ${researchNodeIds.size} 节点科技树，只显示已研究和当前可研究卡片；每个节点按真实年份选择一个主上游，时间参考只表示先后，不代表严格因果。`
        : "长时间轴：按年代横向浏览全部事件；半透明卡片表示尚未在研发模式中解锁。";
      if (currentView === "timeline") {
        currentLayout = null;
        linksSvg.innerHTML = "";
        renderLongTimeline();
        return;
      }
      const layout = layoutVisibleNodes();
      currentLayout = layout;
      const visibleIds = visibleNodeIds();
      const orderedNodes = layout.nodes;
      tree.style.width = `${layout.width}px`;
      tree.style.height = `${layout.height}px`;
      syncScaledSize();
      linksSvg.setAttribute("viewBox", `0 0 ${layout.width} ${layout.height}`);
      renderLinks(layout);
      orderedNodes.forEach((node, index) => {
        const pos = layout.positions.get(node.id);
        const status = isUnlocked(node.id) ? isCompleted(node.id) ? "completed" : "unlocked" : isAvailable(node.id) ? "available" : "locked";
        const disabled = status === "locked";
        const el = document.createElement("button");
        el.className = `node ${status} ${node.id === selectedId ? "active" : ""} ${visible(node) ? "" : "dimmed"}`;
        el.disabled = disabled;
        el.style.setProperty("--x", `${pos.x}px`);
        el.style.setProperty("--y", `${pos.y}px`);
        el.style.setProperty("--branch-color", branchColor(node.branch));
        const depth = dependencyDepth(node.id);
        el.innerHTML = `
          <span class="node-port" aria-hidden="true"></span>
          <div class="node-thumb" aria-hidden="true"></div>
          <div class="node-code"><span>${branches[node.branch].mark}-${String(depth).padStart(2, "0")}</span><span class="node-tier">${node.year}</span></div>
          <span class="badge">${branches[node.branch].mark}</span>
          <strong>${node.title}</strong>
          <small>${node.branch}</small>
        `;
        el.addEventListener("click", () => {
          if (el.dataset.dragged === "true") return;
          if (isAvailable(node.id)) {
            researchNode(node.id);
            return;
          }
          selectedId = node.id;
          if (!visible(node)) selectedBranch = "全部";
          render();
        });
        bindNodeDrag(el, node);
        tree.appendChild(el);
      });
    }

    function nodeStatus(node) {
      if (isUnlocked(node.id)) return "completed";
      if (isAvailable(node.id)) return "available";
      return "locked";
    }

    function nodeStatusLabel(status) {
      return status === "completed" ? "已完成" : status === "available" ? "可研" : "未解锁";
    }

    function renderMobileNodes() {
      currentLayout = null;
      linksSvg.innerHTML = "";
      tree.style.width = "100%";
      tree.style.height = "auto";
      canvasScale.style.width = "100%";
      canvasScale.style.height = "auto";
      canvasScale.style.setProperty("--zoom", 1);
      mapProgress.hidden = true;
      map.classList.toggle("timeline-only", currentView === "timeline");
      modeNote.textContent = currentView === "timeline"
        ? "移动端时间轴：按年代纵向浏览全部节点；点击卡片打开 wiki。"
        : "移动端研发：只显示已出现和可研究节点；点击可研卡片直接完成研究，点击其他卡片查看 wiki。";

      if (currentView === "timeline") {
        renderMobileTimeline();
        return;
      }

      const visibleIds = visibleNodeIds();
      const availableNodes = nodes
        .filter(node => visibleIds.has(node.id) && visible(node))
        .sort((a, b) => {
          const rank = { available: 0, completed: 1, locked: 2 };
          return rank[nodeStatus(a)] - rank[nodeStatus(b)]
            || a.year - b.year
            || a.title.localeCompare(b.title, "zh-CN");
        });

      tree.querySelectorAll(".mobile-node-list, .mobile-timeline-list").forEach(node => node.remove());
      if (!tree.contains(linksSvg)) tree.prepend(linksSvg);
      tree.insertAdjacentHTML("beforeend", `<div class="mobile-node-list">
        ${availableNodes.map(node => {
          const status = nodeStatus(node);
          const nextCount = researchOutgoingOf(node.id).filter(nextId => !unlocked.has(nextId)).length;
          return `<button class="mobile-node-card ${status} ${node.id === selectedId ? "active" : ""}" data-id="${node.id}" style="--branch-color:${branchColor(node.branch)}">
            <span class="mobile-card-meta"><b>${node.year}</b><i>${node.branch}</i><em>${nodeStatusLabel(status)}</em></span>
            <strong>${node.title}</strong>
            <span>${node.summary}</span>
            <small>${status === "available" ? "点击研究" : nextCount ? `影响 ${nextCount} 个后续节点` : "点击查看详情"}</small>
          </button>`;
        }).join("")}
      </div>`);

      tree.querySelectorAll(".mobile-node-card").forEach(card => {
        card.addEventListener("click", () => {
          const id = card.dataset.id;
          if (isAvailable(id)) researchNode(id);
          else {
            selectedId = id;
            setDetailOpen(true);
            render();
          }
        });
      });
    }

    function renderMobileTimeline() {
      const grouped = new Map();
      nodes
        .filter(visible)
        .sort((a, b) => a.year - b.year || a.title.localeCompare(b.title, "zh-CN"))
        .forEach(node => {
          const decade = Math.floor(node.year / 10) * 10;
          if (!grouped.has(decade)) grouped.set(decade, []);
          grouped.get(decade).push(node);
        });
      tree.querySelectorAll(".mobile-node-list, .mobile-timeline-list").forEach(node => node.remove());
      if (!tree.contains(linksSvg)) tree.prepend(linksSvg);
      tree.insertAdjacentHTML("beforeend", `<div class="mobile-timeline-list">
        ${[...grouped.entries()].map(([decade, decadeNodes]) => `
          <section class="mobile-decade">
            <h3>${decade}s</h3>
            ${decadeNodes.map(node => {
              const status = nodeStatus(node);
              return `<button class="mobile-timeline-card ${status} ${node.id === selectedId ? "active" : ""}" data-id="${node.id}" style="--branch-color:${branchColor(node.branch)}">
                <b>${node.year} · ${node.title}</b>
                <span>${node.branch}｜${node.summary}</span>
              </button>`;
            }).join("")}
          </section>
        `).join("")}
      </div>`);

      tree.querySelectorAll(".mobile-timeline-card").forEach(card => {
        card.addEventListener("click", () => {
          selectedId = card.dataset.id;
          setDetailOpen(true);
          render();
        });
      });
    }

    function renderLongTimeline() {
      tree.style.width = "2600px";
      tree.style.height = "auto";
      syncScaledSize();
      linksSvg.setAttribute("viewBox", "0 0 2600 700");
      const grouped = new Map();
      nodes
        .filter(visible)
        .sort((a, b) => a.year - b.year || a.title.localeCompare(b.title, "zh-CN"))
        .forEach(node => {
          const decade = Math.floor(node.year / 10) * 10;
          if (!grouped.has(decade)) grouped.set(decade, []);
          grouped.get(decade).push(node);
        });
      [...grouped.entries()].forEach(([decade, decadeNodes]) => {
        const col = document.createElement("section");
        col.className = "decade";
        col.innerHTML = `<h3>${decade}s</h3>`;
        decadeNodes.forEach(node => {
          const status = isUnlocked(node.id) ? "unlocked" : isAvailable(node.id) ? "available" : "locked";
          const card = document.createElement("button");
          card.className = `timeline-card ${status}`;
          card.style.setProperty("--branch-color", branchColor(node.branch));
          card.dataset.id = node.id;
          card.innerHTML = `<b>${node.year} · ${node.title}</b><span>${node.branch}｜${status === "unlocked" ? "已研究" : status === "available" ? "可研究" : "未解锁"}</span>`;
          card.addEventListener("click", () => {
            openNode(node.id);
          });
          col.appendChild(card);
        });
        tree.appendChild(col);
      });
    }

    function matchingTarget(label) {
      const node = nodes.find(item => item.title === label || item.unlocks.includes(label) || item.prerequisites.includes(label));
      if (node) return { type: "node", id: node.id };
      if (branches[label]) return { type: "branch", id: label };
      const fuzzy = nodes.find(item => item.title.includes(label) || label.includes(item.title));
      if (fuzzy) return { type: "node", id: fuzzy.id };
      return null;
    }

    function renderChip(label) {
      const target = matchingTarget(label);
      const attr = target ? ` data-target-type="${target.type}" data-target-id="${target.id}"` : "";
      return `<button class="chip" type="button"${attr}>${label}</button>`;
    }

    function attachCardClicks(scope = detail) {
      scope.querySelectorAll("[data-id]").forEach(button => {
        button.addEventListener("click", () => {
          if (!nodes.some(node => node.id === button.dataset.id)) return;
          openNode(button.dataset.id);
        });
      });
      scope.querySelectorAll("[data-target-id]").forEach(button => {
        button.addEventListener("click", () => {
          if (button.dataset.targetType === "branch") {
            selectedBranch = button.dataset.targetId;
            selectedId = "";
          } else {
            if (!nodes.some(node => node.id === button.dataset.targetId)) return;
            openNode(button.dataset.targetId);
            return;
          }
          render();
        });
      });
    }

    function renderDetail() {
      if (!selectedId && selectedBranch !== "全部") {
        const branch = branches[selectedBranch];
        const branchNodes = nodes.filter(node => node.branch === selectedBranch).sort((a, b) => a.year - b.year);
        detail.style.setProperty("--branch-color", branch.color);
        detail.innerHTML = `
          <button class="detail-close" type="button" aria-label="关闭详情">关闭</button>
          <img class="wiki-image wiki-header-image" src="${branchHeaderFor(selectedBranch)}" alt="${selectedBranch}插画头图" onerror="this.onerror=null;this.style.display='none';">
          <p class="wiki-caption">${branchHeaderCaptionFor(selectedBranch)}</p>
          <div class="card-top">
            <span class="branch-pill">${selectedBranch}</span>
            <span class="year">${branchNodes.length} 个节点</span>
          </div>
          <h2>${selectedBranch}</h2>
          <div class="year">足球文明分支</div>
          <p class="summary">${branch.summary}</p>
          <div class="stat-grid">
            <div class="stat"><b>时间跨度</b><span>${branchNodes[0].year}-${branchNodes[branchNodes.length - 1].year}</span></div>
            <div class="stat"><b>节点数</b><span>${branchNodes.length}</span></div>
          </div>
          <h3>关键问题</h3>
          <div class="chips">${branch.questions.map(renderChip).join("")}</div>
          <h3>关键节点</h3>
          <div class="relation-list">
            ${branchNodes.map(node => `<button class="relation" data-id="${node.id}">
              <b>${node.year} · ${node.title}</b>
              <span>${node.summary}</span>
            </button>`).join("")}
          </div>
        `;
        attachCardClicks();
        detail.querySelector(".detail-close")?.addEventListener("click", () => setDetailOpen(false));
        return;
      }

      const node = nodes.find(item => item.id === selectedId) || nodes[0];
      const status = isUnlocked(node.id) ? "已研究" : isAvailable(node.id) ? "可研究" : isTimelineReference(node.id) ? "时间轴参考" : "未研究";
      const example = exampleFor(node);
      const sourceInfo = sourceInfoFor(node);
      const wikiHeader = branchHeaderFor(node.branch);
      const wikiHeaderCaption = branchHeaderCaptionFor(node.branch);
      const archiveCaption = sourceInfo.image ? archiveImageCaptionFor(sourceInfo) : "";
      const incomingEvents = links
        .filter(([fromId, toId]) => toId === node.id && relationKinds[`${fromId}->${toId}`] !== "sequence")
        .map(([fromId, toId]) => [nodes.find(item => item.id === fromId), toId])
        .filter(([from]) => from);
      const outgoingEvents = links
        .filter(([fromId, toId]) => fromId === node.id && relationKinds[`${fromId}->${toId}`] !== "sequence")
        .map(([fromId, toId]) => [fromId, nodes.find(item => item.id === toId)])
        .filter(([, to]) => to);
      detail.style.setProperty("--branch-color", branchColor(node.branch));
      detail.innerHTML = `
        <button class="detail-close" type="button" aria-label="关闭详情">关闭</button>
        <img class="wiki-image wiki-header-image" src="${wikiHeader}" alt="${node.branch}插画头图" onerror="this.onerror=null;this.style.display='none';">
        <p class="wiki-caption">${wikiHeaderCaption}</p>
        <div class="card-top">
          <span class="branch-pill">${node.branch}</span>
          <span class="year">${node.year}</span>
        </div>
        <h2>${node.title}</h2>
        <div class="year">足球史事件条目 · ${status}</div>
        <p class="summary">${sourceInfo.note || node.summary}</p>
        ${isAvailable(node.id) ? `<button class="research-action" data-research="${node.id}">开始研究</button>` : ""}
        ${isUnlocked(node.id) ? `<button class="research-action" disabled>已完成研究</button>` : ""}
        <div class="stat-grid">
          <div class="stat"><b>时间</b><span>${node.year}</span></div>
          <div class="stat"><b>类型</b><span>${eventTypeFor(node)}</span></div>
          <div class="stat"><b>提出 / 推动</b><span>${factActorFor(node)}</span></div>
          <div class="stat"><b>场景</b><span>${factPlaceFor(node)}</span></div>
        </div>
        ${sourceInfo.details ? `<div class="wiki-section"><b>详细介绍</b><p>${sourceInfo.details}</p></div>` : ""}
        <h3>${example.title}</h3>
        <p class="summary">${example.body}</p>
        ${sourceInfo.impact ? `<div class="wiki-section"><b>后续影响</b><p>${sourceInfo.impact}</p></div>` : ""}
        ${sourceInfo.points?.length ? `<ul class="wiki-points">${sourceInfo.points.map(point => `<li>${point}</li>`).join("")}</ul>` : ""}
        ${sourceInfo.image ? `<div class="archive-block">
          <h3>历史资料图</h3>
          <img class="wiki-image archive-image" src="${sourceInfo.image}" alt="${node.title}历史资料图" onerror="this.onerror=null;this.closest('.archive-block').style.display='none';">
          <p class="wiki-caption">${archiveCaption}</p>
        </div>` : ""}
        <h3>事件前因</h3>
        <div class="relation-list">
          ${incomingEvents.length ? incomingEvents.map(([from, toId]) => {
            return `<button class="relation" data-id="${from.id}">
              <span class="relation-kind" style="--branch-color:${branchColor(from.branch)}">${eventTypeFor(from)}</span>
              <b>${from.year} · ${from.title} → ${node.title}</b>
              <span>${relationText(from.id, node.id)}</span>
            </button>`;
          }).join("") : `<span class="chip">这是一个源头事件</span>`}
        </div>
        <h3>后续影响</h3>
        <div class="relation-list">
          ${outgoingEvents.length ? outgoingEvents.map(([fromId, to]) => {
            return `<button class="relation" data-id="${to.id}">
              <span class="relation-kind" style="--branch-color:${branchColor(to.branch)}">${eventTypeFor(to)}</span>
              <b>${node.title} → ${to.year} · ${to.title}</b>
              <span>${relationText(node.id, to.id)}</span>
            </button>`;
          }).join("") : `<span class="chip">暂无明确后续事件</span>`}
        </div>
        ${sourceInfo.sources?.length ? `<h3>来源</h3>
          <div class="source-list">
            ${sourceInfo.sources.map(([label, url]) => `<a href="${url}" target="_blank" rel="noreferrer">${label}</a>`).join("")}
          </div>` : ""}
      `;
      attachCardClicks();
      detail.querySelector(".detail-close")?.addEventListener("click", () => setDetailOpen(false));
      detail.querySelectorAll("[data-research]").forEach(button => {
        button.addEventListener("click", () => researchNode(button.dataset.research));
      });
    }

    function renderTimeline() {
      timeline.innerHTML = [...nodes].sort((a, b) => a.year - b.year).map(node => {
        return `<button class="era ${node.id === selectedId ? "active" : ""}" style="--branch-color:${branchColor(node.branch)}" data-id="${node.id}">
          <div class="era-thumb" aria-hidden="true"></div>
          <b>${node.year} · ${node.title}</b>
          <span>${node.branch}｜${node.summary.slice(0, 38)}...</span>
        </button>`;
      }).join("");
      timeline.querySelectorAll(".era").forEach(button => {
        button.addEventListener("click", () => {
          selectedId = button.dataset.id;
          const node = nodes.find(item => item.id === selectedId);
          if (selectedBranch !== "全部" && node.branch !== selectedBranch) selectedBranch = "全部";
          if (isMobileMode()) setDetailOpen(true);
          render();
        });
      });
    }

    function renderViewToggle() {
      document.querySelectorAll(".view-toggle button").forEach(button => {
        button.classList.toggle("active", button.dataset.view === currentView);
      });
      map.classList.toggle("timeline-only", currentView === "timeline");
    }

    function render() {
      renderFilters();
      renderViewToggle();
      renderNodes();
      renderDetail();
      renderTimeline();
    }

    document.querySelectorAll(".view-toggle button").forEach(button => {
      button.addEventListener("click", () => {
        if (!button.dataset.view) return;
        currentView = button.dataset.view;
        render();
      });
    });

    nodeSearch.addEventListener("input", renderNodeSearch);

    resetProgress.addEventListener("click", () => {
      unlocked = new Set();
      discovered = new Set(rootIds);
      dragPositions = {};
      selectedId = "cambridge";
      selectedBranch = "全部";
      currentView = "research";
      saveProgress();
      saveDragPositions();
      setDetailOpen(false);
      render();
    });

    zoomOut.addEventListener("click", () => setZoom(zoom - 0.1));
    zoomIn.addEventListener("click", () => setZoom(zoom + 0.1));
    zoomReset.addEventListener("click", () => setZoom(1));

    mapScrubber.addEventListener("input", () => {
      syncingScrubber = true;
      map.scrollLeft = Number(mapScrubber.value);
      syncingScrubber = false;
    });

    map.addEventListener("scroll", () => {
      if (syncingScrubber) return;
      updateMapScrubber();
    });

    window.addEventListener("resize", updateMapScrubber);
    mobileQuery.addEventListener("change", () => {
      if (!isMobileMode()) setDetailOpen(false);
      setZoom(zoom);
      render();
    });

    setZoom(zoom);
    render();
