import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { DataTime, DataTimeScheme } from '../types/typeTime';
import { fetchTime } from '../service/fetchTime';

const initialState: DataTimeScheme = {
  isLoading: false,
  error: '',
  data: {},
};

export const DataTimeSlice = createSlice({
  name: 'time',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTime.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchTime.fulfilled,
        (state, action: PayloadAction<DataTime>) => {
          state.isLoading = false;
          state.data = action?.payload?.data;
        },
      )
      .addCase(fetchTime.rejected, (state) => {
        state.error = '';
      });
  },
});

export const { actions: TimeDataAction } = DataTimeSlice;
export const { reducer: TimeDataReducer } = DataTimeSlice;
