/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable i18next/no-literal-string */
import React from 'react';
import { Link } from 'react-router-dom';
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
  return (
    <HStack align="start" wrap="wrap" className={classNames(cls.footer)}>
      <VStack className={classNames(cls.firstRowOfFooter)} gap="16">
        <p className={classNames(cls.title)}>
          Qur'oni Karimni o'qing, o'rganing va o'rgating.
        </p>
        <p className="paraph">
          Umid qilamizki, hamma uchun Qur'oni Karimni o'qish, o'rganish va
          o'rgatish oson bo'ladi. Qur'oni Karimning ko'plab nomlari bor,
          jumladan, Qur'on al-Karim, Al-Kitob, Al-Furqon, Al-Mavisa, Al-Zikr va
          Al-Nur.
        </p>
        <AppImage src={logo} />
        <HStack max gap="32">
          <p>Sitemap</p>
          <p>Privacy</p>
        </HStack>
        <p>
          © 2023{' '}
          <Link className={cls.link} to="/">
            iqro-quran.uz.
          </Link>{' '}
          All Rights Reserved
        </p>
      </VStack>
      <VStack className={classNames(cls.secondRowOfFooter)} justify="start" align="start" gap="16">
        <p className={classNames(cls.title)}>Sayt xaritasi:</p>
        <Link className={classNames(cls.link)} to={'/tafsir'}>
          Tafsir
        </Link>
        <Link className={classNames(cls.link)} to={'/qidirish'}>
          Qidirish
        </Link>
        <Link className={classNames(cls.link)} to={'about-us'}>
          Biz haqimizda
        </Link>
        <Link className={classNames(cls.link)} to={'listining-quran'}>
          Qur’on tinglash
        </Link>
        <Link className={classNames(cls.link)} to={'-reading-quran-tarnlation'}>
          Qur’on ma’nolari
        </Link>
      </VStack>
      <VStack className={classNames(cls.thirdRowOfFooter)} justify="start" align="start" gap="16">
        <p className={classNames(cls.title)}>Hamkorlar:</p>
        <Link target="_blank" to={'https://quran.com/'} className={cls.link}>
          Quran.com
        </Link>
      </VStack>
      <VStack className={classNames(cls.fourthRowOfFooter)} justify="start" align="start" gap="16">
        <p className={classNames(cls.title)}>Biz bilan bog`lanish:</p>
        <p>
          Email:
          <Link to="https://mail.google.com/" className={cls.link}>
            {' '}
            sardorxon1977@gmail.com
          </Link>
        </p>
        <p>
          Telegram:
          <Link to="https://t.me/Sardorxon1977" className={cls.link}>
            sardorxon1977
          </Link>{' '}
        </p>
        <p>
          Tel:
          <Link to="/" type="tel:+998 97 123 45 67" className={cls.link}>
            +998 97 123 45 67
          </Link>
        </p>
        <HStack gap="32" justify="start" max>
          <Link to={'https://www.youtobe.com/'} target="_blank" className={cls.link}>
            <Icon className={cls.iconOfFooter} Svg={youtobe} />
          </Link>
          <Link to={'https://www.'} target="_blank" className={cls.link}>
            <Icon className={cls.iconOfFooter} Svg={gmail} />
          </Link>
          <Link to={'https://www.'} target="_blank" className={cls.link}>
            <Icon className={cls.iconOfFooter} Svg={telegram} />
          </Link>
          <Link to={'https://www.instagram.com/'} target="_blank" className={cls.link}>
            <Icon className={cls.iconOfFooter} Svg={instagram} />{' '}
          </Link>
        </HStack>
      </VStack>
    </HStack>
  );
};
