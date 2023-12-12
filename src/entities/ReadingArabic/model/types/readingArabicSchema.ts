import {
  Pages,
  DataInReduxReadingQuranData,
  DataInReduxReadingQuranTextData,
} from './readingSura';

export interface ReadingArabicSchema {
  isLoading: boolean;
  error?: string;
  data?: DataInReduxReadingQuranData;
}

export interface ReadingArabicTextSchema {
  isLoading: boolean;
  error?: string;
  data?: DataInReduxReadingQuranTextData;
  loadedFontFaces: string[];
}

export interface ReadingQuranSchema {
  loadedFontFaces: string[];
  isLoading: boolean;
  error?: string;
  data?: Pages;
}
