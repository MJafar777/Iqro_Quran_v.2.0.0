export interface SelectedSuraReadSchema {
  translated_names: any;
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
  id: string;
}

export interface SuraSchema {
  suraId: number;
  nameLotin: string;
  nameKril: string;
  numberOfOyat: number;
}

export interface SurahPageOyatSchema {
  [surahNumber: string]: Array<{
    start: string;
    end: string;
    page: string;
  }>;
}
