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

  const [readingPageTubBtn, setReadingPageTubBtn] = useState(1);

  const [surahListenNumber, setSurahListenNumber] = useState(0);

  const [surahOnEnded, setSurahOnEnded] = useState(false);

  const [closeAudio, setCloseAudio] = useState(false);

  const defaultProps = useMemo(
    () => ({
      readingSidebarActive,
      setReadingSidebarActive,
      isSidebarActive,
      setIsSidebarActive,
      isRightsidebarActive,
      setIsRightsidebarActive,
      fontSize,
      setFontSize,
      readingPageTubBtn,
      surahListenNumber,
      setReadingPageTubBtn,
      setSurahListenNumber,
      surahOnEnded,
      setSurahOnEnded,
      closeAudio,
      setCloseAudio,
      TrackIndex,
      setTrackIndex,
    }),
    [
      fontSize,
      isRightsidebarActive,
      isSidebarActive,
      surahListenNumber,
      readingPageTubBtn,
      setSurahListenNumber,
      readingSidebarActive,
      setReadingPageTubBtn,
      surahOnEnded,
      setSurahOnEnded,
      closeAudio,
      setCloseAudio,
      TrackIndex,
      setTrackIndex,
    ],
  );

  return (
    <ButtonsContext.Provider value={defaultProps}>
      {children}
    </ButtonsContext.Provider>
  );
};

export default ButtonsProvider;
