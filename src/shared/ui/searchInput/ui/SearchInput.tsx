import React from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Searchinput.module.scss';

interface SearchinputProps {
  className: string;
  placeHolder?: string;
}

const Searchinput = ({ className, placeHolder }: SearchinputProps) => {
  return (
    <input
      type="text"
      placeholder={placeHolder}
      className={classNames(cls.SearchInput, {}, [className])}
    />
  );
};

export default Searchinput;
