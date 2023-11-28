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

export interface TafisrData {
  quran_order: any;
  status: string;
  results: number;
  data: OneVerseTafsirScheme[];
  nextpage: boolean;
}

export interface TafsirChapterData {
  [key: number]: {
    quran_order: number;
    data: TafisrData;
  };
}

export interface ReduxSchemeForTafsir {
  isLoading?: boolean;
  error?: string;
  data?: TafsirChapterData[];
  loadedFontFaces: string[];
}

export interface Transliteration {
  text: string;
}

export interface Tafsir {
  lang_id: {
    iso_code: string;
  };
  more_text: string;
}

export interface Word {
  char_type_name: string;
  transliteration: Transliteration[];
  audio: string;
  page_number: number;
  code_v1: string;
  word: string;
  word_index: number;
  arab: string;
}
export interface Verse {
  data: any;
  id: string;
  transcriptions: Transliteration[];
  tafsir: Tafsir[];
  verse_key: number;
  verseNumber?: number;
  chapterId?: number | string;
  page_number?: number;
  juzNumber?: number;
  hizbNumber?: number;
  rubNumber?: number; // FIXME?: This doesn't work for some reason, in console it's appearing as RubElHizbNumber rather than RubNumber
  rubElHizbNumber?: number; // Added this to fix the issue
  verseKey?: string;
  verseIndex?: number;
  words: Word[];
  textUthmani?: string;
  textUthmaniSimple?: string;
  textUthmaniTajweed?: string;
  textImlaei?: string;
  textImlaeiSimple?: string;
  textIndopak?: string;
  sajdahNumber: null;
  sajdahType: null;
  imageUrl?: string;
  imageWidth?: number;
  v1Page?: number;
  v2Page?: number;
  codeV1?: string;
  codeV2?: string;
  // translations?: Translation[];
  // tafsirs?: Tafsir[];
  // audio?: AudioResponse;
  timestamps?: {
    verseKey?: string;
    timestampFrom?: number;
    timestampTo?: number;
    duration?: number;
    segments?: [number[]];
  };
  chapter_id: {
    id: string;
    quran_order: number;
  };
}

export interface ActionPayloadChapter {
  quran_order: number;
  data: Verse[];
}
export interface ActionPayloadJuz {
  juz: number;
  data: Verse[];
}
export interface ActionPayloadPage {
  page: number;
  data: Verse[];
}

export interface DataMain {
  data: Verse[];
  status: string;
  results: number;
  resourse: string[];
  pagination: {
    totalpages: string;
    currentPage: number;
  };
}
export interface DataFromLocalHook {
  data: DataMain;
  status: string;
  results: number;
  resourse: string[];
  pagination: {
    totalpages: string;
    currentPage: number;
  };
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
}


export enum WordByWordType {
  Translation = 'translation',
  Transliteration = 'transliteration',
}

export enum ReadingPreference {
  Translation = 'translation', // Displays verse by verse with translation
  Reading = 'reading', // Displays the Quran text only similar to a physical Quran page without any translations.
}

export enum WordClickFunctionality {
  PlayAudio = 'play-audio',
  NoAudio = 'no-audio',
}

export enum QuranReaderDataType {
  Chapter = 'chapter',
  Verse = 'verse',
  VerseRange = 'range',
  Tafsir = 'tafsir',
  SelectedTafsir = 'selectedTafsir',
  Hizb = 'hizb',
  Juz = 'juz',
  Rub = 'rub',
  Page = 'page',
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

export default { ReadingPreference, QuranFont };
