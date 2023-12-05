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

// ======= Rreading By Text ===========
interface Transliteration {
  _id: string;
  text: string;
  language_name: string;
  word_id: string;
  __v: number;
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
  transliteration: Transliteration[];
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

interface Chapter {
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
  id: string;
}

export interface Verse {
  _id: string;
  chapter_id: Chapter;
  lang_id: string;
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
}

interface Pagination {
  totalPages: number;
  currentPage: string;
  nextpage?: boolean;
  prevpage?: boolean;
}

export interface QuranDataText {
  status: string;
  results: number;
  data: Verse[];
  pagination: Pagination;
}

export interface DataInReduxReadingQuranTextData {
  [key: number]: {
    quran_order: number;
    data: QuranDataText;
  };
}

export interface ReadingQuranTextPayloadAction {
  quran_order: number;
  data: QuranDataText;
}
