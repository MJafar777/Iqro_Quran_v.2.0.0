import { StateSchema } from '@/app/providers/StoreProvider';

export const getDataSegment = (state: StateSchema) => state.segment.data;
