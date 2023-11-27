import { DataInReduxReadingQuranData } from './readingSura';

export interface ReadingArabicBookSchema {
  isLoading: boolean;
  error?: string;
  data?: DataInReduxReadingQuranData;
}
