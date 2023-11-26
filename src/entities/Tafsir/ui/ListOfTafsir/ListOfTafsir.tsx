import React, { memo } from 'react';
import cls from './ListOfTafsir.module.scss'

interface ListOfTafsirProp {
  className?: string;
  listOfTafsir: any;
}

export const ListOfTafsir = memo(() => {
  return <div className={cls.listOfTafsir}>ListOfTafsir</div>;
});
