import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import  { MainHeader,ListOfSurah } from '@/entities/Main';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <div data-testid="MainPage">
         <MainHeader/>  
         <ListOfSurah/>   
         </div>
    );
};

export default MainPage;
