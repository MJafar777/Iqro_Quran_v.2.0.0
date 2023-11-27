import React, { ReactNode, memo, useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';
import cls from './SidebarMain.module.scss';
import { Close } from '@/shared/assets/icons/sidebarSearch';
import { HStack } from '@/shared/ui/Stack';
import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Logo } from '@/shared/assets/icons/navbar';

interface SidebarMainProp {
  className?: string;
  children?: ReactNode;
}

export const SidebarMain = memo((prop: SidebarMainProp) => {
  const { children, className } = prop;
  const { isSidebarActive, setIsSidebarActive } = useContext(ButtonsContext);
  const leftSidebarHeader = useMemo(
    () => (
      <HStack justify="between" className={cls.wrapperLogo}>
        {/* <Link to="/" className={cls.logo}>
          Iqro-Quran
        </Link> */}

        <Link to="/">
          <Logo className={cls.logo} />
        </Link>

        <div>
          <Close
            className={cls.closebtn}
            onClick={() => setIsSidebarActive(!isSidebarActive)}
          />
        </div>
      </HStack>
    ),
    [isSidebarActive, setIsSidebarActive],
  );

  return (
    <div
      className={classNames(cls.mainSidebar, {
        [cls.collapsed]: isSidebarActive,
      })}
    >
      {leftSidebarHeader}
      {children}
    </div>
  );
});
