import { StateSchema } from "@/app/providers/StoreProvider";

export const getDataTafsir=(state:StateSchema)=>state.tafsirPage.data
export const isLoading=(state:StateSchema)=>state.tafsirPage.isLoading
export const getWindowHieght=(state:StateSchema)=>state.ui.scroll