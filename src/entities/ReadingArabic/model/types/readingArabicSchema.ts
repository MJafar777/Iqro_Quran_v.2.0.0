import {
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
