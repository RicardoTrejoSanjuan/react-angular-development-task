import type { IconType } from 'react-icons';
import { IoSpeedometerOutline, IoListOutline, IoAccessibilityOutline } from 'react-icons/io5';

export interface MenuItem {
  title: string;
  subTitle: string;
  href: string;
  Icon: IconType;
}

export const menuItems: MenuItem[] = [
  {
    title: 'Dashboard',
    subTitle: 'dashboard',
    href: '/dashboard',
    Icon: IoSpeedometerOutline,
  },
  {
    title: 'Task',
    subTitle: 'task',
    href: '/dashboard/task',
    Icon: IoListOutline,
  },
  {
    title: 'Goals',
    subTitle: 'Goals',
    href: '/dashboard/goals',
    Icon: IoAccessibilityOutline,
  },
  {
    title: 'Content',
    subTitle: 'Content',
    href: '/dashboard/content',
    Icon: IoListOutline,
  },
];
