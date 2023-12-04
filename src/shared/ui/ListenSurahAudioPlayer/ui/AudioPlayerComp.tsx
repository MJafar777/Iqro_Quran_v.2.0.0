import React, { useContext } from 'react';
import AudioPlayer from 'react-h5-audio-player';
//
import { classNames } from '@/shared/lib/classNames/classNames';
import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';
//
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
  const {
    closeAudio,
    TrackIndex,
    setTrackIndex,
    setCloseAudio,
    setSurahOnEnded,
    surahListenNumber,
  } = useContext(ButtonsContext);

  const playlist = [{ src: '/assets/one.mp3' }, { src }];

  const handleEnd = () => {
    setTrackIndex((currentTrack: number) =>
      currentTrack < playlist.length - 1 ? currentTrack + 1 : 0,
    );
  };

  return closeAudio === false ? (
    <div className={classNames(cls.AudioPlayerComp, {}, [className])}>
      <button
        aria-label="Save"
        className={cls.closeCompoent}
        type="button"
        onClick={() => {
          setSurahOnEnded(true);
          setCloseAudio(true);
        }}
        style={{ color: 'var(--color-text)' }}
      >
        <Close />
      </button>

      <AudioPlayer
        autoPlay
        onEnded={() => {
          handleEnd();
          setSurahOnEnded(true);
        }}
        src={
          Number(surahListenNumber) === 9 || Number(surahListenNumber) === 1
            ? src
            : playlist[TrackIndex].src
        }
        onPlay={() => {
          setSurahOnEnded(false);
        }}
        style={{ backgroundColor: 'var(--bg-color)' }}
      />
    </div>
  ) : (
    <div />
  );
};

export default ListenSurahAudioPlayer;
