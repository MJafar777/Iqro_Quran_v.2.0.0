/* eslint-disable i18next/no-literal-string */
/* eslint-disable react/self-closing-comp */
import { Link } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import {OrderWrapper} from '@/shared/ui/OrderWrapper/OrderWrapper';
import { HStack, VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'
import cls from './OneItemSurah.module.scss'

interface OneItemSuraProp{
  title?:string;
  nameOfMean?:string;
  numberOfOyat?:string;
  arabic?:string;
  orderOfSura?:number;
  className?:string;
}
const OneItemSurah = (prop:OneItemSuraProp) => {
 const {title,nameOfMean,numberOfOyat,arabic,orderOfSura=1} =prop
  
  return (
    <Link style={{textDecoration:'none',color:'black'}} to={`/orderOfSura/${orderOfSura}`}>
    <HStack max justify='between' align='center' className={classNames(cls.oneItemSura,{})}>
      <HStack>
        <HStack>
          <OrderWrapper orderOfOyat={orderOfSura} />
          <VStack>
            <Text title={title}/>
            <p className='numberOfOyat'>{numberOfOyat} Ayahs</p>
          </VStack>
        </HStack>
      </HStack>
      <HStack>
        <VStack gap='8'>
          <p style={{fontFamily:'surah_names',fontSize:'32px'}}>{arabic}</p>
        </VStack>
      </HStack>
    </HStack>
    </Link>
  )
}

export default OneItemSurah