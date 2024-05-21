import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "CahtApplication-with-chatGPT",
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
      <body>{children}</body>
    </html>
  );
}
