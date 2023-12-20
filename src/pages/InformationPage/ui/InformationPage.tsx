import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
//
import { Loader } from '@/widgets/Loader';
import cls from './InformationPage.module.scss';
import { getInfoSurahs, getIsLoading } from '../model/selectors/InfoSurah';
import { classNames } from '@/shared/lib/classNames/classNames';
import { fetchInfoSurah } from '../model/service/fetchInfoSurah/fetchInfoSurah';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
//
import { makkah, madinah } from '@/shared/assets/SuraInfo';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { SurahInfoReducer } from '..';

const reducer: ReducersList = {
  info: SurahInfoReducer,
};

// ----- Ushbu Page Sura haqida ma'lumot olish uchun qo'laniladi! -----
const InformationPage: FC = () => {
  const { t, i18n } = useTranslation();

  const param: { id?: string } = useParams();
  const id = Number(param?.id);

  const dispatch = useAppDispatch();

  const data = useSelector(getInfoSurahs);
  const isLoadings = useSelector(getIsLoading);
  const [isLoading, setIsloading] = useState(isLoadings);

  useEffect(() => {
    dispatch(fetchInfoSurah({ id }));
    setIsloading(true);
  }, [dispatch, id]);

  const content = (
    <div className={cls.InfoSurahPageWrapperParent}>
      <div className={classNames(cls.TitleData)}>
        {/* Sura nomi */}

        <div className={classNames(cls.DataName)}>
          {i18n.language === 'uz' ? 'Sura nomi' : 'Сура номи'}:{' '}
          {i18n.language === 'uz'
            ? data[0]?.chapter_id?.translated_names[0]?.name
            : data[0]?.chapter_id?.translated_names[3].name}
        </div>

        {/* Oyatlar soni */}
        <div className={classNames(cls.Data)}>
          {i18n.language === 'uz' ? 'Oyatlar soni' : 'Оятлар сони'}:{' '}
          {data[0]?.chapter_id?.count_verse}
        </div>

        {/* Vahiy joyi */}
        <div className={classNames(cls.Data)}>
          {i18n.language === 'uz' ? 'Vahiy joyi' : 'Ваҳий жойи'}:{' '}
          {t(data[0]?.chapter_id?.revelation_place)}
        </div>
      </div>

      <hr />

      <div className={classNames(cls.MainText)}>
        {data[0]?.chapter_id?.revelation_place ? (
          <img
            src={
              data[0]?.chapter_id?.revelation_place === 'makkah'
                ? makkah
                : data[0]?.chapter_id?.revelation_place === 'madinah'
                ? madinah
                : ''
            }
            alt="#"
            width={300}
            className={classNames(cls.imgLeft)}
          />
        ) : (
          ''
        )}

        {/* Sura info paragraph */}
        <p className={classNames(cls.Block)}>
          {i18n.language === 'uz' ? data[0].text : data[1].text}
        </p>
      </div>
    </div>
  );

  <DynamicModuleLoader reducers={reducer}>
    <div>{isLoading ? content : <Loader />}</div>
  </DynamicModuleLoader>;

  return isLoading ? <div>{/* {content} */}</div> : <Loader />;
};

export default InformationPage;
