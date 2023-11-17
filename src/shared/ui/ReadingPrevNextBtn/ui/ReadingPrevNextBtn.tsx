import React from 'react';
import ArrowBottom from '@/shared/assets/icons/arrow-bottom.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ReadingPrevNextBtn.module.scss';

interface ReadingPrevNextBtnProps {
  className?: string;
  prevIcon?: boolean;
  nextIcon?: boolean;
  prev?: boolean;
  next?: boolean;
}

const ReadingPrevNextBtn = ({
  className,
  prevIcon,
  nextIcon,
  prev,
  next,
}: ReadingPrevNextBtnProps) => {
  return (
    <div
      className={classNames(
        cls.ReadingPrevNextBtn,
        {
          [cls.disabled]: false,
          [cls.prev]: prev,
          [cls.next]: next,
        },
        [className],
      )}
    >
      <ArrowBottom
        className={classNames(
          cls.PrevNextBtn,
          { [cls.prevIcon]: prevIcon, [cls.nextIcon]: nextIcon },
          [],
        )}
      />
    </div>
  );
};

export default ReadingPrevNextBtn;
