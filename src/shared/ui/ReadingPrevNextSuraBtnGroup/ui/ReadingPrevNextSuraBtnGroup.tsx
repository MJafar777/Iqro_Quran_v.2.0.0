import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { getSelectedSura } from '@/entities/Surah';
import cls from './ReadingPrevNextSuraBtnGroup.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ReadingPrevNextSuraBtn } from '../../ReadingPrevNextSuraBtn';

interface ReadingPrevNextSuraBtnGroupProps {
  className?: string;
}

const ReadingPrevNextSuraBtnGroup = memo(
  ({ className }: ReadingPrevNextSuraBtnGroupProps) => {
    const currentSura = useSelector(getSelectedSura);

    return (
      <div
        className={classNames(cls.ReadingPrevNextSuraBtnGroup, {}, [className])}
      >
        {currentSura?.quran_order < 114 && (
          <ReadingPrevNextSuraBtn prevIcon prev text="Keyingi Sura" />
        )}

        {currentSura?.quran_order > 1 && (
          <ReadingPrevNextSuraBtn nextIcon next text="Oldingi Sura" />
        )}
      </div>
    );
  },
);

export default ReadingPrevNextSuraBtnGroup;
