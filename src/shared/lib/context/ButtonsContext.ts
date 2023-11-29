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
  surahListenNumber: number;
  setSurahListenNumber: (num: number) => void;
  surahOnEnded: boolean;
  setSurahOnEnded: (onEnded: boolean) => void;
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
  surahListenNumber: 0,
  setSurahListenNumber: () => {},
  surahOnEnded: false,
  setSurahOnEnded: () => {},
});
