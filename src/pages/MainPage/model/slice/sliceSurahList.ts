import { createSlice } from '@reduxjs/toolkit';
import {  SurahListSchema } from '../types/surahType';
import { fetchSurahlesList } from '../service/fetchSurahList/fetchSurahList';

const initialState: SurahListSchema = {
    data: [],
    status: '',
    results: 0
};

export const SurahListSlice = createSlice({
  name: 'SurahListSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSurahlesList.fulfilled,(state,action)=>{
      console.log(action,'action');
      
      // state.data=[...action.payload.data?.data]
    })
  },
});

export const { actions: SurahListSliceActions } = SurahListSlice;
export const { reducer: SurahListSliceReducer } = SurahListSlice;
