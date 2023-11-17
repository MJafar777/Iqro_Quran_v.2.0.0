import { ReactNode, memo, useEffect, useState } from 'react';
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

    const onToggle = () => {
      setCollapsed((prev) => !prev);
    };

    useEffect(() => {
      // setCollapsed(toogleBurger?toogleBurger:false);
    }, [toogleBurger]);

    const leftSidebarStyle = {
      right: 0,
      transform: 'translateX(-100%)',
    };

    return (
      <aside
        data-testid="sidebar"
        style={left ? leftSidebarStyle : {}}
        className={classNames(cls.Sidebar, { [cls.collapsed]: toogleBurger }, [
          className,
        ])}
      >
        {/* <Icon
          data-testid="sidebar-toggle"
          onClick={onToggle}
          className={cls.closeBtn}
          Svg={CloseIcon}
          height={0}
          clickable
        /> */}
        {children}
      </aside>
    );
  },
);
