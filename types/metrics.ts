import { LucideIcon } from 'lucide-react';

export interface Metric {
  title: string;
  value: string;
  icon: LucideIcon;
  change: string;
  description: string;
}