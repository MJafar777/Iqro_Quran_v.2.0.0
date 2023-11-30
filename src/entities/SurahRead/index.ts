import SuraReadList from './ui/SuraReadList';
import {
  selectedSuraReadReducer,
  useSelectedSuraReadActions,
} from './model/slice/selectedSuraReadSlice';
import { SurahPageOyah } from './model/consts/SurahDataRead';
import type { SelectedSuraReadSchema } from './model/types/selectedSuraReadSchema';
import { getSelectedSuraRead } from './model/selectors/getSelectedSuraRead/getSelectedSuraRead';
import { useSelectedSuraReadValue } from './model/selectors/getSelectedSuraReadValue/getSelectedSuraReadValue';

export {
  SuraReadList,
  SurahPageOyah,
  getSelectedSuraRead,
  SelectedSuraReadSchema,
  selectedSuraReadReducer,
  useSelectedSuraReadValue,
  useSelectedSuraReadActions,
};
