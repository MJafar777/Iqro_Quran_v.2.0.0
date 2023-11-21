/* eslint-disable consistent-return */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { DataTime } from '../types/typeTime';

export const fetchTime = createAsyncThunk<DataTime, {}, ThunkConfig<string>>(
  'navabr/time',
  async (prop, thunApi) => {
    const { extra, rejectWithValue } = thunApi;

    try {
      const response = await extra.api.get('/date/hijri');
      return response.data;
    } catch (error) {
      rejectWithValue('error');
    }
  },
);
