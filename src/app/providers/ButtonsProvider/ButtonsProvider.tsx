import React, { ReactNode, useMemo, useState } from 'react';
import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';

interface ButtonsProviderProps {
  initialButton?: string;
  children: ReactNode;
}

const ButtonsProvider = (props: ButtonsProviderProps) => {
  const { initialButton, children } = props;

  const [readingSidebarActive, setReadingSidebarActive] =
    useState<boolean>(true);

  const [isSidebarActive, setIsSidebarActive] = useState<boolean>(true);

  const [TrackIndex, setTrackIndex] = useState(0);

  const [isRightsidebarActive, setIsRightsidebarActive] = useState(true);

  const [fontSize, setFontSize] = useState(3);

  const [audioUrl, setAudioUrl] = useState('');

  const [verseNumber, setVerseNumber] = useState('1');

  const [isPlay, setIsPlay] = useState(false);

  const [readingPageTubBtn, setReadingPageTubBtn] = useState(1);

  const [surahListenNumber, setSurahListenNumber] = useState(0);

  const [surahOnEnded, setSurahOnEnded] = useState(false);

  const [closeAudio, setCloseAudio] = useState(false);

  const [fetchIsLoading, setFetchIsLoading] = useState(false);

  const defaultProps = useMemo(
    () => ({
      isPlay,
      fontSize,
      audioUrl,
      setIsPlay,
      closeAudio,
      TrackIndex,
      setFontSize,
      setAudioUrl,
      verseNumber,
      surahOnEnded,
      setCloseAudio,
      setTrackIndex,
      fetchIsLoading,
      setVerseNumber,
      isSidebarActive,
      setSurahOnEnded,
      readingPageTubBtn,
      surahListenNumber,
      setFetchIsLoading,
      setIsSidebarActive,
      isRightsidebarActive,
      readingSidebarActive,
      setReadingPageTubBtn,
      setSurahListenNumber,
      setReadingSidebarActive,
      setIsRightsidebarActive,
    }),
    [
      isPlay,
      fontSize,
      audioUrl,
      setIsPlay,
      closeAudio,
      TrackIndex,
      setFontSize,
      setAudioUrl,
      verseNumber,
      surahOnEnded,
      setCloseAudio,
      setTrackIndex,
      setVerseNumber,
      fetchIsLoading,
      isSidebarActive,
      setSurahOnEnded,
      readingPageTubBtn,
      surahListenNumber,
      setFetchIsLoading,
      setIsSidebarActive,
      isRightsidebarActive,
      setSurahListenNumber,
      readingSidebarActive,
      setReadingPageTubBtn,
      setReadingSidebarActive,
      setIsRightsidebarActive,
    ],
  );

  return (
    <ButtonsContext.Provider value={defaultProps}>
      {children}
    </ButtonsContext.Provider>
  );
};

export default ButtonsProvider;
