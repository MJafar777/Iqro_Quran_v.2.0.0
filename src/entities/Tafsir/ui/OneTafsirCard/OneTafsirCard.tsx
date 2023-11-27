import React, { memo } from 'react';
import cls from './OneTafsirCard.module.scss';
import { IconsOfTafsir } from '@/shared/ui/IconsOfTafsir';
import { ContentOfTafsir } from '@/shared/ui/ContentOfTafsir';

export const OneTafsirCard = memo(() => {
  return (
    <div className={cls.oneTafsirCard}>
      <IconsOfTafsir />
      <ContentOfTafsir/>
    </div>
  );
});
