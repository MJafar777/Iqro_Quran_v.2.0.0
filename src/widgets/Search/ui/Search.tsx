/* eslint-disable react/no-children-prop */
import React, { memo, useMemo } from 'react';
import { Li } from '@/shared/ui/li/li';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Search.module.scss';
import { SerchTile } from '@/shared/ui/SearchTitle';

interface SearchProp {
  className?: string;
}

const listOfMostRead = [
  { to: '/', title: 'Fotiha' },
  { to: '/', title: 'Al-Baqarah' },
  { to: '/', title: "Al-An'am" },
  { to: '/', title: 'Yusuf' },
  { to: '/', title: 'Hud' },
];

const lastReadSurahList = [
  { to: '/', title: "Al-An'am" },
  { to: '/', title: 'Yusuf' },
  { to: '/', title: 'Hud' },
];

export const Search = memo((prop: SearchProp) => {
  const itemsOfMostRead = useMemo(
    () =>
      listOfMostRead.map((item) => (
        <Li to={item.to} key={item.to}>
          {item.title}
        </Li>
      )),
    [],
  );

  const itemsLastRead = useMemo(
    () =>
      lastReadSurahList.map((item) => (
        <Li to={item.to} key={item.to} close>
          {item.title}
        </Li>
      )),
    [],
  );

  return (
    <div className={classNames(cls.wrapperListSearch)}>
      <SerchTile>Ko‘p ko‘rilganlar</SerchTile>
      {itemsOfMostRead}
      <SerchTile>So‘ngi ko‘rilganlar</SerchTile>
      {itemsLastRead}
      <SerchTile>Qidirib ko‘ring</SerchTile>
      {itemsOfMostRead}
    </div>
  );
});
