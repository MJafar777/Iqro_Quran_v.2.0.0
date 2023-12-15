import React, { memo, useContext, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import cls from './ReadingNavbarProgress.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getSelectedSura } from '@/entities/Surah';
import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';
import { getSelectedSuraRead } from '@/entities/SurahRead';
import { getSelectedPageReadSelect } from '@/entities/PageReadSelect';

interface ReadingNavbarProgressProps {
  className?: string;
}

const ReadingNavbarProgress = memo(
  ({ className }: ReadingNavbarProgressProps) => {
    const [progressWidth, setProgressWidth] = useState<number>(1);
    const { readingPageTubBtn } = useContext(ButtonsContext);
    const currentPageReadSelect = useSelector(getSelectedPageReadSelect);

    const currentSura = useSelector(getSelectedSura);
    const currentSuraRead = useSelector(getSelectedSuraRead);

    useMemo(() => {
      if (readingPageTubBtn === 1 || readingPageTubBtn === 2) {
        if (currentSura.pages[1] - currentSura.pages[0] > 0) {
          setProgressWidth(
            (100 / (currentSura.pages[1] - currentSura.pages[0])) *
              currentPageReadSelect.pageNumber,
          );
        } else {
          setProgressWidth(100);
        }
      }
      if (readingPageTubBtn === 3) {
        if (currentSuraRead.pages[1] - currentSuraRead.pages[0] > 0) {
          setProgressWidth(
            (100 / (currentSuraRead.pages[1] - currentSuraRead.pages[0])) *
              (currentPageReadSelect.pageNumber - currentSuraRead.pages[0] + 1),
          );
        } else {
          setProgressWidth(100);
        }
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
      currentSura._id,
      currentSuraRead._id,
      currentPageReadSelect.pageNumber,
      readingPageTubBtn,
    ]);

    return (
      <div className={classNames(cls.ReadingNavbarProgress, {}, [className])}>
        <div
          className={cls.ReadingNavbarProgress__bar}
          style={{ width: `${progressWidth}%` }}
        />
      </div>
    );
  },
);

export default ReadingNavbarProgress;
