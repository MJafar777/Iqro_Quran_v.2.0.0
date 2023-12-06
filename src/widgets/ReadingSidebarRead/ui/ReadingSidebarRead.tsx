import React from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ReadingSidebarRead.module.scss';

// ----------- |Elements |----------- //
import { SuraReadList } from '@/entities/SurahRead';
import { OyatReadList } from '@/entities/OyatRead';

interface ReadingSidebarReadProps {
  className?: string;
}

const ReadingSidebarRead = ({ className }: ReadingSidebarReadProps) => {
  return (
    <div className={classNames(cls.ReadingSidebarRead, {}, [className])}>
      <div
        className={classNames(cls.ReadingSidebarRead__selectionSura, {}, [])}
      >
        <SuraReadList />
      </div>

      <div
        className={classNames(cls.ReadingSidebarRead__selectionOyat, {}, [])}
      >
        <OyatReadList />
      </div>
    </div>
  );
};

export default ReadingSidebarRead;
