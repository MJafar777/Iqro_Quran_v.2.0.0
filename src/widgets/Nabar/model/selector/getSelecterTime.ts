import { StateSchema } from "@/app/providers/StoreProvider";

export const getTimeArrabic=(state:StateSchema)=>state.timeData.data

export const getIsLoading=(state:StateSchema)=>state.timeData.isLoading