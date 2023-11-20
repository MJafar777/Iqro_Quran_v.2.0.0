import React, { memo } from 'react';

import cls from './SearchTitle.module.scss';

interface SearchTitle {
  className?: string;
  children: string;
}
export const SerchTile = memo((prop: SearchTitle) => {
  const { children } = prop;

  return <div className={cls.searchTitle}>{children}</div>;
});
