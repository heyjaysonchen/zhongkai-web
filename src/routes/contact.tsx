import { createFileRoute } from "@tanstack/react-router";
import { PageSkeleton } from "@/components/site/PageSkeleton";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "联系我们 | 众凯加速科技" },
      { name: "description", content: "预约演示或咨询合作，我们将尽快与您联系。" },
      { property: "og:title", content: "联系我们 | 众凯加速科技" },
      { property: "og:description", content: "预约演示或咨询合作，我们将尽快与您联系。" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <PageSkeleton en="CONTACT" title="联系我们" desc="预约演示或咨询合作，我们将尽快与您联系。" />,
});
