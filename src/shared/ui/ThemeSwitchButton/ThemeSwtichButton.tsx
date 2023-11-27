import React, { useEffect, useRef } from 'react';

import cls from './ThemeSwitchButton.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Theme } from '@/shared/const/theme';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage';

interface ButtonsNames {
  buttonsNames: string[];
}

const ThemeSwtichButton = (props: ButtonsNames) => {
  const { buttonsNames } = props;
  // const { themes, setTheme } = useContext(ThemeContext);
  const themeLocalstorage = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);

  const divRef = useRef<HTMLDivElement>(null);
  const { toggleTheme, theme } = useTheme();

  useEffect(() => {
    if (divRef.current && themeLocalstorage === Theme.ORANGE) {
      divRef.current.style.left = '0';
    } else if (divRef.current && themeLocalstorage === Theme.LIGHT) {
      divRef.current.style.left = '110px';
    } else if (divRef.current && themeLocalstorage === Theme.DARK) {
      divRef.current.style.left = '220px';
    }
  }, [themeLocalstorage]);

  const clickBtn = (index: number) => {
    if (divRef.current && index === 1) {
      divRef.current.style.left = '0';
    } else if (divRef.current && index === 2) {
      divRef.current.style.left = '110px';
    } else if (divRef.current && index === 3) {
      divRef.current.style.left = '220px';
    } else if (divRef.current && index === 4) {
      divRef.current.style.left = '340px';
    }
    if (index === 1) {
      toggleTheme(Theme.ORANGE);
    } else if (index === 2) {
      toggleTheme(Theme.LIGHT);
    } else {
      toggleTheme(Theme.DARK);
    }
  };

  return (
    <div className={classNames(cls.ThemeSwtichButton, {}, [])}>
      <div className={classNames(cls.buttonBox, {}, [])}>
        <div
          ref={divRef}
          data-testid="btn-container"
          className={classNames(cls.btn, {}, [])}
        >
          {}
        </div>
        {buttonsNames?.map((item, index) => {
          return (
            <button
              key={index}
              type="submit"
              onClick={() => clickBtn(index + 1)}
              className={classNames(cls.toggleBtn, {}, [])}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ThemeSwtichButton;
