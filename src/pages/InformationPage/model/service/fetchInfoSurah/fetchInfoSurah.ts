import { createAsyncThunk } from '@reduxjs/toolkit';
import { SurahInfoOfBackend } from '../../types/surahInfoType';
import { ThunkConfig } from '@/app/providers/StoreProvider';

export const fetchInfoSurah = createAsyncThunk<
  SurahInfoOfBackend,
  { id: number },
  ThunkConfig<string>
>('mainPage/surahList', async (prop, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;
  const { id } = prop;
  try {
    const response = await extra.api.get<SurahInfoOfBackend>(
      `/chapter/info/${id}`,
    );

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    return rejectWithValue('error');
  }
});
