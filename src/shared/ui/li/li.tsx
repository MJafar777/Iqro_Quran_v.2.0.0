import React, { ReactNode, memo, useContext } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './li.module.scss';
import { Icon } from '../Icon';
import { Close, SearchSmall } from '@/shared/assets/icons/sidebarSearch';
import { useSelectedSuraActions } from '@/entities/Surah';
import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';

interface LiProp {
  className?: string;
  to: string;
  children: ReactNode;
  close?: boolean;
  search: boolean;
  suraId?: number;
  numberOfOyat?: number;
}

export const Li = memo((prop: LiProp) => {
  const { to, className, children, close, search, suraId, numberOfOyat } = prop;
  const { setSelectedSura } = useSelectedSuraActions();
  const {
    isRightsidebarActive,
    setIsRightsidebarActive,
    setIsSidebarActive,
    isSidebarActive,
  } = useContext(ButtonsContext);
const listLatsReadSurah=localStorage.getItem('')
  const onToggle = () => {

    console.log('log');
  };

  return (
    <Link
      to={to}
      className={classNames(cls.li)}
      onClick={() => {
        setSelectedSura({
          suraId: suraId || 1,
          nameLotin: '',
          nameKril: '',
          numberOfOyat: numberOfOyat || 7,
        });
        setIsRightsidebarActive(false);
        setIsSidebarActive(true);
      }}
    >
      <div>
        {search ? (
          <Icon
            data-testid="sidebar-toggle"
            className={cls.icon}
            height={0}
            Svg={SearchSmall}
          />
        ) : (
          ''
        )}

        {children}
      </div>
      <div>
        {close ? (
          <Icon
            data-testid="sidebar-toggle"
            onClick={onToggle}
            className={cls.closeBtn}
            Svg={Close}
            height={0}
            clickable
          />
        ) : (
          ''
        )}
      </div>
    </Link>
  );
});
