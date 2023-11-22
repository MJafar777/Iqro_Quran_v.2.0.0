export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  FORBIDDEN = 'forbidden',
  READING = 'reading',
  INFOSURAH = 'infoSurah',
}

export const getRouteMain = () => '/';
export const getRouteAbout = () => '/about';
export const getRouteReading = () => '/reading';
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
  [getRouteReading()]: AppRoutes.READING,
  [getRouteForbidden()]: AppRoutes.FORBIDDEN,
  [getRouteInfoSurah()]: AppRoutes.INFOSURAH,
};
