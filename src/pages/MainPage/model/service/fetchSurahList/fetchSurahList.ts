import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { SurahList } from '@/entities/Main';
import { peekaboo } from '@/peekabo';


interface FetchArticlesListProps {
    replace?: boolean;
}

export const fetchSurahList = createAsyncThunk<
    SurahList[],
    FetchArticlesListProps,
    ThunkConfig<string>
>('articlesPage/fetchArticlesList', async (props, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;

  try {
  
    const response = await extra.api.get<SurahList[]>(`${peekaboo}/chapter`);
    console.log(response,'res');

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    return rejectWithValue('error');
  }
});
