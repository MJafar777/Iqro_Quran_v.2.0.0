import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import {  ResponseOfBacend } from '../../types/surahType';

interface FetchArticlesListProps {
  replace?: boolean;
}

export const fetchSurahlesList = createAsyncThunk<
  ResponseOfBacend,
  {},
  ThunkConfig<string>
>('mainPage/surahList', async (prop,thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  try {
    const response = await extra.api.get<ResponseOfBacend>('/chapter');
    console.log(response, 'res');

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    return rejectWithValue('error');
  }
});
