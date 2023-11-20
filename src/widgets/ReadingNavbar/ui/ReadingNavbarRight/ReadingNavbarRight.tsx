import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import cls from './ReadingNavbarRight.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getSelectedPage } from '@/entities/Page';

interface ReadingNavbarRgihtProps {
  className?: string;
}

const ReadingNavbarRgiht = memo(({ className }: ReadingNavbarRgihtProps) => {
  const currentPage = useSelector(getSelectedPage);

  return (
    <div className={classNames(cls.ReadingNavbarRgiht, {}, [className])}>
      <p>Page</p>

      <p>{currentPage.pageNumber}</p>
    </div>
  );
});

export default ReadingNavbarRgiht;
