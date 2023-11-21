import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import cls from './MostSearchButton.module.scss';
import { useSelectedSuraActions } from '@/entities/Surah';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getListOfSurahs } from '@/pages/MainPage';

interface MostSearchButtonProp {
  className?: string;
  children: string;
  suraId: number;
  numberOfOyat: number;
}

export const MostSearchButton = memo((prop: MostSearchButtonProp) => {
  const { children, suraId, numberOfOyat, className } = prop;
  const { setSelectedSura } = useSelectedSuraActions();
  const listOfSurahs = useSelector(getListOfSurahs);
  const navigate = useNavigate();

  const toggleOneItemSurah = () => {
    const data = listOfSurahs?.filter((sura) => sura.quran_order === suraId)[0];
    if (data) {
      setSelectedSura(data);
      navigate(`/reading`);
    }
  };
  return (
    <div
      onClick={toggleOneItemSurah}
      className={classNames(cls.mostSearchButton, {}, [className])}
    >
      {children}
    </div>
  );
});
