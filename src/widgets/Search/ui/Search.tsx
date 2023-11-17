import React, { memo } from 'react';
import { Li } from '@/shared/ui/li/li';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Search.module.scss'

interface SearchProp {
  className?: string;
}

export const Search = memo((prop: SearchProp) => {
  return (
    <div className={classNames(cls.wrapperListSearch)}>
      <Li to="/">Fotiha</Li>
      <Li to="/">Fotiha</Li>
      <Li to="/">Fotiha</Li>
      <Li to="/">Fotiha</Li>
      <Li to="/">Fotiha</Li>
      <Li to="/">Fotiha</Li>
      <Li to="/">Fotiha</Li>
      <Li to="/">Fotiha</Li>
      <Li to="/">Fotiha</Li>
      <Li to="/">Fotiha</Li>
      <Li to="/">Fotiha</Li>
      <Li to="/">Fotiha</Li>
      <Li to="/">Fotiha</Li>
    </div>
  );
});
