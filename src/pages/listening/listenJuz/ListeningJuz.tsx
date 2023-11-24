/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Pause, Download } from '@mui/icons-material';
import cls from './listeningJuz.module.scss';
import { Play } from '@/shared/assets/iconsListening';
import { OneSuraInListSchema } from '@/pages/MainPage';

const ListeningJuz = () => {
  const salom: number = 30;
  const arrayEmpty: number[] = Array.from(
    { length: salom },
    (_, index) => index + 1,
  );

  return (
    <div className={cls.ListenJuzWrapper}>
      {arrayEmpty.map((item: number) => {
        return <CardItems index={item} />;
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
  const { index, info } = props;

  const audioRef = useRef<HTMLAudioElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const audio = audioRef.current;

  return (
    <div className={cls.CardsItems}>
      <div className={cls.LeftItems}>
        <div className={cls.SquareNumber}>
          <span className={cls.Span}>{index}</span>
        </div>

        <div className={cls.TextCard}>
          <div className={cls.FirstText}>Juz</div>
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
  );
};
