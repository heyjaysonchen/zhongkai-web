import { Link } from "@tanstack/react-router";
import { ArrowRight, Layers, Network, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import sceneData from "@/assets/images/scene_data_orchestration_v1.png";
import sceneOntology from "@/assets/images/scene_ontology_graph_v1.png";
import sceneAgent from "@/assets/images/scene_multi_agent_v1.png";

const capabilities = [
  {
    title: "数据编排",
    en: "Data Orchestration",
    description: "打通多源异构数据，构建统一数据底座，实现标准化与高质量治理。",
    asset: sceneData,
    hash: "data-fabric",
  },
  {
    title: "本体建模与治理",
    en: "Ontology Modeling and Governance",
    description: "把业务对象、关系与规则结构化沉淀，让机器理解与业务语言对齐。",
    asset: sceneOntology,
    hash: "ontology-modeling",
  },
  {
    title: "多智能体协同",
    en: "Multi-Agent Synergy",
    description: "通过多智能体协作，实现复杂任务的规划、执行与自我进化。",
    asset: sceneAgent,
    hash: "multi-agent-synergy",
  },
];

export function CoreCapabilities({ en, title, desc }: { en: string; title: string; desc: string }) {
  return (
    <section id="overview" className="about-capabilities-band scroll-mt-16" aria-labelledby="capabilities-title">
      <div className="about-container">
        <div className="about-capabilities-layout">
          <div className="about-capabilities-intro">
            <p className="about-eyebrow flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-6 shrink-0 bg-primary/40" />
              {en}
              <span aria-hidden="true" className="h-px w-6 shrink-0 bg-primary/40" />
            </p>
            <h2 id="capabilities-title">{title}</h2>
            <p className="about-body">{desc}</p>
            <Button asChild className="mt-7 rounded-full px-6">
              <Link to="/products">
                了解产品 <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
          <div className="about-capabilities-grid">
            {capabilities.map((capability, index) => (
              <Link
                key={capability.hash}
                to="/products"
                hash={capability.hash}
                hashScrollIntoView={{ block: "start" }}
                className="about-capability group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                aria-label={`了解${capability.title}`}
              >
                <div className="about-capability-visual">
                  <span>0{index + 1}</span>
                  <img
                    src={capability.asset}
                    alt={`${capability.title}三维科技场景图`}
                    loading="lazy"
                    decoding="async"
                    width={1704}
                    height={923}
                  />
                </div>
                <div className="about-capability-copy">
                  <h3>{capability.title}</h3>
                  <p className="about-capability-en">{capability.en}</p>
                  <p className="about-body">{capability.description}</p>
                  <span
                    className="mt-auto inline-flex size-9 items-center justify-center self-end rounded-md text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground group-focus-visible:bg-accent group-focus-visible:text-accent-foreground"
                    aria-hidden="true"
                  >
                    <ArrowRight className="size-4 transition-transform motion-safe:group-hover:translate-x-1 motion-safe:group-focus-visible:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="about-values-row">
          <ul aria-label="企业价值">
            {[
              { title: "全栈自主可控", en: "Independent & Controllable", Icon: ShieldCheck },
              { title: "行业深度赋能", en: "Industry Empowerment", Icon: Layers },
              { title: "可信安全体系", en: "Trusted & Secure", Icon: ShieldCheck },
              { title: "开放生态共建", en: "Open Ecosystem", Icon: Network },
            ].map(({ title, en, Icon }) => (
              <li key={title}>
                <Icon aria-hidden="true" />
                <div>
                  <strong>{title}</strong>
                  <span>{en}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
