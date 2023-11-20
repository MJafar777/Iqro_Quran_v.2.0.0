import { ReactNode, memo, useContext } from 'react';
import cls from './Sidebar.module.scss';
import CloseIcon from '@/shared/assets/icons/close-icon.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';

interface SidebarProps {
  className?: string;
  children: ReactNode;
}

export const Sidebar = memo(({ className, children }: SidebarProps) => {
  const { readingSidebarActive, setReadingSidebarActive, isSidebarActive } =
    useContext(ButtonsContext);

  return (
    <aside
      data-testid="sidebar"
      className={classNames(
        cls.Sidebar,
        { [cls.collapsed]: !readingSidebarActive || isSidebarActive },
        [className],
      )}
    >
      {readingSidebarActive && !isSidebarActive ? (
        <CloseIcon
          className={cls.closeBtn}
          onClick={() =>
            setReadingSidebarActive && setReadingSidebarActive(false)
          }
        />
      ) : (
        ''
      )}

      {children}
    </aside>
  );
});
