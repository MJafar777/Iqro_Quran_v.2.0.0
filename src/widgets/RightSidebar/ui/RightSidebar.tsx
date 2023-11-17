import { ReactNode, memo, useState } from 'react';
import cls from './RightSidebar.module.scss';
import CloseIcon from '@/shared/assets/icons/close-icon.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/Icon/Icon';
import { HStack } from '@/shared/ui/Stack';
import { SearchSmall } from '@/shared/assets/icons/sidebarSearch';

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
        <HStack className={cls.headerOfSidebar}>
          {whichSidebar !== 'settings' ? (
            <>
              {' '}
              <Icon Svg={SearchSmall} className={cls.icon} />
              <input
                type="text"
                placeholder="Search something"
                className={cls.input}
              />
            </>
          ) : (
            <p className={cls.titleOfHeader}> Sozlamlar</p>
          )}
          <Icon
            data-testid="sidebar-toggle"
            onClick={onToggle}
            className={cls.closeBtn}
            Svg={CloseIcon}
            height={0}
            clickable
          />
        </HStack>
        {children}
      </aside>
    );
  },
);
