/* eslint-disable camelcase */
/* eslint-disable no-promise-executor-return */
// service/fetchTafsir/fetchTafsirList.ts
import { createAsyncThunk, AsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { QuranDataText } from '@/entities/ReadingArabic';

let requestQueue: Promise<any> = Promise.resolve();

export const fetchTafsirList = createAsyncThunk<
  QuranDataText,
  { chapterId: number; page_number: number },
  ThunkConfig<string>
>('readingArabic', async ({ chapterId = 1, page_number = 1 }, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  if (!chapterId) {
    throw new Error('');
  }

  // Add a delay to simulate async requests
  await new Promise(resolve => setTimeout(resolve, 1000));

  const requestAction = async () => {
    try {
      const response = await extra.api.get<QuranDataText>(
        `verse/by_chapter/for_text?chapter=${chapterId}&page=${page_number}`,
      );

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  };

  requestQueue = requestQueue.then(requestAction);
  return requestQueue;
}) as AsyncThunk<any, { chapterId: number; page_number: number }, ThunkConfig<string>>;
