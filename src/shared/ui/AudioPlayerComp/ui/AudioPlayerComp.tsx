import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import cls from './AudioPlayerComp.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface AudioPlayerCompInterface {
  className?: string;
}

const AudioPlayerComp = ({ className }: AudioPlayerCompInterface) => {
  return (
    <div className={classNames(cls.AudioPlayerComp, {}, [className])}>
      <AudioPlayer
        autoPlay
        src="http://example.com/audio.mp3"
        onPlay={(e) => console.log('onPlay')}
      />
    </div>
  );
};

export default AudioPlayerComp;
