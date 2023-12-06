import { getSelectedPageRead } from './model/selector/getSelectedPageRead';
import {
  selectedPageReadReducer,
  useSelectedPageReadActions,
} from './model/slice/selectedPageReadSlice';

export type { SelectedPageReadSchema } from './model/types/selectedPageReadSchema';

export {
  getSelectedPageRead,
  useSelectedPageReadActions,
  selectedPageReadReducer,
};
