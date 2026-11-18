import { createFileRoute } from "@tanstack/react-router";
import { PageSkeleton } from "@/components/site/PageSkeleton";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "关于我们 | 众凯科技" },
      { name: "description", content: "一支既懂行业、又懂 AI 技术的团队。" },
      { property: "og:title", content: "关于我们 | 众凯科技" },
      { property: "og:description", content: "一支既懂行业、又懂 AI 技术的团队。" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <PageSkeleton en="ABOUT US" title="关于我们" desc="一支既懂行业、又懂 AI 技术的团队。" />,
});
