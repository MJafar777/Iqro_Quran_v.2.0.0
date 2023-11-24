import React, { ReactNode, memo, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import cls from './List.module.scss';
import { Icon } from '../Icon';
import { SearchSmall } from '@/shared/assets/icons/sidebarSearch';
import { useSelectedSuraActions } from '@/entities/Surah';
import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';
import { HStack } from '../Stack';
import { getListOfSurahs } from '@/pages/MainPage';

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

  const listOfSurahs = useSelector(getListOfSurahs);
  const navigate = useNavigate();

  const toggleOneItemSurah = () => {
    const data = listOfSurahs?.filter((sura) => sura.quran_order === suraId)[0];
    if (data) {
      setSelectedSura(data);
      navigate('/reading');
    }
  };
  return (
    <HStack max justify="between" align="center" className={cls.wrapper}>
      <div onClick={() => toggleOneItemSurah()} className={cls.li}>
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
      </div>
    </HStack>
  );
});
