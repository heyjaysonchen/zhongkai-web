import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { Mail, QrCode, UserRound, UsersRound } from "lucide-react";
import { CardDialogTrigger } from "@/components/site/CardDialogTrigger";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import cube from "@/assets/images/about_hero_3d_city_soft_bokeh.png";
import chenYunkai from "@/assets/images/chen_yunkai_portrait.png";
import tsinghua from "@/assets/images/tsinghua-university-combo.png";
import peking from "@/assets/images/peking-university-combo.png";
import ibm from "@/assets/images/ibm-eight-bar.png";
import sas from "@/assets/images/sas-logo-tight.png";
import datacanvas from "@/assets/images/datacanvas-logo.png";
import bairong from "@/assets/images/bairong-logo.png";
import wechatQr from "@/assets/images/wechat-official-qrcode.jpg";

const description =
  "众凯加速科技于 2023 年在北京设立，面向金融与央企做决策智能平台。释放数据要素价值，让每一次业务决策都信得过、可追溯、能执行。";
const contactEmail = "contact@zhongkaitech.com.cn";
export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "关于众凯加速科技 | 自主可控的决策智能" },
      { name: "description", content: description },
      { property: "og:title", content: "关于众凯加速科技 | 自主可控的决策智能" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const partners = [
  { name: "清华大学", asset: tsinghua },
  { name: "北京大学", asset: peking },
  { name: "IBM", asset: ibm },
  { name: "SAS", asset: sas },
  { name: "九章云极", asset: datacanvas },
  { name: "百融智能", asset: bairong },
];

const founder = {
  name: "陈云凯",
  degree: "",
  title: "创始人 & CEO",
  photo: chenYunkai,
  lead: "前百融智能 · 九章云极合伙人",
  background: [
    "国内头部创业公司销售合伙人，二十年金融+AI经验",
    "5+年的连续创业经验，深度参与百融、九章创业过程",
    "清华材料+经管双学位，前Oracle/微软/IBM/SAS金融行业负责人",
    "清华校友总会AI大数据专委会理事/IBM创业联盟发起人",
    "在AI、大数据、金融领域有丰富成功案例，综合能力极强",
    "保监会顾问，保险行业企业信息化KOL",
  ],
};

const advisors = {
  name: "资深 CTO 技术顾问团",
  degree: "",
  title: "架构评审 · 行业导师 · 战略护航",
  background: [
    "美国康奈尔大学硕士、VMware 中国研发高管、IBM 技术专家",
    "复旦大学背景、中国顶尖数据库专家、IBM 和 Oracle 中国技术专家",
    "某市值数百亿的保险行业信息化企业创始人兼 CEO、博士生导师",
  ],
};

const team = [
  {
    name: "李尚忠",
    degree: "硕士",
    title: "技术合伙人",
    background: [
      "北京大学计算机硕士、中国科学院大学 AI MBA",
      "曾任 IBM、阿里云、金山云高级解决方案专家，从业 20 年以上",
      "保险信息系统和大模型系统建设实践先锋",
    ],
  },
  {
    name: "谢国忠",
    degree: "博士",
    title: "CDO",
    background: [
      "Teradata 中国区副总、IBM 咨询合伙人、埃森哲首席数据科学家",
      "阳光保险集团 CDO",
      "创业公司总经理，拥有三十年大数据与业务分析经验",
    ],
  },
  {
    name: "肖柏华",
    degree: "博士后",
    title: "首席顾问",
    background: [
      "中国科学院自动化研究所研究员、博士生导师，IEEE 和 INCOSE 会员",
      "研究领域为模式识别与智能系统",
      "在国内外核心会议和期刊发表文章 30 余篇，获授权或申请专利 10 项",
    ],
  },
  advisors,
];
type Expert = typeof founder | (typeof team)[number];

function AboutPage() {
  const [selectedExpert, setSelectedExpert] = useState<Expert | null>(null);
  const detailTrigger = useRef<HTMLButtonElement>(null);

  function openDetail(next: Expert, trigger: HTMLButtonElement) {
    detailTrigger.current = trigger;
    setSelectedExpert(next);
  }

  return (
    <main className="about-page">
      <section className="about-hero" aria-labelledby="about-title">
        <div className="about-container about-hero-layout">
          <div className="about-hero-copy">
            <p className="about-eyebrow about-badge">ABOUT US</p>
            <h1 id="about-title">
              自主可控的超级智能，
              <br />
              <span className="text-primary">重构企业决策范式</span>
            </h1>
            <p className="about-hero-description">{description}</p>
            <ul className="about-metrics" aria-label="公司设立信息">
              {[{ value: "2023", unit: "年", label: "公司设立·北京" }].map((item) => (
                <li key={item.value}>
                  <strong>
                    {item.value}
                    <span>{item.unit}</span>
                  </strong>
                  <p>{item.label}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="about-hero-art">
            <img
              src={cube}
              alt="多层水晶 AI 决策魔方悬浮于柔和虚化的城市天际线前，核心发光，四周环绕悬浮数据卡片"
              width={1616}
              height={976}
              fetchPriority="high"
              decoding="async"
              className="about-cube"
            />
          </div>
        </div>
      </section>

      <section className="about-research-band" aria-labelledby="research-title">
        <div className="about-container">
          <div className="about-research-intro">
            <p className="about-eyebrow">RESEARCH &amp; INDUSTRY SYNERGY · 产学研用生态</p>
            <h2 id="research-title">产学研用深度协同 · 打造世界级技术底座</h2>
            <p className="about-body">
              深度联动顶尖高校前沿科研、国际计算巨头与一线产业 AI 伙伴，构建“源头算法研发 -
              基础设施支撑 - 生产级业务落地”的全链条创新底座。
            </p>
            <ul className="about-logos" aria-label="产学研用生态合作方">
              {partners.map(({ name, asset }) => (
                <li className="about-logo-card" key={name}>
                  <img src={asset} alt={name} loading="lazy" decoding="async" />
                </li>
              ))}
            </ul>
          </div>
          <section id="team" className="about-team scroll-mt-24" aria-labelledby="team-title">
            <p className="about-eyebrow">CORE LEADERSHIP &amp; TALENTS</p>
            <h2 id="team-title">核心团队</h2>
            <p className="about-body">五年创业准备，团队由行业专家+AI技术精英+老中青组合</p>
            <article className="about-founder interactive-card group">
              <img
                className="about-founder-photo"
                src={founder.photo}
                alt={`${founder.name}肖像`}
                width={212}
                height={266}
                loading="lazy"
              />
              <div>
                <div className="about-founder-heading">
                  <h3>{founder.name}</h3>
                  <span>{founder.title}</span>
                  <p className="about-founder-lead">{founder.lead}</p>
                </div>
                <ul className="about-founder-bio">
                  {founder.background.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
              <CardDialogTrigger
                label={`查看${founder.name}档案`}
                arrowClassName="about-card-arrow"
                onClick={(event) => openDetail(founder, event.currentTarget)}
              />
            </article>
            <div className="about-experts">
              {team.map((expert) => (
                <article key={expert.name} className="about-expert interactive-card group">
                  <div className="about-expert-visual" aria-hidden="true">
                    {expert === advisors ? (
                      <>
                        <UsersRound />
                        <span className="about-advisory-label">CTO ADVISORY BOARD</span>
                      </>
                    ) : (
                      <UserRound />
                    )}
                  </div>
                  <div className="about-expert-copy">
                    <h3>
                      {expert.name}
                      {expert.degree && <span>{expert.degree}</span>}
                    </h3>
                    <p className="about-expert-role">{expert.title}</p>
                    <ul>
                      {expert.background.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </div>
                  <CardDialogTrigger
                    label={`查看${expert.name}${expert.degree}档案`}
                    arrowClassName="about-card-arrow"
                    onClick={(event) => openDetail(expert, event.currentTarget)}
                  />
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="about-quote-band" aria-labelledby="platform-title">
        <div className="about-container">
          <h2 id="platform-title">众凯AI决策智能平台</h2>
          <p>
            真正意义上的数字化，不是把报表搬到屏幕上，
            <br className="hidden md:block" />
            而是让每一次业务决策都
            <strong className="font-semibold text-primary">信得过、可追溯、能执行</strong>。
          </p>
        </div>
      </section>

      <section className="about-contact-band" aria-labelledby="contact-title">
        <div className="about-container">
          <h2 id="contact-title" className="about-contact-heading">
            联系我们
          </h2>
          <div className="about-contact-grid">
            <article className="about-contact-card">
              <span className="about-semantic-icon">
                <Mail aria-hidden="true" />
              </span>
              <p className="about-contact-label">商务邮箱</p>
              <a className="about-contact-value" href={`mailto:${contactEmail}`}>
                {contactEmail}
              </a>
              <p className="about-contact-copy">
                产品咨询、方案交流与合作洽谈，均可通过邮件沟通。我们会在收到邮件后尽快回复。
              </p>
            </article>
            <article className="about-contact-card about-contact-card-wechat">
              <div className="min-w-0">
                <span className="about-semantic-icon">
                  <QrCode aria-hidden="true" />
                </span>
                <p className="about-contact-label">微信公众号</p>
                <p className="about-contact-name">众凯加速科技</p>
                <p className="about-contact-copy">关注公众号，获取产品动态、行业观察与方法分享。</p>
              </div>
              <div className="about-contact-qr">
                <img
                  src={wechatQr}
                  alt="众凯加速科技官方微信公众号二维码"
                  width={128}
                  height={128}
                  loading="lazy"
                  decoding="async"
                />
                <span>扫码关注</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <Dialog
        open={selectedExpert !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedExpert(null);
        }}
      >
        <DialogContent
          className="max-h-[85svh] overflow-y-auto rounded-lg sm:max-w-2xl"
          onCloseAutoFocus={(event) => {
            event.preventDefault();
            detailTrigger.current?.focus({ preventScroll: true });
          }}
        >
          <DialogHeader>
            <DialogTitle>
              {selectedExpert
                ? `${[selectedExpert.name, selectedExpert.degree].filter(Boolean).join(" ")} · ${selectedExpert.title}`
                : ""}
            </DialogTitle>
            <DialogDescription>学术深度与企业级实战的双轨背景</DialogDescription>
          </DialogHeader>
          {selectedExpert && (
            <div className="flex flex-col gap-6 sm:flex-row">
              {selectedExpert === founder && (
                <div className="about-portrait w-full shrink-0 rounded-lg sm:w-52">
                  <img src={founder.photo} alt={`${founder.name}肖像`} />
                </div>
              )}
              <ul className="space-y-3 self-center text-sm leading-7">
                {selectedExpert === founder && <li>{founder.lead}</li>}
                {selectedExpert.background.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
}
