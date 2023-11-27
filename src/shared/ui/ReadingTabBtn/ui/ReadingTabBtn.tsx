import React, { useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ReadingTabBtn.module.scss';

interface ReadingTabBtnProps {
  className?: string;
}

const ReadingTabBtn = ({ className }: ReadingTabBtnProps) => {
  const tubValueData = [{ value: `O'qilishi` }, { value: `Tarjimasi` }];

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleButtonClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className={classNames(cls.ReadingTabBtn, {}, [className])}>
      <div className={cls.readingTabBtnContainer}>
        {tubValueData.map((item, index) => (
          <div
            key={index}
            className={classNames(
              cls.readingTabBtn,
              { [cls.tabButtonActive]: activeIndex === index },
              [className],
            )}
            onClick={() => handleButtonClick(index)}
          >
            <p>{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadingTabBtn;
