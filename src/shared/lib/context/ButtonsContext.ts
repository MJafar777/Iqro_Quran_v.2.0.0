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
  closeAudio: boolean;
  setCloseAudio: (onEnded: boolean) => void;
  TrackIndex: number | any;
  setTrackIndex: (trackIndex: any) => void;

  setIsPlay: (prop: boolean) => void;
  isPlay: boolean;
  setVerseNumber: (prop: string) => void;
  verseNumber: string;
  setAudioUrl: (prop: string) => void;
  audioUrl: string;

  fetchIsLoading: boolean;
  setFetchIsLoading: (prop: boolean) => void;
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
  closeAudio: false,
  setCloseAudio: () => {},
  TrackIndex: 0,
  setTrackIndex: () => {},
  setIsPlay: (prop: boolean) => {},
  isPlay: false,
  setVerseNumber: () => {},
  verseNumber: '1',
  setAudioUrl: () => {},
  audioUrl: '',
  fetchIsLoading: false,
  setFetchIsLoading: () => {},
  
});
