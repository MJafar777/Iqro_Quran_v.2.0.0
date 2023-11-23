/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect, useRef, useState } from 'react';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import cls from './listenSura.module.scss';
import {
  OneSuraInListSchema,
  fetchSurahlesList,
  getListOfSurahs,
} from '@/pages/MainPage';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Download, Pause, Play } from '@/shared/assets/iconsListening';

// http://iqro-quran.uz/backend/suras/${val?.quran_order}.mp3

// https://server8.mp3quran.net/afs/1.mp3\

interface ListenerProp {
  info: OneSuraInListSchema;
  index: number;
}

const CardItem = (prop: ListenerProp) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const { info, index } = prop;
  const audio = audioRef.current;
  console.log(audio, index);

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
          onClick={() => {
            if (audio && index + 1 === info.quran_order) {
              audio.play();
            } else if (audio) {
              audio.pause();
            }
            setIsPlaying(!isPlaying);
          }}
          className={cls.Button}
          type="button"
        >
          {isPlaying ? (
            <Pause style={{ fontSize: '22px' }} />
          ) : (
            <Play style={{ fontSize: '22px' }} />
          )}
        </button>

        {isPlaying && (
          <audio
            style={{ overflow: 'hidden', display: 'none' }}
            autoPlay
            ref={audioRef}
            src={`https://server12.mp3quran.net/maher/00${info.quran_order}.mp3`}
            controls
          />
        )}

        <button className={cls.Button} type="button">
          <Link
            to={`http://iqro-quran.uz/backend/suras/${info.quran_order}.mp3`}
            download
            target="_blank"
            rel="noopener noreferrer"
            style={{ listStyle: 'none', color: 'black', width: '100px' }}
          >
            <Download style={{ fontSize: '22px' }} />
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
    <div className={cls.ListenSuraWrapper}>
      {listOfSurah?.map((surah: OneSuraInListSchema, index) => (
        <CardItem info={surah} index={index} />
      ))}
    </div>
  );
};

export default ListeningSura;
