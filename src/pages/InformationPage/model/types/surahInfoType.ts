export interface InfoDataSura {}

export interface SurahInfoSchema {
  isLoading: boolean;
  error?: string;
  data?: InfoDataSura[];
}

export interface SurahInfoOfBackend {
  data?: InfoDataSura[];
}
