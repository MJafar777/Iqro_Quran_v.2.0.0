import React, { memo } from 'react';
import cls from './OneTafsirCard.module.scss';
import { HStack } from '@/shared/ui/Stack';
import { Skeleton } from '@/shared/ui/Skeleton';

export const OneTafsirCardSkleton = memo(() => {
  return (
    <div className={cls.skletonCard}>
      <HStack max>
        <Skeleton width="100%" height={50} />
      </HStack>
      <HStack max>
        <Skeleton width="100%" height={50} />
      </HStack>
    </div>
  );
});
