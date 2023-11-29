/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import cls from './AudioPlayerComp.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';

interface AudioPlayerCompInterface {
  className?: string;
  src?: string;
}

const ListenSurahAudioPlayer = ({
  className,
  src,
}: AudioPlayerCompInterface) => {
  const { surahOnEnded, setSurahOnEnded } = useContext(ButtonsContext);

  return (
    <div className={classNames(cls.AudioPlayerComp, {}, [className])}>
      <AudioPlayer
        onEnded={() => setSurahOnEnded(true)}
        autoPlay
        src={src}
        onPlay={(e) => {
          setSurahOnEnded(false);
          console.log('onPlay');
        }}
        onPause={(e) => {
          setSurahOnEnded(true);
          console.log('onPause');
        }}
      />
    </div>
  );
};

export default ListenSurahAudioPlayer;
