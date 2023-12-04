import React from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ReadTextSkeleton.module.scss';
import { Skeleton } from '../Skeleton/Skeleton';

interface ReadTextSkeletonProps {
  className?: string;
}

const ReadTextSkeleton = ({ className }: ReadTextSkeletonProps) => {
  return (
    <div className={classNames(cls.ReadTextSkeleton)}>
      <div className={classNames(cls.ReadTextSkeleton__box)}>
        {Array.from({ length: 100 }, (_, index) => index + 1).map((item) => (
          <div className={classNames(cls.ReadTextSkeleton__item)} key={item}>
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

export default ReadTextSkeleton;
