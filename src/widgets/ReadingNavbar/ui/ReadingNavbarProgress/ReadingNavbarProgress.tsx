import React, { memo } from 'react';
import cls from './ReadingNavbarProgress.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface ReadingNavbarProgressProps {
  className?: string;
}

const ReadingNavbarProgress = memo(
  ({ className }: ReadingNavbarProgressProps) => {
    return (
      <div className={classNames(cls.ReadingNavbarProgress, {}, [className])}>
        <div className={cls.ReadingNavbarProgress__bar} />
      </div>
    );
  },
);

export default ReadingNavbarProgress;
