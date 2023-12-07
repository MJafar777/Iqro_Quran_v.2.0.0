/* eslint-disable no-unneeded-ternary */
/* eslint-disable jsx-a11y/media-has-caption */
import React, { memo, useContext, useEffect, useRef, useState } from 'react';
import { Slider } from '@mui/material';
import { useSelector } from 'react-redux';
import cls from './AudioPlayer.module.scss';
import { Pause, Play } from '@/shared/assets/iconsListening';
import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';
import { getDataSegment } from '@/pages/Tafsir';
import { getSelectedSura } from '@/entities/Surah';
import { Next, Previos } from '@/shared/assets/audioPlayer';

interface AudioPlayerCompInterface {
  className?: string;
  src?: string;
}

export const AudioPlayer = memo(
  ({ className, src }: AudioPlayerCompInterface) => {
    const { verseKey, timestampFrom, setVerseKey } = useContext(ButtonsContext);

    const [sliderValue, setSliderValue] = useState<number>(0);

    const [duration, setDuration] = useState<number | null>(null);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const surahId = useSelector(getSelectedSura);

    const getSegmentData = useSelector(getDataSegment);

    const [segmentsData, setSegmentsData] = useState(getSegmentData);

    const [lastVerse, setLastVerse] = useState(verseKey);

    useEffect(() => {
      setSegmentsData(getSegmentData);
      // @ts-ignore
    }, [getSegmentData, segmentsData, surahId.quran_order, verseKey]);

    const { isPlay, setIsPlay, setAudioTime, audioTime } =
      useContext(ButtonsContext);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
      const audio = audioRef.current;

      const handleLoadedMetadata = () => {
        setDuration(audio?.duration ?? null);
      };

      const handleCanPlayThrough = () => {
        setDuration(audio?.duration ?? null);
      };

      if (audio) {
        audio.addEventListener('loadedmetadata', handleLoadedMetadata);
        audio.addEventListener('canplaythrough', handleCanPlayThrough);
      }

      return () => {
        if (audio) {
          audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
          audio.removeEventListener('canplaythrough', handleCanPlayThrough);
        }
      };
    }, [audioRef]);

    useEffect(() => {
      setSliderValue(audioTime);
    }, [audioTime]);

    useEffect(() => {
      if (isPlay) {
        audioRef.current?.play();
      } else {
        audioRef.current?.pause();
      }
    }, [isPlay]);

    useEffect(() => {
      const interval = setInterval(() => {
        if (audioRef.current) {
          // eslint-disable-next-line prefer-destructuring
          const currentTime = audioRef.current.currentTime;
          setCurrentTime(currentTime);
          setAudioTime(currentTime);

          if (currentTime >= audioRef.current.duration) {
            clearInterval(interval);
          }
        }
      }, 100);

      return () => clearInterval(interval);
    }, [setAudioTime]);

    const formatTime = (timeInSeconds: number) => {
      if (timeInSeconds === null) {
        return '00:00:00';
      }

      const hours = Math.floor(timeInSeconds / 3600);
      const minutes = Math.floor((timeInSeconds % 3600) / 60);
      const seconds = Math.floor(timeInSeconds % 60);

      return `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes
      }:${seconds < 10 ? `0${seconds}` : seconds}`;
    };

    const handleSliderChange = (event: Event, newValue: number) => {
      setSliderValue(newValue);
      audioRef.current!.currentTime = newValue;
    };

    const endAudio = () => {
      setIsPlay(false);
      audioRef.current!.currentTime = 0;
    };
    useEffect(() => {
      if (timestampFrom >= 0) {
        audioRef.current!.currentTime = timestampFrom / 1000;
        setIsPlay(true);
      }

      setLastVerse(verseKey);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timestampFrom, verseKey]);

    const nextVerse = (verse: string) => {
      const nextVerse = `${parseInt(verse.split(':')[0], 10)}:${
        parseInt(verse.split(':')[1], 10) + 1
      }`;
      setVerseKey(nextVerse);
    };

    const privious = (verse: string) => {
      const nextVerse = `${parseInt(verse.split(':')[0], 10)}:${
        parseInt(verse.split(':')[1], 10) - 1
      }`;

      setVerseKey(nextVerse);
    };

    return (
      <div className={cls.audioPlayer}>
        <Slider
          value={sliderValue}
          // @ts-ignore
          onChange={handleSliderChange}
          min={0}
          max={duration ? duration : 100}
          step={1}
          sx={{
            '--Slider-trackSize': '6px',
            '--Slider-markSize': '0px',
            '--Slider-thumbSize': '18px',
            '--Slider-thumbWidth': '18px',
            '--Slider-valueLabelArrowSize': '11px',
          }}
          className={cls.range}
        />
        <div className={cls.bodyOfPlayer}>
          {duration !== null && <p>{formatTime(currentTime)}</p>}

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div className={cls.play} onClick={() => privious(verseKey)}>
              <Previos />
            </div>
            {isPlay ? (
              <div onClick={() => setIsPlay(false)} className={cls.pause}>
                <Pause />
              </div>
            ) : (
              <div onClick={() => setIsPlay(true)} className={cls.play}>
                <Play />
              </div>
            )}
            <div className={cls.play} onClick={() => nextVerse(verseKey)}>
              <Next />
            </div>
          </div>
          {duration !== null && <p>{formatTime(duration)}</p>}
        </div>

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
  },
);
