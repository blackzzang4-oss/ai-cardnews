import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "AI Card Maker",
    description: "Create stunning AI-powered cards",
    icons: {
        icon: '/favicon.svg',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ko">
            <body className="antialiased">{children}</body>
        </html>
    );
}
