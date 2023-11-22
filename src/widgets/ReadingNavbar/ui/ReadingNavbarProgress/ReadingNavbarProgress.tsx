import React, { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import cls from './ReadingNavbarProgress.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getSelectedPage } from '@/entities/Page';
import { getSelectedSura } from '@/entities/Surah';

interface ReadingNavbarProgressProps {
  className?: string;
}

const ReadingNavbarProgress = memo(
  ({ className }: ReadingNavbarProgressProps) => {
    const [progressWidth, setProgressWidth] = useState<number>(1);

    const currentSura = useSelector(getSelectedSura);
    const currentPage = useSelector(getSelectedPage);

    useMemo(() => {
      if (currentSura.pages[1] - currentSura.pages[0] > 0) {
        setProgressWidth(
          (100 / (currentSura.pages[1] - currentSura.pages[0])) *
            currentPage.pageNumber,
        );
      } else {
        setProgressWidth(100);
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage.pageNumber, currentSura._id]);

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
