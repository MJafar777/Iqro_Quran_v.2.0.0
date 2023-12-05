import React, { memo, useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';
import cls from './ListOfPages.module.scss';
import {
  Book,
  Tarnslate,
  Info,
  Listining,
  Book2,
} from '@/shared/assets/icons/SidebarListOfPages';
import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';

const listOfPage = [
  {
    path: '/reading',
    title: 'Qur’on o‘qish',
    icon: <Book2 />,
  },
  {
    path: '/listining',
    title: 'Qur’on tinglash',
    icon: <Listining />,
  },
  { path: '/tafsir', title: 'Tafsir', icon: <Book /> },
  {
    path: '/meaning',
    title: "Qur’oning ma'nolar tarjimasi",
    icon: <Tarnslate />,
  },

  {
    path: '/transcription',
    title: 'Transkripsiya',
    icon: <Book />,
  },
  { path: '/about', title: 'Biz haqimizda  ', icon: <Info /> },
];

export const ListOfPages = memo(() => {
  const { isSidebarActive, setIsSidebarActive } = useContext(ButtonsContext);

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
    [isSidebarActive, setIsSidebarActive],
  );

  return (
    <div className={cls.listOfPage}>
      <p className={cls.title}>Menu</p>
      <div className={cls.wrapper}>{itemListOfPage}</div>
    </div>
  );
});
