enum typeWord {
  WORD,
  NUMBER,
}

export interface WordProp {
  _id: string;
  position: 1;
  arab: string;
  verse: 5;
  verse_id: string;
  page_number: 2;
  line_number: 7;
  audio: string;
  location: string;
  char_type_name: typeWord;
  code_v1: string;
  word_index: 5544;
  __v: 0;
  id: string;
}

export interface LangProp {
  _id: string;
  chapter_id: string;
  lang_id: {
    _id: string;
    name: string;
    native: string;
    iso_code: string;
    direction: string;
    __v: 0;
    id: string;
  };
  name: string;
  __v: 0;
}

export interface ChapterIDProp {
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
  translated_names: LangProp[];
  id: string;
}

export interface TafsirContent {
  _id: string;
  verse_id: string;
  lang_id: {
    _id: string;
    name: string;
    native: string;
    iso_code: string;
    direction: string;
    __v: 0;
    id: string;
  };
  short_text: string;
  more_text: string;
  recources_id: string;
  __v: 0;
}

export interface OneVerseTafsirScheme {
  _id: string;
  chapter_id: ChapterIDProp;
  lang_id: string;
  verse_number: 5;
  verse_key: string;
  verse_index: number;
  text: string;
  juz_number: 1;
  page_number: number;
  sajdah: number;
  __v: number;
  page_number_v2: number;
  words: WordProp[];
  tafsir: TafsirContent[];
  id: string;
}

export interface BackendResForTafsir {
  status: string;
  data: OneVerseTafsirScheme[];
  results: number;
}

export interface ReduxSchemeForTafsir {
  isLoading?: boolean;
  error?: string;
  data?: OneVerseTafsirScheme[];
}
