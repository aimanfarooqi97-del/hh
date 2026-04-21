import { Instagram, Youtube, Facebook } from "lucide-react";

const TikTokIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    <path d="M19.6 6.3a4.9 4.9 0 0 1-3-1.1 4.9 4.9 0 0 1-1.7-2.9h-3.3v13a2.6 2.6 0 1 1-2.6-2.6c.3 0 .5 0 .8.1V9.4a6 6 0 1 0 5.1 6V9.7a8.2 8.2 0 0 0 4.7 1.5V7.9a4.9 4.9 0 0 1 0-1.6z"/>
  </svg>
);

const XIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    <path d="M18.244 2H21l-6.52 7.45L22 22h-6.793l-5.32-6.96L3.8 22H1l7-7.99L1.5 2h6.91l4.81 6.36L18.244 2zm-1.19 18h1.88L7.05 4H5.05l12.005 16z"/>
  </svg>
);

const ThreadsIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    <path d="M17.6 11.1c-.1 0-.2-.1-.3-.1-.2-3.1-1.9-4.9-4.7-4.9-1.7 0-3.1.7-4 2l1.6 1.1c.6-1 1.5-1.2 2.4-1.2 1.5 0 2.5.9 2.7 2.6-.7-.1-1.4-.2-2.2-.2-2.5 0-4.2 1.4-4.2 3.4 0 1.9 1.6 3.2 3.5 3.2 1.6 0 3-.6 3.6-1.9.7.4 1.2 1 1.5 1.7C18 18 16.6 19 14 19c-3.4 0-5.7-2.3-5.7-6.9S10.6 5.2 14 5.2c3 0 4.9 1.5 5.6 4.5l1.9-.6C20.5 5.4 17.9 3.3 14 3.3 9.4 3.3 6.3 6.5 6.3 12.1S9.4 20.9 14 20.9c4.1 0 6.4-2 6.4-5.4 0-1.7-.6-3.1-1.8-4.1-.3-.1-.6-.2-1-.3zm-3.8 4.4c-.9 0-1.6-.5-1.6-1.3 0-.9 1-1.5 2.4-1.5.6 0 1.2.1 1.7.2-.1 1.6-1.1 2.6-2.5 2.6z"/>
  </svg>
);

export const socials = [
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { name: "TikTok", icon: TikTokIcon, href: "https://tiktok.com" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com" },
  { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { name: "X", icon: XIcon, href: "https://x.com" },
  { name: "Threads", icon: ThreadsIcon, href: "https://threads.net" },
];

export { TikTokIcon, XIcon, ThreadsIcon };
