import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import cls from './AudioPlayerComp.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface AudioPlayerCompInterface {
  className?: string;
  src?: string;
}

const AudioPlayerComp = ({ className, src }: AudioPlayerCompInterface) => {
  return (
    <div className={classNames(cls.AudioPlayerComp, {}, [className])}>
      <AudioPlayer autoPlay src={src} onPlay={(e) => console.log('onPlay')} />
    </div>
  );
};

export default AudioPlayerComp;
