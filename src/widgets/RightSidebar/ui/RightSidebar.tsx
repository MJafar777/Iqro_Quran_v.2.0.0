import { ReactNode, memo, useState } from 'react';
import cls from './RightSidebar.module.scss';
import CloseIcon from '@/shared/assets/icons/close-icon.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/Icon/Icon';
import { Setting } from '@/widgets/Setting';
import { Search } from '@/widgets/Search';

interface SidebarProps {
  className?: string;
  children: ReactNode;
  isOpenSidebar?: boolean;
  whichSidebar?: string;
  setIsOpenSidebar: (isOpenSidebar: boolean) => void;
}

export const RightSidebar = memo(
  ({
    className,
    children,
    isOpenSidebar,
    whichSidebar,
    setIsOpenSidebar,
  }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    console.log(whichSidebar);

    const onToggle = () => {
      setIsOpenSidebar(!isOpenSidebar);
    };

    return (
      <aside
        data-testid="sidebar"
        className={classNames(cls.Sidebar, { [cls.collapsed]: isOpenSidebar }, [
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
        {whichSidebar === 'settings' ? <Setting /> : <Search />}
        {children}
      </aside>
    );
  },
);
