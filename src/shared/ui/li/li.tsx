import React, { ReactNode, memo, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import cls from './li.module.scss';
import { Icon } from '../Icon';
import { Close, SearchSmall } from '@/shared/assets/icons/sidebarSearch';
import { useSelectedSuraActions } from '@/entities/Surah';
import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';
import { LAST_READ_SURAH } from '@/shared/const/localstorage';
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
      navigate(`${to}`);
    }

    setIsRightsidebarActive(!isRightsidebarActive);
    setIsSidebarActive(true);
  };

  // @ts-ignore
  const LatsReadSurah = JSON.parse(localStorage.getItem(LAST_READ_SURAH)) || [];

  const onToggle = (id: number) => {
    const newSurahList = LatsReadSurah.filter(
      (item: { suraId: number }) => item.suraId !== id,
    );
    localStorage.setItem(LAST_READ_SURAH, JSON.stringify(newSurahList));
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
      {close ? (
        <Icon
          data-testid="sidebar-toggle"
          onClick={() => onToggle(suraId || 1)}
          className={cls.closeBtn}
          Svg={Close}
          height={0}
          clickable
        />
      ) : (
        ''
      )}
    </HStack>
  );
});
