import React, { memo, Suspense } from 'react';
import { AppRouter } from './providers/router';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { classNames } from '@/shared/lib/classNames/classNames';
import { withTheme } from './providers/ThemeProvider/ui/withTheme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

const App = memo(() => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();

  return (
    <div id="app" className={classNames('app_redesigned', {}, [theme])}>
      <Suspense fallback="">
        <AppRouter />
      </Suspense>
    </div>
  );
});

export default withTheme(App);
