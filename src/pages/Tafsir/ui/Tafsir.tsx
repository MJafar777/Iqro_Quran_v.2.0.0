import React from 'react';
import cls from './Tafsir.module.scss';

interface TafsirProp {
  className?: string;
}

export const Tafsir = (prop: TafsirProp) => {
  return <div className={cls.tafsir}>Tafsir</div>;
};
