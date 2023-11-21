import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import cls from './MostSearchButton.module.scss';
import { useSelectedSuraActions } from '@/entities/Surah';
import { classNames } from '@/shared/lib/classNames/classNames';

interface MostSearchButtonProp {
  className?: string;
  children: string;
  suraId: number;
  numberOfOyat: number;
}

export const MostSearchButton = memo((prop: MostSearchButtonProp) => {
  const { children, suraId, numberOfOyat, className } = prop;
  const { setSelectedSura } = useSelectedSuraActions();

  return (
    <Link
      // onClick={() =>
      //   setSelectedSura({
      //     suraId,
      //     nameLotin: '',
      //     nameKril: '',
      //     numberOfOyat: numberOfOyat || 7,
      //   })
      // }
      to="/reading"
      className={classNames(cls.mostSearchButton, {}, [className])}
    >
      {children}
    </Link>
  );
});
