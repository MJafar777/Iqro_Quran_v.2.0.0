import React, { useContext, useRef } from 'react';

import cls from './SwitchButton.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';

interface ButtonsNames {
  buttonsNames: string[];
}

const SwtichButton = (props: ButtonsNames) => {
  const { buttonsNames } = props;
  const divRef = useRef<HTMLDivElement>(null);

  const { setReadingPageTubBtn } = useContext(ButtonsContext);

  const clickBtn = (index: number) => {
    if (divRef.current && index === 1) {
      divRef.current.style.left = '0';
    } else if (divRef.current && index === 2) {
      divRef.current.style.left = '130px';
    } else if (divRef.current && index === 3) {
      divRef.current.style.left = '260px';
    } else if (divRef.current && index === 4) {
      divRef.current.style.left = '390px';
    }

    setReadingPageTubBtn(index);
  };

  return (
    <div className={classNames(cls.SwtichButton, {}, [])}>
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

export default SwtichButton;
