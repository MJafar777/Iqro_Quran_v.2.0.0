import { fetchReadingArabic } from './model/services/fetchReadingArabic';
import { addLoadedFontFaceReadingArabic } from './model/slice/readingArabicSlice';
import { ReadingArabic } from './ui/ReadingArabicText/ReadingArabicText';

export { ReadingArabic, fetchReadingArabic, addLoadedFontFaceReadingArabic };

export type {
  Verse,
  ReadingSura,
  DataInReduxReadingQuranData,
  QuranDataText,
} from './model/types/readingSura';

export type {
  ReadingArabicSchema,
  ReadingArabicTextSchema,
  ReadingQuranSchema,
} from './model/types/readingArabicSchema';
