import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/zhongkai_logo.png.asset.json";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "首页" },
  { to: "/products", label: "产品" },
  { to: "/solutions", label: "解决方案" },
  { to: "/about", label: "关于我们" },
] as const;

export function Brand({ size = 36 }: { size?: number }) {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img src={logo.url} alt="众凯加速科技 Logo" width={size} height={size} />
      <span className="leading-tight">
        <span className="block text-lg font-bold text-foreground">众凯加速科技</span>
        <span className="block text-[10px] tracking-widest text-muted-foreground">ZhongKai Tech</span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={cn("fixed inset-x-0 z-50 transition-all duration-500", scrolled ? "top-0" : "top-4 px-4")}>
      <div
        className={cn(
          "glass mx-auto flex h-16 items-center justify-between border border-border/70 px-6 transition-all duration-500",
          scrolled ? "max-w-full rounded-none border-x-0 border-t-0 shadow-sm" : "max-w-6xl rounded-full shadow-card",
        )}
      >
        <Brand />
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: true }}
              className="flex items-center gap-1 text-sm font-medium text-foreground/80 transition-colors hover:text-primary data-[status=active]:text-primary"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link to="/contact" className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/90">
          预约演示
        </Link>
      </div>
    </header>
  );
}
