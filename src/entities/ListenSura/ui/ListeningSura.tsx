/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
//
import {
  getListOfSurahs,
  fetchSurahlesList,
  OneSuraInListSchema,
} from '@/pages/MainPage';
import { HStack } from '@/shared/ui/Stack';
import { ListenActive } from '@/shared/ui/ListenActive';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Download, Play } from '@/shared/assets/iconsListening';
import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
//
import cls from './listenSura.module.scss';

interface ListenerProp {
  index: number;
  info: OneSuraInListSchema;
}

const CardItem = (prop: ListenerProp) => {
  const { surahOnEnded, setSurahOnEnded, TrackIndex, setTrackIndex } =
    useContext(ButtonsContext);

  const { info, index } = prop;

  const { setSurahListenNumber, surahListenNumber, setCloseAudio } =
    useContext(ButtonsContext);

  const srcDownload = `http://iqro-quran.uz/backend/suras/${info.quran_order}.mp3`;

  return (
    <div className={cls.CardsItems}>
      <div className={cls.LeftItems}>
        <div className={cls.SquareNumber}>
          <span className={cls.Span}>{info.quran_order}</span>
        </div>

        <div className={cls.TextCard}>
          <div className={cls.FirstText}>{info.name_simple}</div>
        </div>
      </div>

      <div className={cls.RightItems}>
        <button
          type="button"
          className={cls.Button}
          onClick={() => {
            setTrackIndex(0);

            setSurahListenNumber(info.quran_order);
            setCloseAudio(false);
          }}
        >
          {surahListenNumber !== info.quran_order && surahOnEnded ? (
            <Play className={cls.ButtonIcon} />
          ) : !surahOnEnded && surahListenNumber === info.quran_order ? (
            <ListenActive />
          ) : (
            <Play className={cls.ButtonIcon} />
          )}
        </button>
        <button className={cls.Button} type="button">
          <Link
            download
            target="_blank"
            to={srcDownload}
            rel="noopener noreferrer"
            className={cls.ButtonDownload}
          >
            <Download className={cls.ButtonIcon} />
          </Link>
        </button>
      </div>
    </div>
  );
};

const ListeningSura = () => {
  const dispatch = useAppDispatch();
  const listOfSurah = useSelector(getListOfSurahs);

  useEffect(() => {
    if (!listOfSurah) dispatch(fetchSurahlesList({}));
  }, [dispatch, listOfSurah]);

  return (
    <div>
      <HStack
        max
        className={classNames(cls.ListenSuraWrapper, {}, [])}
        gap="16"
      >
        {listOfSurah?.map((surah: OneSuraInListSchema, index) => (
          <CardItem key={index + 1} info={surah} index={index} />
        ))}
      </HStack>
    </div>
  );
};

export default ListeningSura;

// http://iqro-quran.uz/backend/suras/${val?.quran_order}.mp3

// https://server8.mp3quran.net/afs/1.mp3\
