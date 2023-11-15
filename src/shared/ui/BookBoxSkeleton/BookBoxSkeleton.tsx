import React from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './BookBoxSkeleton.module.scss';
import { Skeleton } from '../Skeleton/Skeleton';

interface BookBoxSkeletonProps {
  className?: string;
}

const BookBoxSkeleton = ({ className }: BookBoxSkeletonProps) => {
  return (
    <div className={classNames(cls.BookBoxSkeleton)}>
      <div className={classNames(cls.BookBoxSkeleton__box)}>
        {Array.from({ length: 100 }, (_, index) => index + 1).map((item) => (
          <div className={classNames(cls.BookBoxSkeleton__item)} key={item}>
            <Skeleton
              className={cls.skeleton}
              width="100%"
              height={40}
              border="3px"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookBoxSkeleton;
