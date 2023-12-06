/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cls from './ListOfPages.module.scss';
import {
  Book,
  Tarnslate,
  Info,
  Listining,
  Book2,
} from '@/shared/assets/icons/SidebarListOfPages';
import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';

export const ListOfPages = memo(() => {
  const { isSidebarActive, setIsSidebarActive } = useContext(ButtonsContext);

  const { t, i18n } = useTranslation();

  const listOfPage = [
    {
      path: '/reading',
      title: t('Qur’on o‘qish'),
      icon: <Book2 />,
    },
    {
      path: '/listining',
      title: t('Qur’on tinglash'),
      icon: <Listining />,
    },
    { path: '/tafsir', title: t('Tafsir'), icon: <Book /> },
    {
      path: '/meaning',
      title: t("Qur’oning ma'nolar tarjimasi"),
      icon: <Tarnslate />,
    },

    {
      path: '/transcription',
      title: t('Transkripsiya'),
      icon: <Book />,
    },
    { path: '/about', title: t('Biz haqimizda'), icon: <Info /> },
  ];

  const itemListOfPage = useMemo(
    () =>
      listOfPage.map((item) => (
        <Link
          onClick={() => setIsSidebarActive(!isSidebarActive)}
          className={cls.li}
          key={item.title}
          to={item.path}
        >
          {item.icon}
          {item.title}
        </Link>
      )),
    [isSidebarActive, listOfPage, setIsSidebarActive],
  );

  return (
    <div className={cls.listOfPage}>
      <p className={cls.title}>{t('menu')}</p>
      <div className={cls.wrapper}>{itemListOfPage}</div>
    </div>
  );
});
