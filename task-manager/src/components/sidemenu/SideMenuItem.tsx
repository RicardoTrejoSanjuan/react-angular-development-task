import type { IconType } from 'react-icons';
import { NavLink } from 'react-router-dom';

interface SideMenuItemProps {
  href: string;
  Icon: IconType;
  title: string;
  subTitle: string;
  isOpen: boolean;
}

export const SideMenuItem = ({ href, Icon, title, isOpen }: SideMenuItemProps) => {
  return (
    <NavLink
      key={href}
      to={href}
      className={`flex items-center transition-all p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 
        ${isOpen ? 'justify-start gap-4' : 'justify-center'}`}>
      <Icon className='text-gray-800 dark:text-white' />
      {isOpen && <span className='font-medium text-gray-800 dark:text-white'>{title}</span>}
    </NavLink>
  );
};
