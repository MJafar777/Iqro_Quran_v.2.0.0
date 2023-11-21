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

export interface OneSuraInListSchema {
  _id: string;
  revelation_place: string;
  revelation_order: number;
  bismillah_pre: boolean;
  name_complex: string;
  name_arabic: string;
  pages: [1, 1];
  quran_order: number;
  count_verse: number;
  name_simple: string;
  telegram_file_id: string;
  translated_names: TranslatedName[];
  id: string;
}

export interface SurahListSchema {
  isLoading: boolean;
  error?: string;
  data?: OneSuraInListSchema[];
}

export interface ResponseOfBacend {
  data?: OneSuraInListSchema[];
}
