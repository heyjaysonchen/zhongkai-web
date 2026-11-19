# Zhongkai Agent Synergy

构建众凯科技（Zhongkai）的企业官网首页，以明亮浅色调与 IBM 蓝（#0f62fe）为主视觉，参考附件中的 Logo 与最终首页效果图。具体要求：

1. 页眉（Header）：
   - 品牌 Logo 与“众凯科技”；
   - 导航菜单严格按照顺序：首页、产品（带下拉微箭头）、解决方案（带下拉微箭头）、关于我们、联系我们；
   - 右侧仅保留一个 IBM 蓝实心主按钮“预约演示”；
   - 动效交互：页面在顶部时为悬浮轻胶囊毛玻璃效果，向下滑动时平滑过渡为 100% 满宽吸顶毛玻璃导航条。

2. 视觉首屏（Hero）：
   - 主标题：“企业 AI 解决方案”；
   - 副标题：“众凯把数据沉淀为统一底座，以智能体驱动全链路，为金融与央国企提供可信的 AI 解决方案。”；
   - 按钮：“预约演示”（主按钮，IBM 蓝）与“了解更多”（次级按钮）；
   - 右侧：精致现代的统一数据底座与本体智能网络拓扑动效视觉。

3. 平台概览（超级智能大脑）：
   - 标题：“给企业装上一个懂业务的超级智能大脑”；
   - 介绍：“众凯企业 AI 平台，以数据编排为起点，通过本体建模构建业务知识图谱，最终实现智能体协同，打造可落地、可治理、可持续的企业级 AI 能力。”；
   - 三段式流水线微界面卡片：“01 数据编排”、“02 本体建模”、“03 智能体协同”，图文深度融合，带有蓝色高亮流程连接。

4. 行业解决方案：
   - 标题：“行业解决方案”；
   - 三大核心方案卡片：“金融 AI”、“SAS 软件国产替换解决方案”、“央国企 AI”；
   - 包含专业能力标签（Tag pills）与“查看方案 →”交互，纯净通透设计。

5. 团队背书：
   - 标题：“一支既懂行业、又懂AI技术的团队”；
   - 背书标签：清华大学、北京大学、IBM、SAS 等；
   - 双专家卡片：“行业专家”与“AI技术专家”，图标与标题同行并排。

6. 页脚（Footer）：
   - 左侧：品牌 Logo + 单行精炼定位“让数据更有价值，让智能触手可及”；
   - 中间：产品与解决方案导航，常态为中性灰，鼠标悬停（Hover）平滑过渡为 IBM 蓝高亮；
   - 右侧：带 IBM 蓝定位 icon 的公司地址（北京市海淀区中关村南大街科技大厦）、联系邮箱与官方微信公众号二维码；
   - 底部：版权声明与备案信息。

本次优先完整落地首页的所有模块与交互，子页面先保留路由与骨架。

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://zhongkai-web.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/98992eaa-b892-4254-bfef-5939f0d585a1).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
