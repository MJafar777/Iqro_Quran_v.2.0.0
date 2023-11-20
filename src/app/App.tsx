import React, { memo, Suspense } from 'react';
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
    <div id="app" className={classNames('app_redesigned', {}, [theme])}>
      <Suspense fallback={<Loader />}>
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
        <AppRouter />
      </Suspense>
    </div>
  );
});

export default withTheme(App);
