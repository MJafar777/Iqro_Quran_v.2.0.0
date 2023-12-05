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
  console.log(src, 'src');

  const [playTime, setCurrentTime] = useState(0);

  const audioRef = useRef(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // function handleTimeUpdate() {
  //   // @ts-ignore
  //   setAudioTime(audioRef.current.audio.current.currentTime);
  // }

  // useEffect(() => {
  //   handleTimeUpdate();
  // }, [audioTime, handleTimeUpdate]);

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
  }, [setAudioTime]); //

  return (
    <div className={classNames(cls.AudioPlayerComp, {}, [className])}>
      {/* <AudioPlayer
        src={src}
        // eslint-disable-next-line react/jsx-no-bind
        onListen={handleTimeUpdate}
        ref={audioRef}
        // onPlay={() => setIsPlay(true)}
        // onPause={() => setIsPlay(false)}
      /> */}
      <audio src={src} ref={audioRef} controls />
    </div>
  );
};

export default AudioPlayerComp;
