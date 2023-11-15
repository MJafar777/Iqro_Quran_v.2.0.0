import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { OneSuraInListSchema } from '../../types/surahType';

interface FetchArticlesListProps {
  replace?: boolean;
}

export const fetchSurahlesList = createAsyncThunk<
  OneSuraInListSchema[],
  FetchArticlesListProps,
  ThunkConfig<string>
>('mainPage/surahList', async (props, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;
  try {
    const response = await extra.api.get<OneSuraInListSchema[]>('/chapter');
    if (!response.data) {
      throw new Error();
    }
    return response.data;
  } catch (e) {
    return rejectWithValue('error');
  }
});
