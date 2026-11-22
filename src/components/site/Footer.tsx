import { Link } from "@tanstack/react-router";
import { MapPin, Mail } from "lucide-react";
import { Brand } from "./Header";
import wechatQr from "@/assets/images/wechat-official-qrcode.jpg";

const cols = [
  { title: "产品", items: [["数据编排", "/products"], ["本体建模", "/products"], ["智能体协同", "/products"]] },
  { title: "解决方案", items: [["金融 AI", "/solutions"], ["SAS 国产替换", "/solutions"], ["央国企 AI", "/solutions"]] },
  { title: "关于我们", items: [["公司介绍", "/about"]] },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-6 py-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.85fr)]">
        <div className="space-y-5">
          <Brand />
          <p className="text-sm text-muted-foreground">人工智能大模型与决策智能提供商</p>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />北京市东城区北三环东路36号·环球贸易中心E座3F</p>
            <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" />contact@zhongkaitech.com.cn</p>
          </div>
        </div>
        <div className="grid grid-cols-2 items-start gap-6 sm:grid-cols-[repeat(3,minmax(0,1fr))_auto]">
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="mb-3 text-sm font-semibold text-foreground">{c.title}</h4>
              <ul className="space-y-2">
                {c.items.map(([l, to]) => (
                  <li key={l}>
                    <Link to={to} className="text-sm text-muted-foreground transition-colors duration-300 hover:text-primary">{l}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex w-fit flex-col items-center text-center sm:justify-self-end">
            <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-lg border border-border bg-card">
              <img src={wechatQr} alt="众凯加速科技官方微信公众号二维码" className="h-full w-full object-cover" width={96} height={96} />
            </div>
            <p className="mt-2 text-xs text-muted-foreground">欢迎关注公众号</p>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-2 px-6 py-5 text-xs text-muted-foreground">
          <span>© 2026 北京众凯加速科技发展有限公司 版权所有</span>
          <a
            href="https://beian.miit.gov.cn"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-primary"
          >
            京ICP备2026079931号
          </a>
        </div>
      </div>
    </footer>
  );
}
