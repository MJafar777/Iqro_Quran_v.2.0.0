import React, { memo } from 'react';
import cls from './ReadingNavbarRight.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface ReadingNavbarRgihtProps {
  className?: string;
}

const ReadingNavbarRgiht = memo(({ className }: ReadingNavbarRgihtProps) => {
  return (
    <div className={classNames(cls.ReadingNavbarRgiht, {}, [className])}>
      <p>Page</p>

      <p>99</p>
    </div>
  );
});

export default ReadingNavbarRgiht;
