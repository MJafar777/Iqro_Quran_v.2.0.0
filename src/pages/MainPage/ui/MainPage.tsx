import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { MainHeader, ListOfSurah, MobileAppView } from '@/entities/Main';
import {
  DynamicModuleLoader,
  // DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
// import { SurahListSliceReducer } from '../model/slice/sliceSurahList';
import { fetchSurahlesList } from '../model/service/fetchSurahList/fetchSurahList';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getReadingArabicData } from '../model/selectors/ListSurah';
import { SurahListSliceReducer } from '../model/slice/sliceSurahList';
// import { Navbar } from '@/widgets/Nabar';

const reducers: ReducersList = {
  mainPage: SurahListSliceReducer,
};

const MainPage = () => {
  const dispatch = useAppDispatch();
  const listOfSurah = useSelector(getReadingArabicData);

  useEffect(() => {
    dispatch(fetchSurahlesList({}));
  }, [dispatch]);

  console.log(listOfSurah);

  const content = (
    <div data-testid="MainPage">
      <MainHeader />
      <ListOfSurah data={listOfSurah} />
      <MobileAppView />
    </div>
  );

  return (
    <DynamicModuleLoader reducers={reducers}>{content}</DynamicModuleLoader>
  );
};

export default MainPage;
