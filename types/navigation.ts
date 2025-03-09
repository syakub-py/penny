import { LucideIcon } from 'lucide-react';

export interface NavigationItem {
  name: string;
  href: string;
  icon: LucideIcon;
}

export interface NavItemProps {
  item: NavigationItem;
  isBottom?: boolean;
}