import React, { memo } from 'react';
import ArrowBottom from '@/shared/assets/icons/arrow-bottom.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ReadingPrevNextSuraBtn.module.scss';

interface ReadingPrevNextSuraBtnProps {
  className?: string;
  prevIcon?: boolean;
  nextIcon?: boolean;
  prev?: boolean;
  next?: boolean;
  text: string;
}

const ReadingPrevNexSuratBtn = memo(
  ({
    className,
    prevIcon,
    nextIcon,
    prev,
    next,
    text,
  }: ReadingPrevNextSuraBtnProps) => {
    return (
      <div
        className={classNames(
          cls.ReadingPrevNexSuraBtn,
          {
            [cls.disabled]: false,
            [cls.prev]: prev,
            [cls.next]: next,
          },
          [className],
        )}
      >
        {next ? (
          <p
            className={classNames(cls.ReadingPrevNexSuraBtn__text, {}, [
              className,
            ])}
          >
            {text}
          </p>
        ) : (
          ''
        )}

        <ArrowBottom
          className={classNames(
            cls.PrevNextBtnIcon,
            { [cls.prevIcon]: prevIcon, [cls.nextIcon]: nextIcon },
            [],
          )}
        />

        {prev ? (
          <p
            className={classNames(cls.ReadingPrevNexSuraBtn__text, {}, [
              className,
            ])}
          >
            {text}
          </p>
        ) : (
          ''
        )}
      </div>
    );
  },
);

export default ReadingPrevNexSuratBtn;
