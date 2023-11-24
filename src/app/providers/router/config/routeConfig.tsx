import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { ReadingPage } from '@/pages/ReadingPage';

import {
  AppRoutes,
  getRouteMain,
  getRouteAbout,
  getRouteForbidden,
  getRouteReading,
  getRouteInfoSurah,
  getRouteListening,
} from '@/shared/const/router';

import { AppRoutesProps } from '@/shared/types/router';
import { InfoSurahPage } from '@/pages/InformationPage';
import { ListenParent } from '@/pages/listening';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: getRouteAbout(),
    element: <AboutPage />,
  },
  [AppRoutes.FORBIDDEN]: {
    path: getRouteForbidden(),
    element: <ForbiddenPage />,
  },
  [AppRoutes.READING]: {
    path: getRouteReading(),
    element: <ReadingPage />,
  },
  [AppRoutes.INFOSURAH]: {
    path: getRouteInfoSurah(),
    element: <InfoSurahPage />,
  },
  [AppRoutes.LISTEN]: {
    path: getRouteListening(),
    element: <ListenParent />,
  },
};
