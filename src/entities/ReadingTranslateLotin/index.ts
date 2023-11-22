import { ReadingArabicSchema } from '../ReadingArabic';
import { ReadingTranslateLotin } from './ui/ReadingTranslateLotin';
import { ReadingQuranData } from '../ReadingArabic/model/types/readingSura';
import { fetchReadingTranslateLotin } from './model/services/fetchReadingTranslateLotin';

export type { ReadingQuranData, ReadingArabicSchema };
export { ReadingTranslateLotin, fetchReadingTranslateLotin };
