import React, { memo, useContext } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getSelectedSura } from '@/entities/Surah';
import cls from './ReadingPrevNextSuraBtnGroup.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ReadingPrevNextSuraBtn } from '../../ReadingPrevNextSuraBtn';
import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';
import { getSelectedSuraRead } from '@/entities/SurahRead';

interface ReadingPrevNextSuraBtnGroupProps {
  className?: string;
}

const ReadingPrevNextSuraBtnGroup = memo(
  ({ className }: ReadingPrevNextSuraBtnGroupProps) => {
    const { t } = useTranslation();
    const currentSura = useSelector(getSelectedSura);
    const currentSuraRead = useSelector(getSelectedSuraRead);
    const { readingPageTubBtn } = useContext(ButtonsContext);

    return (
      <div
        className={classNames(cls.ReadingPrevNextSuraBtnGroup, {}, [className])}
      >
        {readingPageTubBtn === 3 ? (
          <>
            {currentSuraRead?.quran_order < 114 && (
              <ReadingPrevNextSuraBtn prevIcon prev text={t('nextSura')} />
            )}

            {currentSuraRead?.quran_order > 1 && (
              <ReadingPrevNextSuraBtn nextIcon next text={t('prevSura')} />
            )}
          </>
        ) : (
          <>
            {currentSura?.quran_order < 114 && (
              <ReadingPrevNextSuraBtn prevIcon prev text={t('nextSura')} />
            )}

            {currentSura?.quran_order > 1 && (
              <ReadingPrevNextSuraBtn nextIcon next text={t('prevSura')} />
            )}
          </>
        )}
      </div>
    );
  },
);

export default ReadingPrevNextSuraBtnGroup;
