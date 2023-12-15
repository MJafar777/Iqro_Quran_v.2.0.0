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
  setAudioTime: (prop: number) => void;
  audioTime: number;
  setAudioUrl: (prop: string) => void;
  audioUrl: string;
  isPlayVerse: boolean;
  setIsPlayVerse: (prop: boolean) => void;
  verseKey: string;

  setVerseKey: (prop: string) => void;

  fetchIsLoading: boolean;
  setFetchIsLoading: (prop: boolean) => void;

  BismillahNavbarImg: string;
  setBismillahNavbarImg: (src: string) => void;
  timestampFrom: number;
  setTimestampFrom: (prop: number) => void;

  listOfPagesValuePath: number;
  setListOfPagesValuePath: (val: number) => void;

  page: number;
  setPage: (pro: number) => void;
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
  setIsPlay: () => {},
  isPlay: false,
  setAudioTime: () => {},
  audioTime: 0,
  setAudioUrl: () => {},
  audioUrl: '',
  fetchIsLoading: false,
  setFetchIsLoading: () => {},

  BismillahNavbarImg: 'app_light_theme',
  setBismillahNavbarImg: () => {},
  isPlayVerse: false,
  setIsPlayVerse: () => {},
  verseKey: '',
  setVerseKey: () => {},
  timestampFrom: 0,
  setTimestampFrom: () => {},

  listOfPagesValuePath: 1,
  setListOfPagesValuePath: () => {},

  page: 1,
  setPage: () => {},
});
