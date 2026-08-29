import { NavItem } from "./types";

export const SITE_CONFIG = {
  name: "Team Boss",
  description: "Official Team Boss Organization web platform",
  colors: {
    brandNavy: "#083A7A",
    brandYellow: "#F3A516",
    brandLightBlue: "#039DCA",
  },
} as const;

export const NAV_ITEMS: readonly NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Contact", href: "/contact" },
] as const;
