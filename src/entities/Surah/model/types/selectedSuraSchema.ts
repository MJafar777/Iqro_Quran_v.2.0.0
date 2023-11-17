export interface SelectedSuraSchema {
  suraId: number;
  nameLotin: string;
  nameKril: string;
  numberOfOyat: number;
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
