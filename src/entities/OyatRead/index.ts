import OyatReadList from './ui/OyatReadList';
import { getSelectedOyatRead } from './model/selectors/getSelectedOyatRead';
import {
  selectedOyatReadReducer,
  useSelectedOyatReadActions,
} from './model/slice/seletedOyatReadSlice';

export type { SelectedOyatReadSchema } from './model/types/selectedOyatReadSchema';

export {
  OyatReadList,
  getSelectedOyatRead,
  selectedOyatReadReducer,
  useSelectedOyatReadActions,
};
