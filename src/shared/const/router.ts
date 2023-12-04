export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  FORBIDDEN = 'forbidden',
  READING = 'reading',
  INFOSURAH = 'infoSurah',
  LISTEN = 'listining',
  TAFSIR = 'tafsir',
  NOTFOUND = 'notFound',
}

export const getRouteMain = () => '/';
export const getRouteNotFound = () => '*';
export const getRouteAbout = () => '/about';
export const getRouteTafsir = () => '/tafsir';
export const getRouteReading = () => '/reading';
export const getRouteListening = () => '/listining';
export const getRouteForbidden = () => '/forbidden';
export const getRouteInfoSurah = () => '/infoSurah/:id';

// export const getRouteAdmin = () => '/admin';
// export const getRouteSettings = () => '/settings';
// export const getRouteArticles = () => '/articles';
// export const getRouteArticleCreate = () => '/articles/new';
// export const getRouteProfile = (id: string) => `/profile/${id}`;
// export const getRouteArticleDetails = (id: string) => `/articles/${id}`;
// export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`;

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
  [getRouteMain()]: AppRoutes.MAIN,
  [getRouteAbout()]: AppRoutes.ABOUT,
  [getRouteTafsir()]: AppRoutes.TAFSIR,
  [getRouteReading()]: AppRoutes.READING,
  [getRouteListening()]: AppRoutes.LISTEN,
  [getRouteNotFound()]: AppRoutes.NOTFOUND,
  [getRouteForbidden()]: AppRoutes.FORBIDDEN,
  [getRouteInfoSurah()]: AppRoutes.INFOSURAH,
};
