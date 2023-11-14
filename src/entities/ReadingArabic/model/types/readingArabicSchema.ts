import { DataInReduxReadingQuranData } from './readingSura';

export interface ReadingArabicSchema {
  isLoading: boolean;
  error?: string;
  data?: DataInReduxReadingQuranData;
}
