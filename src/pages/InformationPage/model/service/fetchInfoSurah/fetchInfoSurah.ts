import { createAsyncThunk } from '@reduxjs/toolkit';
import { SurahInfoOfBackend } from '../../types/surahInfoType';
import { ThunkConfig } from '@/app/providers/StoreProvider';

export const fetchInfoSurah = createAsyncThunk<
  SurahInfoOfBackend,
  {},
  ThunkConfig<string>
>('mainPage/surahList', async (prop, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  try {
    const response = await extra.api.get<SurahInfoOfBackend>(
      `/chapter/info/${1}`,
    );

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    return rejectWithValue('error');
  }
});
