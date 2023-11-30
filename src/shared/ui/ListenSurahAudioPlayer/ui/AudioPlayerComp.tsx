/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react';
import AudioPlayer from 'react-h5-audio-player';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';

import cls from './AudioPlayerComp.module.scss';
import { Close } from '@/shared/assets/iconsListening';

interface AudioPlayerCompInterface {
  className?: string;
  src?: string;
}

const ListenSurahAudioPlayer = ({
  className,
  src,
}: AudioPlayerCompInterface) => {
  const { surahOnEnded, setSurahOnEnded, closeAudio, setCloseAudio } =
    useContext(ButtonsContext);

  return closeAudio === false ? (
    <div className={classNames(cls.AudioPlayerComp, {}, [className])}>
      <button
        className={classNames(cls.closeCompoent, {}, [className])}
        type="button"
        onClick={() => {
          setSurahOnEnded(true);
          setCloseAudio(true);
        }}
      >
        <Close />
      </button>

      <AudioPlayer
        autoPlay
        src={src}
        onPlay={() => setSurahOnEnded(false)}
        // onPause={() => setSurahOnEnded(true)}
        onEnded={() => setSurahOnEnded(true)}
      />
    </div>
  ) : (
    <div />
  );
};

export default ListenSurahAudioPlayer;
