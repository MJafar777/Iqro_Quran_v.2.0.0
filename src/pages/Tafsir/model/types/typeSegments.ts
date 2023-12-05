export interface VerseTiming {
  _id: string;
  verse_key: string;
  audio_url: string;
  timestamp_from: number;
  timestamp_to: number;
  duration: number;
  segments: [number, number, number][];
  chapter_audio_id: string;
  __v: number;
  id: string;
}

export interface Data {
  length: number;
  _id: string;
  chapter_id: string;
  audio_url: string;
  format: 'mp3';
  file_size: number;
  duration: number;
  qori_id: {
    _id: number;
    name: string;
    style: string;
    __v: number;
    id: string;
  };
  __v: number;
  verse_timings: VerseTiming[];
  id: string;
}

export interface SegmentSchemeBack {
  id: any;
  status: string;
  data: Data;
}

export interface DataList {
  [key: number]: {
    quran_order: number;
    data: Data;
  };
}

export interface SegmentSchemeRedux {
  error?: string;
  isLoading: boolean;
  data?: DataList;
}
