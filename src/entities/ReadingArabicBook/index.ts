import { fetchReadingArabicBook } from './model/services/fetchReadingArabicBook';
import { ReadingArabicBook } from './ui/ReadingArabicBook';

export { ReadingArabicBook, fetchReadingArabicBook };

export type {
  ReadingSura,
  DataInReduxReadingQuranData,
} from './model/types/readingSura';

export type { ReadingArabicBookSchema } from './model/types/readingArabicBookSchema';
