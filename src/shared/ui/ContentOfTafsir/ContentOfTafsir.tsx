import React, { memo } from 'react';
import cls from './ContentOfTafsir.module.scss';

interface ContentOfTafsirProp {
  arab?: string;
  text?: string;
}

export const ContentOfTafsir = memo((prop: ContentOfTafsirProp) => {
  const { arab, text } = prop;
  return (
    <div className={cls.content}>
      <p className={cls.arab}>{arab}</p>
      <p className={cls.text}>{text}</p>
    </div>
  );
});
