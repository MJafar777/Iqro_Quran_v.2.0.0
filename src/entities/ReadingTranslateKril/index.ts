import { ReadingArabicSchema } from '../ReadingArabic';
import { ReadingTranslateKril } from './ui/ReadingTranslateKril';
import { ReadingQuranData } from '../ReadingArabic/model/types/readingSura';
import { fetchReadingTranslateKril } from './model/services/fetchReadingTranslateKril';

export type { ReadingQuranData, ReadingArabicSchema };
export { ReadingTranslateKril, fetchReadingTranslateKril };
