import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { ArrowRight, Mail, QrCode } from "lucide-react";
import { CardDialogTrigger } from "@/components/site/CardDialogTrigger";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import cube from "@/assets/images/about_hero_3d_city_soft_bokeh.png";
import zhang from "@/assets/images/expert_zhang_portrait.jpg";
import li from "@/assets/images/expert_li_portrait.jpg";
import wang from "@/assets/images/expert_wang_portrait.jpg";
import tsinghua from "@/assets/images/tsinghua-university-combo.png";
import peking from "@/assets/images/peking-university-combo.png";
import ibm from "@/assets/images/ibm-eight-bar.png";
import sas from "@/assets/images/sas-logo-tight.png";
import wechatQr from "@/assets/images/wechat-official-qrcode.jpg";

const description = "众凯加速科技于 2023 年在北京设立，面向金融与央企做决策智能平台。释放数据要素价值，让每一次业务决策都信得过、可追溯、能执行。";
const contactEmail = "contact@zhongkaitech.com.cn";
export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "关于众凯加速科技 | 自主可控的决策智能" },
    { name: "description", content: description },
    { property: "og:title", content: "关于众凯加速科技 | 自主可控的决策智能" },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: AboutPage,
});

const experts = [
  { name: "张明远", title: "创始人兼 CEO", photo: zhang, background: ["清华大学计算机系博士", "前 IBM 研究院首席研究员"] },
  { name: "李思涵", title: "行业专家", photo: li, background: ["北京大学人工智能博士", "SAS 前高级研究科学家"] },
  { name: "王建国", title: "AI 技术专家", photo: wang, background: ["IBM 前杰出工程师", "分布式系统与大数据专家"] },
];
type Detail = { type: "expert"; index: number } | { type: "team" };

function AboutPage() {
  const [detail, setDetail] = useState<Detail | null>(null);
  const detailTrigger = useRef<HTMLButtonElement>(null);
  const selectedExpert = detail?.type === "expert" ? experts[detail.index] : undefined;

  function openDetail(next: Detail, trigger: HTMLButtonElement) {
    detailTrigger.current = trigger;
    setDetail(next);
  }

  return (
    <main className="about-page">
      <section className="about-hero" aria-labelledby="about-title">
        <div className="about-container about-hero-layout">
          <div className="about-hero-copy">
            <p className="about-eyebrow about-badge">ABOUT US</p>
            <h1 id="about-title">自主可控的超级智能，<br /><span className="text-primary">重构企业决策范式</span></h1>
            <p className="about-hero-description">{description}</p>
            <ul className="about-metrics" aria-label="公司设立信息">
              {[{ value: "2023", unit: "年", label: "公司设立·北京" }].map(item => <li key={item.value}><strong>{item.value}<span>{item.unit}</span></strong><p>{item.label}</p></li>)}
            </ul>
          </div>
          <div className="about-hero-art"><img src={cube} alt="多层水晶 AI 决策魔方悬浮于柔和虚化的城市天际线前，核心发光，四周环绕悬浮数据卡片" width={1616} height={976} fetchPriority="high" decoding="async" className="about-cube" /></div>
        </div>
      </section>

      <section className="about-research-band" aria-labelledby="research-title">
        <div className="about-container about-research-layout">
          <div className="about-research-intro">
            <p className="about-eyebrow">RESEARCH &amp; ACADEMIC</p>
            <h2 id="research-title">产学研协同 · 打造世界级技术底座</h2>
            <p className="about-body">众凯加速科技与全球顶尖高校及科研机构深度合作，构建产学研一体化的创新体系，将前沿研究转化为可落地的行业解决方案。</p>
            <div className="about-logos" aria-label="产学研协同机构">
              {[{ name: "清华大学", asset: tsinghua }, { name: "北京大学", asset: peking }, { name: "IBM", asset: ibm }, { name: "SAS", asset: sas }].map(item => <div className="about-logo-card" key={item.name}><img src={item.asset} alt={`${item.name}官方标识`} loading="lazy" decoding="async" /></div>)}
            </div>
          </div>
          <div className="min-w-0 about-team-col">
            <div className="about-team-heading">
              <h2>创业团队</h2>
              <Button
                type="button"
                variant="link"
                className="h-auto shrink-0 p-0 text-xs"
                aria-haspopup="dialog"
                onClick={(event) => openDetail({ type: "team" }, event.currentTarget)}
              >
                查看更多 <ArrowRight aria-hidden="true" />
              </Button>
            </div>
            <div className="about-experts">
              {experts.map((expert, index) => (
                <article key={expert.name} className="about-expert interactive-card group">
                  <div className="about-portrait"><img src={expert.photo} alt={`${expert.name}博士肖像`} width={164} height={102} loading="lazy" decoding="async" /></div>
                  <div className="about-expert-copy">
                    <h3>{expert.name}<span>博士</span></h3>
                    <p className="about-expert-role">{expert.title}</p>
                    <ul>{expert.background.map(line => <li key={line}>{line}</li>)}</ul>
                  </div>
                  <CardDialogTrigger
                    label={`查看${expert.name}博士档案`}
                    arrowClassName="about-card-arrow"
                    onClick={(event) => openDetail({ type: "expert", index }, event.currentTarget)}
                  />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-quote-band"><div className="about-container"><p className="about-eyebrow">众凯决策智能平台</p><blockquote>真正意义上的数字化，不是把报表搬到屏幕上，<br className="hidden md:block" />而是让每一次业务决策都<span className="text-primary">信得过、可追溯、能执行。</span></blockquote></div></section>

      <section className="about-contact-band" aria-labelledby="contact-title">
        <div className="about-container">
          <h2 id="contact-title" className="about-contact-heading">联系我们</h2>
          <div className="about-contact-grid">
            <article className="about-contact-card">
              <span className="about-semantic-icon"><Mail aria-hidden="true" /></span>
              <p className="about-contact-label">商务邮箱</p>
              <a className="about-contact-value" href={`mailto:${contactEmail}`}>{contactEmail}</a>
              <p className="about-contact-copy">产品咨询、方案交流与合作洽谈，均可通过邮件沟通。我们会在收到邮件后尽快回复。</p>
            </article>
            <article className="about-contact-card about-contact-card-wechat">
              <div className="min-w-0">
                <span className="about-semantic-icon"><QrCode aria-hidden="true" /></span>
                <p className="about-contact-label">微信公众号</p>
                <p className="about-contact-name">众凯加速科技</p>
                <p className="about-contact-copy">关注公众号，获取产品动态、行业观察与方法分享。</p>
              </div>
              <div className="about-contact-qr"><img src={wechatQr} alt="众凯加速科技官方微信公众号二维码" width={128} height={128} loading="lazy" decoding="async" /><span>扫码关注</span></div>
            </article>
          </div>
        </div>
      </section>

      <Dialog open={detail !== null} onOpenChange={open => { if (!open) setDetail(null); }}>
        <DialogContent
          className="max-h-[85svh] overflow-y-auto rounded-lg sm:max-w-2xl"
          onCloseAutoFocus={(event) => {
            event.preventDefault();
            detailTrigger.current?.focus({ preventScroll: true });
          }}
        >
          <DialogHeader><DialogTitle>{selectedExpert ? `${selectedExpert.name}博士 · ${selectedExpert.title}` : "创业团队"}</DialogTitle><DialogDescription>{selectedExpert ? "学术深度与企业级实战的双轨背景" : "产学研深度融合，连接前沿科研与生产级工程实践。"}</DialogDescription></DialogHeader>
        {selectedExpert && <div className="flex flex-col gap-6 sm:flex-row"><div className="about-portrait w-full shrink-0 rounded-lg sm:w-52"><img src={selectedExpert.photo} alt={`${selectedExpert.name}博士肖像`} /></div><ul className="space-y-3 self-center text-sm leading-7">{selectedExpert.background.map(line => <li key={line}>{line}</li>)}</ul></div>}
        {detail?.type === "team" && <div className="space-y-5">{experts.map(expert => <div key={expert.name} className="border-b border-border pb-5 last:border-0"><h3 className="font-semibold">{expert.name}博士 · {expert.title}</h3><p className="mt-2 text-sm leading-7 text-muted-foreground">{expert.background.join(" · ")}</p></div>)}</div>}
        </DialogContent>
      </Dialog>
    </main>
  );
}
