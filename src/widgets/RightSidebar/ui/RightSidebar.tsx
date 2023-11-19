import { ReactNode, memo, useContext, useMemo } from 'react';
import cls from './RightSidebar.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';

interface SidebarProps {
  className?: string;
  children?: ReactNode;
}

export const RightSidebar = memo(
  // eslint-disable-next-line react/prop-types
  ({ className, children }: SidebarProps) => {
    const { isRightsidebarActive } =
      useContext(ButtonsContext);

    const rightSidebar = useMemo(
      () => (
        <aside
          data-testid="sidebar"
          className={classNames(
            cls.Sidebar,
            { [cls.collapsed]: isRightsidebarActive },
            [className],
          )}
        >
          {children}
        </aside>
      ),
      [children, className, isRightsidebarActive],
    );

    return rightSidebar;
  },
);
