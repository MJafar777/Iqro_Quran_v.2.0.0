import React, { memo } from 'react';
import ArrowBottom from '@/shared/assets/icons/arrow-bottom.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ReadingPrevNextBtn.module.scss';
import { useSelectedPageActions } from '@/entities/Page';

interface ReadingPrevNextBtnProps {
  className?: string;
  prevIcon?: boolean;
  nextIcon?: boolean;
  prev?: boolean;
  next?: boolean;
}

const ReadingPrevNextBtn = memo(
  ({ className, prevIcon, nextIcon, prev, next }: ReadingPrevNextBtnProps) => {
    const { setSelectedPage, incrementCurrentPage, decrementCurrentPage } =
      useSelectedPageActions();

    const handlePageClick = () => {
      if (prev) {
        decrementCurrentPage();
      }

      if (next) {
        incrementCurrentPage();
      }
    };

    return (
      <div
        onClick={handlePageClick}
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
            cls.PrevNextBtnIcon,
            { [cls.prevIcon]: prevIcon, [cls.nextIcon]: nextIcon },
            [],
          )}
        />
      </div>
    );
  },
);

export default ReadingPrevNextBtn;
