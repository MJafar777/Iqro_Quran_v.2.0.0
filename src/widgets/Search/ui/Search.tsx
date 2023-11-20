/* eslint-disable consistent-return */
/* eslint-disable react/no-children-prop */
import React, { memo, useContext, useMemo } from 'react';
import { Li } from '@/shared/ui/li/li';
import cls from './Search.module.scss';
import { SerchTile } from '@/shared/ui/SearchTitle';
import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';
import CloseIcon from '@/shared/assets/icons/close-icon.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/Icon/Icon';
import { HStack } from '@/shared/ui/Stack';
import { SearchSmall } from '@/shared/assets/icons/sidebarSearch';

interface SearchProp {
  className?: string;
}

const listOfMostRead = [
  { to: '/reading', title: 'Fotiha', suraId: 1, numberOfOyat: 7 },
  { to: '/reading', title: 'Al-Baqarah', suraId: 1, numberOfOyat: 7 },
  { to: '/reading', title: "Al-An'am", suraId: 6, numberOfOyat: 115 },
  { to: '/reading', title: 'Yusuf', suraId: 12, numberOfOyat: 111 },
  { to: '/reading', title: 'Hud', suraId: 11, numberOfOyat: 123 },
];

const lastReadSurahList = [
  { to: '/reading', title: "Al-An'am", suraId: 6, numberOfOyat: 115 },
  { to: '/reading', title: 'Yusuf', suraId: 12, numberOfOyat: 111 },
  { to: '/reading', title: 'Hud', suraId: 11, numberOfOyat: 123 },
];

export const Search = memo((prop: SearchProp) => {
  const { isRightsidebarActive, setIsRightsidebarActive } =
    useContext(ButtonsContext);

  const onToggle = () => {
    setIsRightsidebarActive(!isRightsidebarActive);
  };

  const getList = JSON.parse(localStorage.getItem('listLastRead') || '');

  const itemsOfMostRead = useMemo(
    () =>
      listOfMostRead.map((item) => (
        <Li
          search
          to={item.to}
          key={item.title}
          suraId={item.suraId}
          numberOfOyat={item.numberOfOyat}
        >
          {item.title}
        </Li>
      )),
    [],
  );

  const itemsLastRead = useMemo(
    () =>
      // eslint-disable-next-line array-callback-return
      getList?.reverse().map((item: any, index: number) => {
        if (index < 4)
          return (
            <Li to="/reading" key={item.title} close search>
              {item.title}
            </Li>
          );
      }),
    [getList],
  );

  return (
    <div className={classNames(cls.wrapperListSearch)}>
      <HStack className={cls.headerOfSidebar} max>
        <Icon Svg={SearchSmall} className={cls.icon} />
        <input
          type="text"
          placeholder="Search something"
          className={cls.input}
        />
        <Icon
          data-testid="sidebar-toggle"
          onClick={onToggle}
          className={cls.closeBtn}
          Svg={CloseIcon}
          height={0}
          clickable
        />
      </HStack>
      <SerchTile>Ko‘p ko‘rilganlar</SerchTile>
      {itemsOfMostRead}
      <SerchTile>So‘ngi ko‘rilganlar</SerchTile>
      {itemsLastRead}
      <SerchTile>Qidirib ko‘ring</SerchTile>
      {itemsOfMostRead}
    </div>
  );
});
