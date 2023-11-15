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
  id: string;
}

export interface SurahListSchema {
  status: string;
  isLoading?: boolean;
  error?: string;
  results: number;
  data?: OneSuraInListSchema[];
}

export interface ResponseOfBacend {
  config?: {};
  data?: SurahListSchema;
  headers?: {};
  request?: XMLHttpRequest;
  status?: number;
  statusText?: '';
}
