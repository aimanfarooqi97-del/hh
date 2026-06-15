import { Instagram, Facebook } from "lucide-react";

const XIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    <path d="M18.244 2H21l-6.52 7.45L22 22h-6.793l-5.32-6.96L3.8 22H1l7-7.99L1.5 2h6.91l4.81 6.36L18.244 2zm-1.19 18h1.88L7.05 4H5.05l12.005 16z"/>
  </svg>
);

const PinterestIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    <path d="M12 2a10 10 0 0 0-3.64 19.32c-.09-.78-.18-1.99.04-2.85.2-.77 1.27-4.9 1.27-4.9s-.32-.65-.32-1.6c0-1.5.87-2.62 1.95-2.62.92 0 1.36.69 1.36 1.52 0 .92-.59 2.31-.89 3.59-.26 1.07.54 1.95 1.6 1.95 1.92 0 3.39-2.02 3.39-4.94 0-2.58-1.86-4.39-4.51-4.39-3.07 0-4.88 2.3-4.88 4.69 0 .93.36 1.92.81 2.47.09.1.1.2.07.31-.08.32-.25 1.07-.29 1.22-.05.2-.15.24-.36.15-1.33-.62-2.16-2.57-2.16-4.13 0-3.36 2.44-6.45 7.04-6.45 3.7 0 6.57 2.64 6.57 6.16 0 3.67-2.32 6.63-5.53 6.63-1.08 0-2.1-.56-2.45-1.23l-.66 2.54c-.24.93-.89 2.1-1.32 2.81A10 10 0 1 0 12 2z"/>
  </svg>
);

export const socials = [
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/aimanfarooqi.97/" },
  { name: "Pinterest", icon: PinterestIcon, href: "https://www.pinterest.com/Aimanfarooqi97/" },
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/profile.php?id=61579475137171" },
  { name: "X", icon: XIcon, href: "https://x.com/aimanfarooqi97" },
];

export { XIcon, PinterestIcon };
