import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ReadingPrevNextSuraBtnGroup.module.scss';
import { ReadingPrevNextSuraBtn } from '../../ReadingPrevNextSuraBtn';

interface ReadingPrevNextSuraBtnGroupProps {
  className?: string;
}

const ReadingPrevNextSuraBtnGroup = memo(
  ({ className }: ReadingPrevNextSuraBtnGroupProps) => {
    return (
      <div
        className={classNames(cls.ReadingPrevNextSuraBtnGroup, {}, [className])}
      >
        <ReadingPrevNextSuraBtn prevIcon prev text="Oldingi Sura" />

        <ReadingPrevNextSuraBtn nextIcon next text="Keyingi Sura" />
      </div>
    );
  },
);

export default ReadingPrevNextSuraBtnGroup;
