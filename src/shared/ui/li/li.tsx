import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './li.module.scss';
import { Icon } from '../Icon';
import { SearchSmall } from '@/shared/assets/icons/navbarSearch';

interface LiProp {
  className?: string;
  to: string;
  children: string;
}

export const Li = memo((prop: LiProp) => {
  const { to, className, children } = prop;

  return (
    <Link to={to} className={classNames(cls.li)}>
      <Icon
        data-testid="sidebar-toggle"
        className={cls.icon}
        height={0}
        Svg={SearchSmall}
      />
      {children}
    </Link>
  );
});
