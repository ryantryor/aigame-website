import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { basketballBrosUnblockedContent } from "./content";

export const metadata: Metadata = {
  title: `Basketball Bros Unblocked | Free Games | ${siteConfig.domain}`,
  description: "Play Basketball Bros Unblocked online for free! Experience exciting basketball action with unique characters. No download, instant browser play. Click to Play!",
  openGraph: {
    title: `Basketball Bros Unblocked | Play Free Game | ${siteConfig.domain}`,
    description: "Play Basketball Bros Unblocked - a free arcade basketball game right in your browser. No downloads required.",
    type: 'website',
    url: `${siteConfig.url}/basketball-bros-unblocked`,
    siteName: siteConfig.name,
    images: [
      {
        url: `/assets/basketball-bros-unblocked/basketball-bros-unblocked.png`,
        alt: `Basketball Bros Unblocked Screenshot`,
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Basketball Bros Unblocked - Free Online Arcade Game',
    description: 'Play Basketball Bros Unblocked - a free arcade basketball game right in your browser. No downloads required.',
    images: [`/assets/basketball-bros-unblocked/basketball-bros-unblocked.png`],
  },
  alternates: {
    canonical: `/basketball-bros-unblocked`,
  }
};

// 游戏页面配置
const gameConfig = {
  metadata: {
    title: "Basketball Bros Unblocked",
    description: "Play Basketball Bros Unblocked - a free exciting basketball game right in your browser. No downloads required.",
    url: "/basketball-bros-unblocked"
  },
  content: basketballBrosUnblockedContent
};

export default function BasketballBrosUnblockedPage() {
  return <GamePageTemplate gameConfig={gameConfig} />;
}
