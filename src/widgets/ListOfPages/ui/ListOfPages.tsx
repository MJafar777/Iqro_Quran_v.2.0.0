/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cls from './ListOfPages.module.scss';
import {
  Book,
  Info,
  Listining,
  Book2,
  Tarnslate,
} from '@/shared/assets/icons/SidebarListOfPages';
import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';

export const ListOfPages = memo(() => {
  const {
    isSidebarActive,
    setIsSidebarActive,
    listOfPagesValuePath,
    setListOfPagesValuePath,
  } = useContext(ButtonsContext);

  const { t, i18n } = useTranslation();

  const listOfPage = [
    { id: 1, path: '/reading', title: t('Qur’on o‘qish'), icon: <Book2 /> },
    {
      id: 2,
      path: '/listining',
      title: t('Qur’on tinglash'),
      icon: <Listining />,
    },
    {
      id: 3,
      path: '/tafsir',
      title: t("Qur’on ma'nolar tarjimasi"),
      icon: <Tarnslate />,
    },
    {
      id: 4,
      path: '/reading',
      title: t("Qur’on so'zma-so'z tarjimasi"),
      icon: <Book2 />,
    },
    {
      // path: '/transcription',
      id: 5,
      path: '/reading',
      title: t('Transkripsiya'),
      icon: <Book />,
    },
    { id: 6, path: '/about', title: t('Biz haqimizda'), icon: <Info /> },
  ];

  const setValuePath = (item: number) => {
    setIsSidebarActive(!isSidebarActive);
    setListOfPagesValuePath(item);
  };

  const itemListOfPage = useMemo(
    () =>
      listOfPage.map((item) => (
        <Link
          onClick={() => {
            setValuePath(item.id);
          }}
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
