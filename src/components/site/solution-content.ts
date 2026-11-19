import { ShieldCheck, ChartColumnIncreasing, Bot, FileText, Database, CodeXml, CopyCheck, Settings, Network, Link2, ChartNoAxesCombined, type LucideIcon } from "lucide-react";
import finance from "@/assets/badge_finance_3d.png.asset.json";
import sas from "@/assets/badge_sas_migration_3d.png.asset.json";
import soe from "@/assets/badge_central_soe_3d.png.asset.json";

export type SolutionCapability = { title: string; description: string; detail: string; Icon: LucideIcon };
export type IndustrySolution = {
  id: string; title: string; description: string; badge: string; outcome: string;
  problems: { title: string; description: string }[];
  capabilities: SolutionCapability[];
  delivery: { title: string; description: string }[];
};

export const industrySolutions: IndustrySolution[] = [
  {
    id: "finance", title: "金融 AI 解决方案", badge: finance.url,
    description: "面向银行、证券、保险、资管等金融机构，构建安全、可控、可解释的智能决策能力。",
    outcome: "结论可溯源 · 权限可管控 · 报告直接出",
    problems: [
      { title: "指标口径不一致", description: "多系统、多业务线，指标定义不统一" },
      { title: "报表归因困难", description: "报表层级复杂，难以快速定位原因" },
      { title: "审批排查难以复核", description: "缺乏完整证据链，历史过程难以复现" },
    ],
    capabilities: [
      { title: "风险集中与限额", description: "实时识别风险集中度，智能预警与限额管理", detail: "关联客户、集团、行业与资产敞口，统一风险口径；结合限额规则识别集中度变化，保留预警依据与处置记录。", Icon: ShieldCheck },
      { title: "管理指标解释", description: "基于业务语义的指标智能解释与归因分析", detail: "将指标定义、计算逻辑与业务实体关联，从机构、产品、客群等维度追溯变化原因，提供可核查的数据来源。", Icon: ChartColumnIncreasing },
      { title: "经营智能问数", description: "用自然语言快速获取经营数据与深度分析", detail: "在用户数据权限范围内完成自然语言查询，关联业务知识与数据口径，返回分析结果、引用依据及后续追问。", Icon: Bot },
      { title: "审批依据留痕", description: "全过程记录关键依据，支持审计与合规复核", detail: "保留查询、分析、规则命中与人工审批记录，形成可追溯证据链，并按业务模板生成报告。", Icon: FileText },
    ],
    delivery: [
      { title: "统一业务口径", description: "梳理指标、数据源与权限，建立金融业务本体。" },
      { title: "场景试点验证", description: "围绕风控、经营分析或审批场景开展验证与人工复核。" },
      { title: "持续治理运营", description: "纳入权限、审计与模型监控，逐步推广到更多业务线。" },
    ],
  },
  {
    id: "sas-migration", title: "SAS 软件国产替换解决方案", badge: sas.url,
    description: "面向使用 SAS 的金融及大型企业，提供安全、可靠、平滑的国产化替换路径。",
    outcome: "结果可复算 · 迁移可回退 · 按批次平滑切换",
    problems: [
      { title: "存量宏与模型黑盒化", description: "历史代码复杂，业务逻辑难以理解" },
      { title: "统计算法精度零容忍", description: "模型结果要求高度一致，精度不能随意牺牲" },
      { title: "业务连续性与停机风险", description: "系统切换风险高，需保障业务稳定运行" },
    ],
    capabilities: [
      { title: "存量资产盘点分级", description: "全面梳理 SAS 宏、模型和作业，按业务重要性分级", detail: "盘点 DATA Step、PROC、宏程序、统计模型、调度作业与外部依赖，识别业务关键路径，形成资产清单、复杂度分级和迁移批次。", Icon: Database },
      { title: "代码智能解析转换", description: "基于 AI 的代码语义理解，自动转换与优化", detail: "解析 SAS 数据处理与宏依赖，将适合迁移的逻辑转换为 Python、SQL 或目标平台作业；对复杂统计过程逐项映射，并由专家复核。", Icon: CodeXml },
      { title: "双跑并行比对校验", description: "新旧结果多维度比对，确保业务逻辑一致", detail: "使用相同输入和业务样本开展新旧系统双跑，校验记录数、缺失值、排序、数值精度与模型输出；按业务约定设置容差，差异闭环后再验收。", Icon: CopyCheck },
      { title: "存量模型平稳重训", description: "基于国产平台完成模型重训与验证，平滑切换", detail: "复核特征工程、训练样本、参数与评估口径，在目标环境完成模型重训及效果验证；分批灰度切换，保留回退路径和运行监控。", Icon: Settings },
    ],
    delivery: [
      { title: "评估与试点", description: "确认资产范围、国产操作系统与数据库环境，选取代表性作业验证。" },
      { title: "转换与验收", description: "完成代码转换、依赖适配与模型验证；双跑比对并闭环处理差异。" },
      { title: "切换与保障", description: "分批上线，保留回退方案，交付文档、培训与持续运维支持。" },
    ],
  },
  {
    id: "central-soe", title: "央国企 AI 解决方案", badge: soe.url,
    description: "面向中央企业与地方国企，支撑集团化管控、经营分析与重大决策，助力高质量发展。",
    outcome: "本地化部署 · 信创深度适配 · 正式材料报送",
    problems: [
      { title: "集团与分子公司口径不一", description: "多层级、多板块，数据标准难统一" },
      { title: "跨系统对账成本高", description: "系统众多，数据孤岛严重，对账效率低" },
      { title: "决策链路难以留痕", description: "重大决策过程缺乏完整记录与依据" },
    ],
    capabilities: [
      { title: "集团指标一本账", description: "统一指标体系与数据口径，实现集团全局视图", detail: "贯通集团、板块与分子公司指标体系，统一定义和汇总规则，保留指标来源与责任主体，支撑穿透式管理。", Icon: Network },
      { title: "跨系统语义对齐", description: "打通多源系统，基于语义对齐实现高效对账", detail: "将财务、业务、资产与组织数据映射到统一业务本体，关联编码与业务关系，识别对账差异并追溯原始记录。", Icon: Link2 },
      { title: "经营异常穿透归因", description: "从集团到业务单元，智能分析异常原因", detail: "围绕经营指标变化，逐层穿透到板块、公司和业务明细，结合业务规则与知识提供可复核的分析依据。", Icon: ChartNoAxesCombined },
      { title: "重大决策依据留痕", description: "形成完整决策证据链，支持正式材料报送", detail: "关联决策材料、数据依据与审批过程，在权限管控下按模板生成报告，保留引用来源与版本记录。", Icon: FileText },
    ],
    delivery: [
      { title: "数据与本体建设", description: "梳理集团组织、指标与业务实体，建立统一语义底座。" },
      { title: "信创环境适配", description: "结合现有基础设施开展本地化部署、系统对接与安全验证。" },
      { title: "集团场景推广", description: "从经营分析与报送场景切入，按板块分步推广与运营。" },
    ],
  },
];