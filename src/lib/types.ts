export interface NavItem {
  label: string;
  href: string;
}

export interface ImpactProgram {
  id: string;
  title: string;
  description: string;
  category: string;
  image?: string;
}

export interface SiteMetadata {
  title: string;
  description: string;
  url: string;
}
