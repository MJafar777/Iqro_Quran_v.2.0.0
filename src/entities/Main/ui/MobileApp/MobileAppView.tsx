/* eslint-disable i18next/no-literal-string */
import React, { memo, useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import cls from './MobileAppView.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack, VStack } from '@/shared/ui/Stack';
import { AppImage } from '@/shared/ui/AppImage';
import {
  AppStoreDark,
  AppStoreLight,
  AppStoreOrange,
  GooglePlayDark,
  GooglePlayLight,
  GooglePlayOrange,
  LeftHomeImg,
  LogoIqro,
  RightHomeImg,
  TextofQuran,
} from '@/shared/assets/icons/main';

import {
  Telegram,
  Instagram,
  Youtube,
  Email,
  IqroQuranApp,
} from '@/shared/assets/icons/footer/newIcons';

import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';
import { ButtonForDownload } from '@/shared/ui/ButtonForDownload';

interface MobileApp {
  className?: string;
}

export const MobileAppView = memo((prop: MobileApp) => {
  const [MobileView, setMobileView] = useState(AppStoreDark);
  const [MobileViewGoogle, setMobileViewGoogle] = useState(GooglePlayDark);

  const { BismillahNavbarImg } = useContext(ButtonsContext);

  useEffect(() => {
    if (BismillahNavbarImg === 'app_dark_theme') {
      setMobileView(AppStoreDark);
      setMobileViewGoogle(GooglePlayDark);
    }
    if (BismillahNavbarImg === 'app_orange_theme') {
      setMobileView(AppStoreOrange);
      setMobileViewGoogle(GooglePlayOrange);
    }
    if (BismillahNavbarImg === 'app_light_theme') {
      setMobileView(AppStoreLight);
      setMobileViewGoogle(GooglePlayLight);
    }
  }, [BismillahNavbarImg]);

  const { className } = prop;
  return (
    <div className={classNames(cls.MobileApp, {}, [])}>
      <HStack className={classNames(cls.wrapperMobile)}>
        <HStack className={classNames(cls.AppLink)}>
          <TextofQuran className={classNames(cls.textofQuran)} />
          <VStack align="center" gap="8">
            <LogoIqro className={cls.IconLogoMobileView} />

            <IqroQuranApp className={cls.IqroQuranMobileView} />

            <ButtonForDownload icon={MobileView} />
            <ButtonForDownload icon={`${MobileViewGoogle}`} />
            <HStack
              align="center"
              justify="between"
              gap="32"
              className={classNames(cls.socialMedia)}
            >
              <Link target="_blank" to="@hb_programmer">
                <Telegram className={cls.IconsMobileAppView} />
              </Link>
              <Link target="_blank" to="@hb_programmer">
                <Instagram className={cls.IconsMobileAppView} />
              </Link>
              <Link target="_blank" to="@hb_programmer">
                <Youtube className={cls.IconsMobileAppView} />
              </Link>
              <Link target="_blank" to="@hb_programmer">
                <Email className={cls.IconsMobileAppView} />
              </Link>
            </HStack>
          </VStack>
        </HStack>

        <HStack gap="32" className={cls.MobileView}>
          <AppImage className={classNames(cls.leftHomeImg)} src={LeftHomeImg} />
          <AppImage
            className={classNames(cls.rightHomeImg)}
            src={RightHomeImg}
          />
        </HStack>
      </HStack>
    </div>
  );
});
