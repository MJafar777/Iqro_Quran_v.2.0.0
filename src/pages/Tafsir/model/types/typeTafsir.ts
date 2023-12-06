/// all of the interface
export interface Transliteration {
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
  id: string;
}

export interface Tafsir {
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
  _id: string;
  chapter_id: {
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
  };
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
  id: string;
}

export interface EachSurah {
  [key: number]: {
    data?: Chapter[];
    isNextPageHas: boolean;
  };
}
export interface ReduxSchemeForTafsir {
  data: EachSurah;
  error?: string;
  loadedFontFaces: string[];
  isLoading: boolean;
}

export interface ApiResponse {
  status: string;
  results: number;
  data: Chapter[];
  pagination: {
    totalPages: number;
    currentPage: string;
  };
}



export enum QuranFont {
  MadaniV1 = 'code_v1',
  MadaniV2 = 'code_v2',
  Uthmani = 'text_uthmani',
  IndoPak = 'text_indopak',
  QPCHafs = 'qpc_uthmani_hafs',
  Tajweed = 'tajweed',
}
export const FALLBACK_FONT = QuranFont.QPCHafs;

export enum MushafLines {
  FifteenLines = '15_lines',
  SixteenLines = '16_lines',
}

export enum Mushaf {
  QCFV2 = 1,
  QCFV1 = 2,
  Indopak = 3,
  UthmaniHafs = 4,
  KFGQPCHAFS = 5,
  Indopak15Lines = 6,
  Indopak16Lines = 7,
  Tajweeed = 11,
}

export const QuranFontMushaf: Record<QuranFont, Mushaf> = {
  [QuranFont.MadaniV1]: Mushaf.QCFV1,
  [QuranFont.MadaniV2]: Mushaf.QCFV2,
  [QuranFont.Uthmani]: Mushaf.UthmaniHafs,
  [QuranFont.IndoPak]: Mushaf.Indopak,
  [QuranFont.QPCHafs]: Mushaf.KFGQPCHAFS,
  [QuranFont.Tajweed]: Mushaf.Tajweeed,
};

export enum WordByWordDisplay {
  INLINE = 'inline',
  TOOLTIP = 'tooltip',
}