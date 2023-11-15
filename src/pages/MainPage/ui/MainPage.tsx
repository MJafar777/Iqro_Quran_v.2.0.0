import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MainHeader, ListOfSurah, MobileAppView } from '@/entities/Main';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '../model/slice/sliceSurahList';

const reducers: ReducersList = {
    mainPage: articleDetailsReducer,
  };


const MainPage = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState('');
  const onChange = (val: string) => {
    setValue(val);
  };
  // const listOfSurah=useSearchByQuranQuery()
  useEffect(() => {}, []);
  

  const content = (
    <div data-testid="MainPage">
      <MainHeader />
      <ListOfSurah />
      <MobileAppView />
    </div>
  );

  return <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>{content}</DynamicModuleLoader>;
};

export default MainPage;
