import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getSelectedSura } from '@/entities/Surah';
import cls from './ReadingPrevNextSuraBtnGroup.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ReadingPrevNextSuraBtn } from '../../ReadingPrevNextSuraBtn';

interface ReadingPrevNextSuraBtnGroupProps {
  className?: string;
}

const ReadingPrevNextSuraBtnGroup = memo(
  ({ className }: ReadingPrevNextSuraBtnGroupProps) => {
    const { t } = useTranslation();
    const currentSura = useSelector(getSelectedSura);

    return (
      <div
        className={classNames(cls.ReadingPrevNextSuraBtnGroup, {}, [className])}
      >
        {currentSura?.quran_order < 114 && (
          <ReadingPrevNextSuraBtn prevIcon prev text={t('nextSura')} />
        )}

        {currentSura?.quran_order > 1 && (
          <ReadingPrevNextSuraBtn nextIcon next text={t('prevSura')} />
        )}
      </div>
    );
  },
);

export default ReadingPrevNextSuraBtnGroup;
