/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable prefer-destructuring */
import React, { useContext, useEffect, useRef, useState } from 'react';
// import AudioPlayer from 'react-h5-audio-player';
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

  const [playTime, setCurrentTime] = useState(0);

  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlay) {
      // @ts-ignore
      audioRef.current.play();
    } else {
      // @ts-ignore
      audioRef.current.pause();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlay]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (audioRef.current) {
        // @ts-ignore
        const currentTime = audioRef.current.currentTime;
        setAudioTime(currentTime);

        // @ts-ignore
        if (currentTime >= audioRef.current.duration) {
          clearInterval(interval);
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, [setAudioTime]);

  const endAudio = () => {
    setIsPlay(false);
    // @ts-ignore
    audioRef.current.currentTime = 0;
  };

  return (
    <div className={classNames(cls.AudioPlayerComp, {}, [className])}>
      <audio
        src={src}
        ref={audioRef}
        controls
        style={{ display: 'none' }}
        onPause={() => setIsPlay(false)}
        onPlay={() => setIsPlay(true)}
        onEnded={endAudio}
      />
    </div>
  );
};

export default AudioPlayerComp;
