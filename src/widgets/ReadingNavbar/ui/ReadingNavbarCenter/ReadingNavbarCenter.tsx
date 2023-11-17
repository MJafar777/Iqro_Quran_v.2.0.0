import React, { memo } from 'react';
import cls from './ReadingNavbarCenter.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface ReadingNavbarCenterProps {
  className?: string;
}

const ReadingNavbarCenter = memo(({ className }: ReadingNavbarCenterProps) => {
  return (
    <div className={classNames(cls.ReadingNavbarCenter, {}, [className])} />
  );
});

export default ReadingNavbarCenter;
