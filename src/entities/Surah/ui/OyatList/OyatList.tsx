import React from 'react';
import cls from './OyatList.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useSelectedSuraValue } from '../../model/selectors/getSelectedSuraValue/getSelectedSuraValue';
import { useSelectedSuraActions } from '../../model/slice/selectedSuraSlice';

interface OyatListProps {
  className?: string;
}

const OyatList = ({ className }: OyatListProps) => {
  const selectedSura = useSelectedSuraValue();
  const { currentOyat } = useSelectedSuraActions();

  return (
    <div className={classNames(cls.OyatList, {}, [className])}>
      {Array.from(
        { length: selectedSura.numberOfOyat },
        (_, index) => index + 1,
      ).map((element: number) => (
        <div
          key={element}
          onClick={() => currentOyat(element)}
          className={classNames(
            cls.OyatList__item,
            { [cls.active]: element === selectedSura.selectedOyat },
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
