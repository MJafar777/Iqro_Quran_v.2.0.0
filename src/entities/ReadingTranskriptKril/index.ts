import { ReadingArabicSchema } from '../ReadingArabic';
import { ReadingTranskriptKril } from './ui/ReadingTranskriptKril';
import { ReadingQuranData } from '../ReadingArabic/model/types/readingSura';
import { fetchReadingTranskriptKril } from './model/services/fetchReadingTranskriptKril';

export type { ReadingQuranData, ReadingArabicSchema };
export { ReadingTranskriptKril, fetchReadingTranskriptKril };
