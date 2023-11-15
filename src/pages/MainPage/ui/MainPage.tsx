import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { MainHeader, ListOfSurah, MobileAppView } from '@/entities/Main';
import {
  // DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
// import { SurahListSliceReducer } from '../model/slice/sliceSurahList';
import { fetchSurahlesList } from '../model/service/fetchSurahList/fetchSurahList';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getReadingArabicData } from '../model/selectors/ListSurah';
import {Footer} from '@/widgets/Footer';

const reducers: ReducersList = {
  // mainPage: SurahListSliceReducer,
};

const MainPage = () => {
  const dispatch = useAppDispatch();
  const listOfSurah = useSelector(getReadingArabicData);

  useEffect(() => {
    dispatch(fetchSurahlesList({}));
  }, [dispatch]);

  

  return (
    <div data-testid="MainPage">
      <MainHeader />
      <ListOfSurah data={listOfSurah} />
      <MobileAppView />
      <Footer/>
    </div>
  );
};

export default MainPage;
