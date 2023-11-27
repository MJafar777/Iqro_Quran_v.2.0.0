import { ReactNode, memo, useState } from 'react';
import cls from './Sidebar.module.scss';
// import { Icon } from '@/shared/ui/Icon';
// import CloseIcon from '@/shared/assets/icons/close-icon.svg';
import { classNames } from '@/shared/lib/classNames/classNames';

interface SidebarProps {
  className?: string;
  children: ReactNode;
  toogleBurger?: boolean;
  left?: boolean;
}

export const SidebarRight = memo(
  ({ className, children, toogleBurger, left }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
      <aside
        data-testid="sidebar"
        className={classNames(cls.Sidebar, { [cls.collapsed]: !toogleBurger }, [
          className,
        ])}
      >
        {children}
      </aside>
    );
  },
);
