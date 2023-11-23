interface TranslatedName {
  chapter_id: string;
  lang_id: {
    direction: string;
    id: string;
    iso_code: string;
    name: string;
    native: string;
    __v: number;
    _id: string;
  };
  id: string;
  name: string;
  __v: number;
  _id: string;
}

export interface Audio {
  _id: string;
  chapter_id: string;
  audio_url: string;
  format: string;
  file_size: number;
  duration: number;
  qori_id: string;
  __v: number;
  id: string;
}

export interface ReadingSura {
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
  translated_names: TranslatedName[];
  audio: Audio[];
  chapter_info: []; // or you can specify a more detailed interface for chapter_info if needed
  id: string;
  number: number;
}

export interface ChapterData {
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
  translated_names: TranslatedName[];
  audio: Audio[];
  chapter_info: []; // or you can specify a more detailed interface for chapter_info if needed
  id: string;
  number: number;
}

export interface ImageResource {
  [key: number]: string;
}
export interface ReadingQuranData {
  quran_order: any;
  status: string;
  results: number;
  data: ChapterData[];
  resourse: ImageResource[];
  nextpage: boolean;
}

export interface DataInReduxReadingQuranData {
  [key: number]: {
    quran_order: number;
    data: ReadingQuranData;
  };
}

export interface ReadingQuranPayloadAction {
  quran_order: number;
  data: ReadingQuranData;
}
