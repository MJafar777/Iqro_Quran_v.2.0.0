import React, { memo } from 'react';
import cls from './OneItemSurah.module.scss';
import { Skeleton } from '@/shared/ui/Skeleton';
import { HStack, VStack } from '@/shared/ui/Stack';

export const OneItemSurahSkleton = memo(() => {
  return (
    <div className={cls.oneItemSura}>
      <HStack align="center" justify="center">
        <Skeleton
          className={cls.skeleton}
          width={40}
          border="50%"
          height={40}
        />
      </HStack>
      <VStack gap="8" justify="center">
        <Skeleton width={300} height={25} />
        <Skeleton width={300} height={25} />
      </VStack>
    </div>
  );
});
