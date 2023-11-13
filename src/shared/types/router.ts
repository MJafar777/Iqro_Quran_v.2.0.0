import { RouteProps } from 'react-router-dom';
// eslint-disable-next-line ulbi-tv-plugin/layer-imports

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
};
