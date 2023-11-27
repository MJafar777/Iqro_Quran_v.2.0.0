import { fetchReadingArabic } from './model/services/fetchReadingArabic';
import { ReadingArabic } from './ui/ReadingArabic';
// import { getSelectedSura } from '../Surah';

export { ReadingArabic, fetchReadingArabic };

export type {
  ReadingSura,
  DataInReduxReadingQuranData,
} from './model/types/readingSura';

export type { ReadingArabicSchema } from './model/types/readingArabicSchema';
export { getReadingArabicData } from './model/selectors/readingArabic';
