/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import cls from './listenSura.module.scss';
import {
  OneSuraInListSchema,
  fetchSurahlesList,
  getListOfSurahs,
} from '@/pages/MainPage';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

// http://iqro-quran.uz/backend/suras/${val?.quran_order}.mp3

// https://server8.mp3quran.net/afs/1.mp3\

interface ListenerProp {
  info: OneSuraInListSchema;
}

const CardItem = (prop: ListenerProp) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { info } = prop;

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
          onClick={() => setIsPlaying(!isPlaying)}
          className={cls.Button}
          type="button"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>

        {isPlaying && (
          <audio
            src={`https://server12.mp3quran.net/maher/00${info.quran_order}.mp3`}
            controls
          />
        )}

        <button className={cls.Button} type="button">
          <a
            href={`http://iqro-quran.uz/backend/suras/${info.quran_order}.mp3`}
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            Download
          </a>
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
    <div className={cls.ListenSuraWrapper}>
      {listOfSurah?.map((surah: OneSuraInListSchema) => (
        <CardItem info={surah} />
      ))}
    </div>
  );
};

export default ListeningSura;
