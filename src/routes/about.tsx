import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, Crosshair, Fingerprint, GitBranch, GraduationCap, Layers, Network, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import cube from "@/assets/about_hero_3d_ai_cube_complete.png.asset.json";
import dataIcon from "@/assets/about_icon_data_orchestration.png.asset.json";
import ontologyIcon from "@/assets/about_icon_ontology_graph.png.asset.json";
import agentIcon from "@/assets/about_icon_multi_agent.png.asset.json";
import tsinghua from "@/assets/tsinghua-university-combo.png.asset.json";
import peking from "@/assets/peking-university-combo.png.asset.json";
import ibm from "@/assets/ibm-eight-bar.png.asset.json";
import sas from "@/assets/sas-logo-tight.png.asset.json";

const description = "众凯加速科技于 2023 年在北京设立，面向金融与央企做决策智能，以数据编排、本体知识图谱与多智能体协同，让业务决策信得过、可追溯、能执行。";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "关于众凯加速科技 | 金融与央企决策智能" },
      { name: "description", content: description },
      { property: "og:title", content: "关于众凯加速科技 | 金融与央企决策智能" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const concerns = [
  { title: "数据对齐", question: "数据能不能对齐成业务对象", label: "业务对象", Icon: Layers },
  { title: "结论可溯", question: "结论能不能回到口径和来源", label: "口径与来源", Icon: Fingerprint },
  { title: "行动可控", question: "建议能不能落在事先约定的动作范围内", label: "约定的动作范围", Icon: ShieldCheck },
];

const principles = [
  { title: "聚焦赛道", description: "只做金融与央国企场景，理解监管要求与业务语义，不做泛行业的通用方案。", Icon: Crosshair },
  { title: "方法沉淀", description: "把每次交付沉淀为可复用的本体模型与语义资产，让能力持续复利而非重复建设。", Icon: GitBranch },
  { title: "结果负责", description: "深入客户现场，交付可运行的生产级方案，对业务结果而非交付文档负责。", Icon: ShieldCheck },
];

const experts = [
  { title: "首席科学家", en: "CHIEF SCIENTIST", background: ["清华大学计算机系博士", "前 IBM 研究院首席研究员"], Icon: GraduationCap },
  { title: "首席数据科学家", en: "CHIEF DATA SCIENTIST", background: ["北京大学人工智能博士", "SAS 前高级研究科学家"], Icon: GitBranch },
  { title: "首席架构师", en: "CHIEF ARCHITECT", background: ["IBM 前杰出工程师", "分布式系统与大数据专家"], Icon: Network },
];

const capabilities = [
  { title: "数据编排", en: "Data Orchestration", description: "打通多源异构数据，构建高质量、可控的数据流通体系。", asset: dataIcon, tags: ["多源融合", "高质量数据", "可控流通"] },
  { title: "本体知识图谱", en: "Ontology Knowledge Graph", description: "融合行业知识与大规模数据，构建可推理、可视化的知识体系。", asset: ontologyIcon, tags: ["业务语义", "知识推理", "可视化"] },
  { title: "多智能体协同", en: "Multi-Agent Synergy", description: "通过多智能体协作，实现复杂任务的规划、执行与自我进化。", asset: agentIcon, tags: ["任务规划", "协同执行", "自我进化"] },
];

function SectionLabel({ children }: { children: string }) {
  return <p className="flex items-center gap-3 text-sm font-medium text-primary"><span className="h-px w-6 bg-primary" aria-hidden="true" />{children}</p>;
}

function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero overflow-hidden pb-12 pt-28 lg:pb-14 lg:pt-32" aria-labelledby="about-title">
        <div className="mx-auto max-w-6xl px-6">
          <nav aria-label="面包屑" className="flex items-center gap-2 text-xs text-muted-foreground">
            <Button asChild variant="link" className="h-auto p-0 text-xs text-muted-foreground"><Link to="/">首页</Link></Button>
            <ChevronRight className="h-3 w-3" aria-hidden="true" /><span aria-current="page">关于我们</span>
          </nav>
          <div className="grid items-center gap-7 pt-10 lg:grid-cols-[1fr_1.05fr] lg:gap-8 lg:pt-4">
            <div className="relative z-10">
              <SectionLabel>ABOUT US · 关于众凯</SectionLabel>
              <h1 id="about-title" className="mt-5 text-4xl font-bold leading-snug text-foreground sm:text-5xl">众凯加速科技</h1>
              <p className="mt-5 text-xl font-semibold leading-relaxed text-primary sm:text-2xl">面向金融与央企，做决策智能</p>
              <p className="mt-6 max-w-lg text-base leading-8 text-muted-foreground">以数据为底座，以行业知识为语义，以智能体为执行力量，让每一次业务决策都信得过、可追溯、能执行。</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="h-12 rounded-full px-7"><Link to="/contact">与我们交流 <ArrowRight aria-hidden="true" /></Link></Button>
                <Button asChild variant="outline" size="lg" className="h-12 rounded-full border-primary/25 bg-background/70 px-7 text-primary"><Link to="/solutions">探索解决方案 <ArrowRight aria-hidden="true" /></Link></Button>
              </div>
              <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-primary/15 pt-5 text-xs text-muted-foreground">
                <span>2023 年 · 北京</span><span className="h-3 w-px bg-border" aria-hidden="true" /><span>众凯决策智能平台</span>
              </div>
            </div>
            <img src={cube.url} alt="众凯全息 AI 决策魔方，连接数据决策智能、AI 与行业知识深度融合及可持续智能未来" width={1024} height={1024} fetchPriority="high" decoding="async" className="about-cube mx-auto aspect-square w-full max-w-[540px] object-contain" />
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20" aria-labelledby="company-title">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
            <div>
              <SectionLabel>企业简介</SectionLabel>
              <h2 id="company-title" className="mt-4 text-3xl font-bold leading-snug sm:text-4xl">把数据与业务，<br />连接成可信的决策</h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">众凯加速科技于 2023 年在北京设立，面向金融与央企做决策智能。</p>
              <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">以众凯决策智能平台为载体，融合数据编排、本体知识图谱与多智能体协同，把行业方法沉淀为持续可复用的能力。</p>
            </div>
            <dl className="about-company-facts self-center border-y border-primary/15 px-5 sm:px-7">
              {[["公司名称", "众凯加速科技"], ["设立时间", "2023 年"], ["所在地", "北京"], ["关注行业", "金融、央企"], ["产品", "众凯决策智能平台"]].map(([label, value]) => <div key={label} className="grid grid-cols-[80px_1fr] items-start gap-4 border-b border-primary/10 py-4 text-sm last:border-0 sm:text-base"><dt className="text-muted-foreground">{label}</dt><dd className="text-right font-medium leading-6">{value}</dd></div>)}
            </dl>
          </div>
          <h3 className="mt-12 text-lg font-semibold">我们关心三件事</h3>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {concerns.map(({ title, question, label, Icon }, i) => <article key={title} className="about-focus-card rounded-lg border border-primary/15 p-6">
              <div className="flex items-center justify-between"><Icon className="h-6 w-6 text-primary" strokeWidth={1.6} aria-hidden="true" /><span className="text-sm font-medium text-primary/50">0{i + 1}</span></div>
              <h4 className="mt-6 text-xl font-semibold">{title}</h4><p className="mt-3 min-h-14 text-sm leading-7 text-muted-foreground">{question}</p>
              <p className="mt-5 border-t border-primary/10 pt-4 text-xs font-medium text-primary">{label}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section className="border-y border-primary/10 bg-brand-soft/60 py-12 lg:py-16" aria-label="我们的数字化主张">
        <div className="mx-auto max-w-4xl px-6 text-center"><span className="mx-auto block h-1 w-10 bg-primary" aria-hidden="true" /><blockquote className="mt-6 text-xl font-semibold leading-loose sm:text-2xl">真正意义上的数字化，不是把报表搬到屏幕上，<br className="hidden lg:block" />而是让每一次业务决策都<span className="text-primary">信得过、可追溯、能执行。</span></blockquote></div>
      </section>

      <section className="py-16 lg:py-20" aria-labelledby="position-title">
        <div className="mx-auto max-w-6xl px-6">
          <SectionLabel>我们的定位</SectionLabel>
          <h2 id="position-title" className="mt-4 text-3xl font-bold leading-snug sm:text-4xl">只做一件事，并把方法沉淀下来</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">{principles.map(({ title, description: detail, Icon }) => <article key={title} className="rounded-lg border border-border bg-card p-7 shadow-card transition-colors hover:border-primary/40"><Icon className="h-7 w-7 text-primary" strokeWidth={1.6} aria-hidden="true" /><h3 className="mt-6 text-xl font-semibold">{title}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{detail}</p></article>)}</div>
        </div>
      </section>

      <section className="about-team border-y border-primary/10 py-16 lg:py-20" aria-labelledby="team-title">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center"><p className="text-sm font-medium text-primary">产学研深度融合</p><h2 id="team-title" className="mt-4 text-3xl font-bold leading-snug sm:text-4xl">学术深度 × 企业级实战</h2><p className="mt-5 text-sm leading-7 text-muted-foreground">来自清华、北大及 IBM、SAS 的专家背景，连接前沿科研、行业知识与生产级工程实践。</p></div>
          <div aria-label="团队背景机构" className="mt-10 grid grid-cols-2 items-center gap-x-6 gap-y-8 border-y border-primary/10 py-8 sm:grid-cols-4 sm:gap-10">{[{ name: "清华大学官方标识", asset: tsinghua }, { name: "北京大学官方标识", asset: peking }, { name: "IBM 官方标识", asset: ibm }, { name: "SAS 官方标识", asset: sas }].map(({ name, asset }) => <div key={name} className="flex h-16 min-w-0 items-center justify-center"><img src={asset.url} alt={name} loading="lazy" decoding="async" className="h-9 w-auto max-w-full object-contain sm:h-12 lg:h-14" /></div>)}</div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">{experts.map(({ title, en, background, Icon }) => <article key={title} className="about-expert rounded-lg border border-primary/15 p-7"><div className="flex items-center gap-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-primary"><Icon className="h-6 w-6" strokeWidth={1.6} aria-hidden="true" /></span><h3 className="text-xl font-semibold">{title}</h3></div><p className="mt-5 text-[10px] font-medium text-primary">{en}</p><ul className="mt-5 space-y-4 border-t border-primary/10 pt-5">{background.map(item => <li key={item} className="flex items-start gap-3 text-sm leading-6 text-muted-foreground"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />{item}</li>)}</ul></article>)}</div>
        </div>
      </section>

      <section className="py-16 lg:py-20" aria-labelledby="capabilities-title">
        <div className="mx-auto max-w-6xl px-6">
          <SectionLabel>核心技术优势</SectionLabel><h2 id="capabilities-title" className="mt-4 text-3xl font-bold leading-snug sm:text-4xl">三大能力底座，一个决策闭环</h2><p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground">从数据对齐，到知识推理，再到协同执行，让行业智能从理解业务走向业务行动。</p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">{capabilities.map(({ title, en, description: detail, asset, tags }, i) => <article key={title} className="about-capability group flex min-w-0 flex-col rounded-lg border border-border px-7 pb-7 pt-5 transition-colors hover:border-primary/40"><div className="flex items-center justify-between text-xs text-muted-foreground"><span>0{i + 1}</span><span>CORE CAPABILITY</span></div><img src={asset.url} alt={`${title}三维能力图标`} width={1024} height={1024} loading="lazy" decoding="async" className="mx-auto my-4 aspect-square w-full max-w-[220px] object-contain transition-transform duration-500 motion-safe:group-hover:-translate-y-2" /><h3 className="text-xl font-semibold">{title}</h3><p className="mt-2 text-xs text-primary">{en}</p><p className="mt-4 flex-1 text-sm leading-7 text-muted-foreground">{detail}</p><ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 border-t border-primary/10 pt-4 text-xs text-muted-foreground" aria-label={`${title}能力`}>{tags.map(tag => <li key={tag}>{tag}</li>)}</ul></article>)}</div>
        </div>
      </section>

      <section className="solutions-cta border-y border-primary/10 py-12 lg:py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-7 px-6 md:flex-row md:items-center"><div><p className="text-sm font-medium text-primary">众凯决策智能平台</p><h2 className="mt-3 text-2xl font-bold leading-snug sm:text-3xl">让每一次业务决策，都值得信赖</h2><p className="mt-4 text-sm leading-7 text-muted-foreground">聚焦金融与央企，与你一起把可信智能带入业务现场。</p></div><Button asChild size="lg" className="h-12 shrink-0 rounded-full px-7"><Link to="/contact">预约演示 <ArrowRight aria-hidden="true" /></Link></Button></div>
      </section>
    </main>
  );
}
