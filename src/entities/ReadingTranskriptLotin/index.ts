import { ReadingArabicSchema } from '../ReadingArabic';
import { ReadingTranskriptLotin } from './ui/ReadingTranskriptLotin';
import { ReadingQuranData } from '../ReadingArabic/model/types/readingSura';
import { fetchReadingTranskriptLotin } from './model/services/fetchReadingTranskriptLotin';

export type { ReadingQuranData, ReadingArabicSchema };
export { ReadingTranskriptLotin, fetchReadingTranskriptLotin };
