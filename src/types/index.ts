import { IconName } from '@/components';

export interface NavItem {
  title: string;
  path?: string;
  icon?: IconName;
  children?: NavItem[];
}
