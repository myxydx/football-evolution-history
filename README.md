# 足球进化史

一个可交互的足球历史科技树雏形。

它把现代足球的发展拆成四条分支：规则科技、战术角色、赛事商业、文化社会。用户可以从早期规则和俱乐部足球开始，像研发科技一样逐步点亮节点，理解足球如何从地方游戏演化成今天的全球运动、商业产业和文化现场。

## 玩法

- 在研发模式中点击「可研」节点，逐步解锁后续内容。
- 点击任意已出现卡片，可以在右侧 wiki 查看详细介绍、真实案例、前因后续和来源。
- 使用长时间轴模式，可以按年份浏览全部历史节点。
- 节点之间的线条表示策展关系：有些是较强的推动关系，有些是历史脉络关系，并不等同于唯一因果。

## 内容分支

- 规则科技：越位、门线技术、VAR、半自动越位、补水暂停等。
- 战术角色：WM、全攻全守、高位逼抢、Tiki-taka、门卫型门将等。
- 赛事商业：世界杯、欧冠、英超商业化、金元足球、财政公平政策、沙特联赛金元等。
- 文化社会：女足禁令、慕尼黑空难、足球流氓治理、马拉多纳与英阿记忆、梅罗时代球迷等。

## 当前状态

这是 beta 版本，重点是验证「足球史 + 科技树研发」这种交互形式是否好玩、好懂。

当前包含 100+ 个节点，并为重点节点补充了 wiki 说明、案例、来源和分支插画头图。部分历史关系采用策展式归纳，后续仍可以继续细化史实、补充图片来源、调整节点取舍。

## 本地预览

这个项目是纯静态页面，可以直接打开：

```bash
open index.html
```

也可以用本地服务器预览：

```bash
python3 -m http.server 8765
```

然后访问：

```text
http://127.0.0.1:8765/
```

## 发布到 GitHub Pages

```bash
git init
git add .
git commit -m "Publish football evolution history beta"
git branch -M main
git remote add origin https://github.com/你的用户名/football-evolution-history.git
git push -u origin main
```

然后在 GitHub 仓库中开启：

```text
Settings -> Pages -> Build and deployment -> Deploy from a branch -> main / root
```

## 说明

本项目中的分支头图为 AI 生成插画资产。部分 wiki 条目引用 Wikimedia Commons、FIFA、UEFA、俱乐部官网等公开资料入口；如继续正式发布或商业使用，建议逐条复核图片授权和来源页面。
