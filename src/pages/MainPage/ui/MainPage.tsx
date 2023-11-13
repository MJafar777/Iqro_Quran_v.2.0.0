import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MainHeader } from '@/entities/Main';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <div data-testid="MainPage">
         <MainHeader/>     
         </div>
    );
};

export default MainPage;
