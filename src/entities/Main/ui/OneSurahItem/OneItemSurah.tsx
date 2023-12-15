/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
/* eslint-disable i18next/no-literal-string */
/* eslint-disable react/self-closing-comp */
import { useNavigate } from 'react-router-dom';
import { memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { OrderWrapper } from '@/shared/ui/OrderWrapper/OrderWrapper';
import { HStack, VStack } from '@/shared/ui/Stack';
import cls from './OneItemSurah.module.scss';
import { useSelectedSuraActions } from '@/entities/Surah';
import { LAST_READ_SURAH } from '@/shared/const/localstorage';
import { OneSuraInListSchema, getListOfSurahs } from '@/pages/MainPage';

interface OneItemSuraProp {
  suraId?: number;
  title?: string;
  numberOfOyat?: number;
  arabic?: string;
  orderOfSura?: number;
  className?: string;
  oneSurah?: OneSuraInListSchema;
}
const OneItemSurah = memo((prop: OneItemSuraProp) => {
  const {
    title,
    numberOfOyat,
    arabic,
    orderOfSura = 1,
    className,
    oneSurah,
  } = prop;

  const { setSelectedSura } = useSelectedSuraActions();
  const listOfSurahs = useSelector(getListOfSurahs);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const modifiedValue =
    arabic?.length === 1
      ? `00${arabic}`
      : arabic?.length === 2
      ? `0${arabic}`
      : arabic;

  const readLastSurahInLocalStorage = () => {
    const newRead = {
      ...oneSurah,
    };
    const getListRead = localStorage.getItem(LAST_READ_SURAH);
    if (getListRead) {
      if (
        JSON.parse(getListRead).map(
          (surah: OneItemSuraProp) => surah.suraId == orderOfSura,
        )
      ) {
        localStorage.setItem(
          LAST_READ_SURAH,
          JSON.stringify([...JSON.parse(getListRead), newRead]),
        );
      } else {
        localStorage.setItem(
          LAST_READ_SURAH,
          JSON.stringify([...JSON.parse(getListRead), newRead]),
        );
      }
    } else {
      localStorage.setItem(LAST_READ_SURAH, JSON.stringify([newRead]));
    }
  };

  const toggleOneItemSurah = (id: number) => {
    const data = listOfSurahs?.filter((sura) => sura.quran_order == id)[0];
    if (data) {
      setSelectedSura(data);
      readLastSurahInLocalStorage();
      navigate('/reading');
    }
  };

  const content = useMemo(() => {
    return (
      <HStack max align="center">
        <HStack style={{ width: '60%' }} align="center" justify="start">
          <OrderWrapper
            className={classNames(cls.wrapper)}
            orderOfOyat={orderOfSura}
          />
          <VStack className={cls.TextWrapper} style={{ margin: 0 }}>
            <p className={cls.text}>{title}</p>
            <p className={cls.numberOfOyat}>
              {numberOfOyat} {t('Ayahs')}
            </p>
          </VStack>
        </HStack>
        <HStack>
          <VStack gap="8">
            <p style={{}} className={cls.arabic}>
              {modifiedValue}
            </p>
          </VStack>
        </HStack>
      </HStack>
    );
  }, [modifiedValue, numberOfOyat, orderOfSura, t, title]);

  return (
    <div
      style={{
        textDecoration: 'none',
        color: 'black',
      }}
      className={classNames(cls.oneItemSura, {}, [className])}
      onClick={() => toggleOneItemSurah(orderOfSura)}
    >
      {content}
    </div>
  );
});

export default OneItemSurah;
