import { getSelectedPage } from './model/selector/getSelectedPage';
import {
  selectedPageReducer,
  useSelectedPageActions,
} from './model/slice/selectedPageSchema';

export type { SelectedPageSchema } from './model/types/selectedPageSchema';

export { getSelectedPage, useSelectedPageActions, selectedPageReducer };
