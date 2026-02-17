
export interface PortfolioItem {
  id: string;
  title: string;
  category: 'conceptual' | 'portrait' | 'graphics';
  imageUrl: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}
