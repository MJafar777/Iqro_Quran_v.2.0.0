import SuraList from './ui/SuraList';
import {
  selectedSuraReducer,
  useSelectedSuraActions,
} from './model/slice/selectedSuraSlice';
import type { SelectedSuraSchema } from './model/types/selectedSuraSchema';
import { getSelectedSura } from './model/selectors/getSelectedSura/getSelectedSura';
import { useSelectedSuraValue } from './model/selectors/getSelectedSuraValue/getSelectedSuraValue';

export {
  SuraList,
  getSelectedSura,
  SelectedSuraSchema,
  selectedSuraReducer,
  useSelectedSuraValue,
  useSelectedSuraActions,
};
