import React, { memo } from 'react';
import cls from './IconsOfTafsir.module.scss';
import { Book2 } from '@/shared/assets/icons/SidebarListOfPages';
import { Play } from '@/shared/assets/iconsListening';

export const IconsOfTafsir = memo(() => {
  return (
    <div className={cls.iconsOfTafsir}>
      <p className={cls.verse}>1:1</p>
      <div className={cls.iconWrapper}>
        <Play className={cls.playIcon} />
      </div>
      <div className={cls.iconWrapper}>
        <Book2 className={cls.playIcon} />
      </div>
    </div>
  );
});
