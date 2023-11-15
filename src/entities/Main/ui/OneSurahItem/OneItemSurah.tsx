/* eslint-disable i18next/no-literal-string */
/* eslint-disable react/self-closing-comp */
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import {OrderWrapper} from '@/shared/ui/OrderWrapper/OrderWrapper';
import { HStack, VStack } from '@/shared/ui/Stack'
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
  const [whichOrderHovered,setWhichOrderHovered]=useState(0)
 const whichSurahIn=(order:number)=>{
  setWhichOrderHovered(order)
  console.log(order,'kirdi');
  
 }

 const whichSurahOut=(order:number)=>{
  setWhichOrderHovered(order)
  console.log(order,'kirdi');
  
 }

  return (
    <Link 
    onMouseMove={()=>whichSurahIn(orderOfSura)} 
    onMouseLeave={()=>whichSurahOut(0)}
    style={{textDecoration:'none',color:'black'}} to={`/orderOfSura/${orderOfSura}`}>
    <HStack max justify='between' align='center' className={classNames(cls.oneItemSura,{})}>
      <HStack>
        <HStack>
          <OrderWrapper className={classNames(whichOrderHovered===orderOfSura?cls.hovered:'')} orderOfOyat={orderOfSura}/>
          <VStack>
            <p className={cls.text}>{title}</p>
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