export interface Surah {
  nom: string;
  nozil: string;
  oyatlarSoni: number;
  nomer: number;
}



export interface DataSearchSidebar{
  data:Surah[];
  search:string
}
export interface DataSearch{
  data:Surah[];
  search:string
}

export interface SearchData { 
  data?: DataSearch;
  dataSidebar?:DataSearchSidebar
}
