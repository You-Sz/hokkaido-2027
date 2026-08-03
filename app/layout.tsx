import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "北國十日｜北海道冬日旅誌",
  description: "2027 札幌、小樽、美瑛、洞爺湖與函館十日冬季行程。",
  icons: {
    icon:
      process.env.GITHUB_ACTIONS === "true"
        ? "/hokkaido-2027/favicon.svg"
        : "/favicon.svg",
  },
  openGraph: { title: "北國十日｜北海道冬日旅誌", description: "一條不繞路的北海道冬日軌跡。", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-Hant"><body>{children}</body></html>;
}
