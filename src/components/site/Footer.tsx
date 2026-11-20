import { Link } from "@tanstack/react-router";
import { MapPin, Mail } from "lucide-react";
import { Brand } from "./Header";
import wechatQr from "@/assets/wechat-official-qrcode.jpg.asset.json";

const cols = [
  { title: "产品", items: [["数据编排", "/products"], ["本体建模", "/products"], ["智能体协同", "/products"]] },
  { title: "解决方案", items: [["金融 AI", "/solutions"], ["SAS 国产替换", "/solutions"], ["央国企 AI", "/solutions"]] },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.2fr_1fr_1.4fr]">
        <div className="space-y-4">
          <Brand />
          <p className="text-sm text-muted-foreground">让数据更有价值，让智能触手可及</p>
        </div>
        <div className="grid grid-cols-2 gap-6">
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
        </div>
        <div className="flex justify-between gap-6">
          <div className="space-y-3 text-sm text-muted-foreground">
            <p className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />北京市东城区北三环东路36号·环球贸易中心E座3F</p>
            <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" />contact@zhongkaitech.com.cn</p>
          </div>
          <div className="text-center">
            <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-lg border border-border bg-card">
              <img src={wechatQr.url} alt="众凯科技官方微信公众号二维码" className="h-full w-full object-cover" width={96} height={96} />
            </div>
            <p className="mt-2 text-xs text-muted-foreground">欢迎关注公众号</p>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-2 px-6 py-5 text-xs text-muted-foreground">
          <span>© 2026 众凯科技（北京）有限公司 版权所有</span>
          <span>京ICP备2026079931号</span>
        </div>
      </div>
    </footer>
  );
}
