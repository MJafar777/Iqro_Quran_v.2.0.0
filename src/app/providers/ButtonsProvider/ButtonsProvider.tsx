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
  const [timestampFrom, setTimestampFrom] = useState<number>(0);
  const [TrackIndex, setTrackIndex] = useState(0);

  const [isRightsidebarActive, setIsRightsidebarActive] = useState(true);

  const [fontSize, setFontSize] = useState(3);

  const [audioUrl, setAudioUrl] = useState('');

  const [audioTime, setAudioTime] = useState(0);

  const [isPlay, setIsPlay] = useState(false);

  const [verseKey, setVerseKey] = useState('1:1');

  const [isPlayVerse, setIsPlayVerse] = useState(false);

  const [readingPageTubBtn, setReadingPageTubBtn] = useState(1);

  const [surahListenNumber, setSurahListenNumber] = useState(0);

  const [surahOnEnded, setSurahOnEnded] = useState(false);

  const [closeAudio, setCloseAudio] = useState(false);

  const [fetchIsLoading, setFetchIsLoading] = useState(false);

  const [BismillahNavbarImg, setBismillahNavbarImg] = useState('');

  const [listOfPagesValuePath, setListOfPagesValuePath] = useState(1);

  const defaultProps = useMemo(
    () => ({
      isPlay,
      isPlayVerse,
      verseKey,
      fontSize,
      audioUrl,
      setIsPlay,
      setIsPlayVerse,
      setVerseKey,
      closeAudio,
      TrackIndex,
      setFontSize,
      setAudioUrl,
      audioTime,
      surahOnEnded,
      setCloseAudio,
      setTrackIndex,
      fetchIsLoading,
      setAudioTime,
      isSidebarActive,
      setSurahOnEnded,
      readingPageTubBtn,
      surahListenNumber,
      setFetchIsLoading,
      BismillahNavbarImg, // BismillahNavbar img
      setIsSidebarActive,
      isRightsidebarActive,
      readingSidebarActive,
      setReadingPageTubBtn,
      setSurahListenNumber,
      setBismillahNavbarImg, // BismillahNavbar img
      setReadingSidebarActive,
      setIsRightsidebarActive,
      timestampFrom,
      setTimestampFrom,
      listOfPagesValuePath,
      setListOfPagesValuePath,
    }),
    [
      isPlay,
      isPlayVerse,
      verseKey,
      fontSize,
      audioUrl,
      closeAudio,
      TrackIndex,
      audioTime,
      surahOnEnded,
      fetchIsLoading,
      isSidebarActive,
      readingPageTubBtn,
      surahListenNumber,
      BismillahNavbarImg,
      isRightsidebarActive,
      readingSidebarActive,
      timestampFrom,
      setTimestampFrom,
      setReadingPageTubBtn,
      setBismillahNavbarImg, // BismillahNavbar img
      setReadingSidebarActive,
      setIsRightsidebarActive,
      listOfPagesValuePath,
      setListOfPagesValuePath,
    ],
  );

  return (
    <ButtonsContext.Provider value={defaultProps}>
      {children}
    </ButtonsContext.Provider>
  );
};

export default ButtonsProvider;
