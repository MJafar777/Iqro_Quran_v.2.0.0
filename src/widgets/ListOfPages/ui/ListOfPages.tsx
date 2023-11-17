import React, { useMemo } from 'react';
import cls from './ListOfPages.module.scss';
import {
  Book,
  Tarnslate,
  Info,
  Listining,
  Book2,
} from '@/shared/assets/icons/SidebarListOfPages';
import { Li } from '@/shared/ui/li';

const listOfPage = [
  { path: '/reading', title: 'Qur’on o‘qish', icon: <Book2 /> },
  { path: '/listining', title: 'Qur’on tinglash', icon: <Listining /> },
  { path: '/tafsir', title: 'Tafsir', icon: <Book /> },
  { path: '/meaning', title: "Qur’oning ma'nolar tarjimasi", icon: <Tarnslate /> },
  { path: '/aboutUs', title: 'Biz haqimizda  ', icon: <Info /> },
  { path: '/transcription', title: 'Transkripsiya', icon: <Book /> },
];

export const ListOfPages = () => {
  const itemListOfPage = useMemo(
    () =>
      listOfPage.map((item) => (
        <Li search={false} to={item.path}>
          {item.icon} {item.title}
        </Li>
      )),
    [],
  );

  return (
    <div className={cls.listOfPage}>
      <p className={cls.title}>Menu</p>
      {itemListOfPage}
    </div>
  );
};
