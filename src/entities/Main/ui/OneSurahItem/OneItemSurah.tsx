/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
/* eslint-disable i18next/no-literal-string */
/* eslint-disable react/self-closing-comp */
import { useNavigate } from 'react-router-dom';
import { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { OrderWrapper } from '@/shared/ui/OrderWrapper/OrderWrapper';
import { HStack, VStack } from '@/shared/ui/Stack';
import cls from './OneItemSurah.module.scss';
import { useSelectedSuraActions } from '@/entities/Surah';
import { LAST_READ_SURAH } from '@/shared/const/localstorage';
import { getListOfSurahs } from '@/pages/MainPage';

interface OneItemSuraProp {
  suraId?: number;
  title?: string;
  numberOfOyat?: number;
  arabic?: string;
  orderOfSura?: number;
  className?: string;
}
const OneItemSurah = memo((prop: OneItemSuraProp) => {
  const { title, numberOfOyat, arabic, orderOfSura = 1, className } = prop;
  const [whichOrderHovered, setWhichOrderHovered] = useState(0);
  const { setSelectedSura } = useSelectedSuraActions();
  const listOfSurahs = useSelector(getListOfSurahs);
  const navigate = useNavigate();

  const readLastSurahInLocalStorage = () => {
    const newRead = {
      suraId: orderOfSura || 7,
      nameLotin: '',
      nameKril: '',
      numberOfOyat: numberOfOyat || 1,
      title: title || 'Fotiha',
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

  return (
    <div
      style={{
        textDecoration: 'none',
        color: 'black',
      }}
      // to="/reading"
      className={classNames(cls.oneItemSura, {}, [className])}
      onClick={() => toggleOneItemSurah(orderOfSura)}
    >
      <HStack max align="center">
        <HStack style={{ width: '60%' }} align="center" justify="start">
          <OrderWrapper
            className={classNames(
              whichOrderHovered === orderOfSura ? cls.hovered : '',
            )}
            orderOfOyat={orderOfSura}
          />
          <VStack style={{ margin: 0 }}>
            <p className={cls.text}>{title}</p>
            <p className={cls.numberOfOyat}>{numberOfOyat} Ayahs</p>
          </VStack>
        </HStack>
        <HStack>
          <VStack gap="8">
            <p style={{ fontFamily: 'surah_names', fontSize: '32px' }}>
              {arabic}
            </p>
          </VStack>
        </HStack>
      </HStack>
    </div>
  );
});

export default OneItemSurah;
