export interface Infor {
  audio: [];
  bismillah_pre: boolean;
  chapter_info: [];
  count_verse: number;
  id: number | string;
  name_arabic: string;
  name_complex: string;
  name_simple: string;
  pages: [];
  quran_order: number;
  revelation_order: number;
  revelation_place: string;
  telegram_file_id: string;
  translated_names: [];
  __v: number;
  _id: string;
}

export interface ChapterDataInData {
  data: any;
  [key: number]: {
    data: Infor[];
  };
}

export interface ChapterData {
  data: ChapterDataInData;
  _id: string;
  revelation_place: string;
  revelation_order: number;
  bismillah_pre: boolean;
  name_complex: string;
  name_arabic: string;
  pages: number[];
  quran_order: number;
  __v: number;
  count_verse: number;
  name_simple: string;
  telegram_file_id: string;
  translated_names: [];
  audio: [];
  chapter_info: [];
  id: string;
  number: number;
}

export interface ReadingTranslateKril {
  data: ChapterData[];
  error?: string | undefined;
  isLoading: boolean;
}

export interface InformationPageSurah {
  api: {};
  currentOyat: {};
  currentPage: {};
  currentSura: {};
  mainPage: {};
  readingTranslateKril: ReadingTranslateKril;
  search: {};
  timeData: {};
}
