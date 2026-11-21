import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Bot, Boxes, CheckCircle2, Database, FileCheck2, GitBranch, Layers3, LockKeyhole, Network, Search, Share2, ShieldCheck, Sparkles, Target, TrendingUp, Workflow, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/product-dip-hero.png.asset.json";
import ontology from "@/assets/product-ontology.png.asset.json";

const description = "众凯DIP智能平台，基于本体与多自主智能体协同的企业级决策智能引擎，融合数据编织、本体知识图谱与自主智能体协同。";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "众凯DIP智能平台 | 众凯加速科技" },
      { name: "description", content: description },
      { property: "og:title", content: "众凯DIP智能平台 | 众凯加速科技" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProductsPage,
});

const workflow = [
  { title: "数据接入", Icon: Database, text: "多源异构数据汇聚", sub: "实时流与批处理适配" },
  { title: "数据编排", Icon: GitBranch, text: "统一数据标准与清洗", sub: "主动发现与质量度量" },
  { title: "本体建模", Icon: Boxes, text: "业务概念与对象建模", sub: "统一语义与知识沉淀" },
  { title: "关系构建", Icon: Share2, text: "跨域实体网络连接", sub: "深层多跳关联推理" },
  { title: "智能体编排", Icon: Bot, text: "多 Agent 协同执行", sub: "业务自主决策引擎" },
];
const fabricLayers = [
  { level: "L6", title: "应用层", en: "Business Applications", details: "决策驾驶舱 · 智能体 · 行业应用" },
  { level: "L5", title: "数据服务与 MCP 层", en: "Data Service & MCP", details: "API 服务 · MCP 协议 · 智能工具" },
  { level: "L4", title: "语义核心层", en: "Semantic Core", details: "元数据 · 语义模型 · 统一本体" },
  { level: "L3", title: "数据联邦层", en: "Data Federation", details: "跨源查询 · 虚拟化 · 数据映射" },
  { level: "L2", title: "数据网格层", en: "Data Mesh", details: "领域数据 · 自主治理 · 数据产品" },
  { level: "L1", title: "异构数据源", en: "Heterogeneous Sources", details: "结构化 · 非结构化 · 实时流数据" },
];
const ontologyTypes = [
  { title: "业务本体", en: "Business Ontology", Icon: Boxes },
  { title: "领域本体", en: "Domain Ontology", Icon: Network },
  { title: "事件本体", en: "Event Ontology", Icon: Zap },
  { title: "规则本体", en: "Rule Ontology", Icon: FileCheck2 },
];
const agents = [
  { title: "分析智能体", Icon: Search, text: "数据洞察", sub: "识别问题与机会" },
  { title: "规划智能体", Icon: Workflow, text: "制定策略", sub: "生成可行方案" },
  { title: "执行智能体", Icon: Bot, text: "调用工具", sub: "推进任务落地" },
  { title: "评估智能体", Icon: TrendingUp, text: "效果评估", sub: "持续优化迭代" },
];
const security = [
  { title: "全链路可解释", Icon: FileCheck2, text: "从数据来源、推理过程到执行结果全程留痕，让每一次决策有据可查。" },
  { title: "金融级安全隔离", Icon: LockKeyhole, text: "细粒度权限与多层访问控制，隔离业务边界，支持私有化部署。" },
  { title: "数据隐私合规", Icon: ShieldCheck, text: "数据脱敏、加密与审计协同，覆盖数据全生命周期的隐私保护。" },
  { title: "高可用保障", Icon: Layers3, text: "弹性扩展、运行监控与容灾恢复，支撑企业关键业务连续运行。" },
];

function CapabilityHeading({ number, title, en, children }: { number: string; title: string; en: string; children: React.ReactNode }) {
  return <header className="dip-capability-heading"><div className="flex items-start gap-3"><span className="dip-number">{number}</span><div><h3>{title}</h3><p className="dip-english">{en}</p></div></div><p className="dip-description mt-4">{children}</p></header>;
}

function ProductsPage() {
  return (
    <main className="dip-page">
      <section className="dip-hero" aria-labelledby="dip-title">
        <div className="dip-container dip-hero-layout">
          <div className="dip-hero-copy">
            <p className="dip-eyebrow"><span /> DECISION INTELLIGENCE PLATFORM</p>
            <p className="mb-4 text-sm text-muted-foreground">让数据理解业务 · 让智能共创决策</p>
            <h1 id="dip-title">众凯DIP智能平台</h1>
            <p className="dip-hero-subtitle">基于本体与多自主智能体协同的<br />企业级决策智能引擎</p>
            <p className="dip-hero-description">融合知识图谱、行业本体与多智能体协同，打通数据、知识与决策链路，让企业从数据洞察走向自主行动。</p>
            <div className="dip-metrics" aria-label="核心指标">
              <div className="dip-metric"><span className="dip-icon"><Zap /></span><div><strong>10x</strong><p>决策效率提升</p></div></div>
              <div className="dip-metric"><span className="dip-icon dip-icon-cyan"><Target /></span><div><strong>99.9%</strong><p>业务逻辑可解释性</p></div></div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg"><a href="mailto:contact@zhongkaitech.com.cn?subject=众凯DIP智能平台产品咨询">咨询产品 <ArrowRight /></a></Button>
              <Button variant="outline" size="lg" onClick={() => document.getElementById("dip-workflow")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" })}>探索平台 <ArrowDown /></Button>
            </div>
          </div>
          <div className="dip-hero-art" role="group" aria-label="众凯 DIP 决策智能核心">
            <img src={hero.url} width={768} height={768} alt="中心发光 Z 标玻璃立方与蓝色同心光环" fetchPriority="high" />
            <div className="dip-float dip-float-agents"><Bot /><div><strong>多智能体协同</strong><span>Multi-Agent Synergy</span></div></div>
            <div className="dip-float dip-float-ontology"><Boxes /><div><strong>本体建模</strong><span>Ontology Modeling</span></div></div>
            <div className="dip-float dip-float-knowledge"><Sparkles /><div><strong>知识驱动决策</strong><span>Knowledge Driven</span></div></div>
            <div className="dip-float dip-float-purpose"><span>让组织的每一个决策<br />都有数据与知识的支撑</span></div>
          </div>
        </div>
      </section>

      <section id="dip-workflow" className="dip-workflow dip-container" aria-labelledby="workflow-title">
        <div className="dip-section-heading"><p className="dip-eyebrow">END-TO-END WORKFLOW</p><h2 id="workflow-title">从数据本体到决策全流程工作流</h2><p>打通数据、知识、智能与业务场景，构建端到端的决策运营闭环</p></div>
        <ol className="dip-workflow-grid">
          {workflow.map(({ title, Icon, text, sub }, index) => <li className="dip-step" key={title}><div className="flex items-center justify-between"><span className="dip-step-number">0{index + 1}</span><Icon className="dip-step-icon" aria-hidden="true" /></div><h3>{title}</h3><p>{text}<br />{sub}</p>{index < workflow.length - 1 && <ArrowRight className="dip-step-arrow" aria-hidden="true" />}</li>)}
        </ol>
      </section>

      <section className="dip-capabilities dip-container" aria-labelledby="capabilities-title">
        <div className="dip-section-heading"><p className="dip-eyebrow">CORE PRODUCT CAPABILITIES</p><h2 id="capabilities-title">三大核心产品能力</h2><p>从可信数据到可执行决策，构建企业智能引擎</p></div>
        <div className="dip-capability-grid">
          <article className="dip-capability">
            <CapabilityHeading number="01" title="数据编织系统（ZyFabric）" en="Data Fabric System">打造企业数据底座，构建统一、可信、可共享的数据资产。</CapabilityHeading>
            <ol className="dip-fabric-layers" aria-label="ZyFabric 六层架构">
              {fabricLayers.map(({ level, title, en, details }) => <li key={level}><span className="dip-layer-block">{level}</span><div><h4>{title}</h4><p>{en}</p><span>{details}</span></div></li>)}
            </ol>
            <div className="dip-operations"><div className="flex items-center gap-2"><ShieldCheck className="size-4 text-primary" /><h4>全生命周期运维安全保障</h4></div><p>元数据管理 · 数据血缘 · 质量监控<br />权限审计 · 运维观测 · 安全治理</p></div>
          </article>

          <article className="dip-capability">
            <CapabilityHeading number="02" title="多维本体建模与动态知识图谱" en="Ontology Modeling & Knowledge Graph">构建多知识结构化，让数据具备业务语义与推理能力。</CapabilityHeading>
            <div className="dip-ontology-art" role="group" aria-label="四类本体与动态知识图谱">
              <img src={ontology.url} width={768} height={768} alt="菱形底座、三层玻璃板与双垂直核心立方构成的本体模型" loading="lazy" />
              {ontologyTypes.map(({ title, en, Icon }, index) => <div className={`dip-ontology-label dip-ontology-label-${index}`} key={title}><Icon aria-hidden="true" /><strong>{title}</strong><span>{en}</span></div>)}
            </div>
            <ul className="dip-feature-list">{["多维度本体建模，支持行业及企业个性化扩展", "动态知识图谱，实时融合多源知识与业务数据", "支持时序、因果与多层级关系推理", "持续优化的企业知识资产"].map(text => <li key={text}><CheckCircle2 aria-hidden="true" /><span>{text}</span></li>)}</ul>
          </article>

          <article className="dip-capability">
            <CapabilityHeading number="03" title="自主多智能体协同与决策" en="Multi-Agent Synergy & Decision">让多智能体像专家团队一样协同，完成复杂问题的分析与决策。</CapabilityHeading>
            <div className="dip-agents-grid">{agents.map(({ title, Icon, text, sub }) => <div className="dip-agent" key={title}><Icon aria-hidden="true" /><div><h4>{title}</h4><p>{text}<br />{sub}</p></div></div>)}</div>
            <div className="dip-agent-loop"><h4>闭环协同机制</h4><ol>{["分析洞察", "策略规划", "协同执行", "反馈优化"].map((text, index) => <li key={text}><span>{text}</span>{index < 3 && <ArrowRight aria-hidden="true" />}</li>)}</ol><p><GitBranch aria-hidden="true" /> 评估结果回流，持续驱动下一轮决策</p></div>
            <div className="dip-operations"><h4>智能体治理能力</h4><ul className="dip-agent-governance"><li><ShieldCheck />可解释性追溯</li><li><Bot />人机协同审核</li><li><Target />置信度评估</li></ul></div>
          </article>
        </div>
      </section>

      <section className="dip-security" aria-labelledby="security-title"><div className="dip-container"><div className="dip-section-heading"><p className="dip-eyebrow">BUILT FOR ENTERPRISE</p><h2 id="security-title">企业级安全合规底座</h2><p>以安全与合规为前提，保障企业数据资产与业务连续性</p></div><div className="dip-security-grid">{security.map(({ title, Icon, text }) => <article className="dip-security-card" key={title}><Icon aria-hidden="true" /><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>
    </main>
  );
}
