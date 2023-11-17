import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './li.module.scss';
import { Icon } from '../Icon';
import { Close, SearchSmall } from '@/shared/assets/icons/sidebarSearch';

interface LiProp {
  className?: string;
  to: string;
  children: string;
  close?: boolean;
}

export const Li = memo((prop: LiProp) => {
  const { to, className, children, close } = prop;

  const onToggle = () => {
    alert('are you Sure remove this search');
  };

  return (
    <Link to={to} className={classNames(cls.li)}>
      <div>
        <Icon
          data-testid="sidebar-toggle"
          className={cls.icon}
          height={0}
          Svg={SearchSmall}
        />
        {children}
      </div>
      <div>
        {close ? (
          <Icon
            data-testid="sidebar-toggle"
            onClick={onToggle}
            className={cls.closeBtn}
            Svg={Close}
            height={0}
            clickable
          />
        ) : (
          ''
        )}
      </div>
    </Link>
  );
});
