import React, { memo, Suspense } from 'react';

import { Navbar } from '@/widgets/Navbar';
import { AppRouter } from './providers/router';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { classNames } from '@/shared/lib/classNames/classNames';
import { withTheme } from './providers/ThemeProvider/ui/withTheme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { Navbar } from '@/widgets/Nabar';
// import { Sidebar } from '@/widgets/Sidebar';
import { Loader } from '@/widgets/Loader';

const App = memo(() => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();

  return (
<<<<<<< HEAD
    <div id="app" className={classNames('app_redesigned', {}, [theme])}>
      <Suspense fallback={<Loader />}>
        <MainLayout
          header={<Navbar />}
          content={<AppRouter />}
          // sidebar={<Sidebar />}
          // toolbar={toolbar}
        />
      </Suspense>
    </div>
=======
    <ToggleFeatures
      feature="isAppRedesigned"
      off={
        <div id="app" className={classNames('app', {}, [theme])}>
          <Suspense fallback="">
            <Navbar />
            <div className="content-page">
              <AppRouter />
            </div>
          </Suspense>
        </div>
      }
      on={
        <div id="app" className={classNames('app_redesigned', {}, [theme])}>
          <Suspense fallback="">
            <Navbar />
            <MainLayout content={<AppRouter />} />
          </Suspense>
        </div>
      }
    />
>>>>>>> 7f8242471f42c7799e2cd0706f15ec49ff09cd72
  );
});

export default withTheme(App);
