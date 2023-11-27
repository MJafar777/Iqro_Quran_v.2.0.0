import React, { memo } from 'react';
import cls from './OneTafsirCard.module.scss';
import { IconsOfTafsir } from '@/shared/ui/IconsOfTafsir/IconsOfTafsir';
// import { classNames } from '@/shared/lib/classNames/classNames';

export const OneTafsirCard = memo(() => {
  return (
    <div className={cls.oneTafsirCard}>
      <IconsOfTafsir />
      <div>k</div>
      {/* <ContentOfTafsir/> */}
    </div>
  );
});
