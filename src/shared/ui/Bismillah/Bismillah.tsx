import React, { memo } from 'react';
import cls from './Bismillah.module.scss';
import BismillahSVG from '../../../../public/bismillah.svg';
import { classNames } from '@/shared/lib/classNames/classNames';

const Bismillah = memo(() => (
  <div className={classNames(cls.bismillahContainer)}>
    <BismillahSVG className={classNames(cls.bismillahSVG)} />
  </div>
));

export default Bismillah;
