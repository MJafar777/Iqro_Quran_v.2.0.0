/* eslint-disable i18next/no-literal-string */
/* eslint-disable react/self-closing-comp */
import { Link } from 'react-router-dom';
import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { OrderWrapper } from '@/shared/ui/OrderWrapper/OrderWrapper';
import { HStack, VStack } from '@/shared/ui/Stack';
import cls from './OneItemSurah.module.scss';
import { useSelectedSuraActions } from '@/entities/Surah';

interface OneItemSuraProp {
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

  const readOneSurah = (id: string) => {};

  return (
    <Link
      style={{
        textDecoration: 'none',
        color: 'black',
      }}
      to="/reading"
      className={classNames(cls.oneItemSura, {}, [className])}
      onClick={() =>
        setSelectedSura({
          suraId: orderOfSura,
          nameLotin: '',
          nameKril: '',
          numberOfOyat: numberOfOyat || 1,
        })
      }
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
    </Link>
  );
});

export default OneItemSurah;
