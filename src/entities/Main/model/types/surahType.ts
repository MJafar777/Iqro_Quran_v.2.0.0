export interface Surah {
  nom: string;
  nozil: string;
  oyatlarSoni: number;
  nomer: number;
}

export interface SearchData { 
  search: string;
  data: Surah[];
}
