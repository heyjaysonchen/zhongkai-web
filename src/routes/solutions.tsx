import { createFileRoute } from "@tanstack/react-router";
import { PageSkeleton } from "@/components/site/PageSkeleton";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "解决方案 | 众凯科技" },
      { name: "description", content: "面向金融与央国企的可落地 AI 解决方案。" },
      { property: "og:title", content: "解决方案 | 众凯科技" },
      { property: "og:description", content: "面向金融与央国企的可落地 AI 解决方案。" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <PageSkeleton en="SOLUTIONS" title="解决方案" desc="面向金融与央国企的可落地 AI 解决方案。" />,
});
