import React, { memo, Suspense, useContext, useEffect } from 'react';

import { useLocation } from 'react-router-dom';
import { AppRouter } from './providers/router';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { classNames } from '@/shared/lib/classNames/classNames';
import { withTheme } from './providers/ThemeProvider/ui/withTheme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { MainLayout } from '@/shared/layouts/MainLayout';
// import { Sidebar } from '@/widgets/Sidebar';
import { Loader } from '@/widgets/Loader';
import { Navbar } from '@/widgets/Nabar';
import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';

const App = memo(() => {
  const { theme } = useTheme();
  const { isPlay, setIsPlay, setAudioTime, audioTime } =
    useContext(ButtonsContext);
  const dispatch = useAppDispatch();
  const location = useLocation();

  useEffect(() => {
    setIsPlay(false);

    console.log(isPlay);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);
  return (
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
  );
});

export default withTheme(App);
