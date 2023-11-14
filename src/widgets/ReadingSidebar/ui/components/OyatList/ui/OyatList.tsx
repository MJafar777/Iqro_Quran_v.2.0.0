import React, { useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './OyatList.module.scss';

interface OyatListProps {
  className?: string;
}

const OyatList = ({ className }: OyatListProps) => {
  const [selectedOyat, setSelectedOyat] = useState<number>(1);

  return (
    <div className={classNames(cls.OyatList, {}, [className])}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19].map(
        (element: number) => (
          <div
            key={element}
            onClick={() => setSelectedOyat(element)}
            className={classNames(
              cls.OyatList__item,
              { [cls.active]: element === selectedOyat },
              [className],
            )}
          >
            <p className={classNames(cls.OyatList__oyatNumber, {}, [])}>
              {element}
            </p>
          </div>
        ),
      )}
    </div>
  );
};

export default OyatList;
