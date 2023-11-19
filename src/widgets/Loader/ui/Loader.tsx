import React from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Loader.module.scss';

interface LoaderProps {
  className?: string;
}

const Loader = ({ className }: LoaderProps) => {
  return (
    <div className={classNames(cls.Loader, {}, [className])}>
      <div className={cls.Loader__box} />
    </div>
  );
};

export default Loader;
