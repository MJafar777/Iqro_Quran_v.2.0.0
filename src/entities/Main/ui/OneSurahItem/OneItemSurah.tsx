/* eslint-disable i18next/no-literal-string */
/* eslint-disable react/self-closing-comp */
import { Link } from 'react-router-dom';
import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { OrderWrapper } from '@/shared/ui/OrderWrapper/OrderWrapper';
import { HStack, VStack } from '@/shared/ui/Stack';
import cls from './OneItemSurah.module.scss';

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

  return (
    <Link
      style={{ textDecoration: 'none', color: 'black' }}
      to={`/orderOfSura/${orderOfSura}`}
      className={classNames(cls.oneItemSura, {}, [className])}
    >
      <HStack max justify="between" align="center">
        <HStack>
          <HStack>
            <OrderWrapper
              className={classNames(
                whichOrderHovered === orderOfSura ? cls.hovered : '',
              )}
              orderOfOyat={orderOfSura}
            />
            <VStack>
              <p className={cls.text}>{title}</p>
              <p className="numberOfOyat">{numberOfOyat} Ayahs</p>
            </VStack>
          </HStack>
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
