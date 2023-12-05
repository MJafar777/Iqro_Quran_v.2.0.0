import { useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import {
  MainHeader,
  // ListOfSurah,
  MobileAppView,
  Search,
  OneItemSurahSkleton,
  ListOfSurah,
} from '@/entities/Main';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { fetchSurahlesList } from '../model/service/fetchSurahList/fetchSurahList';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  getError,
  getIsLoading,
  getListOfSurahs,
} from '../model/selectors/ListSurah';
import { SurahListSliceReducer } from '../model/slice/sliceSurahList';
import { BugButton } from '@/app/providers/ErrorBoundary/ui/BugButton';

const reducers: ReducersList = {
  mainPage: SurahListSliceReducer,
};

const MainPage = () => {
  const dispatch = useAppDispatch();

  const listOfSurah = useSelector(getListOfSurahs);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    if (!listOfSurah) dispatch(fetchSurahlesList({}));
  }, [dispatch, listOfSurah]);

  const skeletonList = Array.from({ length: 18 }, () => (
    <OneItemSurahSkleton />
  ));

  const content = useMemo(
    () => (
      <div data-testid="MainPage">
        <MainHeader />
        <Search />
        <ListOfSurah
          isLoading={isLoading || false}
          data={listOfSurah}
          error={error || ''}
        />
        {/* <Virtual data={listOfSurah} /> */}
        <MobileAppView />
        <BugButton />
      </div>
    ),
    [error, isLoading, listOfSurah],
  );

  return (
    <DynamicModuleLoader reducers={reducers}>{content}</DynamicModuleLoader>
  );
};

export default MainPage;
