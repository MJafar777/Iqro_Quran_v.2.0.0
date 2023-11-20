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
        className={active === 1 ? cls.buttonThemeActive : cls.buttonTheme}
      >
        Avto
      </Button>
      <Button
        onClick={() => setActive(2)}
        className={active === 2 ? cls.buttonThemeActive : cls.buttonTheme}
      >
        Yorqin
      </Button>
      <Button
        onClick={() => setActive(3)}
        className={active === 3 ? cls.buttonThemeActive : cls.buttonTheme}
      >
        Qorong‘i
      </Button>
    </div>
  );
});
