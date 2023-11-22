import React, { useRef } from 'react';

import cls from './ThemeSwitchButton.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface ButtonsNames {
  buttonsNames: string[];
}

const ThemeSwtichButton = (props: ButtonsNames) => {
  const { buttonsNames } = props;
  const divRef = useRef<HTMLDivElement>(null);

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
