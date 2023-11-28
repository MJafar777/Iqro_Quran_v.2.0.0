import { fetchReadingArabic } from './model/services/fetchReadingArabic';
import { ReadingArabic } from './ui/ReadingArabic/ReadingArabic';
// import { getSelectedSura } from '../Surah';

export { ReadingArabic, fetchReadingArabic };

export type {
  ReadingSura,
  DataInReduxReadingQuranData,
} from './model/types/readingSura';

export type {
  ReadingArabicSchema,
  ReadngArabicTextSchema,
} from './model/types/readingArabicSchema';
