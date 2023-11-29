import { DataInReduxReadingQuranData } from './readingSura';

export interface ReadingArabicSchema {
  isLoading: boolean;
  error?: string;
  data?: DataInReduxReadingQuranData;
}

export interface Word {
  _id: string;
  position: number;
  arab: string;
  verse: number;
  verse_id: string;
  page_number: number;
  line_number: number;
  audio: string | null;
  location: string;
  char_type_name: string;
  code_v1: string;
  word_index: number;
  __v: number;
  code_v2: string;
  text_imlaei: string;
  text_indopak: string;
  text_uthmani: string;
  v1_page: number;
  v2_page: number;
  verse_key: string;
  id: string;
}

interface Tafsir {
  _id: string;
  verse_id: string;
  lang_id: {
    _id: string;
    name: string;
    native: string;
    iso_code: string;
    direction: string;
    __v: number;
    id: string;
  };
  short_text: string;
  more_text: string;
  recources_id: string;
  __v: number;
}

export interface Chapter {
  forEach(arg0: (word: any) => void): unknown;
  map(arg0: (word: any) => void): unknown;
  _id: string;
  chapter_id: {
    _id: string;
    revelation_place: string;
    revelation_order: number;
    bismillah_pre: boolean;
    name_complex: string;
    name_arabic: string;
    pages: [number, number];
    quran_order: number;
    __v: number;
    count_verse: number;
    name_simple: string;
    telegram_file_id: string;
    id: string;
  };
  lang_id: {
    _id: string;
    name: string;
    native: string;
    iso_code: string;
    direction: string;
    __v: number;
    id: string;
  };
  verse_number: number;
  verse_key: string;
  verse_index: number;
  text: string;
  juz_number: number;
  page_number: number;
  sajdah: number;
  __v: number;
  telegramm_file_id: string;
  page_number_v2: number;
  words: Word[];
  tafsir: Tafsir[];
  id: string;
}

interface Pagination {
  totalPages: number;
  currentPage: string;
}

export interface ReadngArabicText {
  data: Chapter[];
  pagination: Pagination;
}

export interface ReadngArabicTextSchema {
  isLoading: boolean;
  error?: string;
  data?: ReadngArabicText;
}

export interface WordInfo {
  arab: string;
  audio: string;
  char_type_name: string;
  code_v1: string;
  code_v2: string;
  id: string;
  line_number: number;
  location: string;
  page_number: number;
  position: number;
  text_imlaei: string;
  text_indopak: string;
  text_uthmani: string;
  transliteration: any[]; // You may replace 'any' with a specific type for transliteration
  v1_page: number;
  v2_page: number;
  verse: number;
  verse_id: string;
  verse_key: string;
  word_index: number;
  __v: number;
  _id: string;
}
