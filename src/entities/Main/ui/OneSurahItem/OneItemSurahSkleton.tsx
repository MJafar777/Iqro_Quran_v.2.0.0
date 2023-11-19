import React, { memo } from 'react';
import cls from './OneItemSurah.module.scss';
import { Skeleton } from '@/shared/ui/Skeleton';
import { VStack } from '@/shared/ui/Stack';

export const OneItemSurahSkleton = memo(() => {
  return (
    <div className={cls.oneItemSura}>
      <Skeleton border="50%" width={34} height={34} />
      <VStack gap='8' justify='center'>
        <Skeleton width={300} height={25} />
        <Skeleton width={300} height={25}  />
      </VStack>
    </div>
  );
});
