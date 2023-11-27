/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable i18next/no-literal-string */
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { HStack, VStack } from '@/shared/ui/Stack';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Footer.module.scss';
import { AppImage } from '@/shared/ui/AppImage';
import {
  gmail,
  instagram,
  logo,
  telegram,
  youtobe,
} from '@/shared/assets/icons/footer ';
import { Icon } from '@/shared/ui/Icon';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      {' '}
      <HStack align="start"  wrap="wrap" className={classNames(cls.footer)}>
        <VStack className={classNames(cls.firstRowOfFooter)} gap="16">
          <p className={classNames(cls.title)}>{t('footerTitle')}</p>
          <p className="paraph">{t('footerSubtitle')}</p>
          <AppImage src={logo} />
          <HStack max gap="32">
            <p>Sitemap</p>
            <p>Privacy</p>
          </HStack>
        </VStack>
        <VStack
          className={classNames(cls.secondRowOfFooter)}
          justify="start"
          align="start"
          gap="16"
        >
          <p className={classNames(cls.title)}>{t('siteMap')}:</p>
          <Link className={classNames(cls.link)} to={'/tafsir'}>
            {t('Tafsir')}
          </Link>
          <Link className={classNames(cls.link)} to={'/qidirish'}>
            {t('Qidirish')}
          </Link>
          <Link className={classNames(cls.link)} to={'about-us'}>
            {t('aboutUs')}
          </Link>
          <Link className={classNames(cls.link)} to={'listining-quran'}>
            {t('listiningQuran')}
          </Link>
          <Link
            className={classNames(cls.link)}
            to={'-reading-quran-tarnlation'}
          >
            {t('meaningQuran')}
          </Link>
        </VStack>
        <VStack
          className={classNames(cls.thirdRowOfFooter)}
          justify="start"
          align="start"
          gap="16"
        >
          <p className={classNames(cls.title)}>{t('Hamkorlar')}</p>
          <Link target="_blank" to={'https://quran.com/'} className={cls.link}>
            Quran.com
          </Link>
        </VStack>
        <VStack
          className={classNames(cls.fourthRowOfFooter)}
          
          gap="16"
        >
          <p className={classNames(cls.title)}>{t("contact")}</p>
          <p>
            {t('Email')}:
            <Link to="https://mail.google.com/" className={cls.link}>
              {' '}
              sardorxon1977@gmail.com
            </Link>
          </p>
          <p>
            {t('Telegram')}:
            <Link to="https://t.me/Sardorxon1977" className={cls.link}>
              sardorxon1977
            </Link>{' '}
          </p>
          <p>
            {t('Tel')}:
            <Link to="/" type="tel:+998 97 123 45 67" className={cls.link}>
              +998 97 123 45 67
            </Link>
          </p>
          <HStack gap="32" justify="start" max>
            <Link
              to={'https://www.youtobe.com/'}
              target="_blank"
              className={cls.link}
            >
              <Icon className={cls.iconOfFooter} Svg={youtobe} />
            </Link>
            <Link to={'https://www.'} target="_blank" className={cls.link}>
              <Icon className={cls.iconOfFooter} Svg={gmail} />
            </Link>
            <Link to={'https://www.'} target="_blank" className={cls.link}>
              <Icon className={cls.iconOfFooter} Svg={telegram} />
            </Link>
            <Link
              to={'https://www.instagram.com/'}
              target="_blank"
              className={cls.link}
            >
              <Icon className={cls.iconOfFooter} Svg={instagram} />{' '}
            </Link>
          </HStack>
        </VStack>
      </HStack>
      <HStack justify="center">
        {' '}
        <p className={cls.rights}>
          © 2023{' '}
          <Link className={cls.link} to="/">
            iqro-quran.uz.
          </Link>{' '}
          All Rights Reserved
        </p>
      </HStack>
    </>
  );
};
