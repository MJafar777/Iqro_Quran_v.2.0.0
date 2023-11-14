import React from 'react'
import cls from './MobileApp.scss'
import { classNames } from '@/shared/lib/classNames/classNames';


interface MobileApp{
  className?:string;
}

// eslint-disable-next-line no-redeclare
export const MobileApp = (prop:MobileApp) => {
  const {className}=prop
  return (
    <div className={classNames(cls.MobileApp,{},[className])} />
  )
}
