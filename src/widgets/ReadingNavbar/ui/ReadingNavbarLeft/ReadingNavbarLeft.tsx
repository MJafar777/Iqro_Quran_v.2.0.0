import React, { memo } from 'react';
import cls from './ReadingNavbarLeft.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';

interface ReadingNavbarLeftProps {
  className?: string;
}

const ReadingNavbarLeft = memo(({ className }: ReadingNavbarLeftProps) => {
  return (
    <div className={classNames(cls.ReadingNavbarLeft, {}, [className])}>
      <p>Fotiha</p>

      <ArrowIcon className={cls.collapseBtn} />
    </div>
  );
});

export default ReadingNavbarLeft;
