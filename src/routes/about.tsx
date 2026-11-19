import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Crosshair, Fingerprint, GitBranch, Layers, Network, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import cube from "@/assets/about_hero_3d_city_soft_bokeh.png.asset.json";
import sceneData from "@/assets/scene_data_orchestration_v1.png.asset.json";
import sceneOntology from "@/assets/scene_ontology_graph_v1.png.asset.json";
import sceneAgent from "@/assets/scene_multi_agent_v1.png.asset.json";
import zhang from "@/assets/expert_zhang_portrait.jpg.asset.json";
import li from "@/assets/expert_li_portrait.jpg.asset.json";
import wang from "@/assets/expert_wang_portrait.jpg.asset.json";
import tsinghua from "@/assets/tsinghua-university-combo.png.asset.json";
import peking from "@/assets/peking-university-combo.png.asset.json";
import ibm from "@/assets/ibm-eight-bar.png.asset.json";
import sas from "@/assets/sas-logo-tight.png.asset.json";

const description = "众凯加速科技于 2023 年在北京设立，面向金融与央企做决策智能平台。释放数据要素价值，让每一次业务决策都信得过、可追溯、能执行。";
export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "关于众凯加速科技 | 自主可控的决策智能" },
    { name: "description", content: description },
    { property: "og:title", content: "关于众凯加速科技 | 自主可控的决策智能" },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: AboutPage,
});

const experts = [
  { name: "张明远", title: "首席科学家", photo: zhang, background: ["清华大学计算机系博士", "前 IBM 研究院首席研究员"] },
  { name: "李思涵", title: "首席数据科学家", photo: li, background: ["北京大学人工智能博士", "SAS 前高级研究科学家"] },
  { name: "王建国", title: "首席架构师", photo: wang, background: ["IBM 前杰出工程师", "分布式系统与大数据专家"] },
];
const capabilities = [
  { title: "数据编排", en: "Data Orchestration", description: "打通多源异构数据，构建高质量、可控的数据流通体系。", asset: sceneData, tags: ["多源融合", "高质量数据", "可控流通"] },
  { title: "本体知识图谱", en: "Ontology Knowledge Graph", description: "融合行业知识与大规模数据，构建可推理、可视化的知识体系。", asset: sceneOntology, tags: ["业务语义", "知识推理", "可视化"] },
  { title: "多智能体协同", en: "Multi-Agent Synergy", description: "通过多智能体协作，实现复杂任务的规划、执行与自我进化。", asset: sceneAgent, tags: ["任务规划", "协同执行", "自我进化"] },
];
const principles = [
  { title: "聚焦赛道", description: "只做金融与央国企场景，理解监管要求与业务语义，不做泛行业的通用方案。", Icon: Crosshair },
  { title: "方法沉淀", description: "把每次交付沉淀为可复用的本体模型与语义资产，让能力持续复利而非重复建设。", Icon: GitBranch },
  { title: "结果负责", description: "深入客户现场，交付可运行的生产级方案，对业务结果而非交付文档负责。", Icon: ShieldCheck },
];
const concerns = [
  { title: "数据对齐", question: "数据能不能对齐成业务对象", Icon: Layers },
  { title: "结论可溯", question: "结论能不能回到口径和来源", Icon: Fingerprint },
  { title: "行动可控", question: "建议能不能落在事先约定的动作范围内", Icon: ShieldCheck },
];
type Detail = { type: "expert"; index: number } | { type: "capability"; index: number } | { type: "team" } | { type: "technology" };

function AboutPage() {
  const [detail, setDetail] = useState<Detail | null>(null);
  const selectedExpert = detail?.type === "expert" ? experts[detail.index] : undefined;
  const selectedCapability = detail?.type === "capability" ? capabilities[detail.index] : undefined;
  return (
    <main className="about-page">
      <section className="about-hero" aria-labelledby="about-title">
        <div className="about-container about-hero-layout">
          <div className="about-hero-copy">
            <p className="about-eyebrow about-badge">ABOUT US</p>
            <h1 id="about-title">自主可控的超级智能，<br /><span className="text-primary">重构企业决策范式</span></h1>
            <p className="about-hero-description">{description}</p>
            <ul className="about-metrics" aria-label="核心实力指标">
              {[{ value: "2023", unit: "年", label: "公司设立·北京" }, { value: "300+", label: "行业客户" }, { value: "100+", label: "核心技术与专利" }, { value: "50+", label: "顶尖科研人才" }].map(item => <li key={item.value}><strong>{item.value}<span>{item.unit}</span></strong><p>{item.label}</p></li>)}
            </ul>
          </div>
          <div className="about-hero-art"><img src={cube.url} alt="多层水晶 AI 决策魔方悬浮于柔和虚化的城市天际线前，核心发光，四周环绕悬浮数据卡片" width={1616} height={976} fetchPriority="high" decoding="async" className="about-cube" /></div>
        </div>
      </section>

      <section className="about-research-band" aria-labelledby="research-title">
        <div className="about-container about-research-layout">
          <div className="about-research-intro">
            <p className="about-eyebrow">RESEARCH &amp; ACADEMIC</p>
            <h2 id="research-title">产学研协同 · 打造世界级技术底座</h2>
            <p className="about-body">众凯科技与全球顶尖高校及科研机构深度合作，构建产学研一体化的创新体系，将前沿研究转化为可落地的行业解决方案。</p>
            <div className="about-logos" aria-label="产学研协同机构">
              {[{ name: "清华大学", asset: tsinghua }, { name: "北京大学", asset: peking }, { name: "IBM", asset: ibm }, { name: "SAS", asset: sas }].map(item => <div className="about-logo-card" key={item.name}><img src={item.asset.url} alt={`${item.name}官方标识`} loading="lazy" decoding="async" /></div>)}
            </div>
          </div>
          <div className="min-w-0">
            <div className="about-team-heading"><h2>顶尖科研团队</h2><Button variant="link" className="h-auto shrink-0 p-0 text-xs" onClick={() => setDetail({ type: "team" })}>查看更多 <ArrowRight aria-hidden="true" /></Button></div>
            <div className="about-experts">
              {experts.map((expert, index) => <article key={expert.name} className="about-expert group">
                <div className="about-portrait"><img src={expert.photo.url} alt={`${expert.name}博士肖像`} width={164} height={102} loading="lazy" decoding="async" /></div>
                <div className="about-expert-copy"><h3>{expert.name}<span>博士</span></h3><p className="about-expert-role">{expert.title}</p><ul>{expert.background.map(line => <li key={line}>{line}</li>)}</ul><Button variant="ghost" size="icon" className="about-card-arrow text-primary" aria-label={`查看${expert.name}博士档案`} onClick={() => setDetail({ type: "expert", index })}><ArrowRight className="transition-transform motion-safe:group-hover:translate-x-1" aria-hidden="true" /></Button></div>
              </article>)}
            </div>
          </div>
        </div>
      </section>

      <section className="about-capabilities-band" aria-labelledby="capabilities-title">
        <div className="about-container">
          <div className="about-capabilities-layout">
            <div className="about-capabilities-intro"><p className="about-eyebrow">CORE CAPABILITIES</p><h2 id="capabilities-title">三大核心能力<br />驱动企业智能化跃迁</h2><p className="about-body">以数据为基，以知识为脉，以智能体为翼，众凯科技构建面向未来的企业智能底座。</p><Button className="mt-6 rounded-full px-6" onClick={() => setDetail({ type: "technology" })}>了解我们的技术 <ArrowRight aria-hidden="true" /></Button></div>
            <div className="about-capabilities-grid">{capabilities.map((capability, index) => <article key={capability.title} className="about-capability group"><div className="about-capability-visual"><span>0{index + 1}</span><img src={capability.asset.url} alt={`${capability.title}三维科技场景图`} loading="lazy" decoding="async" width={1704} height={923} /></div><div className="about-capability-copy"><h3>{capability.title}</h3><p className="about-capability-en">{capability.en}</p><p className="about-body">{capability.description}</p><Button variant="ghost" size="icon" className="about-card-arrow text-primary" aria-label={`了解${capability.title}`} onClick={() => setDetail({ type: "capability", index })}><ArrowRight className="transition-transform motion-safe:group-hover:translate-x-1" aria-hidden="true" /></Button></div></article>)}</div>
          </div>
          <div className="about-values-row"><ul aria-label="企业价值">{[{ title: "全栈自主可控", en: "Independent & Controllable", Icon: ShieldCheck }, { title: "行业深度赋能", en: "Industry Empowerment", Icon: Layers }, { title: "可信安全体系", en: "Trusted & Secure", Icon: ShieldCheck }, { title: "开放生态共建", en: "Open Ecosystem", Icon: Network }].map(({ title, en, Icon }) => <li key={title}><Icon aria-hidden="true" /><div><strong>{title}</strong><span>{en}</span></div></li>)}</ul><blockquote><Sparkles className="h-4 w-4 shrink-0 text-primary/50" aria-hidden="true" /><div>让智能，真正服务于人类的创造力。<cite>— 众凯科技</cite></div></blockquote></div>
        </div>
      </section>

      <section className="about-position-band" aria-labelledby="position-title">
        <div className="about-container"><p className="about-eyebrow">OUR COMMITMENT · 我们的定位</p><h2 id="position-title">只做一件事，并把方法沉淀下来</h2><div className="about-position-grid">{principles.map(({ title, description: text, Icon }, index) => <article key={title} className="about-position-card"><div className="flex items-center justify-between"><span className="about-semantic-icon"><Icon aria-hidden="true" /></span><span className="text-sm font-medium text-primary/40">0{index + 1}</span></div><h3>{title}</h3><p className="about-body">{text}</p></article>)}</div><div className="about-concerns-heading"><h3>我们关心三件事</h3><p>从业务对象到业务行动，让智能始终有据可循。</p></div><div className="about-concerns-grid">{concerns.map(({ title, question, Icon }) => <article className="about-concern-card" key={title}><Icon aria-hidden="true" /><div><h4>{title}</h4><p>{question}</p></div></article>)}</div></div>
      </section>
      <section className="about-quote-band"><div className="about-container"><p className="about-eyebrow">众凯决策智能平台</p><blockquote>真正意义上的数字化，不是把报表搬到屏幕上，<br className="hidden md:block" />而是让每一次业务决策都<span className="text-primary">信得过、可追溯、能执行。</span></blockquote></div></section>

      <Dialog open={detail !== null} onOpenChange={open => { if (!open) setDetail(null); }}><DialogContent className="max-h-[85svh] overflow-y-auto rounded-lg sm:max-w-2xl"><DialogHeader><DialogTitle>{selectedExpert ? `${selectedExpert.name}博士 · ${selectedExpert.title}` : selectedCapability?.title ?? (detail?.type === "team" ? "顶尖科研团队" : "三大核心能力底座")}</DialogTitle><DialogDescription>{selectedExpert ? "学术深度与企业级实战的双轨背景" : selectedCapability ? selectedCapability.description : detail?.type === "team" ? "产学研深度融合，连接前沿科研与生产级工程实践。" : "以数据为基，以知识为脉，以智能体为翼。"}</DialogDescription></DialogHeader>
        {selectedExpert && <div className="flex flex-col gap-6 sm:flex-row"><div className="about-portrait w-full shrink-0 rounded-lg sm:w-52"><img src={selectedExpert.photo.url} alt={`${selectedExpert.name}博士肖像`} /></div><ul className="space-y-3 self-center text-sm leading-7">{selectedExpert.background.map(line => <li key={line}>{line}</li>)}</ul></div>}
        {detail?.type === "team" && <div className="space-y-5">{experts.map(expert => <div key={expert.name} className="border-b border-border pb-5 last:border-0"><h3 className="font-semibold">{expert.name}博士 · {expert.title}</h3><p className="mt-2 text-sm leading-7 text-muted-foreground">{expert.background.join(" · ")}</p></div>)}</div>}
        {selectedCapability && <div className="flex flex-col items-center gap-5 sm:flex-row"><img src={selectedCapability.asset.url} alt={selectedCapability.title} className="aspect-[1704/923] w-full max-w-sm rounded-md object-cover" /><ul className="space-y-3 text-sm">{selectedCapability.tags.map(tag => <li className="flex items-center gap-2" key={tag}><ShieldCheck className="h-4 w-4 text-primary" />{tag}</li>)}</ul></div>}
        {detail?.type === "technology" && <div className="space-y-4">{capabilities.map(capability => <div key={capability.title} className="flex items-center gap-4 border-b border-border pb-4 last:border-0"><img src={capability.asset.url} alt={capability.title} className="aspect-[1704/923] w-32 shrink-0 rounded object-cover" /><div><h3 className="font-semibold">{capability.title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{capability.description}</p></div></div>)}</div>}
      </DialogContent></Dialog>
    </main>
  );
}
