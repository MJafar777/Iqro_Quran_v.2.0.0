/* eslint-disable react/button-has-type */
/* eslint-disable i18next/no-literal-string */
/* eslint-disable react/no-unescaped-entities */
import React, { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import { Button } from '../Button';

interface ThemeSwitcherProp {
  className?: string;
}
export const ThemeSwitcher = memo((prop: ThemeSwitcherProp) => {
  const [active, setActive] = useState(1);
  return (
    <div className={classNames(cls.containerButtonTheme)}>
      <Button
        onClick={() => setActive(1)}
        className={classNames(cls.buttonTheme, { active: active === 1 })}
      >
        Avto
      </Button>
      <Button
        onClick={() => setActive(2)}
        className={classNames(cls.buttonTheme, { active: active === 2 })}
      >
        Yorqin
      </Button>
      <Button
        onClick={() => setActive(3)}
        className={classNames(cls.buttonTheme, { active: active === 3 })}
      >
        Qorong‘i
      </Button>
    </div>
  );
});
