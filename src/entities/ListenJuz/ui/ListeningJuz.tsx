/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/control-has-associated-label */

import React, { Suspense, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
//
import { Loader } from '@/widgets/Loader';
import { OneSuraInListSchema } from '@/pages/MainPage';
import { Download, Pause, Play } from '@/shared/assets/iconsListening';
//
import cls from './listeningJuz.module.scss';

const ListeningJuz = () => {
  const salom: number = 30;
  const arrayEmpty: number[] = Array.from(
    { length: salom },
    (_, index) => index + 1,
  );

  return (
    <div className={cls.ListenJuzWrapper}>
      {arrayEmpty.map((item: number, index: number) => {
        return <CardItems key={index} index={item} />;
      })}
    </div>
  );
};

export default ListeningJuz;

interface CardItemsvalue {
  info?: OneSuraInListSchema;
  index: number;
}

const CardItems = (props: CardItemsvalue) => {
  const { t } = useTranslation();
  const Juz = t('Juz');
  const { index, info } = props;

  const audioRef = useRef<HTMLAudioElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const audio = audioRef.current;

  return (
    <Suspense fallback={<Loader />}>
      <div className={cls.CardsItems}>
        <div className={cls.LeftItems}>
          <div className={cls.SquareNumber}>
            <span className={cls.Span}>{index}</span>
          </div>

          <div className={cls.TextCard}>
            <h3 className={cls.FirstText}>{Juz}</h3>
          </div>
        </div>

        {/*  */}

        <div className={cls.RightItems}>
          <button
            onClick={() => {
              if (audio && index + 1 === info?.quran_order) {
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
              src={`https://server12.mp3quran.net/maher/00${info?.quran_order}.mp3`}
              controls
            />
          )}

          <button className={cls.Button} type="button">
            <Link
              to={`http://iqro-quran.uz/backend/suras/${info?.quran_order}.mp3`}
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
    </Suspense>
  );
};
