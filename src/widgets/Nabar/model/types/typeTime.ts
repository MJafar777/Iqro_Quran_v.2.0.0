interface LangeTime {
  dayOfWeekText: string;
  monthText: string;
}
export interface Data {
  dayOfMonth?: number;
  dayOfWeek?: number;
  month?: number;
  en?: LangeTime;
  ru?: LangeTime;
  uz?: LangeTime;
  uzCr?: LangeTime;
  year?:number
}
export interface DataTime {
  data: Data;
}

export interface DataTimeScheme {
  isLoading: boolean;
  error?: string;
  data?: Data;
}
