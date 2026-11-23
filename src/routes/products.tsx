import { createFileRoute, useHydrated, useLocation } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  Bot,
  Boxes,
  Building2,
  ChartColumnIncreasing,
  CheckCircle2,
  ChevronUp,
  Cpu,
  Database,
  DollarSign,
  FileCheck2,
  GitBranch,
  Layers3,
  LockKeyhole,
  MessageSquare,
  Network,
  Search,
  Share2,
  Shield,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Waypoints,
  Workflow,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/images/product-dip-hero.png";
import ontology from "@/assets/images/product-ontology.png";

const description = "众凯AI决策智能平台，基于本体与多自主智能体协同的新一代企业级决策智能平台，融合数据编织、本体知识图谱与自主智能体协同。";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "众凯AI决策智能平台 | 众凯加速科技" },
      { name: "description", content: description },
      { property: "og:title", content: "众凯AI决策智能平台 | 众凯加速科技" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProductsPage,
});

const workflow = [
  { title: "数据接入", Icon: Database, text: "多源异构数据汇聚", sub: "实时流与批处理适配" },
  { title: "数据编织", Icon: GitBranch, text: "统一数据标准与清洗", sub: "主动发现与质量度量" },
  { title: "本体建模", Icon: Boxes, text: "业务概念与对象建模", sub: "统一语义与知识沉淀" },
  { title: "关系构建", Icon: Share2, text: "跨域实体网络连接", sub: "深层多跳关联推理" },
  { title: "智能体编排", Icon: Bot, text: "多 Agent 协同执行", sub: "业务自主决策引擎" },
];
const architecture = {
  collaboration: [
    { title: "意图感知问数", detail: "业务意图理解" },
    { title: "多维归因下钻", detail: "异动根因定位" },
    { title: "动态决策研判", detail: "智能报告生成" },
    { title: "协同行动闭环", detail: "业务指令触发" },
  ],
  reasoning: [
    { title: "指标口径解析", Icon: ChartColumnIncreasing },
    { title: "分析路径规划", Icon: Network },
    { title: "推理结果校验", Icon: ShieldCheck },
  ],
  foundations: [
    { title: "数据编织", role: "数据接入", Icon: Database },
    { title: "本体建模与治理", role: "语义治理", Icon: Share2 },
    { title: "流程编排", role: "流程运行", Icon: Workflow },
  ],
};

const fabricFeatures = [
  {
    title: "全域主动元数据",
    Icon: Target,
    points: ["跨源资产实时探查嗅探", "动态血缘拓扑自主推演"],
  },
  {
    title: "语义自动化对齐",
    Icon: DollarSign,
    points: ["异构 Schema 智能推断", "业务本体对象动态映射"],
  },
  {
    title: "自愈式数据质量",
    Icon: ShieldCheck,
    points: ["多维动态度量规则基线", "异常监控与熔断自愈闭环"],
  },
  {
    title: "自适应敏捷编排",
    Icon: Network,
    points: ["流批一体跨引擎敏捷调度", "弹性 DAG 管道与事件流转"],
  },
];
const fabricSemanticModels = ["领域语义模型", "业务核心本体", "多维知识图谱", "统一指标体系"];

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

function CapabilityHeading({
  number,
  title,
  en,
  children,
}: {
  number: string;
  title: string;
  en: string;
  children: React.ReactNode;
}) {
  return (
    <header className="dip-capability-heading">
      <span className="dip-number" aria-hidden="true">
        {number}
      </span>
      <h3>{title}</h3>
      <p className="dip-english" lang="en">
        {en}
      </p>
      <p className="dip-description">{children}</p>
    </header>
  );
}

function DataFabricContent() {
  return (
    <>
      <div className="dip-capability-matrix dip-fabric">
        <ul className="dip-fabric-features" aria-label="数据编织能力">
          {fabricFeatures.map(({ title, Icon, points }) => (
            <li key={title} className="dip-fabric-feature">
              <h4 className="dip-fabric-label">
                <span className="dip-fabric-icon">
                  <Icon aria-hidden="true" />
                </span>
                {title}
              </h4>
              <ul className="dip-fabric-points">
                {points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div className="dip-capability-body dip-fabric">
        <section className="dip-fabric-query">
          <span className="dip-fabric-icon">
            <MessageSquare aria-hidden="true" />
          </span>
          <div>
            <div className="flex flex-wrap items-baseline gap-x-[0.45em]">
              <h4>对话式智能取数</h4>
              <span className="dip-fabric-caption" lang="en">
                Conversational Query
              </span>
            </div>
            <p>
              自然语言意图理解 · 秒级{" "}
              <span className="whitespace-nowrap" lang="en">
                Text-to-SQL
              </span>{" "}
              · 指标多维穿透
            </p>
          </div>
          <span className="dip-fabric-badge" lang="en">
            NL2SQL
          </span>
        </section>

        <section className="dip-fabric-semantics">
          <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1">
            <h4 className="dip-fabric-label">
              <Share2 aria-hidden="true" />
              统一语义层（核心基座）
            </h4>
            <span className="dip-fabric-caption">底座统一赋能</span>
          </div>
          <ul className="dip-fabric-models">
            {fabricSemanticModels.map((model) => (
              <li key={model}>{model}</li>
            ))}
          </ul>
        </section>

        <section className="dip-fabric-security">
          <h4 className="dip-fabric-label">
            <Shield aria-hidden="true" />
            全生命周期运维安全保障
          </h4>
          <p className="dip-fabric-caption">血缘全景 · 权限审计 · 运行观测</p>
        </section>
      </div>
    </>
  );
}

function ArchitectureInterface({ branched = false }: { branched?: boolean }) {
  return (
    <div className="dip-arch-interface">
      {branched && <span className="dip-arch-branch" aria-hidden="true" />}
      <p className="relative flex items-center gap-2 rounded-full border border-primary/20 bg-brand-soft px-3.5 py-1 text-xs font-semibold text-primary sm:text-sm">
        <ChevronUp className="size-3.5" aria-hidden="true" />
        标准接口{" "}
        <span aria-hidden="true" className="text-primary/40">
          |
        </span>
        <span lang="en" className="font-medium">
          Standard Interface
        </span>
      </p>
    </div>
  );
}

function PlatformArchitecture() {
  return (
    <section
      id="platform-architecture"
      className="dip-architecture scroll-mt-20"
      aria-labelledby="architecture-title"
    >
      <div className="dip-container">
        <div className="rounded-2xl border border-primary/10 bg-card px-3.5 py-5 shadow-[var(--dip-shadow)] sm:p-6 lg:p-8">
          <header className="mb-6 flex flex-wrap items-center justify-between gap-3 lg:mb-9">
            <div>
              <p className="dip-eyebrow tracking-[0.15em]" lang="en">
                <span aria-hidden="true" />
                PLATFORM ARCHITECTURE
              </p>
              <h2 id="architecture-title" className="text-2xl leading-tight font-bold lg:text-3xl">
                众凯AI决策智能平台架构
              </h2>
            </div>
            <p className="inline-flex items-center gap-2 rounded-lg border border-primary/15 bg-brand-soft/65 px-3 py-1.5 text-xs font-semibold text-primary">
              <Building2 className="size-4 shrink-0" aria-hidden="true" />
              企业级架构 · 金融与央国企标准
            </p>
          </header>

          <p className="sr-only">
            底层的三项基础能力通过标准接口支撑决策推理引擎，引擎再通过标准接口支撑多智能体协同。
          </p>
          <div className="dip-arch-layer">
            <div className="dip-arch-layer-title">
              <span className="dip-arch-symbol">
                <Waypoints aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-lg font-bold lg:text-xl">多智能体协同</h3>
                <p lang="en" className="text-xs text-muted-foreground">
                  Multi-Agent Collaboration
                </p>
              </div>
            </div>
            <ol className="dip-arch-steps" aria-label="多智能体协同流程">
              {architecture.collaboration.map(({ title, detail }) => (
                <li
                  key={title}
                  className="relative flex flex-wrap items-baseline justify-between gap-x-2 rounded-lg border border-primary/15 bg-card px-2.5 py-2 sm:flex-col sm:items-center sm:justify-center sm:gap-y-1 sm:py-3"
                >
                  <strong className="text-sm font-semibold lg:text-base">{title}</strong>
                  <span className="text-xs text-muted-foreground">{detail}</span>
                </li>
              ))}
            </ol>
          </div>

          <ArchitectureInterface />

          <div className="dip-arch-layer dip-arch-engine">
            <div className="dip-arch-layer-title">
              <span className="dip-arch-symbol">
                <Cpu aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-xl font-bold xl:text-2xl">决策推理引擎</h3>
                <p lang="en" className="text-xs font-medium text-primary">
                  Decision Reasoning Engine
                </p>
              </div>
            </div>
            <ul
              className="grid divide-y divide-primary/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0"
              aria-label="决策推理能力"
            >
              {architecture.reasoning.map(({ title, Icon }) => (
                <li
                  key={title}
                  className="flex items-center gap-3 py-2 text-sm font-semibold sm:justify-center lg:text-base"
                >
                  <Icon className="size-5 shrink-0 text-primary sm:size-6" aria-hidden="true" />
                  {title}
                </li>
              ))}
            </ul>
          </div>

          <ArchitectureInterface branched />

          <ul className="dip-arch-foundations" aria-label="基础支撑能力">
            {architecture.foundations.map(({ title, role, Icon }) => (
              <li
                key={title}
                className="flex items-center gap-3.5 sm:flex-col sm:items-start md:flex-row md:items-center lg:gap-5"
              >
                <span className="dip-arch-symbol">
                  <Icon aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-bold lg:text-lg">{title}</h3>
                  <p className="mt-1 inline-block rounded-md bg-brand-soft px-2 py-0.5 text-xs font-medium text-primary">
                    {role}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ProductsPage() {
  const isHydrated = useHydrated();
  const activeHash = useLocation({ select: (location) => location.hash });
  const capabilityTarget = (id: string) => ({
    id,
    className: "dip-capability scroll-mt-24",
    "data-highlighted": (isHydrated && activeHash === id) || undefined,
  });

  return (
    <main className="dip-page">
      <section className="dip-hero" aria-labelledby="dip-title">
        <div className="dip-container dip-hero-layout">
          <div className="dip-hero-copy">
            <p className="dip-eyebrow"><span /> DECISION INTELLIGENCE PLATFORM</p>
            <p className="mb-4 text-sm text-muted-foreground">让数据理解业务 · 让智能共创决策</p>
            <h1 id="dip-title">众凯AI决策智能平台</h1>
            <p className="dip-hero-subtitle">基于本体与多自主智能体协同的<br />新一代企业级决策智能平台</p>
            <p className="dip-hero-description">融合知识图谱、行业本体与多智能体协同，打通数据、知识与决策链路，让企业从数据洞察走向自主行动。</p>
            <div className="dip-metrics" aria-label="核心指标">
              <div className="dip-metric"><span className="dip-icon"><Zap /></span><div><strong>10x</strong><p>决策效率提升</p></div></div>
              <div className="dip-metric"><span className="dip-icon dip-icon-cyan"><Target /></span><div><strong>99.9%</strong><p>业务逻辑可解释性</p></div></div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg"><a href="mailto:contact@zhongkaitech.com.cn?subject=众凯AI决策智能平台产品咨询">咨询产品 <ArrowRight /></a></Button>
              <Button variant="outline" size="lg" onClick={() => document.getElementById("dip-workflow")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" })}>探索平台 <ArrowDown /></Button>
            </div>
          </div>
          <div className="dip-hero-art" role="group" aria-label="众凯AI决策智能平台核心">
            <img src={hero} width={768} height={768} alt="中心发光 Z 标玻璃立方与蓝色同心光环" fetchPriority="high" />
            <div className="dip-float dip-float-agents"><Bot /><div><strong>多智能体协同</strong><span>Multi-Agent Synergy</span></div></div>
            <div className="dip-float dip-float-ontology"><Boxes /><div><strong>本体建模</strong><span>Ontology Modeling</span></div></div>
            <div className="dip-float dip-float-knowledge"><Sparkles /><div><strong>知识驱动决策</strong><span>Knowledge Driven</span></div></div>
            <div className="dip-float dip-float-fabric">
              <Database aria-hidden="true" />
              <div>
                <strong>数据编织</strong>
                <span lang="en">Data Fabric</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="dip-workflow" className="dip-workflow dip-container" aria-labelledby="workflow-title">
        <div className="dip-section-heading"><p className="dip-eyebrow">END-TO-END WORKFLOW</p><h2 id="workflow-title">从数据到决策全流程工作流</h2><p>打通数据、知识、智能与业务场景，构建端到端的决策运营闭环</p></div>
        <ol className="dip-workflow-grid">
          {workflow.map(({ title, Icon, text, sub }, index) => <li className="dip-step" key={title}><div className="flex items-center justify-between"><span className="dip-step-number">0{index + 1}</span><Icon className="dip-step-icon" aria-hidden="true" /></div><h3>{title}</h3><p>{text}<br />{sub}</p>{index < workflow.length - 1 && <ArrowRight className="dip-step-arrow" aria-hidden="true" />}</li>)}
        </ol>
      </section>

      <PlatformArchitecture />

      <section className="dip-capabilities dip-container" aria-labelledby="capabilities-title">
        <div className="dip-section-heading"><p className="dip-eyebrow">CORE PRODUCT CAPABILITIES</p><h2 id="capabilities-title">三大核心产品能力</h2><p>从可信数据到可执行决策，构建企业智能引擎</p></div>
        <div className="dip-capability-grid">
          <article {...capabilityTarget("data-fabric")}>
            <CapabilityHeading number="01" title="数据编织" en="DATA FABRIC">
              打造企业级自适应数据互联底座，融合主动元数据与统一语义网，赋能多智能体协同与决策智能。
            </CapabilityHeading>
            <DataFabricContent />
          </article>

          <article {...capabilityTarget("ontology-modeling")}>
            <CapabilityHeading
              number="02"
              title="多维本体建模与动态知识图谱"
              en="Ontology Modeling & Knowledge Graph"
            >
              构建多知识结构化，让数据具备业务语义与推理能力。
            </CapabilityHeading>
            <div className="dip-capability-body dip-capability-illustrated">
              <div className="dip-ontology-art" role="group" aria-label="四类本体与动态知识图谱">
                <img
                  src={ontology}
                  width={768}
                  height={768}
                  alt="菱形底座、三层玻璃板与双垂直核心立方构成的本体模型"
                  loading="lazy"
                />
                {ontologyTypes.map(({ title, en, Icon }, index) => (
                  <div className={`dip-ontology-label dip-ontology-label-${index}`} key={title}>
                    <Icon aria-hidden="true" />
                    <strong>{title}</strong>
                    <span>{en}</span>
                  </div>
                ))}
              </div>
              <ul className="dip-feature-list">
                {[
                  "多维度本体建模，支持行业及企业个性化扩展",
                  "动态知识图谱，实时融合多源知识与业务数据",
                  "支持时序、因果与多层级关系推理",
                  "持续优化的企业知识资产",
                ].map((text) => (
                  <li key={text}>
                    <CheckCircle2 aria-hidden="true" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <article {...capabilityTarget("multi-agent-synergy")}>
            <CapabilityHeading
              number="03"
              title="自主多智能体协同与决策"
              en="Multi-Agent Synergy & Decision"
            >
              让多智能体像专家团队一样协同，完成复杂问题的分析与决策。
            </CapabilityHeading>
            <div className="dip-capability-matrix dip-agents-grid">
              {agents.map(({ title, Icon, text, sub }) => (
                <div className="dip-agent" key={title}>
                  <Icon aria-hidden="true" />
                  <div>
                    <h4>{title}</h4>
                    <p>
                      {text}
                      <br />
                      {sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="dip-capability-body">
              <div className="dip-agent-loop">
                <h4>闭环协同机制</h4>
                <ol>
                  {["分析洞察", "策略规划", "协同执行", "反馈优化"].map((text, index) => (
                    <li key={text}>
                      <span>{text}</span>
                      {index < 3 && <ArrowRight aria-hidden="true" />}
                    </li>
                  ))}
                </ol>
                <p>
                  <GitBranch aria-hidden="true" /> 评估结果回流，持续驱动下一轮决策
                </p>
              </div>
              <div className="dip-operations">
                <h4>智能体治理能力</h4>
                <ul className="dip-agent-governance">
                  <li>
                    <ShieldCheck />
                    可解释性追溯
                  </li>
                  <li>
                    <Bot />
                    人机协同审核
                  </li>
                  <li>
                    <Target />
                    置信度评估
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="dip-security" aria-labelledby="security-title"><div className="dip-container"><div className="dip-section-heading"><p className="dip-eyebrow">BUILT FOR ENTERPRISE</p><h2 id="security-title">企业级安全合规底座</h2><p>以安全与合规为前提，保障企业数据资产与业务连续性</p></div><div className="dip-security-grid">{security.map(({ title, Icon, text }) => <article className="dip-security-card" key={title}><Icon aria-hidden="true" /><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>
    </main>
  );
}
