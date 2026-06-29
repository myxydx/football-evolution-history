    const branches = {
      "规则科技": {
        color: "#222831",
        mark: "R",
        summary: "规则是足球变化的底层开关。越位、红黄牌、VAR 这些制度变化会直接改变战术选择、球员行为和观众体验。",
        questions: ["规则如何限制进攻？", "判罚技术如何改变庆祝与争议？", "一条规则会怎样逼出新战术？"]
      },
      "战术角色": {
        color: "#2364aa",
        mark: "T",
        summary: "战术和球员角色互相塑造。从 2-3-5 到高位逼抢，从 10 号位到倒置边后卫，足球一直在重新分配空间和职责。",
        questions: ["越位如何塑造防线？", "全攻全守如何影响高位逼抢？", "球员角色为什么越来越模糊？"]
      },
      "赛事商业": {
        color: "#bb7a12",
        mark: "B",
        summary: "赛事和商业让足球从地方娱乐变成全球产业。联赛、世界杯、电视转播和赞助塑造了今天的足球经济。",
        questions: ["世界杯如何制造全球共同时间？", "电视如何放大球星？", "商业联赛如何改变球迷关系？"]
      },
      "文化社会": {
        color: "#bd3f32",
        mark: "C",
        summary: "文化社会分支关注球迷、身份、性别、国家记忆、媒体和公共议题。足球不止发生在球场，也发生在看台、城市和网络。",
        questions: ["远程主队如何出现？", "失败如何成为国家记忆？", "女足如何改变足球可见度？"]
      }
    };

    const nodes = [
      {
        id: "rules1863",
        title: "足球的诞生",
        year: 1863,
        branch: "规则演化",
        x: 76,
        y: 330,
        summary: "以 1863 年英足总成立和规则统一为起点，现代协会足球开始从地方混战变成可复制、可传播的规则系统。",
        effects: ["比赛边界清晰", "俱乐部之间可以互相比赛", "现代足球拥有共同语言"],
        prerequisites: ["学校与俱乐部规则冲突", "城市间比赛需求上升"],
        unlocks: ["职业联赛", "国际比赛", "越位规则"]
      },
      {
        id: "offside",
        title: "越位规则",
        year: 1866,
        branch: "规则演化",
        x: 216,
        y: 206,
        summary: "越位让前锋不能永远蹲在门前，也逼出了阵型、跑位和防线整体移动。",
        effects: ["空间管理变重要", "防线组织能力 +40", "争议话题长期在线"],
        prerequisites: ["统一规则"],
        unlocks: ["防线压迫", "半自动越位"]
      },
      {
        id: "facup",
        title: "足总杯",
        year: 1871,
        branch: "赛事商业",
        x: 216,
        y: 446,
        summary: "杯赛制度让足球拥有淘汰、爆冷和全国叙事，球迷开始为一场比赛集中燃烧。",
        effects: ["爆冷故事出现", "俱乐部身份强化", "赛事组织经验提升"],
        prerequisites: ["统一规则", "俱乐部增多"],
        unlocks: ["职业联赛", "世界杯"]
      },
      {
        id: "pyramid",
        title: "2-3-5 金字塔",
        year: 1880,
        branch: "战术演化",
        x: 356,
        y: 110,
        summary: "早期足球的经典站位，进攻人数极多，也让阵型第一次成为可以被讨论的工具。",
        effects: ["阵型意识成型", "边路与中路分工出现", "战术语言开端"],
        prerequisites: ["统一规则", "越位规则"],
        unlocks: ["WM 阵型", "现代阵型谱系"]
      },
      {
        id: "league",
        title: "职业联赛",
        year: 1888,
        branch: "赛事商业",
        x: 356,
        y: 462,
        summary: "稳定赛程、积分榜和职业球员制度出现，足球从周末活动变成长期运营的产业。",
        effects: ["长期竞争结构", "球员职业化", "城市归属感增强"],
        prerequisites: ["足总杯", "俱乐部组织"],
        unlocks: ["转会市场", "全球联赛转播"]
      },
      {
        id: "numbers",
        title: "球衣号码",
        year: 1928,
        branch: "装备科技",
        x: 496,
        y: 555,
        summary: "号码让观众、解说和战术记录更容易识别球员，也逐渐演化出 10 号、9 号等文化符号。",
        effects: ["识别效率提升", "位置文化出现", "球星符号化"],
        prerequisites: ["职业联赛", "现场观赛规模扩大"],
        unlocks: ["10 号位神话", "球衣商业化"]
      },
      {
        id: "worldcup",
        title: "世界杯",
        year: 1930,
        branch: "赛事商业",
        x: 496,
        y: 390,
        summary: "国家队叙事成为全球事件，足球从俱乐部和地区竞争扩展为世界共同观看的仪式。",
        effects: ["国家队身份爆发", "全球观众聚合", "足球成为世界语言"],
        prerequisites: ["国际比赛", "职业联赛"],
        unlocks: ["电视转播", "球星全球化", "球迷文化"]
      },
      {
        id: "wm",
        title: "WM 阵型",
        year: 1930,
        branch: "战术演化",
        x: 496,
        y: 184,
        summary: "为了应对越位规则变化，WM 阵型让防守、组织和进攻分工更明确。",
        effects: ["中卫职责强化", "攻守平衡提高", "阵型博弈升级"],
        prerequisites: ["2-3-5 金字塔", "越位规则"],
        unlocks: ["链式防守", "4-4-2"]
      },
      {
        id: "tv",
        title: "电视转播",
        year: 1954,
        branch: "赛事商业",
        x: 636,
        y: 374,
        summary: "电视让足球越过球场边界，慢镜头、解说和广告一起改变了比赛的观看方式。",
        effects: ["全球同时观看", "明星曝光飙升", "争议判罚被反复回放"],
        prerequisites: ["世界杯", "广播技术"],
        unlocks: ["商业赞助", "VAR", "全球球迷"]
      },
      {
        id: "cards",
        title: "红黄牌",
        year: 1970,
        branch: "规则演化",
        x: 636,
        y: 508,
        summary: "红黄牌让判罚在跨语言比赛中变得直观，也让纪律管理进入视觉时代。",
        effects: ["判罚可视化", "球员风险管理", "停赛制度更清晰"],
        prerequisites: ["世界杯", "国际比赛频繁"],
        unlocks: ["纪律体系", "VAR 判罚解释"]
      },
      {
        id: "total",
        title: "全攻全守",
        year: 1974,
        branch: "战术演化",
        x: 636,
        y: 82,
        summary: "荷兰足球把位置、空间和集体移动推向新高度，球员不再只被固定位置定义。",
        effects: ["空间轮转 +50", "位置流动性增强", "现代压迫雏形"],
        prerequisites: ["WM 阵型", "体能训练提升"],
        unlocks: ["高位逼抢", "位置足球"]
      },
      {
        id: "ten",
        title: "10 号位",
        year: 1980,
        branch: "球员角色",
        x: 776,
        y: 608,
        summary: "10 号从号码变成创意核心的象征，组织、想象力和个人英雄主义被集中在一个位置上。",
        effects: ["球星叙事增强", "前腰文化形成", "球衣销售能力 +30"],
        prerequisites: ["球衣号码", "电视转播"],
        unlocks: ["伪九号", "球星商业化"]
      },
      {
        id: "pressing",
        title: "高位逼抢",
        year: 1990,
        branch: "战术演化",
        x: 790,
        y: 154,
        summary: "球队开始把丢球后的第一反应也设计成战术，前场压迫成为现代足球的关键武器。",
        effects: ["夺回球权速度提升", "体能要求暴涨", "门将脚下能力被放大"],
        prerequisites: ["全攻全守", "科学体能训练"],
        unlocks: ["位置足球", "门卫型门将"]
      },
      {
        id: "premier",
        title: "商业联赛时代",
        year: 1992,
        branch: "赛事商业",
        x: 792,
        y: 398,
        summary: "英超等商业化联赛重塑转播、赞助和全球球迷关系，俱乐部开始像媒体产品一样运营。",
        effects: ["转播收入爆炸", "国际球迷增长", "俱乐部品牌化"],
        prerequisites: ["电视转播", "职业联赛"],
        unlocks: ["全球转会市场", "社媒时代"]
      },
      {
        id: "fans",
        title: "球迷文化全球化",
        year: 2000,
        branch: "球迷文化",
        x: 940,
        y: 508,
        summary: "酒吧看球、队歌、Tifo、论坛和游戏让支持一支球队变成跨地域的身份表达。",
        effects: ["远程主队出现", "二创与梗文化扩散", "比赛成为社交事件"],
        prerequisites: ["世界杯", "电视转播", "商业联赛时代"],
        unlocks: ["社媒球迷", "电竞足球"]
      },
      {
        id: "falsenine",
        title: "伪九号",
        year: 2008,
        branch: "球员角色",
        x: 940,
        y: 236,
        summary: "中锋回撤、空间被重新分配，前锋不只负责终结，也能成为组织和牵制核心。",
        effects: ["中卫选择困难", "中场人数优势", "前场位置更模糊"],
        prerequisites: ["10 号位", "高位逼抢"],
        unlocks: ["位置足球", "倒置边后卫"]
      },
      {
        id: "var",
        title: "VAR",
        year: 2018,
        branch: "规则演化",
        x: 940,
        y: 62,
        summary: "视频助理裁判进入世界杯，改变了判罚、庆祝和争议的节奏。",
        effects: ["关键判罚可回看", "庆祝出现延迟", "争议从瞬间转向解释"],
        prerequisites: ["电视转播", "高速摄像", "门线技术"],
        unlocks: ["半自动越位", "判罚透明化"]
      },
      {
        id: "data",
        title: "数据球探",
        year: 2020,
        branch: "装备科技",
        x: 940,
        y: 356,
        summary: "追踪数据、预期进球和可穿戴设备让球员评估、训练和战术复盘变得更细。",
        effects: ["隐藏价值被发现", "训练负荷可量化", "转会决策更系统"],
        prerequisites: ["电视转播", "商业联赛时代", "可穿戴设备"],
        unlocks: ["AI 战术分析", "个性化训练"]
      },
      {
        id: "maracana",
        title: "足球与国家记忆",
        year: 1950,
        branch: "政治文化",
        x: 636,
        y: 642,
        summary: "以 1950 年马拉卡纳失利等事件为代表，足球开始被写入国家记忆、集体情绪与长期文化叙事。",
        effects: ["国家叙事被放大", "主场压力成为文化议题", "失败也能成为集体记忆"],
        prerequisites: ["世界杯", "广播与报纸传播"],
        unlocks: ["足球民族主义", "主场神话"]
      },
      {
        id: "pele",
        title: "球星外交",
        year: 1958,
        branch: "政治文化",
        x: 662,
        y: 584,
        summary: "贝利等全球球星让足球超越竞技成绩，成为国家形象、商业传播和软实力的一部分。",
        effects: ["国家形象外溢", "球员成为文化符号", "足球软实力出现"],
        prerequisites: ["世界杯", "电视转播"],
        unlocks: ["球星商业化", "全球偶像"]
      },
      {
        id: "africa",
        title: "非洲足球崛起",
        year: 1990,
        branch: "政治文化",
        x: 792,
        y: 558,
        summary: "喀麦隆等球队在世界杯舞台上改变外界想象，也让后殖民身份、移民和全球足球人才流动更受关注。",
        effects: ["足球版图扩张", "弱者叙事升级", "移民与身份话题进入赛场"],
        prerequisites: ["世界杯全球化", "电视转播"],
        unlocks: ["全球青训网络", "多元国家队"]
      },
      {
        id: "womens",
        title: "女足世界杯",
        year: 1991,
        branch: "政治文化",
        x: 792,
        y: 642,
        summary: "女足世界杯让性别平等、职业化资源和体育可见度成为足球发展史的一条关键支线。",
        effects: ["女性运动员可见度提升", "职业化讨论加速", "足球文化边界扩大"],
        prerequisites: ["国际赛事体系", "女性体育运动发展"],
        unlocks: ["平权议题", "女足商业化"]
      },
      {
        id: "games",
        title: "足球游戏时代",
        year: 1993,
        branch: "球迷文化",
        x: 940,
        y: 632,
        summary: "电子游戏把阵型、球星和俱乐部带进卧室与网吧，很多人先在手柄上认识了世界足球。",
        effects: ["年轻球迷入口扩大", "球员数值化", "战术想象被游戏化"],
        prerequisites: ["球衣号码", "全球联赛转播"],
        unlocks: ["电竞足球", "数据化球星认知"]
      },
      {
        id: "social",
        title: "社媒球迷",
        year: 2010,
        branch: "球迷文化",
        x: 1060,
        y: 508,
        summary: "微博、Twitter、短视频和群聊让比赛变成实时共创现场，梗、争议和二创几乎与进球同步发生。",
        effects: ["赛事实时二创", "球员舆论压力上升", "球迷身份碎片化"],
        prerequisites: ["球迷文化全球化", "智能手机"],
        unlocks: ["实时球迷舆论", "赛后内容共创"]
      },
      {
        id: "qatar",
        title: "世界杯与地缘展示",
        year: 2022,
        branch: "政治文化",
        x: 1060,
        y: 642,
        summary: "卡塔尔世界杯让大型赛事、国家形象、劳工、人权、能源资本和全球媒体目光集中到同一个舞台。",
        effects: ["赛事成为国家展示", "公共议题进入转播周期", "体育与政治边界被重新讨论"],
        prerequisites: ["世界杯全球化", "商业联赛时代", "电视转播"],
        unlocks: ["超大型赛事治理", "全球公共议题"]
      }
    ];

    const branchLanes = {
      "规则科技": 92,
      "战术角色": 228,
      "赛事商业": 364,
      "文化社会": 500
    };

    const branchAliases = {
      "规则演化": "规则科技",
      "装备科技": "规则科技",
      "战术演化": "战术角色",
      "球员角色": "战术角色",
      "球迷文化": "文化社会",
      "政治文化": "文化社会",
      "赛事商业": "赛事商业"
    };

    const moreEvents = [
      ["crossbar", "球门标准化", 1875, "装备科技", "19 世纪后期球门横梁等标准逐渐固定，射门和门线判断变得更稳定。"],
      ["ifab", "IFAB 成立", 1886, "规则演化", "国际足球协会理事会成为规则守护者，足球规则开始拥有跨国协调机制。"],
      ["penalty", "点球诞生", 1891, "规则演化", "禁区内犯规有了明确惩罚，防守动作、心理压力和门将博弈全部被重塑。"],
      ["fifa1904", "FIFA 成立", 1904, "赛事商业", "国际足联成立，世界足球开始有一个全球治理与赛事组织中心。"],
      ["olympic", "奥运足球", 1908, "赛事商业", "奥运会让国家队足球进入国际体育舞台，也为世界杯积累组织经验。"],
      ["keeper1912", "门将手球限制", 1912, "规则演化", "门将只能在禁区内用手，守门员从全场自由角色变成禁区专家。"],
      ["truce1914", "圣诞停战足球", 1914, "政治文化", "一战前线传说中的足球比赛，让足球成为战争缝隙里的共同语言象征。"],
      ["copa1916", "美洲杯", 1916, "赛事商业", "南美国家队赛事成型，乌拉圭、阿根廷、巴西等足球文化进入区域竞争。"],
      ["dickkerr", "迪克科尔女足", 1920, "政治文化", "英格兰女足球队吸引大量观众，证明女性足球早期就拥有公共魅力。"],
      ["womenban", "英足总女足禁令", 1921, "政治文化", "女足被长期排除在主流场地之外，性别与资源不平等成为足球史暗线。"],
      ["radio", "广播解说", 1927, "球迷文化", "广播让无法到场的人也能同步感受比赛，足球第一次大规模进入家庭声音空间。"],
      ["offside1925", "越位规则放宽", 1925, "规则演化", "越位从三名防守球员改为两名，进球增多，也推动 WM 阵型兴起。"],
      ["metodo", "意大利 Metodo", 1934, "战术演化", "意大利用更谨慎的中场结构组织攻防，国家队战术开始形成鲜明风格。"],
      ["superga", "苏佩加空难", 1949, "政治文化", "都灵队空难成为意大利足球集体哀悼，也显示俱乐部早已承载城市情感。"],
      ["floodlights", "夜场照明", 1950, "装备科技", "灯光让比赛摆脱白天限制，电视转播、工作日晚场和商业赛程更容易发生。"],
      ["uefa", "欧足联成立", 1954, "赛事商业", "欧洲足球有了区域治理结构，为欧洲俱乐部赛事和国家队赛事铺路。"],
      ["eurocup", "欧洲冠军杯", 1955, "赛事商业", "顶级俱乐部跨国竞争制度化，欧洲俱乐部足球的王座叙事开始成型。"],
      ["substitution", "正式换人制度", 1958, "规则演化", "换人让教练可以在比赛中调整体能、伤病和战术，替补席成为战略资源。"],
      ["libertadores", "解放者杯", 1960, "赛事商业", "南美俱乐部冠军赛事成型，俱乐部荣耀从国内延伸到洲际舞台。"],
      ["catenaccio", "链式防守", 1960, "战术演化", "意大利防守体系强调盯人与清道夫，防守第一次成为高度精密的艺术。"],
      ["ultras", "Ultras 文化", 1960, "球迷文化", "有组织球迷、旗帜、歌声和看台视觉成为足球文化的重要组成。"],
      ["libero", "自由人", 1964, "球员角色", "清道夫从最后防线变成可带球推进的自由角色，防守者也能组织进攻。"],
      ["fourfourtwo", "4-4-2 成型", 1966, "战术演化", "英格兰世界杯夺冠让 4-4-2 成为长期主流阵型，攻守平衡成为关键词。"],
      ["footballwar", "足球战争", 1969, "政治文化", "洪都拉斯与萨尔瓦多冲突被足球比赛点燃舆论，显示体育与政治情绪会互相放大。"],
      ["southAmericaSocios", "南美会员与德比文化", 1960, "文化社会", "博卡、河床等俱乐部的 socios 会员、看台和城市身份交织，让俱乐部治理与球迷归属高度绑定。"],
      ["telstar", "Telstar 世界杯用球", 1970, "赛事商业", "黑白 Telstar 让足球在电视转播中更清晰，也让世界杯用球成为可识别、可销售的赛事符号。"],
      ["stickers", "Panini 贴纸", 1970, "球迷文化", "球员贴纸让收集、交换和认识球星成为很多孩子的世界杯入口。"],
      ["ajaxschool", "阿贾克斯青训体系", 1971, "赛事商业", "阿贾克斯把青训、俱乐部风格和一线队输送连成体系，培养球员不再只是挑天才。"],
      ["argentina1978", "1978 阿根廷世界杯", 1978, "政治文化", "军政府时期的世界杯让大型赛事、宣传与国家形象问题高度交织。"],
      ["sponsor1979", "球衣胸前赞助", 1979, "赛事商业", "赞助商进入球衣正面，俱乐部身体空间也变成商业媒体位。"],
      ["regista", "拖后组织核心", 1980, "球员角色", "组织者从前腰后撤到中后场，用传球控制节奏与方向。"],
      ["zonal", "区域防守", 1980, "战术演化", "球队逐渐从单纯盯人转向区域控制，防守与压迫更强调整体距离。"],
      ["uefawomen", "欧洲女足赛事", 1984, "政治文化", "欧洲女子国家队赛事推动女足重新进入正式国际竞赛体系。"],
      ["heysel", "海瑟尔惨案", 1985, "政治文化", "球场安全、球迷暴力和赛事治理成为欧洲足球无法回避的问题。"],
      ["munich1958", "慕尼黑空难", 1958, "政治文化", "曼联慕尼黑空难让俱乐部、城市记忆和欧洲赛事风险管理被永久写入足球史。"],
      ["hooliganism", "足球流氓治理", 1970, "政治文化", "20 世纪后半叶英欧足球流氓问题推动球场安保、票务、警务和看台治理不断升级。"],
      ["maradona1986", "马拉多纳与英阿记忆", 1986, "政治文化", "1986 年世界杯阿根廷对英格兰一战，把球场胜负、民族情绪和福克兰/马岛战争记忆连接在一起。"],
      ["sacchi", "萨基高压米兰", 1988, "战术演化", "AC 米兰用整体压迫和高防线改变欧洲足球，球队像一个同步移动的系统。"],
      ["hillsborough", "希尔斯堡惨案", 1989, "政治文化", "球场安全、媒体责任和球迷权利被长期追问，足球治理进入痛苦反思。"],
      ["sweeperkeeper", "门卫型门将", 1990, "球员角色", "门将开始承担更积极的身后保护和出球任务，禁区外也成为工作区。"],
      ["backpass", "回传门将规则", 1992, "规则演化", "门将不能再用手接队友故意回传，拖延比赛减少，门将脚下技术变得重要。"],
      ["championsleague", "欧冠改制", 1992, "赛事商业", "欧洲冠军杯变为欧冠，电视包装、奖金和豪门叙事全面升级。"],
      ["footballAgents", "现代足球经纪人制度", 2001, "赛事商业", "球员流动和合同谈判复杂化后，经纪人逐渐制度化，深度参与转会、续约、佣金和职业规划。"],
      ["jleague", "J 联赛", 1992, "赛事商业", "日本职业足球联赛于 1992 年成立并在 1993 年开赛，亚洲足球职业化与本土球迷文化快速成长。"],
      ["mls", "MLS 成立", 1996, "赛事商业", "美国职业足球联赛重启，足球进入北美体育商业实验场。"],
      ["mandela", "南非非洲杯", 1996, "政治文化", "南非夺得非洲杯，足球与后种族隔离时代的国家和解叙事相连。"],
      ["bosman", "博斯曼判决", 1995, "赛事商业", "合同到期球员自由转会改变欧洲足坛劳资关系，也加速豪门集中人才。"],
      ["uswnt1999", "1999 女足世界杯", 1999, "政治文化", "美国女足夺冠成为女足商业化和大众可见度的重要转折点。"],
      ["japan2002", "日韩世界杯", 2002, "政治文化", "世界杯首次来到亚洲，全球足球地图和亚洲城市形象被重新看见。"],
      ["abramovich", "资本入主俱乐部", 2003, "赛事商业", "新资本进入欧洲俱乐部，转会市场、薪资结构和豪门竞争格局被重塑。"],
      ["imageRights", "球员肖像权商业化", 2003, "赛事商业", "球星姓名、肖像和商业授权成为合同谈判的重要资产，球员从雇员进一步变成媒体品牌。"],
      ["messiRonaldoFans", "梅罗时代球迷", 2009, "文化社会", "梅西与 C 罗的长期竞争让大量球迷围绕球星而非俱乐部形成身份，社媒时代的个人粉丝文化被放大。"],
      ["mourinho", "穆里尼奥反击体系", 2004, "战术演化", "快速转换、防守组织和心理战被包装成强烈风格，教练成为叙事主角。"],
      ["tikitaka", "Tiki-taka", 2008, "战术演化", "西班牙与巴萨的传控足球把控球、位置和压迫融合成时代审美。"],
      ["invertedwinger", "内切边锋", 2008, "球员角色", "边锋从传中者变成逆足射门与内收组织者，边路角色重新定义。"],
      ["vuvuzela", "呜呜祖拉", 2010, "球迷文化", "南非世界杯的声音符号让主办地文化以极强辨识度进入全球转播。"],
      ["arabultras", "北非 Ultras 与公共空间", 2011, "政治文化", "球迷组织在公共生活中扮演更复杂角色，看台文化与街头政治产生交集。"],
      ["goalline", "门线技术", 2012, "装备科技", "传感和高速摄像让是否越过门线有了技术判定，VAR 的心理门槛被降低。"],
      ["ffp2010", "财政公平政策 FFP", 2010, "赛事商业", "UEFA 推出财政公平政策，试图把俱乐部参赛资格、亏损控制和可持续经营连接起来。"],
      ["invertedfullback", "倒置边后卫", 2013, "球员角色", "边后卫内收到中场协助组织，边路球员开始承担中场任务。"],
      ["gegenpress", "反抢体系", 2013, "战术演化", "丢球后的即时围抢成为进攻的一部分，转换瞬间被设计成黄金窗口。"],
      ["xg", "预期进球 xG", 2010, "装备科技", "2010 年代，预期进球逐渐进入媒体和俱乐部分析，球迷开始用概率语言讨论机会与表现。"],
      ["setpiece", "定位球团队", 2018, "战术演化", "定位球被当成可系统开发的得分资产，教练团队出现更细分分工。"],
      ["youtube", "战术视频频道", 2018, "球迷文化", "视频平台让普通球迷接触战术板、剪辑和数据解释，懂球门槛被重新分配。"],
      ["kneeling", "球场抗议动作", 2020, "政治文化", "球员和球队用赛前动作表达公共立场，足球场成为社会议题传播空间。"],
      ["fiveSubs", "五换规则", 2020, "规则演化", "密集赛程推动五换制度，板凳深度和临场调整价值上升。"],
      ["equalpay", "女足球员同工同酬", 2022, "政治文化", "美国女足等案例推动薪酬、公平与商业价值的全球讨论。"],
      ["saot", "半自动越位", 2022, "规则演化", "追踪技术和建模让越位判定更快进入可视化时代，但争议也转向技术解释。"],
      ["clubstate", "国家资本俱乐部", 2022, "赛事商业", "俱乐部、国家形象和全球资本进一步纠缠，足球所有权成为公共议题。"],
      ["womens2023", "2023 女足世界杯扩军", 2023, "政治文化", "女足世界杯扩军和高关注度证明女足全球竞争和商业空间继续扩大。"],
      ["restdefense", "Rest Defense", 2023, "战术演化", "控球时提前布置防守结构，球队把失去球权后的第一秒也纳入设计。"],
      ["clubworldcup", "新版世俱杯", 2025, "赛事商业", "新版俱乐部世界杯扩军让全球俱乐部竞赛、赛程负荷和商业分配进入新阶段。"],
      ["worldcup48", "48 队世界杯", 2026, "赛事商业", "2026 年世界杯扩军至 48 队，改变参赛版图、赛程结构和中小足球国家的机会窗口。"],
      ["aianalysis", "AI 战术分析", 2020, "装备科技", "2020 年代，多源数据和模型开始参与对手分析、训练反馈和比赛准备。"],
      ["handball", "手球规则演变", 1997, "规则演化", "手球判罚长期在故意性、身体轮廓和进攻获利之间摇摆，争议反复出现。"],
      ["goldengoal", "金球制实验", 1993, "规则演化", "加时赛突然死亡规则试图提升戏剧性，也改变了球队在加时赛的风险选择。"],
      ["varleagues", "联赛 VAR 普及", 2017, "规则演化", "视频裁判从试验走向主要联赛，裁判权威和比赛节奏被重新协商。"],
      ["waterbreak", "补水暂停", 2014, "规则演化", "高温比赛中的补水暂停让球员健康、气候和赛事安排进入规则讨论。"],
      ["replicashirt", "复刻球衣文化", 1990, "球迷文化", "球衣从比赛装备变成日常身份表达，复古款和经典号码拥有收藏价值。"],
      ["tifo", "Tifo 巨幅", 1990, "球迷文化", "看台巨幅展示让球迷成为视觉创作者，主场气氛成为俱乐部资产。"],
      ["academy", "现代青训学院", 1998, "装备科技", "俱乐部把训练、教育、数据和球员发展结合，青训成为长期投资系统。"],
      ["gps", "GPS 背心", 2010, "装备科技", "可穿戴设备追踪跑动、冲刺和负荷，训练管理从感觉走向数据。"],
      ["hybridgrass", "混合草皮", 2000, "装备科技", "天然草与人造纤维结合，提高场地稳定性，也影响传控速度和伤病风险。"],
      ["boots", "可换鞋钉", 1954, "装备科技", "更适应天气和草皮的球鞋设计，让装备选择成为比赛准备的一部分。"],
      ["lightball", "世界杯用球科技", 2006, "装备科技", "热粘合、低吸水和空气动力学设计让足球本身成为技术争议焦点。"],
      ["targetman", "支点中锋", 1966, "球员角色", "高大中锋负责争顶、背身和二点球，直接打法拥有稳定战术支点。"],
      ["boxbox", "B2B 中场", 1980, "球员角色", "覆盖两个禁区的中场成为体能、对抗和攻防转换的代表角色。"],
      ["destroyer", "防守型后腰", 1990, "球员角色", "专注拦截和保护防线的后腰让球队在攻守转换中更稳。"],
      ["wingback", "翼卫", 1990, "球员角色", "三中卫体系里的边路球员同时承担边锋和边后卫任务。"],
      ["playmaker8", "8 号组织者", 2010, "球员角色", "组织职责从传统 10 号后撤到中前卫，球队在更低位置发起控制。"],
      ["pressingforward", "压迫型前锋", 2015, "球员角色", "前锋的第一任务不再只是进球，也要触发压迫和限制出球。"],
      ["varcelebration", "延迟庆祝", 2018, "球迷文化", "VAR 时代进球后的情绪被暂停，庆祝、等待和改判成为新的观赛节奏。"],
      ["fanownership", "球迷所有权", 2009, "政治文化", "50+1、会员制和球迷信托让俱乐部所有权成为身份与治理问题。"],
      ["superleague", "欧超风波", 2021, "政治文化", "欧超计划引发球迷、俱乐部、联赛与资本的正面冲突。"],
      ["migrantteams", "多元国家队", 2018, "政治文化", "移民背景球员让国家队身份更复杂，也让足球成为多元社会的镜子。"],
      ["sheffield", "俱乐部足球萌芽", 1857, "赛事商业", "谢菲尔德等早期俱乐部让足球从学校和地方游戏转向稳定组织。"],
      ["cambridge", "剑桥规则", 1848, "规则演化", "大学规则尝试把不同踢法统一起来，为 1863 年协会足球规则铺路。"],
      ["professionalism1885", "职业化合法化", 1885, "赛事商业", "英足总承认受限职业化后，球员付薪、俱乐部经营和联赛竞争开始进入制度化时代。"],
      ["goalnets1891", "球门网", 1891, "装备科技", "球门网让进球是否成立更容易被确认，减少球穿过门框后的争议。"],
      ["referee1881", "裁判入场执法", 1891, "规则演化", "裁判进入规则体系，比赛争议开始从双方协商转向第三方裁决。"],
      ["ninetyminutes", "90 分钟与 11 人", 1897, "规则演化", "比赛人数与时长逐渐标准化，让足球成为更容易复制的现代竞赛。"],
      ["directfreekick", "直接任意球", 1903, "规则演化", "直接任意球让严重犯规有了更直接惩罚，也催生任意球技术和防守站位。"],
      ["memberClubs", "会员制俱乐部结构", 1902, "赛事商业", "皇马、巴萨等会员制俱乐部把球迷身份、俱乐部治理和商业品牌绑在一起，所有权不只是资本问题。"],
      ["worldcupqualify", "世界杯预选赛", 1934, "赛事商业", "世界杯从邀请赛转向资格竞争，全球足球版图开始被制度化筛选。"],
      ["continentalconfed", "洲际足联体系", 1950, "赛事商业", "各大洲治理组织逐渐成型，全球足球通过区域赛事与资格赛连接。"],
      ["afcon", "非洲杯", 1957, "赛事商业", "非洲国家队赛事建立区域舞台，也让后殖民国家身份与足球竞争交织。"],
      ["asianCup", "亚洲杯", 1956, "赛事商业", "亚洲国家队赛事推动区域足球组织化，给亚洲足球建立长期竞赛坐标。"],
      ["worldcupExpansion1982", "世界杯 24 队", 1982, "赛事商业", "世界杯扩至 24 队，让更多地区进入主舞台，全球代表性增强。"],
      ["laMasia1979", "La Masia 青训", 1979, "赛事商业", "巴萨把 La Masia 用作外地青少年球员住宿和培养体系，青训开始与俱乐部长期风格绑定。"],
      ["clairefontaine1988", "Clairefontaine 国家青训", 1988, "赛事商业", "法国足协建立国家足球中心，把精英球员培养、教育和国家队长期规划连在一起。"],
      ["taylorReport1990", "Taylor Report 与全坐席球场", 1990, "政治文化", "希尔斯堡惨案后的 Taylor Report 推动英格兰顶级球场全坐席化，改变看台、安全和俱乐部基础设施。"],
      ["worldcupExpansion1998", "世界杯 32 队", 1998, "赛事商业", "32 队世界杯成为长期标准格式，商业包装、转播节奏和小组赛结构趋于稳定。"],
      ["uefaNationsLeague", "欧国联创立", 2018, "赛事商业", "UEFA Nations League 用分级联赛取代大量友谊赛，让国家队比赛日变成更有积分、升降级和转播价值的赛事产品。"],
      ["moneyFootball2003", "阿布入主切尔西与金元足球", 2003, "赛事商业", "Abramovich 收购切尔西后，以老板注资驱动转会和工资竞争，欧洲豪门竞争进入资本加速阶段。"],
      ["megaStadiums", "大型球场商业化", 2024, "赛事商业", "伯纳乌等现代球场改造把比赛日、演唱会、餐饮、博物馆和贵宾包厢整合成全年收入机器。"],
      ["saudiGold2023", "沙特联赛金元引援", 2023, "赛事商业", "2023 年起，沙特职业联赛通过高薪和国家资本背景吸引大量国际球星，改变全球转会市场注意力。"],
      ["threepoints", "三分制", 1995, "规则演化", "胜一场积三分提高了主动进攻收益，联赛排名策略随之改变。"],
      ["multiball", "多球系统", 1998, "规则演化", "多球系统减少死球等待，让高节奏比赛更容易维持强度。"],
      ["spray", "定位球喷雾", 2014, "装备科技", "裁判喷雾让人墙距离更可视化，细小规则执行也进入技术辅助时代。"],
      ["commstech", "裁判通讯系统", 2006, "装备科技", "耳麦和通讯设备让裁判组实时协作，判罚从个人判断走向团队流程。"],
      ["varprotocol", "VAR 协议入法", 2018, "规则演化", "视频助理裁判写入规则体系，足球接受了有限回看的判罚逻辑。"],
      ["concussionSubs", "脑震荡换人", 2021, "规则演化", "脑震荡换人试验让球员健康成为规则设计的显性目标。"],
      ["addedTime", "超长补时治理", 2022, "规则演化", "更严格计算补时让拖延时间成本上升，也改变了比赛最后阶段的心理预期。"],
      ["hydration2026", "2026 补水时间", 2026, "规则演化", "2026 年世界杯周期把补水暂停作为球员健康、炎热天气与赛事节奏共同管理的问题来处理。"],
      ["saot2026", "半自动越位升级", 2026, "装备科技", "2026 年周期的越位技术继续向更快、更可视化和更自动化的方向演进。"],
      ["connectedBall", "联网比赛用球", 2022, "装备科技", "传感器足球让触球瞬间和位置数据可被系统捕捉，判罚证据更细。"],
      ["playerTracking", "光学追踪系统", 2018, "装备科技", "多摄像头追踪把球员位置、速度和空间占用变成连续数据。"],
      ["openTrackingData", "开放比赛数据", 2020, "装备科技", "公开数据平台让分析不再只属于俱乐部，研究者和球迷也能复盘比赛结构。"],
      ["footballAIPro", "AI 数据平台", 2026, "装备科技", "AI 数据平台开始把球员追踪、战术分析和赛前准备整合到统一工作流。"],
      ["womenChampionsLeague", "女足欧冠职业化", 2001, "政治文化", "女足俱乐部洲际赛事提高了女性足球的竞技密度和商业可见度。"],
      ["womenProfessionalLeagues", "女足职业联赛潮", 2010, "政治文化", "多国女足联赛逐步职业化，让女性球员拥有更稳定的发展路径。"],
      ["womenClubWorldCup", "女足俱乐部世界杯构想", 2026, "政治文化", "女足俱乐部国际赛事成为扩展讨论，指向女足商业生态的下一步。"],
      ["futsal", "五人制足球体系", 1989, "赛事商业", "五人制足球的国际赛事体系强化了小空间技术，也影响青训和街头足球想象。"],
      ["beachSoccer", "沙滩足球", 1995, "球迷文化", "沙滩足球把足球变成更娱乐化的夏季赛事，也扩展了足球的观看场景。"],
      ["streetFootball", "街头足球文化", 1990, "球迷文化", "街头足球、笼式球场和小场地技术让足球文化从正式球场流向城市空间。"],
      ["freestyle", "花式足球", 2000, "球迷文化", "花式足球把控球技术转化为表演文化，社媒时代进一步放大个人表达。"],
      ["globalAcademies", "全球青训卫星", 2010, "赛事商业", "豪门俱乐部在全球建立青训和合作网络，人才发现越来越跨地域。"],
      ["scheduleCongestion", "赛程负荷治理", 2024, "赛事商业", "扩军赛事和商业巡回让球员负荷成为俱乐部、国家队与管理机构的冲突焦点。"],
      ["leaguePhase", "欧战联赛阶段", 2024, "赛事商业", "欧战改用联赛阶段，传统小组赛被更长的积分结构取代。"],
      ["clubWorldCup2025", "32 队世俱杯", 2025, "赛事商业", "新版世俱杯把俱乐部赛事推向更接近世界杯的全球规模。"],
      ["northAmerica2026", "三国合办世界杯", 2026, "政治文化", "美国、加拿大、墨西哥合办世界杯，让超大区域赛事治理成为 2026 年的重要实验。"],
      ["expandedFanTravel", "跨城观赛网络", 2026, "球迷文化", "48 队、三国多城赛事让球迷旅行、票务和城市动线成为世界杯体验的一部分。"],
      ["tacticalPeriodization", "Mourinho 式战术周期化", 2004, "战术演化", "以 Vítor Frade 理论和 Mourinho 教练团队为代表，训练不再把体能、技术、战术拆开，而围绕比赛模型设计每周周期。"],
      ["positionalPlay", "Guardiola 位置足球", 2008, "战术演化", "Guardiola 的巴萨把 Juego de Posición 做成时代样本，用固定空间占位、第三人跑动和丢球反抢控制比赛。"],
      ["buildFromBack", "后场出球体系", 2010, "战术演化", "从门将和中卫开始组织进攻，迫使门将、后卫和中场职责重新组合。"],
      ["threeBackReturn", "三中卫回潮", 2016, "战术演化", "三中卫体系重新流行，让翼卫、肋部空间和出球结构获得新价值。"],
      ["hybridPress", "混合压迫", 2020, "战术演化", "球队在盯人与区域之间切换压迫方式，更灵活地控制对手出球。"],
      ["boxMidfield", "盒型中场", 2023, "战术演化", "四人中场结构帮助球队在中路形成人数优势，也影响边后卫内收和前场站位。"],
      ["keeperDistribution", "门将出球核心", 2018, "球员角色", "门将的长短传、抗压和决策成为进攻发起的一部分。"],
      ["hybridDefender", "混合型后卫", 2020, "球员角色", "后卫不再只防守，还要在不同阶段切换成中场、边后卫或中卫角色。"],
      ["athleticWinger", "爆点边锋", 2015, "球员角色", "高速一对一边锋成为打破低位防守的关键资源。"]
    ];

    function makeEvent([id, title, year, branch, summary]) {
      const branchDefaults = {
        "规则演化": ["比赛行为被重新约束", "战术选择出现新边界", "争议被转移到新问题"],
        "战术演化": ["空间利用方式改变", "球员职责重新分配", "训练内容随之更新"],
        "装备科技": ["比赛被更清楚地测量", "训练与判罚更依赖技术", "观看体验被改善"],
        "赛事商业": ["赛事规模扩大", "商业与媒体价值提升", "全球观众被重新组织"],
        "球迷文化": ["观赛方式变化", "身份表达增强", "二次传播空间扩大"],
        "球员角色": ["位置边界变模糊", "球员能力模型改变", "选材标准被重写"],
        "政治文化": ["公共议题进入足球", "国家与身份叙事增强", "赛事影响超出球场"]
      };
      return {
        id,
        title,
        year,
        branch,
        summary,
        effects: branchDefaults[branch],
        prerequisites: ["时代环境变化", "足球全球影响力上升"],
        unlocks: ["后续分支演化", "新的观看与讨论方式"]
      };
    }

    nodes.push(...moreEvents.map(makeEvent));
    nodes.forEach(node => {
      node.originalBranch = node.branch;
      node.branch = branchAliases[node.branch] || node.branch;
    });

    const titleOverrides = {
      rules1863: "英足总统一规则",
      league: "英格兰职业联赛",
      worldcup: "首届世界杯",
      tv: "世界杯电视转播",
      premier: "英超商业化",
      fans: "跨地域球迷身份",
      data: "足球数据科学",
      maracana: "足球国家记忆",
      pele: "贝利与球星外交",
      qatar: "世界杯地缘政治",
      games: "EA Sports FIFA 游戏",
      bosman: "博斯曼判决",
      social: "社媒球迷舆论",
      womens: "女足世界杯创立",
      cards: "世界杯红黄牌",
      var: "世界杯 VAR",
      pressing: "高位逼抢体系",
      total: "荷兰全攻全守",
      facup: "足总杯创立",
      offside: "越位规则成型"
    };

    nodes.forEach(node => {
      if (titleOverrides[node.id]) node.title = titleOverrides[node.id];
    });

    const branchOverrides = {
      floodlights: "赛事商业",
      academy: "赛事商业",
      ajaxschool: "赛事商业",
      telstar: "赛事商业",
      games: "赛事商业",
      data: "规则科技"
    };

    nodes.forEach(node => {
      if (branchOverrides[node.id]) node.branch = branchOverrides[node.id];
      if (node.id === "data") {
        node.summary = "俱乐部把事件数据、追踪数据和统计模型用于球员评估、训练负荷、比赛复盘和转会决策，足球开始形成数据科学工作流。";
        node.effects = ["球员评估更系统", "训练和球探可量化", "战术复盘进入模型时代"];
      }
      if (node.id === "games") {
        node.summary = "EA Sports 的 FIFA 系列把真实俱乐部、球员授权、阵型和数值带进游戏机，让很多年轻球迷先通过手柄认识世界足球。";
        node.effects = ["授权内容商业化", "年轻球迷入口扩大", "球员能力被数值化传播"];
      }
    });

    const removedNodeIds = new Set([
      "olympic", "continentalconfed", "asianCup", "afcon", "libertadores",
      "futsal", "jleague", "mls", "leaguePhase", "scheduleCongestion", "clubworldcup",
      "copa1916", "worldcupqualify", "abramovich", "clubstate", "worldcupExpansion1982",
      "worldcupExpansion1998",
      "truce1914", "radio", "superga", "argentina1978",
      "replicashirt", "streetFootball", "tifo", "beachSoccer", "mandela",
      "freestyle", "fanownership", "vuvuzela", "arabultras", "migrantteams",
      "varcelebration", "youtube", "kneeling", "expandedFanTravel",
      "womenClubWorldCup", "northAmerica2026", "stickers", "womenChampionsLeague",
      "womenProfessionalLeagues", "japan2002",
      "goldengoal", "waterbreak", "lightball", "openTrackingData", "footballAIPro", "aianalysis",
      "hybridgrass", "xg", "gps",
      "metodo", "targetman", "regista", "boxbox", "destroyer", "wingback",
      "mourinho", "playmaker8", "invertedwinger", "pressingforward", "athleticWinger",
      "hybridPress", "hybridDefender", "boxMidfield",
      "uefawomen", "uswnt1999", "equalpay", "womens2023", "fans", "social"
    ]);

    for (let index = nodes.length - 1; index >= 0; index -= 1) {
      if (removedNodeIds.has(nodes[index].id)) nodes.splice(index, 1);
    }

    nodes.forEach((node, index) => {
      const lane = branchLanes?.[node.branch] || 330;
      if (typeof node.x !== "number" || typeof node.y !== "number") {
        const minYear = 1860;
        const maxYear = 2030;
        const normalized = (node.year - minYear) / (maxYear - minYear);
        const wave = ((index % 5) - 2) * 18;
        node.x = 70 + normalized * 980;
        node.y = Math.max(56, Math.min(660, lane + wave));
      }
    });

    const rootIds = new Set(["cambridge", "sheffield"]);

    const links = [
      ["rules1863", "offside"],
      ["rules1863", "facup"],
      ["rules1863", "ifab"],
      ["ifab", "penalty"],
      ["penalty", "cards"],
      ["offside", "pyramid"],
      ["facup", "league"],
      ["pyramid", "wm"],
      ["league", "numbers"],
      ["league", "worldcup"],
      ["wm", "total"],
      ["worldcup", "tv"],
      ["worldcup", "cards"],
      ["numbers", "ten"],
      ["tv", "premier"],
      ["tv", "var"],
      ["tv", "fans"],
      ["worldcup", "maracana"],
      ["worldcup", "pele"],
      ["total", "pressing"],
      ["ten", "falsenine"],
      ["pressing", "falsenine"],
      ["premier", "fans"],
      ["premier", "data"],
      ["pele", "ten"],
      ["pele", "africa"],
      ["premier", "africa"],
      ["worldcup", "womens"],
      ["telstar", "games"],
      ["fans", "social"],
      ["games", "social"],
      ["africa", "qatar"],
      ["womens", "qatar"]
    ];

    const linkSet = new Set(links.map(([from, to]) => `${from}->${to}`));
    const relationKinds = {};
    links.forEach(([from, to]) => {
      relationKinds[`${from}->${to}`] = "causal";
    });

    function pruneMissingLinks() {
      for (let index = links.length - 1; index >= 0; index -= 1) {
        const [from, to] = links[index];
        if (!nodes.some(node => node.id === from) || !nodes.some(node => node.id === to)) {
          delete relationKinds[`${from}->${to}`];
          linkSet.delete(`${from}->${to}`);
          links.splice(index, 1);
        }
      }
    }

    pruneMissingLinks();

    function addLink(from, to, kind = "causal") {
      const key = `${from}->${to}`;
      if (from === to) return;
      if (linkSet.has(key)) {
        if (relationKinds[key] === "sequence" && kind !== "sequence") relationKinds[key] = kind;
        return;
      }
      if (!nodes.some(node => node.id === from) || !nodes.some(node => node.id === to)) return;
      links.push([from, to]);
      linkSet.add(key);
      relationKinds[key] = kind;
    }

    Object.keys(branches).forEach(branch => {
      const branchNodes = nodes
        .filter(node => node.branch === branch)
        .sort((a, b) => a.year - b.year || a.title.localeCompare(b.title, "zh-CN"));
      branchNodes.forEach((node, index) => {
        if (index > 0) addLink(branchNodes[index - 1].id, node.id, "sequence");
      });
    });

    [
      ["ifab", "penalty"], ["penalty", "cards"], ["offside1925", "wm"], ["backpass", "sweeperkeeper"],
      ["goalline", "var"], ["varleagues", "var"], ["var", "saot"], ["fiveSubs", "restdefense"],
      ["crossbar", "ifab"], ["floodlights", "tv"], ["tv", "telstar"], ["telstar", "games"], ["gps", "data"],
      ["xg", "setpiece"], ["goalline", "varcelebration"], ["aianalysis", "data"],
      ["fifa1904", "worldcup"], ["olympic", "worldcup"], ["copa1916", "worldcup"], ["sheffield", "memberClubs"],
      ["uefa", "eurocup"],
      ["eurocup", "ajaxschool"],
      ["eurocup", "championsleague"], ["championsleague", "bosman"], ["bosman", "footballAgents"],
      ["footballAgents", "imageRights"], ["bosman", "premier"],
      ["premier", "moneyFootball2003"], ["moneyFootball2003", "ffp2010"], ["ffp2010", "saudiGold2023"],
      ["moneyFootball2003", "qatar"], ["moneyFootball2003", "megaStadiums"], ["abramovich", "clubstate"],
      ["clubstate", "qatar"], ["clubworldcup", "worldcup48"],
      ["catenaccio", "libero"], ["libero", "sacchi"], ["zonal", "sacchi"], ["sacchi", "pressing"],
      ["mourinho", "gegenpress"], ["tikitaka", "invertedfullback"], ["gegenpress", "pressingforward"],
      ["restdefense", "setpiece"], ["regista", "playmaker8"], ["targetman", "fourfourtwo"],
      ["boxbox", "pressing"], ["destroyer", "zonal"], ["wingback", "invertedfullback"],
      ["radio", "tv"], ["stickers", "replicashirt"], ["ultras", "tifo"],
      ["dickkerr", "womenban"], ["womenban", "uefawomen"], ["uefawomen", "womens"],
      ["womens", "uswnt1999"], ["uswnt1999", "equalpay"], ["equalpay", "womens2023"],
      ["truce1914", "footballwar"], ["footballwar", "argentina1978"], ["heysel", "hillsborough"],
      ["eurocup", "munich1958"], ["hooliganism", "heysel"], ["hooliganism", "hillsborough"],
      ["worldcup", "maradona1986"], ["footballwar", "maradona1986"],
      ["mandela", "africa"], ["japan2002", "worldcup48"], ["arabultras", "fanownership"],
      ["memberClubs", "southAmericaSocios"], ["southAmericaSocios", "superleague"],
      ["memberClubs", "superleague"], ["fanownership", "superleague"], ["migrantteams", "qatar"], ["kneeling", "superleague"]
      ,["cambridge", "rules1863"], ["sheffield", "facup"], ["referee1881", "ifab"],
      ["ifab", "ninetyminutes"], ["crossbar", "goalnets1891"], ["facup", "professionalism1885"],
      ["professionalism1885", "league"], ["penalty", "directfreekick"], ["fifa1904", "worldcupqualify"],
      ["worldcupqualify", "worldcup"], ["continentalconfed", "afcon"], ["continentalconfed", "asianCup"],
      ["asianCup", "japan2002"], ["afcon", "mandela"], ["worldcup", "worldcupExpansion1982"],
      ["worldcupExpansion1982", "worldcupExpansion1998"], ["worldcupExpansion1998", "worldcup48"],
      ["threepoints", "premier"], ["multiball", "pressing"], ["commstech", "varprotocol"],
      ["spray", "setpiece"], ["varprotocol", "var"], ["var", "varleagues"],
      ["concussionSubs", "fiveSubs"], ["addedTime", "scheduleCongestion"],
      ["addedTime", "hydration2026"],
      ["connectedBall", "saot"], ["saot", "saot2026"], ["playerTracking", "xg"],
      ["playerTracking", "openTrackingData"], ["openTrackingData", "aianalysis"],
      ["aianalysis", "footballAIPro"], ["womens", "womenChampionsLeague"],
      ["womenChampionsLeague", "womenProfessionalLeagues"], ["womenProfessionalLeagues", "womens2023"],
      ["womens2023", "womenClubWorldCup"], ["futsal", "streetFootball"],
      ["streetFootball", "freestyle"], ["beachSoccer", "expandedFanTravel"],
      ["sacchi", "tacticalPeriodization"], ["falsenine", "positionalPlay"],
      ["ajaxschool", "laMasia1979"], ["laMasia1979", "clairefontaine1988"],
      ["laMasia1979", "academy"], ["clairefontaine1988", "academy"],
      ["hillsborough", "taylorReport1990"], ["taylorReport1990", "premier"],
      ["academy", "globalAcademies"], ["uefa", "uefaNationsLeague"], ["leaguePhase", "scheduleCongestion"],
      ["clubWorldCup2025", "scheduleCongestion"], ["clubWorldCup2025", "clubworldcup"],
      ["worldcup48", "northAmerica2026"], ["northAmerica2026", "expandedFanTravel"],
      ["tacticalPeriodization", "pressing"],
      ["tikitaka", "positionalPlay"], ["positionalPlay", "buildFromBack"],
      ["buildFromBack", "keeperDistribution"], ["invertedfullback", "boxMidfield"],
      ["threeBackReturn", "wingback"], ["hybridPress", "restdefense"],
      ["boxMidfield", "restdefense"], ["sweeperkeeper", "keeperDistribution"],
      ["invertedfullback", "hybridDefender"], ["invertedwinger", "athleticWinger"],
      ["athleticWinger", "pressingforward"]
    ].forEach(([from, to]) => addLink(from, to, "causal"));

    pruneMissingLinks();

    function reachableByResearch() {
      const reached = new Set(rootIds);
      let changed = true;
      while (changed) {
        changed = false;
        links.forEach(([from, to]) => {
          if (relationKinds[`${from}->${to}`] === "sequence") return;
          if (reached.has(from) && !reached.has(to)) {
            reached.add(to);
            changed = true;
          }
        });
      }
      return reached;
    }

    function addContextUnlocks() {
      let reached = reachableByResearch();
      const ordered = [...nodes].sort((a, b) => a.year - b.year || a.title.localeCompare(b.title, "zh-CN"));
      ordered.forEach(node => {
        if (reached.has(node.id) || node.id === "rules1863") return;
        const sameBranchCandidates = ordered
          .filter(item => item.id !== node.id && item.branch === node.branch && reached.has(item.id) && item.year <= node.year)
        const anyBranchCandidates = ordered
          .filter(item => item.id !== node.id && reached.has(item.id) && item.year <= node.year)
        const priorSameBranch = sameBranchCandidates[sameBranchCandidates.length - 1];
        const priorAnyBranch = anyBranchCandidates[anyBranchCandidates.length - 1];
        const source = priorSameBranch || priorAnyBranch || nodes.find(item => item.id === "rules1863");
        if (!source) return;
        addLink(source.id, node.id, "context");
        reached = reachableByResearch();
      });
    }

    addContextUnlocks();

    const researchNodeIds = new Set(nodes.map(node => node.id));

    const curatedResearchEdges = [
      ["cambridge", "rules1863"],
      ["sheffield", "facup"],
      ["sheffield", "memberClubs", "context"],
      ["facup", "professionalism1885"],
      ["professionalism1885", "league"],
      ["rules1863", "offside"],
      ["rules1863", "facup"],
      ["rules1863", "ifab"],
      ["crossbar", "goalnets1891"],
      ["ifab", "penalty"],
      ["penalty", "cards"],
      ["offside", "pyramid"],
      ["facup", "league"],
      ["pyramid", "wm"],
      ["league", "worldcup"],
      ["league", "numbers"],
      ["league", "dickkerr", "context"],
      ["dickkerr", "womenban"],
      ["wm", "total"],
      ["offside", "offside1925"],
      ["offside1925", "wm"],
      ["worldcup", "tv"],
      ["tv", "telstar"],
      ["worldcup", "pele"],
      ["worldcup", "womens"],
      ["tv", "premier"],
      ["tv", "goalline"],
      ["goalline", "var"],
      ["var", "saot"],
      ["numbers", "ten"],
      ["ten", "falsenine"],
      ["total", "pressing"],
      ["pressing", "gegenpress"],
      ["pressing", "falsenine"],
      ["falsenine", "tikitaka"],
      ["wm", "catenaccio"],
      ["catenaccio", "libero"],
      ["libero", "sacchi"],
      ["sacchi", "pressing"],
      ["sacchi", "tacticalPeriodization"],
      ["falsenine", "positionalPlay"],
      ["tikitaka", "positionalPlay"],
      ["positionalPlay", "buildFromBack"],
      ["eurocup", "ajaxschool"],
      ["ajaxschool", "laMasia1979"],
      ["laMasia1979", "clairefontaine1988"],
      ["clairefontaine1988", "academy"],
      ["pressing", "restdefense"],
      ["premier", "fans"],
      ["premier", "data"],
      ["telstar", "games"],
      ["imageRights", "messiRonaldoFans"],
      ["premier", "moneyFootball2003"],
      ["moneyFootball2003", "ffp2010"],
      ["ffp2010", "saudiGold2023"],
      ["moneyFootball2003", "megaStadiums"],
      ["moneyFootball2003", "qatar"],
      ["fans", "social"],
      ["worldcup", "maracana"],
      ["hillsborough", "taylorReport1990"],
      ["pele", "africa"],
      ["africa", "qatar"],
      ["championsleague", "bosman"],
      ["bosman", "footballAgents"],
      ["footballAgents", "imageRights"],
      ["memberClubs", "superleague", "context"],
      ["memberClubs", "southAmericaSocios", "context"],
      ["uefa", "uefaNationsLeague"],
      ["womens", "uswnt1999"],
      ["uswnt1999", "equalpay"],
      ["equalpay", "womens2023"],
      ["worldcup", "worldcupExpansion1982"],
      ["worldcupExpansion1982", "worldcupExpansion1998"],
      ["worldcupExpansion1998", "worldcup48"],
      ["worldcup48", "northAmerica2026", "context"]
    ];

    function buildResearchEdges() {
      const nodeById = new Map(nodes.map(node => [node.id, node]));
      const ordered = [...nodes].sort((a, b) => a.year - b.year || a.title.localeCompare(b.title, "zh-CN"));
      const orderIndex = new Map(ordered.map((node, index) => [node.id, index]));
      const candidates = new Map();

      function canPrecede(fromId, toId) {
        const from = nodeById.get(fromId);
        const to = nodeById.get(toId);
        if (!from || !to || fromId === toId) return false;
        if (from.year > to.year) return false;
        if (from.year === to.year && orderIndex.get(fromId) >= orderIndex.get(toId)) return false;
        return true;
      }

      function addCandidate(from, to, kind = "causal", weight = 1) {
        if (!researchNodeIds.has(from) || !researchNodeIds.has(to)) return;
        if (!canPrecede(from, to)) return;
        if (!candidates.has(to)) candidates.set(to, []);
        candidates.get(to).push({ from, to, kind, weight });
      }

      curatedResearchEdges.forEach(([from, to, kind]) => addCandidate(from, to, kind || "causal", 4));
      links.forEach(([from, to]) => {
        const kind = relationKinds[`${from}->${to}`] || "causal";
        if (kind === "sequence") return;
        addCandidate(from, to, kind, kind === "causal" ? 3 : 2);
      });

      ordered.forEach((node, index) => {
        if (rootIds.has(node.id)) return;
        const priorSameBranch = [...ordered.slice(0, index)]
          .reverse()
          .find(item => item.branch === node.branch && researchNodeIds.has(item.id));
        const priorAnyBranch = [...ordered.slice(0, index)]
          .reverse()
          .find(item => researchNodeIds.has(item.id));
        if (priorSameBranch) addCandidate(priorSameBranch.id, node.id, "context", 1);
        else if (priorAnyBranch) addCandidate(priorAnyBranch.id, node.id, "context", 0);
      });

      return ordered
        .filter(node => !rootIds.has(node.id))
        .map(node => {
          const best = (candidates.get(node.id) || [])
            .sort((a, b) => {
              const fromA = nodeById.get(a.from);
              const fromB = nodeById.get(b.from);
              const sameBranchA = fromA.branch === node.branch ? 1 : 0;
              const sameBranchB = fromB.branch === node.branch ? 1 : 0;
              return b.weight - a.weight
                || sameBranchB - sameBranchA
                || fromB.year - fromA.year
                || orderIndex.get(fromB.id) - orderIndex.get(fromA.id);
            })[0];
          return best ? [best.from, best.to, best.kind] : null;
        })
        .filter(Boolean);
    }

    const researchEdges = buildResearchEdges();

    researchEdges.forEach(([from, to, kind]) => addLink(from, to, kind || "causal"));

    const relationNotes = {
      "cambridge->rules1863": "剑桥规则早于英足总成立，是现代足球规则统一的重要前史；这里应理解为 1848 的规则尝试通向 1863 的制度化诞生。",
      "sheffield->facup": "早期俱乐部足球先于全国杯赛出现，稳定俱乐部组织让足总杯这种跨队赛事成为可能。",
      "facup->professionalism1885": "全国性杯赛和俱乐部竞争扩大后，球员训练、出场和报酬问题变得无法回避，职业化从地下状态走向制度承认。",
      "professionalism1885->league": "职业球员需要稳定赛程和收入结构，职业化合法化为联赛制提供了现实基础。",
      "sheffield->memberClubs": "早期俱乐部把足球从临时游戏变成稳定组织，皇马、巴萨等会员制俱乐部则展示了另一种所有权和身份结构：俱乐部不只属于投资人，也属于会员共同体。",
      "crossbar->goalnets1891": "球门横梁固定了球门边界，球门网进一步帮助裁判和观众确认球是否真正进入球门。",
      "rules1863->offside": "统一规则之后，越位才有稳定解释空间，进攻站位开始被制度约束。",
      "rules1863->facup": "共同规则让不同俱乐部可以参加同一套杯赛。",
      "offside->pyramid": "越位限制前锋蹲点，球队开始用阵型解决推进和接应。",
      "pyramid->wm": "阵型意识成熟后，越位规则变化推动 WM 阵型重组攻防。",
      "wm->total": "明确分工的阵型体系，为后来更流动的全攻全守提供了反面教材和基础。",
      "total->pressing": "全攻全守强调整体移动，高位逼抢继承了这种集体空间观。",
      "pressing->falsenine": "高压时代需要前锋参与压迫和连接，伪九号成为更合理的角色。",
      "worldcup->tv": "世界杯制造全球共同赛事，电视转播则把它放大为全球同时观看的仪式。",
      "tv->telstar": "电视转播让足球本身的可视性变成赛事体验的一部分，Telstar 的黑白块设计正是为电视时代提供更清晰的视觉符号。",
      "tv->var": "慢镜头和多机位让判罚争议更可见，也推动视频裁判成为制度答案。",
      "worldcup->cards": "国际比赛语言复杂，红黄牌用视觉信号统一裁判沟通。",
      "league->numbers": "职业联赛和现场观众扩大后，球衣号码提升识别效率。",
      "numbers->ten": "号码从识别工具变成位置符号，10 号逐渐承载组织核心和天才叙事。",
      "tv->premier": "电视收入重塑联赛商业模式，俱乐部开始围绕转播和赞助运营。",
      "premier->moneyFootball2003": "英超商业化提高了俱乐部资产价值，阿布入主切尔西则把私人资本注入和快速买人推到欧洲豪门竞争中心。",
      "moneyFootball2003->ffp2010": "金元足球推高转会费和工资，也让 UEFA 更迫切地用财政规则约束俱乐部亏损和资本注入。",
      "ffp2010->saudiGold2023": "欧洲财政监管限制了部分俱乐部的直接烧钱路径，沙特联赛的高薪引援则显示资本竞争开始转向新的联赛空间。",
      "moneyFootball2003->megaStadiums": "当俱乐部竞争越来越依赖收入规模，大型球场不再只是比赛场地，而成为全年商业收入平台。",
      "moneyFootball2003->qatar": "金元足球展示了资本如何改变俱乐部竞争力，随后国家资本、城市品牌和世界杯主办权又把足球商业推向更复杂的地缘政治层面。",
      "premier->fans": "全球联赛转播让远程球迷成为稳定群体，球迷文化跨出本地城市。",
      "fans->social": "论坛、酒吧和球迷组织积累的表达欲，在社媒时代变成实时二创。",
      "telstar->games": "世界杯用球、球衣和俱乐部授权都说明足球符号可以商品化；电子游戏进一步把这些符号做成可互动的球迷入口。",
      "premier->data": "高额转会和商业竞争让俱乐部更需要用数据降低决策风险。",
      "worldcup->maracana": "世界杯舞台越大，胜负越容易从比赛结果变成国家记忆和公共情绪。",
      "worldcup->pele": "世界杯让球星成为国家形象的全球入口。",
      "pele->ten": "全球球星叙事反过来强化了核心号码和核心位置的神话。",
      "premier->africa": "商业联赛和全球球探网络让非洲球员更频繁进入世界足球中心。",
      "worldcup->womens": "男子世界杯建立的国际赛事模板，为女足世界杯提供了组织参照。",
      "championsleague->bosman": "欧冠商业化提高了跨国人才竞争价值，博斯曼判决则从劳资和法律层面改变了欧洲球员流动规则。",
      "bosman->footballAgents": "球员自由流动能力增强后，合同、签字费、佣金和职业规划变得更复杂，经纪人的议价空间随之扩大。",
      "footballAgents->imageRights": "经纪人不只谈工资和转会，也会处理广告、肖像、社媒和个人品牌，球员商业权利成为合同结构的一部分。",
      "imageRights->messiRonaldoFans": "当球员肖像、广告和社媒影响力成为商业资产，梅西与 C 罗这样的超级球星就更容易形成跨俱乐部、跨国家的个人粉丝群体。",
      "memberClubs->superleague": "皇马、巴萨等会员制俱乐部参与欧超争议时，商业扩张和会员制身份之间的张力被直接暴露出来。",
      "memberClubs->southAmericaSocios": "会员制不只存在于欧洲豪门；博卡、河床等南美俱乐部把 socios、看台和城市身份结合得更强烈。",
      "uefa->uefaNationsLeague": "欧足联拥有欧洲国家队和俱乐部赛事组织权，欧国联是它在国家队比赛日上重塑竞赛产品的一次制度创新。",
      "eurocup->ajaxschool": "欧洲冠军杯让顶级俱乐部长期面对跨国竞争，阿贾克斯青训体系则说明俱乐部可以用稳定培养和一线队风格来支撑这种竞争。",
      "sacchi->tacticalPeriodization": "萨基米兰展示了整队同步移动和比赛模型的重要性，战术周期化则把这种“围绕比赛方式训练”的思路推进到训练周设计。",
      "falsenine->positionalPlay": "伪九号需要队友在不同空间补位、接应和攻击纵深，Guardiola 位置足球把这种空间协作扩展成整队的站位原则。",
      "league->dickkerr": "职业联赛和俱乐部足球让足球成为固定公共娱乐；一战后，工厂球队和慈善赛又把女性足球带到大规模观众面前。这是背景关系，不是直接因果。",
      "dickkerr->womenban": "Dick, Kerr Ladies 等女足球队在一战后吸引大量观众，正是这种可见度和场地使用，构成了理解 1921 年英足总女足禁令的直接前史。",
      "ajaxschool->laMasia1979": "阿贾克斯把青训、技术风格和一线队理念连在一起，La Masia 则把这种俱乐部风格型青训推向更鲜明的巴萨案例。",
      "laMasia1979->clairefontaine1988": "La Masia 代表俱乐部内部的长期培养，Clairefontaine 则把精英球员培养放到国家足协层面；二者都是现代青训制度化的重要样本。",
      "clairefontaine1988->academy": "国家级精英训练中心强化了青训、教育和长期规划的组合，也影响俱乐部后来建设更完整的学院体系。",
      "hillsborough->taylorReport1990": "希尔斯堡惨案之后，Taylor Report 系统调查球场安全、警务和看台管理，并推动英格兰顶级球场走向全坐席化。",
      "taylorReport1990->premier": "全坐席球场、安保升级和基础设施重建改变了英格兰顶级联赛的现场体验，也成为 1990 年代商业化环境的一部分。",
      "africa->qatar": "全球南方、身份与资本进入足球核心舞台后，世界杯的地缘意义更强。",
      "womens->qatar": "女足与平权议题让大型赛事越来越难与公共价值讨论分开。"
    };

    const relationTemplates = {
      "规则科技->战术角色": "规则和技术改变了可用空间、判罚方式和训练证据，球队必须用新的阵型、角色与跑位回应。",
      "战术角色->规则科技": "战术实践不断制造新问题，反过来推动规则和技术去处理争议、节奏与安全。",
      "赛事商业->文化社会": "赛事规模和媒体分发扩大了观众群；赛事越全球化，越容易承载国家形象、球迷身份、资本结构和公共议题。",
      "赛事商业->规则科技": "商业竞争提高了决策成本，俱乐部和赛事方更愿意投入技术来降低不确定性。",
      "文化社会->赛事商业": "公共议题、球迷需求和媒体表达会改变赛事组织、传播重点和商业风险。",
      "文化社会->规则科技": "球迷对解释和可视化的需求，会反过来推动数据、转播和判罚技术传播。",
      "战术角色->赛事商业": "新战术和新球星角色会改变比赛观赏性，也会影响媒体叙事与商业包装。"
    };

    function relationText(fromId, toId) {
      const kind = relationKinds[`${fromId}->${toId}`] || "causal";
      if (relationNotes[`${fromId}->${toId}`]) return relationNotes[`${fromId}->${toId}`];
      const from = nodes.find(item => item.id === fromId);
      const to = nodes.find(item => item.id === toId);
      if (!from || !to) return "这两个节点在足球史中存在相邻的影响关系。";
      if (kind === "sequence") {
        return `${from.title} 早于 ${to.title}，二者属于同一类历史变化的先后节点；这里表示发展顺序，不等于直接因果。`;
      }
      if (kind === "context") {
        return `背景关联：${from.title} 与「${to.title}」处在相近的历史问题中，前者提供了理解后者的制度、赛事或文化背景；这不是单一因果。`;
      }
      if (from.branch === to.branch) {
        return `${from.title} 先改变了这一领域的讨论方式或实践条件，后来 ${to.title} 在相近问题上继续推进。`;
      }
      return relationTemplates[`${from.branch}->${to.branch}`] || `跨分支关联：${from.title} 改变了足球生态中的一部分条件，使「${to.title}」更容易出现。`;
    }

    function relationKindLabel(fromId, toId) {
      const kind = relationKinds[`${fromId}->${toId}`] || "causal";
      return kind === "sequence" ? "时间参考" : kind === "context" ? "脉络关联" : "推动关系";
    }

    const nodeExamples = {
      facup: {
        title: "真实体现：1871-72 足总杯",
        body: "首届足总杯在 1871-72 赛季举行，决赛于 1872 年 3 月 16 日在伦敦 Kennington Oval 进行，Wanderers 1-0 击败 Royal Engineers。Royal Engineers 以早期传球配合闻名，这让杯赛不只是淘汰故事，也成为战术风格被观察和传播的舞台。"
      },
      wm: {
        title: "真实体现：越位规则后的 WM",
        body: "1925 年越位规则放宽后，进攻空间被重新打开。赫伯特·查普曼执教的阿森纳常被视为 WM 阵型的代表案例：中卫后撤、内锋与中场分工更清晰，阵型开始成为对规则变化的系统回应。"
      },
      offside1925: {
        title: "真实体现：1925 年越位放宽",
        body: "越位规则从要求三名防守球员改为两名防守球员，使前锋更容易获得合法位置。进球数上升后，球队必须重组防线和中路保护，WM 阵型正是在这种环境里获得意义。"
      },
      total: {
        title: "真实体现：1974 荷兰队",
        body: "1974 年世界杯上的荷兰队把位置互换、压迫和空间占领变成鲜明风格。克鲁伊夫和米歇尔斯体系让球员不再只属于固定位置，也为后来的高位逼抢和位置足球提供了语言。"
      },
      pressing: {
        title: "真实体现：从萨基米兰到现代前场压迫",
        body: "高位逼抢不是简单“跑得更凶”，而是把丢球后的几秒钟设计成战术。1980 年代末萨基的 AC 米兰用高防线、整体移动和压缩空间限制对手出球；后来 Guardiola 的巴萨在丢球后迅速反抢，常把控球和压迫连成一体；Klopp 的多特蒙德和利物浦则把反抢当成进攻发动机，抢回球后直接攻击尚未站稳的防线。结果是：前锋不只负责进球，中场不只负责传球，整支球队都要围绕“失去球权后的第一反应”训练。"
      },
      sacchi: {
        title: "真实体现：萨基的 AC 米兰",
        body: "1987-91 年间，萨基的 AC 米兰用区域防守、高防线和整体压迫改变欧洲足球。巴雷西领衔的防线不是被动退守，而是集体前压、压缩纵深，让对手很难舒服地转身和出球。这个案例说明压迫首先是一种整体距离管理。"
      },
      tikitaka: {
        title: "真实体现：巴萨与西班牙的控球压迫",
        body: "2008-12 年的 Guardiola 巴萨和 2008-12 年的西班牙国家队，把短传控球、位置占领和丢球后反抢结合起来。哈维、伊涅斯塔、布斯克茨等球员通过持续控球降低对手进攻次数，一旦丢球就立刻围抢，争取在对手还没展开前夺回球权。结果是控球不再只是保守传导，而成为防守、进攻和节奏控制的统一工具。"
      },
      gegenpress: {
        title: "真实体现：Klopp 的反抢体系",
        body: "Klopp 在多特蒙德和利物浦把 gegenpressing 做成鲜明标签：丢球后不是先退回阵型，而是在球附近立刻围堵传球线路。多特蒙德 2011、2012 年德甲夺冠和利物浦 2019 欧冠、2020 英超夺冠，都体现了反抢如何把防守瞬间变成进攻机会。"
      },
      positionalPlay: {
        title: "真实体现：Guardiola 的 Juego de Posición",
        body: "2008 年以后，Guardiola 的巴萨把位置足球变成现代足球最容易识别的样本。哈维、伊涅斯塔、布斯克茨、梅西等球员不是简单短传，而是在固定空间结构里制造第三人接应、肋部推进和丢球后反抢。后来 Guardiola 在拜仁和曼城继续发展这一套方法，边后卫内收、中卫出球和门将参与组织都因此变得更常见。"
      },
      tacticalPeriodization: {
        title: "真实体现：Mourinho 的训练周",
        body: "战术周期化常与葡萄牙学者 Vítor Frade 以及 Mourinho 的教练团队联系在一起。它不是“体能一天、技术一天、战术一天”的分拆训练，而是围绕球队比赛模型安排每周训练：不同日子控制强度、空间和人数，但每次训练都服务于球队想踢出的比赛方式。Mourinho 在波尔图、切尔西和国际米兰的成功，让这种训练观被更多教练讨论。"
      },
      buildFromBack: {
        title: "真实体现：从后场开始组织",
        body: "2010 年代后，越来越多球队要求门将和中卫参与出球。Guardiola 的曼城、Luis Enrique 的西班牙、De Zerbi 的布莱顿等案例都显示：后场出球可以主动吸引压迫，再把球送到中场空当。结果是门将脚下技术、中卫传球能力和后腰接应能力变得更重要。"
      },
      restdefense: {
        title: "真实体现：控球时先想丢球后怎么办",
        body: "现代强队在进攻时会提前布置 rest defense，也就是控球时的防守结构。比如 Manchester City 在前场围攻时，会让中卫、后腰和内收边后卫保持反抢位置，防止被一次长传打穿。它说明现代战术不再把进攻和防守分成两个阶段，而是同时设计。"
      },
      worldcup: {
        title: "真实体现：1930 乌拉圭世界杯",
        body: "首届世界杯于 1930 年 7 月在乌拉圭举行，比赛集中在蒙得维的亚。FIFA 选择乌拉圭，与其奥运足球成绩、建国百年庆典和兴建 Estadio Centenario 的能力有关。它让国家队赛事从奥运会附属项目，变成独立的世界冠军制度。"
      },
      dickkerr: {
        title: "真实体现：Dick, Kerr Ladies",
        body: "Dick, Kerr Ladies 原本来自普雷斯顿一家工厂的一战时期女子球队。战后她们继续进行慈善赛，并在 1920 年节礼日于 Goodison Park 对阵 St Helens Ladies，吸引了大批观众。这个案例说明女足在 1921 年禁令前并不是边缘小插曲，而是已经拥有真实观众、场地需求和公共影响力。"
      },
      ultras: {
        title: "真实体现：米兰南看台 Curva Sud",
        body: "Ultras 文化不是普通“加油声更大”，而是有组织的看台身份。以 AC 米兰的 Curva Sud 为例，球迷组织通过旗帜、鼓点、歌曲、巨幅 Tifo 和客场远征制造主场气氛，也会在俱乐部治理、票价和球队表现上表达立场。它让看台从观众席变成足球文化生产现场。"
      },
      var: {
        title: "真实体现：2018 世界杯 VAR",
        body: "2018 年俄罗斯世界杯首次在世界杯正赛全面使用 VAR。判罚从瞬间判断变成可回看流程，进球庆祝、点球争议和观众等待都成为新的比赛体验。"
      },
      goalline: {
        title: "真实体现：兰帕德门线冤案之后",
        body: "2010 年南非世界杯英格兰对德国，Frank Lampard 的射门击中横梁后明显越过门线，但裁判没有判进。这个事件成为推动门线技术讨论的标志案例之一。2012 年 IFAB 批准门线技术，之后世界杯和主要联赛逐步采用，让“球是否整体过线”从肉眼争议变成技术判定。"
      },
      worldcup48: {
        title: "真实体现：2026 扩军",
        body: "2026 年世界杯扩至 48 队，并由美国、加拿大、墨西哥三国合办。扩军改变了参赛机会、赛程结构和球迷旅行方式，也让世界杯更像一个跨城市网络。"
      },
      premier: {
        title: "真实体现：1992 英超成立",
        body: "英超成立后，电视转播合同、商业包装和俱乐部品牌化被推到更高优先级。联赛不只是赛程表，也成为媒体产品和全球球迷入口。"
      },
      memberClubs: {
        title: "真实体现：皇马、巴萨的会员制",
        body: "皇马和巴萨常被放在一起讨论，不只是因为国家德比，也因为它们长期保留会员制结构。会员可以参与主席选举，俱乐部身份和地方政治、城市文化、商业品牌绑定得很深。它和英超常见的私人老板模式不同：俱乐部当然也追求收入和巨星，但所有权叙事更强调会员、历史和身份共同体。"
      },
      moneyFootball2003: {
        title: "真实体现：Abramovich 收购 Chelsea",
        body: "2003 年，Roman Abramovich 收购切尔西并投入巨额资金引援，切尔西很快从英超强队变成欧洲顶级豪门竞争者。这个节点常被视为现代“金元足球”的标志之一：老板资本、转会市场、工资结构和欧冠竞争被重新拉到更高强度。后来曼城、巴黎圣日耳曼等案例继续放大了这个问题。"
      },
      ffp2010: {
        title: "真实体现：UEFA 财政公平政策",
        body: "UEFA 在 2010 年代初推动财政公平政策，核心目标是让俱乐部在欧战资格、收入、支出和亏损控制之间建立约束。它不是简单禁止花钱，而是试图让俱乐部不能长期依赖无限注资维持竞争。后来 FFP 也不断引发争议：它到底保护了财务健康，还是保护了既有豪门的收入优势？"
      },
      saudiGold2023: {
        title: "真实体现：2023 沙特职业联赛引援潮",
        body: "Cristiano Ronaldo 在 2022 年底加盟利雅得胜利后，2023 年沙特职业联赛继续吸引 Benzema、Neymar、Kante、Mahrez 等国际球星。它把全球转会市场的注意力从欧洲五大联赛部分转移到海湾地区，也让薪资、国家投资、体育外交和联赛品牌化成为同一个问题。"
      },
      megaStadiums: {
        title: "真实体现：新伯纳乌式球场收入",
        body: "现代豪门球场越来越像全年运营的商业综合体。以伯纳乌改造为例，比赛日收入只是其中一部分，演唱会、博物馆、餐饮、商业包厢、冠名合作和城市旅游都被整合进俱乐部收入模型。大型球场不再只是“容纳更多观众”，而是扩大非比赛日收入和全球品牌体验。"
      },
      footballAgents: {
        title: "真实体现：从转会中介到职业规划者",
        body: "博斯曼判决之后，欧洲球员流动和合同谈判变得更复杂，经纪人的角色也逐渐制度化。顶级经纪人不只是把球员卖给俱乐部，还会参与续约、解约金、签字费、佣金、肖像权、赞助和媒体策略。Mino Raiola、Jorge Mendes 等人的案例让球迷意识到：现代球员背后往往有一整套商业谈判团队。"
      },
      imageRights: {
        title: "真实体现：球星从运动员到个人品牌",
        body: "球员肖像权让姓名、脸、签名、庆祝动作和社媒形象都可能成为商业资产。Beckham、Cristiano Ronaldo、Messi 等球星都显示了这个变化：他们不只为俱乐部踢球，也通过广告、授权、个人品牌和社交平台产生收入。现代合同谈判常常会把工资、奖金和肖像权分开处理。"
      },
      messiRonaldoFans: {
        title: "真实体现：梅西与 C 罗的双峰时代",
        body: "2009 年以后，梅西和 C 罗长期分别代表巴萨/阿根廷与皇马/葡萄牙的最高个人竞争。金球奖、欧冠、国家队冠军、社媒数据和游戏评分不断把二人的比较推向全球。很多年轻球迷先成为“梅西粉”或“C 罗粉”，再选择俱乐部身份，这让足球粉丝结构从本地俱乐部忠诚扩展到个人球星追随。"
      },
      southAmericaSocios: {
        title: "真实体现：博卡、河床与 socios",
        body: "南美俱乐部文化里，socios 会员、看台组织、城市身份和德比传统常常绑得很紧。博卡青年和河床的超级德比不只是比赛，也包含阶层想象、城市空间、会员身份和看台仪式。它说明会员制并非只有皇马、巴萨式欧洲豪门版本，南美俱乐部也有强烈的共同体治理和身份表达。"
      },
      games: {
        title: "真实体现：FIFA International Soccer 到授权足球游戏",
        body: "EA Sports 在 1993 年推出 FIFA International Soccer，随后系列不断强化国家队、俱乐部、球员授权和真实球场呈现。对许多年轻球迷来说，游戏里的阵型、数值和球队名单是认识世界足球的入口；这条线更接近转播、授权和联赛品牌化，而不是球员转会法律。"
      },
      bosman: {
        title: "真实体现：Jean-Marc Bosman 案",
        body: "比利时球员 Jean-Marc Bosman 的诉讼最终在 1995 年由欧洲法院作出判决。判决确认欧盟范围内合同到期球员可以自由转会，并影响外籍球员限制。它改变了欧洲俱乐部的人才流动、工资谈判和豪门囤积球员的能力。"
      },
      uefaNationsLeague: {
        title: "真实体现：2018-19 首届欧国联",
        body: "欧国联从 2018 年开始，把欧洲国家队按级别分组，加入升降级和决赛阶段，减少无目标友谊赛的比例。葡萄牙赢得首届赛事冠军。它说明现代足球商业化不只发生在俱乐部，国家队比赛日也被重新包装成有积分、悬念和转播价值的赛事。"
      },
      data: {
        title: "真实体现：足球数据科学",
        body: "2010 年代以后，事件数据、追踪数据、可穿戴设备和统计模型进入俱乐部日常。球探不再只看进球和助攻，也会看射门质量、跑动结构、压迫效果和负荷管理。"
      },
      womens: {
        title: "真实体现：女足世界杯",
        body: "女足世界杯把女性足球放进全球赛事结构中。它推动了职业化、转播曝光、薪酬公平和青训资源讨论，不只是男子世界杯的复制品。"
      },
      munich1958: {
        title: "真实体现：1958 慕尼黑空难",
        body: "1958 年 2 月 6 日，载有曼联队员、工作人员和记者的飞机在慕尼黑起飞失败。事故造成多名“巴斯比宝贝”遇难，也让欧洲俱乐部赛事、球队出行风险和俱乐部集体记忆成为足球史的一部分。"
      },
      hooliganism: {
        title: "真实体现：英欧球场暴力治理",
        body: "20 世纪 70 至 80 年代，球场暴力、极端球迷组织和跨境冲突让英欧足球进入高压治理阶段。安保、隔离、票务、座席化和警务协作逐步成为现代赛事组织的一部分。"
      },
      maradona1986: {
        title: "真实体现：1986 阿根廷对英格兰",
        body: "1986 年世界杯四分之一决赛，马拉多纳对英格兰打进“上帝之手”和连过五人的进球。比赛发生在福克兰/马岛战争后不久，因此被许多阿根廷球迷赋予超出体育本身的民族情绪。"
      },
      womenban: {
        title: "真实体现：1921 年英足总禁令",
        body: "1921 年 12 月 5 日，英足总禁止女子球队使用其会员俱乐部管理的球场。禁令出现前，英格兰女足曾在一战后通过慈善赛吸引大量观众；其中 Dick, Kerr Ladies 与 St Helens Ladies 在 Goodison Park 的比赛被广泛记为早期女足高关注度的象征。禁令直到 1971 年才解除，长期影响了女足的场地、资源和公众能见度。"
      },
      professionalism1885: {
        title: "真实体现：1885 年职业化被承认",
        body: "19 世纪 80 年代，英格兰北部工业城市俱乐部已经在事实上向球员付薪。1885 年英足总承认受限职业化后，球员不再只是业余绅士运动员，俱乐部也必须面对工资、合同、赛程和收入问题。随后 1888 年英格兰足球联赛成立，稳定主客场赛程让职业俱乐部有了更可持续的经营结构。"
      },
      goalnets1891: {
        title: "真实体现：球门网减少进球争议",
        body: "早期足球只有门柱和横梁时，快速射门是否真正穿过球门并不总是容易判断。1890 年代球门网开始被采用后，球停在网内形成更直观证据，裁判、球员和观众都能更快确认进球。它看似只是装备细节，却让比赛结果的可验证性提高了一步。"
      },
      laMasia1979: {
        title: "真实体现：巴萨风格型青训",
        body: "La Masia 原本是诺坎普附近的旧农舍，1979 年被巴萨用作青年球员住宿和培养空间。它后来与哈维、伊涅斯塔、梅西、布斯克茨等球员的成长联系在一起，也让“俱乐部风格可以从青训阶段开始塑造”成为大众能看懂的案例。"
      },
      clairefontaine1988: {
        title: "真实体现：法国国家级精英培养",
        body: "法国足协的 Clairefontaine 国家足球中心在 1988 年投入使用。它把少年精英训练、教育和国家队长期规划放在同一体系下，后来亨利、阿内尔卡、姆巴佩等法国球员都常被放进这个青训叙事中讨论。它说明现代青训不只是俱乐部买人前的准备，而是国家足球体系的一部分。"
      },
      taylorReport1990: {
        title: "真实体现：希尔斯堡之后的球场重建",
        body: "1989 年希尔斯堡惨案造成 97 名利物浦球迷遇难。Taylor Report 在 1990 年发表最终报告，推动英格兰顶级球场走向全坐席化，并促使球场安全、拥挤管理、票务和警务方式被重新审视。它改变了英格兰看球体验，也间接塑造了英超时代更家庭化、更商业化的球场环境。"
      },
      hydration2026: {
        title: "真实体现：2026 世界杯补水时间",
        body: "2026 年世界杯将在北美多城市举办，炎热天气、跨城赛程和球员负荷都更受关注。补水时间让比赛管理从单纯计时，扩展到健康保护、转播节奏和补时计算的共同设计。"
      }
    };

    function exampleFor(node) {
      return nodeExamples[node.id] || {
        title: "事件说明",
        body: `${node.year} 年前后，${node.title}出现在足球发展的关键变化中。它涉及${eventTypeFor(node)}层面的调整：可能是规则执行方式、球队比赛方法、赛事组织结构，或足球与社会文化关系的变化。具体影响可结合下方前因和后续事件理解。`
      };
    }

    const nodeFactOverrides = {
      cambridge: { actor: "剑桥大学学生规则文本", place: "英国剑桥" },
      sheffield: { actor: "Sheffield FC", place: "英国谢菲尔德" },
      rules1863: { actor: "英格兰足球总会（FA）", place: "伦敦" },
      facup: { actor: "Charles W. Alcock 与英足总", place: "英格兰" },
      professionalism1885: { actor: "英格兰足球总会（FA）与职业俱乐部", place: "英格兰" },
      goalnets1891: { actor: "John Brodie 与早期规则执行者", place: "英国" },
      memberClubs: { actor: "Real Madrid、FC Barcelona 与会员大会/主席选举制度", place: "马德里 / 巴塞罗那" },
      ifab: { actor: "IFAB", place: "英国四协会体系" },
      fifa1904: { actor: "FIFA 创始成员协会", place: "巴黎" },
      worldcup: { actor: "FIFA / Jules Rimet", place: "乌拉圭" },
      wm: { actor: "Herbert Chapman 与阿森纳", place: "英格兰" },
      munich1958: { actor: "Manchester United / 欧洲俱乐部赛事出行体系", place: "德国慕尼黑" },
      hooliganism: { actor: "球迷组织、俱乐部、警务与赛事管理机构", place: "英国与欧洲球场" },
      maradona1986: { actor: "Diego Maradona 与阿根廷国家队", place: "1986 墨西哥世界杯" },
      dickkerr: { actor: "Dick, Kerr Ladies 与英格兰女子慈善赛", place: "英格兰普雷斯顿 / Goodison Park" },
      total: { actor: "Rinus Michels、Ajax 与荷兰队", place: "荷兰" },
      ajaxschool: { actor: "Ajax 与荷兰青训体系", place: "阿姆斯特丹" },
      sacchi: { actor: "Arrigo Sacchi 与 AC Milan", place: "意大利" },
      tikitaka: { actor: "Barcelona、西班牙国家队与 Guardiola 体系", place: "西班牙" },
      tacticalPeriodization: { actor: "Vítor Frade、José Mourinho 与葡萄牙教练体系", place: "葡萄牙 / 欧洲俱乐部训练场" },
      positionalPlay: { actor: "Pep Guardiola、Barcelona、Bayern Munich 与 Manchester City", place: "西班牙 / 德国 / 英格兰" },
      gegenpress: { actor: "Jürgen Klopp 的多特蒙德与利物浦", place: "德国 / 英格兰" },
      laMasia1979: { actor: "FC Barcelona", place: "巴塞罗那" },
      clairefontaine1988: { actor: "法国足球总会（FFF）", place: "Clairefontaine-en-Yvelines" },
      var: { actor: "IFAB / FIFA", place: "2018 俄罗斯世界杯" },
      saot: { actor: "FIFA 与比赛技术团队", place: "2022 卡塔尔世界杯" },
      hydration2026: { actor: "FIFA 与赛事医疗/竞赛管理体系", place: "2026 北美世界杯周期", source: "公开报道与赛事筹备信息" },
      worldcup48: { actor: "FIFA Council", place: "2026 美国、加拿大、墨西哥世界杯" },
      womens: { actor: "FIFA 与各成员协会", place: "首届女足世界杯" },
      womenban: { actor: "英格兰足球总会（FA）", place: "英格兰会员俱乐部球场" },
      taylorReport1990: { actor: "Lord Justice Taylor、英国政府与足球管理机构", place: "英格兰" },
      equalpay: { actor: "美国女足、各国球员工会与足协谈判", place: "国际女足职业化语境" },
      ultras: { actor: "意大利与欧洲有组织球迷群体", place: "米兰南看台等主场看台" },
      games: { actor: "EA Sports、FIFA 授权体系与俱乐部/球员授权方", place: "全球游戏市场" },
      bosman: { actor: "Jean-Marc Bosman 与欧洲法院", place: "欧盟足球劳动力市场" },
      moneyFootball2003: { actor: "Roman Abramovich 与 Chelsea FC", place: "伦敦 / 欧洲转会市场" },
      ffp2010: { actor: "UEFA", place: "欧洲俱乐部赛事准入体系" },
      saudiGold2023: { actor: "Saudi Pro League、PIF 相关俱乐部与国际球星", place: "沙特阿拉伯 / 全球转会市场" },
      megaStadiums: { actor: "Real Madrid 等现代豪门俱乐部", place: "伯纳乌、温布利等大型球场" },
      footballAgents: { actor: "FIFA、球员经纪人、俱乐部与球员团队", place: "全球转会市场" },
      imageRights: { actor: "顶级球员、经纪团队、俱乐部与赞助商", place: "合同谈判与商业授权市场" },
      messiRonaldoFans: { actor: "Lionel Messi、Cristiano Ronaldo、俱乐部媒体与全球球迷社群", place: "巴萨/皇马、国家队与全球社媒平台" },
      southAmericaSocios: { actor: "Boca Juniors、River Plate 与 socios 会员", place: "布宜诺斯艾利斯" },
      uefaNationsLeague: { actor: "UEFA", place: "欧洲国家队比赛日" }
    };

    const nodeSources = {
      rules1863: {
        note: "1863 年英足总成立并推动规则统一，是协会足球从地方规则走向现代制度的关键节点。",
        sources: [
          ["IFAB：Laws of the Game 历史", "https://www.theifab.com/history/"],
          ["The Football Association：历史", "https://www.thefa.com/about-football-association/what-we-do/history"]
        ]
      },
      facup: {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/FA_Cup.jpg/640px-FA_Cup.jpg",
        imageCredit: "Wikimedia Commons：FA Cup",
        imageLicense: "开放授权图片，来自 Wikimedia Commons；使用时请以原页面许可为准。",
        note: "足总杯把统一规则变成全国淘汰赛，也让俱乐部身份、爆冷叙事和媒体报道开始集中到具体赛事。",
        details: "1871-72 赛季的足总杯把原本分散的俱乐部比赛放进同一套淘汰赛结构。它让“全国冠军”“杯赛爆冷”“决赛日”这些后来非常熟悉的足球叙事有了制度基础。",
        impact: "杯赛证明统一规则可以支撑跨俱乐部竞争，之后职业化、联赛制和媒体报道都更容易围绕固定赛事组织。",
        sources: [["The FA：FA Cup 历史", "https://www.thefa.com/competitions/thefacup/history"]]
      },
      professionalism1885: {
        note: "1885 年英足总承认职业球员，使付薪从争议行为进入制度管理；这为之后职业联赛和俱乐部经营打下基础。",
        sources: [
          ["The FA：Football Association history", "https://www.thefa.com/about-football-association/what-we-do/history"],
          ["English Football League：history", "https://www.efl.com/clubs-and-competitions/efl-history/"]
        ]
      },
      goalnets1891: {
        note: "球门网通常与 1890 年代早期的 John Brodie 发明和英格兰比赛采用相连，它让进球判定更直观。",
        sources: [["National Football Museum：football history collections", "https://www.nationalfootballmuseum.com/"]]
      },
      worldcup: {
        image: "https://upload.wikimedia.org/wikipedia/commons/4/42/Uruguay_1930_World_Cup.jpg",
        imageCredit: "Wikimedia Commons：1930 FIFA World Cup poster",
        imageLicense: "开放授权/公版资料图，来自 Wikimedia Commons；请以原文件页许可为准。",
        note: "1930 年首届世界杯在乌拉圭举行，国家队足球第一次被组织成全球冠军赛事。",
        details: "世界杯的意义不是“多办了一个杯赛”，而是 FIFA 把国家队比赛从奥运会语境中独立出来，建立了一套世界冠军制度。乌拉圭的奥运成绩、建国百年庆典和球场建设能力共同构成了首届主办背景。",
        impact: "世界杯让国家队、国旗、球星和全球媒体绑定在一起，后来电视转播、球星外交、国家记忆和扩军争议都围绕这个舞台展开。",
        sources: [["FIFA：1930 Uruguay", "https://www.fifa.com/en/tournaments/mens/worldcup/1930uruguay"]]
      },
      wm: {
        note: "WM 阵型通常与 1925 年越位规则变化后的英格兰实践相连，Herbert Chapman 的阿森纳是最常被引用的案例。",
        sources: [["Jonathan Wilson：Inverting the Pyramid", "https://www.worldcat.org/title/181139526"]]
      },
      total: {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Koppen_Nederlandse_voetballers_Rinus_Michels%2C_Bestanddeelnr_254-9536_2.jpg/640px-Koppen_Nederlandse_voetballers_Rinus_Michels%2C_Bestanddeelnr_254-9536_2.jpg",
        imageCredit: "Wikimedia Commons：Rinus Michels",
        imageLicense: "开放授权图片，来自 Wikimedia Commons；请以原文件页许可为准。",
        note: "全攻全守不是单一阵型，而是一套位置互换、整体压迫和空间占领的比赛观，Ajax 与 1974 荷兰队是代表案例。",
        details: "Rinus Michels、Cruyff 以及 Ajax/荷兰队让球员位置不再只是静态标签。边锋、前锋、中场和后卫可以在体系中互换空间，前提是全队理解共同的站位、补位和压迫原则。",
        impact: "它影响了后来的高位逼抢、位置足球和青训体系，也让现代足球越来越强调球员对空间的理解。",
        sources: [["FIFA：1974 World Cup 历史", "https://www.fifa.com/en/tournaments/mens/worldcup/1974germany"]]
      },
      ajaxschool: {
        note: "阿贾克斯青训把俱乐部风格、球员教育和一线队输送结合起来，是现代俱乐部青训体系的重要样本。",
        sources: [["Ajax：youth academy", "https://english.ajax.nl/teams/ajax-youth/"]]
      },
      sacchi: {
        image: "https://upload.wikimedia.org/wikipedia/commons/5/58/Arrigo_Sacchi_2007_%28cropped%29.jpg",
        imageCredit: "Wikimedia Commons：Arrigo Sacchi",
        note: "萨基的 AC 米兰把高防线、区域防守和整体移动做成系统，影响了后来对压迫和防守距离的理解。",
        sources: [["UEFA：Arrigo Sacchi 相关档案", "https://www.uefa.com/"]]
      },
      tacticalPeriodization: {
        note: "战术周期化强调训练围绕比赛模型组织，把体能、技术、战术和心理放在具体比赛情境中共同训练。",
        sources: [["WorldCat：Tactical Periodization / Vítor Frade related works", "https://www.worldcat.org/"]]
      },
      positionalPlay: {
        note: "位置足球强调在固定空间结构中创造传球线路、第三人接应和局部人数优势，Guardiola 的巴萨、拜仁和曼城是大众最熟悉的案例。",
        sources: [["FC Barcelona：Pep Guardiola era", "https://www.fcbarcelona.com/en/club/history"]]
      },
      var: {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Colo-Colo_v_Palestino_20200128_03.jpg/640px-Colo-Colo_v_Palestino_20200128_03.jpg",
        imageCredit: "Wikimedia Commons：VAR review",
        note: "VAR 改变的是判罚流程：关键事件从主裁瞬时判断，变成主裁、视频助理和回看协议共同参与的流程。",
        sources: [["IFAB：VAR Protocol", "https://www.theifab.com/laws/latest/video-assistant-referee-var-protocol/"]]
      },
      goalline: {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Goalcontrol.svg/640px-Goalcontrol.svg.png",
        imageCredit: "Wikimedia Commons：GoalControl diagram",
        note: "门线技术把“球是否整体越过球门线”从争议判断变成技术判定，是足球判罚技术化的重要前站。",
        details: "门线技术使用摄像机或传感系统判断足球是否整体越过球门线，并把结果快速反馈给裁判。它处理的是足球里最二元的问题：进了还是没进。正因为问题边界清楚，它比 VAR 更容易被球迷接受。",
        impact: "门线技术降低了足球接受判罚技术的心理门槛。后来 VAR、半自动越位和联网比赛用球都延续了同一个方向：让关键判罚拥有可追溯证据。",
        sources: [["FIFA：Goal-line technology", "https://www.fifa.com/technical/football-technology/standards/goal-line-technology"]]
      },
      saot: {
        note: "半自动越位技术结合球员追踪和传感器数据，用来更快生成越位判定和可视化解释。",
        sources: [["FIFA：Semi-automated offside technology", "https://www.fifa.com/technical/football-technology/standards/semi-automated-offside-technology"]]
      },
      telstar: {
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Telstar_Durlast.jpg",
        imageCredit: "Wikimedia Commons：Adidas Telstar",
        imageLicense: "开放授权图片，来自 Wikimedia Commons；请以原文件页许可为准。",
        note: "Telstar 的黑白块设计适应电视转播识别，也让世界杯用球成为可被记住和销售的赛事符号。",
        details: "1970 年世界杯的 Telstar 用黑白块强化电视画面里的球体辨识度。它连接了装备设计、电视媒介和世界杯商品化：球不只是比赛工具，也开始成为赛事视觉资产。",
        impact: "世界杯用球、球衣和授权商品后来都成为赛事商业的一部分，足球符号被不断复制到游戏、收藏和广告中。",
        sources: [["FIFA Museum：World Cup balls", "https://www.fifamuseum.com/"]]
      },
      premier: {
        note: "1992 年英超成立后，顶级联赛的电视合同、商业包装和全球分发能力成为俱乐部竞争结构的一部分。",
        details: "英超成立的关键，是英格兰顶级俱乐部把电视转播、联赛包装和商业谈判放到新组织框架下。它让联赛本身成为全球媒体产品，而不只是国内赛程表。",
        impact: "转播收入、赞助、海外观众和品牌运营共同推高俱乐部估值，也为金元足球和授权足球游戏提供了商业土壤。",
        sources: [["Premier League：History", "https://www.premierleague.com/history"]]
      },
      memberClubs: {
        note: "皇马、巴萨等会员制俱乐部展示了不同于私人老板的所有权结构：会员身份、主席选举、城市政治和俱乐部商业品牌交织在一起。",
        details: "会员制并不意味着俱乐部远离商业。相反，皇马和巴萨都是全球商业巨头，但它们的合法性叙事常常来自会员、历史和地方身份。主席选举、财政承诺、球星引援和俱乐部路线会进入会员政治。",
        impact: "这类结构帮助理解国家德比、欧超争议、球迷身份和俱乐部债务问题：商业选择往往同时也是身份政治。",
        sources: [
          ["Real Madrid：club history", "https://www.realmadrid.com/en-US/the-club/history"],
          ["FC Barcelona：club history", "https://www.fcbarcelona.com/en/club/history"]
        ]
      },
      bosman: {
        note: "博斯曼案改变了欧盟范围内合同到期球员的自由流动和外籍球员限制，深刻影响转会市场。",
        sources: [["Court of Justice of the EU：Bosman case", "https://curia.europa.eu/"]]
      },
      games: {
        note: "EA Sports FIFA 系列把联赛授权、球员数值和球队阵型变成可互动内容，扩大了年轻球迷理解足球的入口。",
        details: "足球电子游戏把球员、队徽、球衣、联赛和阵型做成可操作的数据库。它让很多人先通过数值、阵容和手柄理解足球，再回到真实比赛。",
        impact: "游戏强化了球员能力数值化、授权商业和年轻球迷入口，也让战术和转会讨论更容易被普通玩家参与。",
        sources: [["EA Sports FC：official site", "https://www.ea.com/games/ea-sports-fc"]]
      },
      championsleague: {
        note: "欧冠改制把欧洲冠军杯从纯淘汰冠军叙事，推向更稳定、更商业化的俱乐部赛事体系。",
        sources: [["UEFA Champions League：History", "https://www.uefa.com/uefachampionsleague/history/"]]
      },
      uefaNationsLeague: {
        note: "欧国联把欧洲国家队友谊赛窗口改造成带有分级、升降级和决赛阶段的正式赛事产品。",
        details: "欧国联从 2018 年开始运行，把国家队按级别分组，通过升降级、半决赛和决赛提高比赛意义。它的目标之一，就是减少缺乏竞争目标的友谊赛。",
        impact: "国家队比赛日被重新包装为可销售、可积分、可制造悬念的赛事产品，说明商业化不只属于俱乐部足球。",
        sources: [["UEFA Nations League：official", "https://www.uefa.com/uefanationsleague/"]]
      },
      moneyFootball2003: {
        note: "2003 年 Abramovich 收购切尔西，是现代欧洲足球资本加速阶段的醒目标志之一。",
        details: "切尔西在 Abramovich 入主后迅速提高转会投入和工资竞争力，Mourinho 时代的英超冠军和欧冠竞争让这种模式获得竞技回报。它不等于足球第一次有富豪老板，但它让欧洲豪门竞争的资金门槛明显上移。",
        impact: "之后曼城、巴黎圣日耳曼、国家资本俱乐部和财政公平政策争议，都可以放在这条线里理解。",
        sources: [
          ["Chelsea FC：club history", "https://www.chelseafc.com/en/history"],
          ["Premier League：history", "https://www.premierleague.com/history"]
        ]
      },
      ffp2010: {
        note: "财政公平政策把欧战准入、俱乐部收入、亏损和可持续经营放进同一套监管框架。",
        details: "FFP 的背景是欧洲俱乐部债务和持续亏损问题。UEFA 试图通过许可制度和财务监管，要求参加欧战的俱乐部证明自己有更可持续的经营基础。它后来演化为更复杂的俱乐部财务可持续规则。",
        impact: "FFP 让俱乐部必须更重视商业收入、赞助和球员交易平衡，也引发了“监管是否保护既有豪门”的长期争议。",
        sources: [["UEFA：club licensing and financial sustainability", "https://www.uefa.com/running-competitions/club-licensing/"]]
      },
      saudiGold2023: {
        note: "2023 年沙特职业联赛通过高薪与国家资本背景吸引大量国际球星，成为全球转会市场的重要变量。",
        details: "Ronaldo、Benzema、Neymar、Kante、Mahrez 等球星的转会让沙特职业联赛获得全球可见度。它不是普通外援潮，而是联赛品牌、国家战略、体育投资和国际转播注意力共同作用的结果。",
        impact: "沙特金元改变了老将流动路径、欧洲俱乐部出售球员的谈判空间，也让“体育外交”和联赛全球化被更多球迷讨论。",
        sources: [
          ["Saudi Pro League：official", "https://www.spl.com.sa/"],
          ["FIFA：players and transfer context", "https://www.fifa.com/"]
        ]
      },
      megaStadiums: {
        note: "现代大型球场被设计成全年商业平台，比赛日收入只是其中一部分。",
        details: "伯纳乌、温布利、热刺球场等现代场馆都显示了同一趋势：球场可以承接比赛、演唱会、企业活动、博物馆参观、餐饮和贵宾包厢。对豪门来说，球场是现金流、品牌体验和城市旅游的一部分。",
        impact: "大型球场商业化让俱乐部收入结构更稳定，也把城市开发、票价、球迷体验和商业赞助放进同一个问题。",
        sources: [
          ["Real Madrid：Santiago Bernabeu", "https://www.realmadrid.com/en-US/bernabeu-stadium"],
          ["Tottenham Hotspur Stadium", "https://www.tottenhamhotspur.com/the-stadium/"]
        ]
      },
      footballAgents: {
        note: "现代足球经纪人把球员流动、合同谈判和个人品牌经营连接起来，是转会市场的关键角色。",
        details: "博斯曼判决提升了球员合同到期后的自由流动能力，转会费和工资上涨又让谈判更复杂。经纪人制度在 2000 年代进一步规范化，顶级经纪人会同时处理转会、续约、解约金、签字费、佣金、赞助和媒体策略。",
        impact: "经纪人提高了球员议价能力，也让俱乐部转会成本、佣金透明度和监管问题更受关注。",
        sources: [["FIFA：Football Agent Regulations", "https://www.fifa.com/legal/football-regulatory/agents"]]
      },
      imageRights: {
        note: "球员肖像权把姓名、形象、庆祝动作和社媒影响力变成可谈判的商业资产。",
        details: "现代球星合同往往不只谈工资和奖金，还涉及肖像权、广告合作、游戏授权和个人品牌。Beckham、Cristiano Ronaldo、Messi 等球员让“球员即媒体品牌”的逻辑变得清晰。",
        impact: "肖像权商业化改变了俱乐部、赞助商和球员之间的收入分配，也强化了超级球星对俱乐部商业价值的影响。",
        sources: [
          ["FIFA：commercial and player status resources", "https://www.fifa.com/legal"],
          ["EA Sports FC：player likeness licensing context", "https://www.ea.com/games/ea-sports-fc"]
        ]
      },
      messiRonaldoFans: {
        note: "梅西与 C 罗的长期竞争让球星个人粉丝身份被全球化、社媒化和数据化。",
        details: "梅罗时代不只是两个球员很强，而是个人荣誉、俱乐部竞争、国家队叙事、广告代言、游戏评分和社媒传播持续叠加。球迷开始围绕个人球星建立长期身份，甚至在球员转会后跟随球星迁移关注对象。",
        impact: "它改变了球迷身份结构：俱乐部忠诚仍然重要，但个人球星粉丝、社媒争论和跨俱乐部追随成为现代足球传播的重要组成。",
        sources: [
          ["FIFA：Lionel Messi profile", "https://www.fifa.com/"],
          ["FIFA：Cristiano Ronaldo profile", "https://www.fifa.com/"],
          ["Ballon d'Or official", "https://www.francefootball.fr/ballon-d-or/"]
        ]
      },
      southAmericaSocios: {
        note: "博卡、河床等南美俱乐部的 socios 文化把会员身份、德比、看台和城市归属绑在一起。",
        details: "南美会员文化比“买季票”更重。俱乐部会员身份常常连接家庭传承、社区归属、主席选举和看台仪式。博卡与河床的超级德比把这些情绪集中放大。",
        impact: "它帮助理解为什么南美俱乐部常被视作城市共同体，而不仅是商业公司；也能和皇马、巴萨的会员制形成对照。",
        sources: [
          ["Boca Juniors：socios", "https://www.bocajuniors.com.ar/"],
          ["River Plate：socios", "https://www.cariverplate.com.ar/"],
          ["CONMEBOL：club football", "https://www.conmebol.com/"]
        ]
      },
      data: {
        note: "足球数据科学把事件数据、追踪数据、可穿戴设备和统计模型合并到俱乐部决策中，影响球探、训练、医疗、转会和战术复盘。",
        sources: [
          ["StatsBomb：football analytics education", "https://statsbomb.com/"],
          ["Opta Analyst：football data analysis", "https://theanalyst.com/"]
        ]
      },
      laMasia1979: {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/La_Masia_de_Can_Planes.jpg/640px-La_Masia_de_Can_Planes.jpg",
        imageCredit: "Wikimedia Commons：La Masia de Can Planes",
        note: "La Masia 把巴萨青训、住宿、教育和一线队风格想象连接起来，是俱乐部风格型青训最著名的案例之一。",
        sources: [["FC Barcelona：La Masia / club history", "https://www.fcbarcelona.com/en/club/history"]]
      },
      clairefontaine1988: {
        note: "Clairefontaine 国家足球中心把精英训练、教育和国家队长期规划连接起来，是法国现代足球体系的重要基础设施。",
        sources: [["FFF：Centre National du Football", "https://www.fff.fr/"]]
      },
      munich1958: {
        note: "慕尼黑空难不仅是曼联历史事件，也让欧洲俱乐部赛事中的旅行、风险和集体记忆进入足球公共叙事。",
        sources: [["Manchester United：Munich Air Disaster", "https://www.manutd.com/en/history/munich-air-disaster"]]
      },
      hooliganism: {
        note: "足球流氓问题推动现代球场安保、隔离看台、票务实名化、国际警务协作和全坐席球场等治理方式形成。",
        sources: [
          ["UK Government：Taylor Report archive", "https://www.gov.uk/"],
          ["UEFA：Stadium safety and security", "https://www.uefa.com/"]
        ]
      },
      ultras: {
        note: "Ultras 文化强调有组织看台、歌曲、旗帜、Tifo 和远征文化；米兰南看台是意大利俱乐部看台文化的代表案例之一。",
        sources: [["AC Milan：San Siro / fans official context", "https://www.acmilan.com/"]]
      },
      maradona1986: {
        note: "1986 年阿根廷对英格兰一战把马拉多纳的个人表演、世界杯叙事和英阿战争后的民族记忆结合在一起。",
        sources: [["FIFA：1986 Mexico World Cup", "https://www.fifa.com/en/tournaments/mens/worldcup/1986mexico"]]
      },
      dickkerr: {
        note: "Dick, Kerr Ladies 是英格兰早期女足最重要的球队之一。她们的大型慈善赛说明女足在禁令前已经拥有可观公众影响。",
        sources: [
          ["National Football Museum：women's football history", "https://www.nationalfootballmuseum.com/"],
          ["The FA：women's football history", "https://www.thefa.com/womens-girls-football/history"]
        ]
      },
      taylorReport1990: {
        note: "Taylor Report 是希尔斯堡惨案后的官方调查报告，最终推动英格兰顶级球场全坐席化，并重塑球场安全与观赛基础设施。",
        sources: [
          ["UK Government：Hillsborough / Taylor Report archive", "https://www.gov.uk/"],
          ["Football Supporters' Association：Hillsborough and stadium safety", "https://thefsa.org.uk/"]
        ]
      },
      womens: {
        note: "1991 年女足世界杯使女子国家队足球进入 FIFA 世界杯体系，是女足国际化和职业化的重要起点。",
        sources: [["FIFA：Women's World Cup", "https://www.fifa.com/en/tournaments/womens/womensworldcup"]]
      },
      womenban: {
        note: "1921 年英足总要求其会员俱乐部不得让女子球队使用所属球场，切断了当时英格兰女足最重要的比赛空间。这个禁令持续到 1971 年，成为理解女足发展断层的重要事件。",
        sources: [
          ["National Football Museum：women's football history", "https://www.nationalfootballmuseum.com/"],
          ["BBC：the FA ban on women's football", "https://www.bbc.com/"]
        ]
      },
      uswnt1999: {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Logo_1999_FIFA_Women%27s_World_Cup.svg/640px-Logo_1999_FIFA_Women%27s_World_Cup.svg.png",
        imageCredit: "Wikimedia Commons：1999 FIFA Women's World Cup logo",
        note: "1999 年女足世界杯在美国形成大众传播峰值，成为女足商业化和性别平等讨论的重要样本。",
        sources: [["FIFA：1999 Women's World Cup", "https://www.fifa.com/en/tournaments/womens/womensworldcup/usa1999"]]
      },
      worldcup48: {
        note: "2026 年世界杯扩至 48 队，会改变参赛机会、赛制结构、比赛总量和主办城市网络。",
        sources: [["FIFA：Canada Mexico USA 2026", "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026"]]
      },
      hydration2026: {
        note: "2026 补水时间应被理解为气候、健康和比赛时间管理共同进入世界杯规则执行的节点；具体执行细节以后续官方竞赛规程为准。",
        sources: [
          ["AP：2026 World Cup hydration breaks 报道", "https://apnews.com/"],
          ["FIFA：2026 World Cup", "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026"]
        ]
      }
    };

    function factActorFor(node) {
      if (nodeFactOverrides[node.id]?.actor) return nodeFactOverrides[node.id].actor;
      if (node.branch === "规则科技") return "IFAB、FIFA、各国足协或赛事组织者";
      if (node.branch === "战术角色") return "代表性教练、俱乐部与国家队实践";
      if (node.branch === "赛事商业") return "FIFA、洲际足联、联赛与俱乐部组织";
      return "球员、球迷、媒体与公共机构共同推动";
    }

    function factPlaceFor(node) {
      if (nodeFactOverrides[node.id]?.place) return nodeFactOverrides[node.id].place;
      if (node.branch === "战术角色") return "代表球队与比赛实践";
      if (node.branch === "规则科技") return "正式规则或赛事执行场景";
      if (node.branch === "赛事商业") return "赛事组织与转播市场";
      return "看台、媒体与社会公共空间";
    }

    function eventTypeFor(node) {
      if (node.branch === "规则科技") return "规则 / 技术";
      if (node.branch === "战术角色") return "战术 / 角色";
      if (node.branch === "赛事商业") return "赛事 / 组织";
      return "文化 / 社会议题";
    }

    function sourceInfoFor(node) {
      return nodeSources[node.id] || {};
    }

    function branchHeaderFor(branch) {
      return {
        "规则科技": "assets/header-rules.jpg",
        "战术角色": "assets/header-tactics.jpg",
        "赛事商业": "assets/header-business.jpg",
        "文化社会": "assets/header-culture.jpg"
      }[branch] || "assets/header-culture.jpg";
    }

    function branchHeaderCaptionFor(branch) {
      return `${branch}分支插画｜AI 生成，本地项目资产`;
    }

    function archiveImageCaptionFor(sourceInfo) {
      const credit = sourceInfo.imageCredit || "历史资料图";
      const license = sourceInfo.imageLicense || "资料图授权请以原来源页面为准。";
      return [credit, license].filter(Boolean).join("｜");
    }

