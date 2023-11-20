import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { MainHeader, ListOfSurah, MobileAppView } from '@/entities/Main';
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

  const content = (
    <div data-testid="MainPage">
      <MainHeader />
      <ListOfSurah
        isLoading={isLoading || false}
        data={listOfSurah}
        error={error || ''}
      />
      <MobileAppView />
    </div>
  );

  return (
    <DynamicModuleLoader reducers={reducers}>{content}</DynamicModuleLoader>
  );
};

export default MainPage;
