export { TafsirAsync as Tafsir } from './ui/Tafsir.async';
export { addLoadedFontFace } from './model/slice/sliceTafsir';

export type { ReduxSchemeForTafsir } from './model/types/typeTafsir';
export type { Chapter } from './model/types/typeTafsir';
export type { Word } from './model/types/typeTafsir';
export { MushafLines, QuranFont } from './model/types/typeTafsir';
export type { SegmentSchemeRedux } from './model/types/typeSegments';

export { isLoading } from './model/selector/selectorTafsir';
export { sliceSegmentReduce } from './model/slice/sliceSegment';
export { sliceTafsirReducer } from './model/slice/sliceTafsir';
