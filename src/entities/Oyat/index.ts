import OyatList from './ui/OyatList';
import { getSelectedOyat } from './model/selectors/getSelectedOyat';
import {
  selectedOyatReducer,
  useSelectedOyatActions,
} from './model/slice/seletedOyatSlice';

export type { SelectedOyatSchema } from './model/types/selectedOyatSchema';

export {
  OyatList,
  getSelectedOyat,
  selectedOyatReducer,
  useSelectedOyatActions,
};
