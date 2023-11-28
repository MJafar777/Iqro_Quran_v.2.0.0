import React, { Suspense, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';
import { Loader } from '@/widgets/Loader';
import cls from './InformationPage.module.scss';
import { getInfoSurahs } from '../model/selectors/InfoSurah';
import { SurahInfoReducer } from '../model/slice/sliceSuraInfo';
import { classNames } from '@/shared/lib/classNames/classNames';
import { fetchInfoSurah } from '../model/service/fetchInfoSurah/fetchInfoSurah';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

import {
  ReducersList,
  DynamicModuleLoader,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const reducer: ReducersList = {
  info: SurahInfoReducer,
};

const InfoSurahPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const param: any = useParams();
  const { t, i18n } = useTranslation();
  const id = param?.id;
  const dispatch = useAppDispatch();
  // const data = useSelector((state: InformationPageSurah) => {
  //   return state?.readingTranslateKril.data[3].data.data[0];
  // });

  const datas = useSelector(getInfoSurahs);
  const data = datas.data[i18n.language === 'uz' ? 0 : 1].chapter_id;

  useEffect(() => {
    dispatch(fetchInfoSurah({ id }));
  }, [dispatch, id]);

  const content = (
    <div style={{ marginTop: '30px', padding: '20px' }}>
      <Suspense fallback={<Loader />}>
        <div>
          <div className={classNames(cls.TitleData)}>
            {/* Sura nomi */}
            <div className={classNames(cls.DataName)}>
              {i18n.language === 'uz' ? 'Sura nomi' : 'Сура номи'}:{' '}
              {/* {i18n.language === 'uz'
                ? data?.translated_names[1].name
                : data?.translated_names[3].name} */}
            </div>
            {/* Oyatlar soni */}
            <div className={classNames(cls.Data)}>
              {i18n.language === 'uz' ? 'Oyatlar soni' : 'Оятлар сони'}:{' '}
              {/* {data.count_verse} */}
            </div>
            {/* Vahiy joyi */}
            <div className={classNames(cls.Data)}>
              {i18n.language === 'uz' ? 'Vahiy joyi' : 'Ваҳий жойи'}:{' '}
              {/* {t(data.revelation_place)} */}
            </div>
          </div>

          <hr />

          <div className={classNames(cls.MainText)}>
            <img
              // src={data?.revelation_place === 'makkah' ? makkah : madinah}
              width={300}
              className={classNames(cls.imgLeft)}
              alt="#"
            />

            {/* Sura info paragraph */}
            <p className={classNames(cls.Block)}>
              {/* {i18n.language === 'uz'
                ? data.chapter_info[0].text
                : data.chapter_info[1].text} */}
            </p>
          </div>
        </div>
      </Suspense>
    </div>
  );

  <DynamicModuleLoader reducers={reducer}>
    <div>{content}</div>
  </DynamicModuleLoader>;
};

export default InfoSurahPage;
