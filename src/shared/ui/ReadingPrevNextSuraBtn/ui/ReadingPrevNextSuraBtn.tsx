import React, { memo, useContext } from 'react';
import { useSelector } from 'react-redux';
import { getListOfSurahs } from '@/pages/MainPage';
import cls from './ReadingPrevNextSuraBtn.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import ArrowBottom from '@/shared/assets/icons/arrow-bottom.svg';
import { getSelectedSura, useSelectedSuraActions } from '@/entities/Surah';
import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';
import {
  getSelectedSuraRead,
  useSelectedSuraReadActions,
} from '@/entities/SurahRead';

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
    const { readingPageTubBtn } = useContext(ButtonsContext);
    const { setSelectedSura } = useSelectedSuraActions();
    const currentSura = useSelector(getSelectedSura);
    const { setSelectedSuraRead } = useSelectedSuraReadActions();
    const currentSuraRead = useSelector(getSelectedSuraRead);
    const suraList = useSelector(getListOfSurahs);

    const handlePageClick = () => {
      if (prev && suraList) {
        if (readingPageTubBtn === 3) {
          setSelectedSuraRead(suraList[currentSuraRead.quran_order]);
        } else {
          setSelectedSura(suraList[currentSura.quran_order]);
        }
      }

      if (next && suraList) {
        if (readingPageTubBtn === 3) {
          setSelectedSuraRead(suraList[currentSuraRead.quran_order - 2]);
        } else {
          setSelectedSura(suraList[currentSura.quran_order - 2]);
        }
      }
    };

    return (
      <div
        onClick={handlePageClick}
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
