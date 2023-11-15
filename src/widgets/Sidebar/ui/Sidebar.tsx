import { ReactNode, memo, useState } from 'react';
import cls from './Sidebar.module.scss';
import { Icon } from '@/shared/ui/Icon';
import CloseIcon from '@/shared/assets/icons/close-icon.svg';
import { classNames } from '@/shared/lib/classNames/classNames';

interface SidebarProps {
  className?: string;
  children: ReactNode;
}

export const Sidebar = memo(({ className, children }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <aside
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Icon
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={cls.closeBtn}
        Svg={CloseIcon}
        height={0}
        clickable
      />
      {children}
    </aside>
  );
});
