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

  const [isRightsidebarActive, setIsRightsidebarActive] = useState(true);

  const [fontSize, setFontSize] = useState(3);

  const [audioUrl, setAudioUrl] = useState('');

  const [verseNumber, setVerseNumber] = useState('1');

  const [isPlay, setIsPlay] = useState(false);

  const [readingPageTubBtn, setReadingPageTubBtn] = useState(1);

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
      setReadingPageTubBtn,
      isPlay,
      setIsPlay,
      audioUrl,
      setAudioUrl,
      verseNumber,
      setVerseNumber,
    }),
    [
      readingSidebarActive,
      isSidebarActive,
      isRightsidebarActive,
      fontSize,
      readingPageTubBtn,
      isPlay,
      audioUrl,
      verseNumber,
    ],
  );

  return (
    <ButtonsContext.Provider value={defaultProps}>
      {children}
    </ButtonsContext.Provider>
  );
};

export default ButtonsProvider;
