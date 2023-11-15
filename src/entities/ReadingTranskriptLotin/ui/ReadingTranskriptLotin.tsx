import React from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ReadingTranskriptLotin.module.scss';

interface ReadingTranskriptLotinProps {
  className?: string;
}

const ReadingTranskriptLotin = ({ className }: ReadingTranskriptLotinProps) => {
  return (
    <div className={classNames(cls.ReadingTranskriptLotin, {}, [className])}>
      {}
    </div>
  );
};

export default ReadingTranskriptLotin;
