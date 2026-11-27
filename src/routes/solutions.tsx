import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { ArrowRight, CircleAlert, FileSearch, ShieldCheck, TrendingUp, Check } from "lucide-react";
import architecture from "@/assets/images/solutions_hero_architecture.png";
import { CardDialogTrigger } from "@/components/site/CardDialogTrigger";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { industrySolutions, type IndustrySolution, type SolutionCapability } from "@/components/site/solution-content";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "金融、SAS 国产替换与央国企 AI 解决方案 | 众凯加速科技" },
      { name: "description", content: "以统一数据底座驱动金融与央国企决策升级，提供金融 AI、SAS 软件国产替换和央国企 AI 解决方案，支持结果复算、迁移回退与本地化部署。" },
      { property: "og:title", content: "行业解决方案 | 众凯加速科技" },
      { property: "og:description", content: "聚焦金融 AI、SAS 软件国产替换与央国企 AI，以数据、本体和智能体驱动可信业务决策。" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SolutionsPage,
});

type SelectedDetail = { solution: IndustrySolution; capability?: SolutionCapability };

function SolutionsPage() {
  const [selected, setSelected] = useState<SelectedDetail | null>(null);
  const detailTrigger = useRef<HTMLButtonElement>(null);

  function openDetail(next: SelectedDetail, trigger: HTMLButtonElement) {
    detailTrigger.current = trigger;
    setSelected(next);
  }

  return (
    <main>
      <section className="solutions-hero overflow-hidden pb-14 pt-30 lg:pb-20 lg:pt-40">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-6">
            <div>
              <h1 className="text-3xl font-bold leading-snug text-foreground sm:text-4xl lg:text-[42px]">金融与央国企AI解决方案</h1>
              <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground">用同一套企业超级智能大脑，解决金融与央国企决策难题，实现存量软件平滑国产替换。</p>
              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-xs text-muted-foreground" aria-label="方案价值">
                {[
                  { Icon: FileSearch, title: "更可靠的行业智能" },
                  { Icon: ShieldCheck, title: "更安全的自主可控" },
                  { Icon: TrendingUp, title: "更高的业务价值" },
                ].map(({ Icon, title }) => <li key={title} className="flex items-center gap-2"><Icon className="h-4 w-4 text-primary" aria-hidden="true" />{title}</li>)}
              </ul>
            </div>
            <img src={architecture} alt="企业应用、核心 AI 与代码转译引擎、统一数据底座组成的三层解决方案架构" width="1536" height="1120" fetchPriority="high" className="mx-auto block h-auto w-full max-w-[460px] object-contain" />
          </div>
        </div>
      </section>

      <div className="bg-surface py-8 lg:py-10">
        <div className="mx-auto max-w-6xl space-y-10 px-6 lg:space-y-12">
          {industrySolutions.map((solution) => (
            <section key={solution.id} id={solution.id} aria-labelledby={`${solution.id}-title`} className="scroll-mt-24 border-b border-border pb-10 last:border-0 last:pb-0">
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                <div className="flex min-w-0 basis-full items-center gap-3 sm:basis-auto sm:flex-1">
                  <img src={solution.badge} alt="" width="64" height="64" loading="lazy" className="h-14 w-14 shrink-0 object-contain sm:h-16 sm:w-16" />
                  <div className="min-w-0">
                    <h2 id={`${solution.id}-title`} className="text-xl font-bold leading-snug text-foreground sm:text-2xl">{solution.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{solution.description}</p>
                  </div>
                </div>
                <Button
                  type="button"
                  variant="link"
                  className="ml-[68px] shrink-0 px-0 sm:ml-0"
                  aria-label={`了解更多：${solution.title}`}
                  aria-haspopup="dialog"
                  onClick={(event) => openDetail({ solution }, event.currentTarget)}
                >
                  了解更多 <ArrowRight aria-hidden="true" />
                </Button>
              </div>
              <div className="grid items-stretch gap-5 lg:grid-cols-[270px_1fr]">
                <aside className="rounded-lg bg-challenge px-5 py-5" aria-label={`${solution.title}业务痛点`}>
                  <h3 className="flex items-center gap-2 text-base font-semibold"><CircleAlert className="h-5 w-5 text-challenge-foreground" aria-hidden="true" />业务痛点</h3>
                  <ul className="mt-5 space-y-5">
                    {solution.problems.map((problem) => <li key={problem.title} className="flex items-start gap-3"><FileSearch className="mt-0.5 h-4 w-4 shrink-0 text-challenge-foreground" aria-hidden="true" /><div><h4 className="text-sm font-semibold leading-5">{problem.title}</h4><p className="mt-1 text-xs leading-5 text-muted-foreground">{problem.description}</p></div></li>)}
                  </ul>
                </aside>
                <div className="min-w-0">
                  <p className="mb-4 rounded-md bg-brand-soft px-4 py-3 text-sm font-semibold leading-6 text-primary sm:text-base">{solution.outcome}</p>
                  <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                    {solution.capabilities.map((capability) => (
                      <article key={capability.title} className="solution-capability interactive-card group flex min-w-0 flex-col rounded-lg border border-border bg-card p-4 transition-[border-color,box-shadow]">
                        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-soft text-primary"><capability.Icon className="h-6 w-6" strokeWidth={1.7} aria-hidden="true" /></div>
                        <h3 className="text-sm font-semibold leading-6">{capability.title}</h3>
                        <p className="mb-3 mt-2 flex-1 text-xs leading-6 text-muted-foreground">{capability.description}</p>
                        <CardDialogTrigger
                          label={`查看${capability.title}`}
                          arrowClassName="-ml-2"
                          onClick={(event) => openDetail({ solution, capability }, event.currentTarget)}
                        />
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>

      <Dialog open={selected !== null} onOpenChange={(open) => { if (!open) setSelected(null); }}>
        <DialogContent
          className="max-h-[85svh] w-[calc(100%-2rem)] max-w-2xl overflow-y-auto rounded-lg p-6 sm:p-8"
          onCloseAutoFocus={(event) => {
            event.preventDefault();
            detailTrigger.current?.focus({ preventScroll: true });
          }}
        >
          {selected && <>
            <DialogHeader className="pr-6 text-left">
              <p className="mb-2 text-xs font-medium text-primary">{selected.solution.title}</p>
              <DialogTitle className="text-xl leading-normal">{selected.capability?.title ?? selected.solution.outcome}</DialogTitle>
              <DialogDescription className="pt-3 leading-7">{selected.capability?.detail ?? selected.solution.description}</DialogDescription>
            </DialogHeader>
            {!selected.capability && <ul className="space-y-4 border-t border-border pt-5">{selected.solution.capabilities.map((capability) => <li key={capability.title} className="flex gap-3"><Check className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" /><div><h3 className="text-sm font-semibold">{capability.title}</h3><p className="mt-1 text-sm leading-6 text-muted-foreground">{capability.detail}</p></div></li>)}</ul>}
            <div className="mt-2 border-t border-border pt-5">
              <h3 className="mb-4 text-sm font-semibold">实施路径</h3>
              <ol className="space-y-4">{selected.solution.delivery.map((step, index) => <li key={step.title} className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-soft text-xs font-semibold text-primary">{index + 1}</span><div><h4 className="text-sm font-semibold">{step.title}</h4><p className="mt-1 text-xs leading-6 text-muted-foreground">{step.description}</p></div></li>)}</ol>
            </div>
          </>}
        </DialogContent>
      </Dialog>
    </main>
  );
}
