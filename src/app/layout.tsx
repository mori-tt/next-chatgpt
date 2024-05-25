import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";

export const metadata: Metadata = {
  title: "ChatApplication-with-chatGPT",
  description:
    "このアプリケーションは、リアルタイムでのチャット機能を提供し、ChatGPTを活用してユーザー間のコミュニケーションを強化します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
