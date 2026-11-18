import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Database, Network, Bot, Landmark, Layers, Building2, Users, BrainCircuit } from "lucide-react";
import { HeroVisual } from "@/components/site/HeroVisual";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "众凯科技 | 企业 AI 解决方案" },
      { name: "description", content: "众凯把数据沉淀为统一底座，以智能体驱动全链路，为金融与央国企提供可信的 AI 解决方案。" },
      { property: "og:title", content: "众凯科技 | 企业 AI 解决方案" },
      { property: "og:description", content: "数据编排、本体建模、智能体协同，为金融与央国企提供可信的 AI 解决方案。" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function SectionHead({ en, title, desc }: { en: string; title: string; desc?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="flex items-center justify-center gap-3 text-xs font-medium tracking-[0.3em] text-primary">
        <span className="h-px w-8 bg-primary/40" />{en}<span className="h-px w-8 bg-primary/40" />
      </p>
      <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">{title}</h2>
      {desc && <p className="mt-4 leading-relaxed text-muted-foreground">{desc}</p>}
    </div>
  );
}

const steps = [
  { n: "01", t: "数据编排", d: "打通多源异构数据，构建统一数据底座，实现标准化与高质量治理。", I: Database },
  { n: "02", t: "本体建模", d: "构建行业与业务本体知识图谱，让数据具备业务语义，支撑理解与推理。", I: Network },
  { n: "03", t: "智能体协同", d: "多智能体协同作业，贯通业务流程，驱动全链路智能化运营。", I: Bot },
];
const solutions = [
  { t: "金融 AI", d: "赋能银行、证券、保险等金融机构，提升风控、合规、营销与运营效率。", tags: ["智能风控", "合规审查", "智能投研", "客户服务"], I: Landmark },
  { t: "SAS 软件国产替换解决方案", d: "基于国产化技术栈，提供 SAS 全栈替换与迁移服务，保障业务连续性与安全。", tags: ["数据分析", "模型迁移", "国产化适配", "运维支持"], I: Layers },
  { t: "央国企 AI", d: "助力央国企数字化转型，打造安全可控、自主可控的 AI 应用体系。", tags: ["国资监管", "智慧运营", "专业化管理", "知识库"], I: Building2 },
];
const experts = [
  { t: "行业专家", d: "来自金融、央国企等领域的资深专家，深刻理解行业业务与管理逻辑。", tags: ["行业洞察", "业务咨询", "方案设计"], I: Users },
  { t: "AI技术专家", d: "来自清华、北大及 IBM、SAS 的顶尖团队，具备大模型、数据工程与企业级 AI 实践经验。", tags: ["大模型", "数据工程", "AI平台"], I: BrainCircuit },
];

function Index() {
  return (
    <main>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-soft to-background pb-20 pt-36">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2">
          <div>
            <p className="text-sm font-medium text-primary">数据 × 本体 × 智能体 · 让 AI 真正创造价值</p>
            <h1 className="mt-4 text-5xl font-black tracking-tight text-foreground md:text-6xl">
              企业 <span className="text-primary">AI</span> 解决方案
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              众凯把数据沉淀为统一底座，以智能体驱动全链路，为金融与央国企提供可信的 AI 解决方案。
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-medium text-primary-foreground shadow-card transition hover:bg-primary/90">
                预约演示 <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/products" className="rounded-full border border-primary/40 bg-background px-8 py-3 font-medium text-primary transition hover:bg-brand-soft">
                了解更多
              </Link>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHead en="PLATFORM OVERVIEW" title="给企业装上一个懂业务的超级智能大脑"
            desc="众凯企业 AI 平台，以数据编排为起点，通过本体建模构建业务知识图谱，最终实现智能体协同，打造可落地、可治理、可持续的企业级 AI 能力。" />
          <div className="mt-14 grid items-stretch gap-6 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
            {steps.map((s, i) => (
              <div key={s.n} className="contents">
                <div className="group rounded-2xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:border-primary/40">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-primary"><s.I className="h-7 w-7" /></div>
                    <div>
                      <p className="text-2xl font-semibold text-primary/50">{s.n}</p>
                      <h3 className="text-xl font-bold text-foreground">{s.t}</h3>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                  <div className="mt-5 h-1 overflow-hidden rounded-full bg-brand-soft">
                    <div className="h-full rounded-full bg-primary transition-all duration-700" style={{ width: `${(i + 1) * 33}%` }} />
                  </div>
                </div>
                {i < 2 && (
                  <div className="hidden items-center md:flex">
                    <span className="h-0.5 w-4 bg-primary/40" />
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-card"><ArrowRight className="h-4 w-4" /></span>
                    <span className="h-0.5 w-4 bg-primary/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHead en="INDUSTRY SOLUTIONS" title="行业解决方案" desc="聚焦金融与央国企核心场景，提供可落地、可复制、可持续的 AI 解决方案。" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {solutions.map((s) => (
              <div key={s.t} className="group flex flex-col rounded-2xl border border-border bg-gradient-to-br from-card to-surface p-7 transition hover:border-primary/40 hover:shadow-card">
                <s.I className="h-10 w-10 text-primary" />
                <h3 className="mt-5 text-xl font-bold text-foreground">{s.t}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.tags.map((t) => <span key={t} className="rounded-full border border-primary/20 bg-brand-soft px-3 py-1 text-xs text-primary">{t}</span>)}
                </div>
                <Link to="/solutions" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  查看方案 <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHead en="OUR TEAM" title="一支既懂行业、又懂AI技术的团队" />
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {["清华大学", "北京大学", "IBM", "SAS"].map((b) => (
              <span key={b} className="rounded-full border border-border bg-card px-6 py-2 text-lg font-bold text-primary">{b}</span>
            ))}
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {experts.map((e) => (
              <div key={e.t} className="rounded-2xl border border-border bg-card p-8 shadow-card">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-primary"><e.I className="h-6 w-6" /></div>
                  <h3 className="text-xl font-bold text-foreground">{e.t}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{e.d}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {e.tags.map((t) => <span key={t} className="rounded-full bg-brand-soft px-3 py-1 text-xs text-primary">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
