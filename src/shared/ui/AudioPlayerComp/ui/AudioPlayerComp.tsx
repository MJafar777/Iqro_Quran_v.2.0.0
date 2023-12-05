/* eslint-disable no-unsafe-optional-chaining */
import React, { useContext, useRef } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import cls from './AudioPlayerComp.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';

interface AudioPlayerCompInterface {
  className?: string;
  src?: string;
}

const AudioPlayerComp = ({ className, src }: AudioPlayerCompInterface) => {
  const { isPlay, setIsPlay, setAudioTime, audioTime } =
    useContext(ButtonsContext);


  const audioRef = useRef(null);

 

  return (
    <div className={classNames(cls.AudioPlayerComp, {}, [className])}>
      <AudioPlayer
        src={src}
        // onListen={handleTime}
        ref={audioRef}
        // onPlay={() => setIsPlay(true)}
        // onPause={() => setIsPlay(false)}
      />
    </div>
  );
};

export default AudioPlayerComp;
