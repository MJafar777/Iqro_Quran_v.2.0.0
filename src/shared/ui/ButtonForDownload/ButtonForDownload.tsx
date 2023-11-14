/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
import cls from './ButtonForDownload.module.scss' 
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '../AppImage';

interface ButtonForDownloadProp{
  icon:string;
  className?:string;
}

export const ButtonForDownload = (prop:ButtonForDownloadProp) => {
  const {className,icon} =prop;
  return (
    <button  className={classNames(cls.ButtonForDownload,{},[className])}> 
            <AppImage src={icon}/>
    </button>
  )
}
