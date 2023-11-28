import { createContext } from 'react';

export interface ButtonsClickedProps {
  readingSidebarActive?: boolean;
  setReadingSidebarActive?: (isActive: boolean) => void;
  isSidebarActive: boolean;
  setIsSidebarActive: (active: boolean) => void;
  isRightsidebarActive: boolean;
  setIsRightsidebarActive: (active: boolean) => void;
  fontSize: number;
  setFontSize: (pro: number) => void;
  readingPageTubBtn: number;
  setReadingPageTubBtn: (activeBtn: number) => void;

  setIsPlay: (prop: boolean) => void;
  isPlay: boolean;
  setVerseNumber: (prop: string) => void;
  verseNumber: string;
  setAudioUrl: (prop: string) => void;
  audioUrl: string;
}

export const ButtonsContext = createContext<ButtonsClickedProps>({
  readingSidebarActive: true,
  setReadingSidebarActive: () => {},
  isSidebarActive: false,
  setIsSidebarActive: () => {},
  isRightsidebarActive: false,
  setIsRightsidebarActive: () => {},
  fontSize: 3,
  setFontSize: () => {},
  readingPageTubBtn: 1,
  setReadingPageTubBtn: () => {},
  setIsPlay: (prop: boolean) => {},
  isPlay: false,
  setVerseNumber: () => {},
  verseNumber: '1',
  setAudioUrl: () => {},
  audioUrl: '',
});
