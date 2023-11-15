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
import { Footer } from '@/widgets/Footer';
import { SurahListSliceReducer } from '../model/slice/sliceSurahList';

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
      <Footer />
    </div>
  );

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      {content}
    </DynamicModuleLoader>
  );
};

export default MainPage;
