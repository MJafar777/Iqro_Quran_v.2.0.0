import { EntityState } from '@reduxjs/toolkit';
import { ReadingSura } from '@/entities/ReadingArabic';

export interface ArticlesPageSchema extends EntityState<ReadingSura> {
  isLoading?: boolean;
  error?: string;
  data?: string;
  page: number;
}
