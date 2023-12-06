/* eslint-disable max-len */
/* eslint-disable react/no-children-prop */
/* eslint-disable i18next/no-literal-string */
import React, { memo, useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '@/shared/ui/Stack';
import cls from './Navbar.module.scss';
import { Icon } from '@/shared/ui/Icon';
import {
  Logo,
  Burger,
  sec,
  thir,
  BismillahAuto,
  BismillahDark,
  BismillahLight,
} from '@/shared/assets/icons/navbar';
import { RightSidebar } from '@/widgets/RightSidebar';
import { ListOfPages } from '@/widgets/ListOfPages';
import { Setting } from '@/widgets/Setting';
import { Search } from '@/widgets/Search';
import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';
import { SidebarMain } from '@/widgets/SidebarMain';
import { fetchTime } from '../model/service/fetchTime';
import { getTimeArrabic } from '../model/selector/getSelecterTime';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fullMoth, fullMothRu } from '../model/const/moth';
import { LangSwitcher } from '@/shared/ui/LangSwitcher';
import { AppImage } from '@/shared/ui/AppImage';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

interface NavbarProp {
  className?: string;
}

export const Navbar = memo((prop: NavbarProp) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const [NavbarBismillah, setNavbarBismillah] = useState(BismillahAuto);

  const { BismillahNavbarImg } = useContext(ButtonsContext);

  const { t, i18n } = useTranslation();

  const params = useLocation();

  const themeLocalstorage = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);

  const { toggleTheme, theme } = useTheme();

  const [whichSidebar, setWhichSidebar] = useState('settings');

  const { isSidebarActive, setIsSidebarActive, setIsRightsidebarActive } =
    useContext(ButtonsContext);

  const dispatch = useAppDispatch();

  const toogleSidebarSettings = () => {
    setIsRightsidebarActive(false);
    setWhichSidebar('settings');
  };

  const toogleSidebarSearch = () => {
    setIsRightsidebarActive(false);
    setWhichSidebar('Search');
  };

  useEffect(() => {
    dispatch(fetchTime({}));
  }, [dispatch]);

  useEffect(() => {
    if (BismillahNavbarImg === 'app_dark_theme') {
      setNavbarBismillah(BismillahDark);
    }
    if (BismillahNavbarImg === 'app_orange_theme') {
      setNavbarBismillah(BismillahAuto);
    }
    if (BismillahNavbarImg === 'app_light_theme') {
      setNavbarBismillah(BismillahLight);
    }
  }, [BismillahNavbarImg]);

  const getTimeData = useSelector(getTimeArrabic);
  const data = new Date();

  return (
    <div className={classNames(cls.nabar)}>
      <HStack className={classNames(cls.burger)} align="center">
        <Burger
          className={classNames(cls.icon)}
          onClick={() => setIsSidebarActive(!isSidebarActive)}
        />
        <Link to="/">
          <Logo className={cls.logo} />
        </Link>
      </HStack>
      {params.pathname === '/' ? (
        <HStack className={classNames(cls.wrapperTime)} max justify="center">
          <div className={classNames(cls.timeOfArrabic)}>
            {getTimeData?.dayOfMonth} -{' '}
            {i18n.language === 'uz'
              ? getTimeData?.uz?.monthText
              : getTimeData?.uzCr?.monthText}{' '}
            {getTimeData?.year}-{t('yil ')}
          </div>

          <AppImage
            className={classNames(cls.bismillah)}
            src={NavbarBismillah || BismillahAuto}
          />

          <div className={classNames(cls.time)}>
            {data?.getDate()} -{' '}
            {i18n.language === 'uz'
              ? fullMoth[data?.getMonth()]
              : fullMothRu[data?.getMonth()]}{' '}
            {data?.getFullYear()}-{t('yil')}
          </div>
        </HStack>
      ) : (
        ''
      )}
      <HStack className={classNames(cls.iconWrapper)} justify="end" gap="8">
        <LangSwitcher />
        <div onClick={toogleSidebarSettings}>
          <Icon className={classNames(cls.icon)} Svg={sec} />
        </div>
        <div onClick={toogleSidebarSearch}>
          <Icon className={classNames(cls.icon)} Svg={thir} />
        </div>
      </HStack>

      <RightSidebar
        children={whichSidebar === 'settings' ? <Setting /> : <Search />}
      />

      <SidebarMain children={<ListOfPages />} />
    </div>
  );
});
