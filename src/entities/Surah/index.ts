import OyatList from './ui/OyatList/OyatList';
import SuraList from './ui/SuraList/SuraList';
import { selectedSuraReducer } from './model/slice/selectedSuraSlice';
import type { SelectedSuraSchema } from './model/types/selectedSuraSchema';
import { getSelectedSura } from './model/selectors/getSelectedSura/getSelectedSura';
// import { useSelectedSuraValue } from './model/selectors/getSelectedSuraValue/getSelectedSuraValue';

export {
  OyatList,
  SuraList,
  getSelectedSura,
  SelectedSuraSchema,
  selectedSuraReducer,
  // useSelectedSuraValue,
};
