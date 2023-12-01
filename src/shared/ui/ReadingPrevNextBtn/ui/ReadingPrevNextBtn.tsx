import React, { memo, useContext } from 'react';
import cls from './ReadingPrevNextBtn.module.scss';
import { useSelectedPageActions } from '@/entities/Page';
import { classNames } from '@/shared/lib/classNames/classNames';
import ArrowBottom from '@/shared/assets/icons/arrow-bottom.svg';
import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';
import { useSelectedPageReadActions } from '@/entities/PageRead';

interface ReadingPrevNextBtnProps {
  className?: string;
  prevIcon?: boolean;
  nextIcon?: boolean;
  prev?: boolean;
  next?: boolean;
}

const ReadingPrevNextBtn = memo(
  ({ className, prevIcon, nextIcon, prev, next }: ReadingPrevNextBtnProps) => {
    const { readingPageTubBtn } = useContext(ButtonsContext);
    const { incrementCurrentPage, decrementCurrentPage } =
      useSelectedPageActions();
    const { incrementCurrentPageRead, decrementCurrentPageRead } =
      useSelectedPageReadActions();

    const handlePageClick = () => {
      if (prev) {
        if (readingPageTubBtn === 3) {
          incrementCurrentPageRead();
        } else {
          incrementCurrentPage();
        }
      }

      if (next) {
        if (readingPageTubBtn === 3) {
          decrementCurrentPageRead();
        } else {
          decrementCurrentPage();
        }
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
