import React from 'react';
import { useSelector } from 'react-redux';
import cls from './OyatList.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useSelectedSuraValue } from '@/entities/Surah';
import { useSelectedOyatActions } from '../model/slice/seletedOyatSlice';
import { getSelectedOyat } from '../model/selectors/getSelectedOyat';

interface OyatListProps {
  className?: string;
}

const OyatList = ({ className }: OyatListProps) => {
  const selectedSura = useSelectedSuraValue();

  const selectedOyat = useSelector(getSelectedOyat);
  const { currentOyat } = useSelectedOyatActions();

  const handleClickOyat = (oyatNumber: number) => {
    currentOyat(oyatNumber);
  };

  return (
    <div className={classNames(cls.OyatList, {}, [className])}>
      {Array.from(
        { length: selectedSura.numberOfOyat },
        (_, index) => index + 1,
      ).map((element: number) => (
        <div
          key={element}
          onClick={() => handleClickOyat(element)}
          className={classNames(
            cls.OyatList__item,
            { [cls.active]: element === selectedOyat.oyatNumber },
            [className],
          )}
        >
          <p className={classNames(cls.OyatList__oyatNumber, {}, [])}>
            {element}
          </p>
        </div>
      ))}
    </div>
  );
};

export default OyatList;
