import { BrainCircuit, FileText, Users, Package, Workflow, Database, BookOpen } from "lucide-react";
import clusterAsset from "@/assets/hero_cluster_clean.png.asset.json";

const nodes = [
  { id: "documents", label: "文档", subtitle: "非结构化信息", Icon: FileText },
  { id: "people", label: "人员", subtitle: "组织与角色", Icon: Users },
  { id: "products", label: "产品", subtitle: "产品与服务", Icon: Package },
  { id: "business", label: "业务", subtitle: "流程与决策", Icon: Workflow },
  { id: "data", label: "数据", subtitle: "统一数据底座", Icon: Database },
  { id: "knowledge", label: "知识", subtitle: "业务语义网络", Icon: BookOpen },
];

export function HeroVisual() {
  return (
    <div className="hero-cluster" role="group" aria-label="企业智能核心与六大业务本体网络">
      <img src={clusterAsset.url} alt="" width={828} height={768} fetchPriority="high" decoding="async" className="hero-cluster-image" />
      <div className="hero-cluster-node hero-cluster-core" tabIndex={0}>
        <div className="hero-cluster-label">
          <BrainCircuit aria-hidden="true" />
          <strong>企业智能核心</strong>
          <span>理解 · 推理 · 协同</span>
        </div>
      </div>
      {nodes.map(({ id, label, subtitle, Icon }) => (
        <div key={id} className={`hero-cluster-node hero-cluster-${id}`} tabIndex={0}>
          <div className="hero-cluster-label">
            <Icon aria-hidden="true" />
            <strong>{label}</strong>
            <span>{subtitle}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
