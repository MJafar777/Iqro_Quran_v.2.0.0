import { getSelectedPageReadSelect } from './model/selector/getSelectedPageReadSelect';
import {
  selectedPageReadSelectReducer,
  useSelectedPageReadSelectActions,
} from './model/slice/selectedPageReadSelectSlice';

export type { SelectedPageReadSelectSchema } from './model/types/selectedPageReadSelectSchema';

export {
  getSelectedPageReadSelect,
  useSelectedPageReadSelectActions,
  selectedPageReadSelectReducer,
};
