import { ReadingQuranData } from '../ReadingArabic/model/types/readingSura';
import ReadingTranskriptLotin from './ui/ReadingTranskriptLotin';
import { fetchReadingTranskriptLotin } from './model/services/fetchReadingTranskriptLotin';
import { ReadingArabicSchema } from '../ReadingArabic';

export type { ReadingQuranData, ReadingArabicSchema };
export { ReadingTranskriptLotin, fetchReadingTranskriptLotin };
