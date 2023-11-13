/* eslint-disable i18next/no-literal-string */
import React,{ memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleCodeBlockComponent.module.scss';
// import Button from '@/shared/ui/Button/Button';

interface MainHeaderComponentProps {
    className?: string;
}


export const MainHeader = memo( (prop:MainHeaderComponentProps) => {
const {className}=prop
  return (
    <div className={classNames(cls.MainHeader,{},[className])}>
      {/* <Button></Button> */}
    </div>
  )
})
