import { createFileRoute } from "@tanstack/react-router";
import { PageSkeleton } from "@/components/site/PageSkeleton";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "产品 | 众凯加速科技" },
      { name: "description", content: "数据编排、本体建模与智能体协同，构成众凯企业 AI 平台。" },
      { property: "og:title", content: "产品 | 众凯加速科技" },
      { property: "og:description", content: "数据编排、本体建模与智能体协同，构成众凯企业 AI 平台。" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <PageSkeleton en="PRODUCTS" title="产品" desc="数据编排、本体建模与智能体协同，构成众凯企业 AI 平台。" />,
});
