import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, Landmark, Layers, Building2, Users, BrainCircuit, ShieldCheck, Zap } from "lucide-react";
import { CoreCapabilities } from "@/components/site/CoreCapabilities";
import { HeroVisual } from "@/components/site/HeroVisual";
import tsinghuaCombo from "@/assets/images/tsinghua-university-combo.png";
import pekingCombo from "@/assets/images/peking-university-combo.png";
import ibmLogo from "@/assets/images/ibm-eight-bar.png";
import sasLogo from "@/assets/images/sas-logo-tight.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "众凯加速科技 | 企业 AI 解决方案" },
      { name: "description", content: "众凯把数据沉淀为统一底座，以智能体驱动全链路，为金融与央国企提供可信的 AI 解决方案。" },
      { property: "og:title", content: "众凯加速科技 | 企业 AI 解决方案" },
      { property: "og:description", content: "数据编织、本体建模、智能体协同，为金融与央国企提供可信的 AI 解决方案。" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const platformOverview = {
  en: "PLATFORM OVERVIEW",
  title: "给企业装上一个懂业务的超级智能大脑",
  desc: "众凯AI决策智能平台，以数据编织为起点，通过本体建模构建业务知识图谱，最终实现智能体协同，打造可落地、可治理、可持续的企业级 AI 能力。",
};

function SectionHead({ en, title, desc }: { en?: string; title: string; desc?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {en && (
  <p className="flex items-center justify-center gap-3 text-xs font-medium tracking-[0.3em] text-primary">
          <span className="h-px w-8 bg-primary/40" />{en}<span className="h-px w-8 bg-primary/40" />
        </p>
      )}
      <h2 className={`text-3xl font-bold text-foreground md:text-4xl${en ? " mt-3" : ""}`}>{title}</h2>
      {desc && <p className="mt-4 leading-relaxed text-muted-foreground">{desc}</p>}
    </div>
  );
}

const solutions = [
  { hash: "finance", t: "金融 AI", d: "赋能银行、证券、保险等金融机构，提升风控、合规、营销与运营效率。", tags: ["智能风控", "合规审查", "智能投研", "客户服务"], I: Landmark },
  { hash: "sas-migration", t: "SAS 软件国产替换解决方案", d: "基于国产化技术栈，提供 SAS 全栈替换与迁移服务，保障业务连续性与安全。", tags: ["数据分析", "模型迁移", "国产化适配", "运维支持"], I: Layers },
  { hash: "central-soe", t: "央国企 AI", d: "助力央国企数字化转型，打造安全可控、自主可控的 AI 应用体系。", tags: ["国资监管", "智慧运营", "专业化管理", "知识库"], I: Building2 },
];
const experts = [
  { t: "行业专家", d: "来自金融、央国企等领域的资深专家，深刻理解行业业务与管理逻辑。", tags: ["行业洞察", "业务咨询", "方案设计"], I: Users },
  { t: "AI技术专家", d: "来自清华、北大及 IBM、SAS 的顶尖团队，具备大模型、数据工程与企业级 AI 实践经验。", tags: ["大模型", "数据工程", "AI平台"], I: BrainCircuit },
];

const institutions = [
  { name: "清华大学官方标识", asset: tsinghuaCombo },
  { name: "北京大学官方标识", asset: pekingCombo },
  { name: "IBM 官方标识", asset: ibmLogo },
  { name: "SAS 官方标识", asset: sasLogo },
];

function Index() {
  return (
    <main>
      <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-gradient-to-b from-brand-soft to-background pb-20 pt-28">
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <p className="text-sm font-medium text-primary">数据 × 本体 × 智能体 · 让 AI 真正创造价值</p>
            <h1 className="mt-6 text-5xl font-black leading-tight tracking-tight text-foreground md:text-6xl xl:text-7xl">
              企业 <span className="text-primary">AI</span> 解决方案
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-loose text-muted-foreground xl:text-xl">
              众凯把数据沉淀为统一底座，以智能体驱动全链路，为金融与央国企提供可信的 AI 解决方案。
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link to="/products" className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-medium text-primary-foreground shadow-card transition hover:bg-primary/90">
                了解产品 <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/solutions" className="rounded-full border border-primary/40 bg-background px-8 py-3 font-medium text-primary transition hover:bg-brand-soft">
                查看解决方案
              </Link>
            </div>
            <ul aria-label="平台特性" className="mt-10 grid grid-cols-1 gap-5 border-t border-primary/15 pt-6 sm:grid-cols-3 sm:gap-4">
              {[
                { title: "安全合规", description: "企业级数据安全保障", Icon: ShieldCheck },
                { title: "高效智能", description: "提升 60%+ 业务效率", Icon: Zap },
                { title: "灵活可扩展", description: "支持私有化与多云部署", Icon: Layers },
              ].map(({ title, description, Icon }) => (
                <li key={title} className="min-w-0">
                  <div className="flex items-center gap-2">
                    <Icon aria-hidden="true" className="h-[18px] w-[18px] shrink-0 text-primary" strokeWidth={1.7} />
                    <span className="text-sm font-semibold text-foreground">{title}</span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="mx-auto w-full max-w-[760px]"><HeroVisual /></div>
        </div>
        <a href="#overview" aria-label="向下滚动" className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-primary/70 transition hover:text-primary">
          <span className="text-[10px] tracking-[0.3em]">SCROLL</span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </a>
      </section>

      <CoreCapabilities {...platformOverview} />

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHead title="行业解决方案" desc="聚焦金融与央国企核心场景，提供可落地、可复制、可持续的 AI 解决方案。" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {solutions.map((s) => (
              <div key={s.t} className="group flex flex-col rounded-2xl border border-border bg-gradient-to-br from-card to-surface p-7 transition hover:border-primary/40 hover:shadow-card">
                <s.I className="h-10 w-10 text-primary" />
                <h3 className="mt-5 text-xl font-bold text-foreground">{s.t}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.tags.map((t) => <span key={t} className="rounded-full border border-primary/20 bg-brand-soft px-3 py-1 text-xs text-primary">{t}</span>)}
                </div>
                <Link to="/solutions" hash={s.hash} hashScrollIntoView={{ block: "start" }} className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary">
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
          <div aria-label="团队背景机构" className="mx-auto mt-10 grid max-w-5xl grid-cols-2 items-center gap-x-6 gap-y-8 sm:flex sm:flex-wrap sm:justify-between sm:gap-x-10 sm:gap-y-0">
            {institutions.map((it) => (
              <div key={it.name} className="flex h-16 min-w-0 items-center justify-center">
                <img src={it.asset} alt={it.name} loading="lazy" decoding="async" className="h-9 w-auto max-w-[150px] object-contain sm:h-14 sm:max-w-[210px]" />
              </div>
            ))}
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {experts.map((e) => (
              <Link
                key={e.t}
                to="/about"
                aria-label={`了解${e.t}`}
                className="group relative block rounded-2xl border border-border bg-card p-8 shadow-card transition hover:border-primary/40 hover:shadow-card focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-primary"><e.I className="h-6 w-6" /></div>
                  <h3 className="flex-1 text-xl font-bold text-foreground">{e.t}</h3>
                  <ArrowRight aria-hidden="true" className="h-5 w-5 shrink-0 text-primary transition-transform motion-safe:group-hover:translate-x-1" />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{e.d}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {e.tags.map((t) => <span key={t} className="rounded-full bg-brand-soft px-3 py-1 text-xs text-primary">{t}</span>)}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
