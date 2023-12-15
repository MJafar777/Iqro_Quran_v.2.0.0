/* eslint-disable react/button-has-type */
/* eslint-disable i18next/no-literal-string */
/* eslint-disable react/no-unescaped-entities */
import React, { memo } from 'react';
// import { Button } from '../Button';
import { useTranslation } from 'react-i18next';
import ThemeSwtichButton from '../ThemeSwitchButton/ThemeSwtichButton';

interface ThemeSwitcherProp {
  className?: string;
}
export const ThemeSwitcher = memo((prop: ThemeSwitcherProp) => {
  const { t } = useTranslation();

  const Avto = t('Avto');
  const Yorqin = t('Yorqin');
  const Qorongi = t('Qorong‘i');

  return (
    <div style={{ transform: 'scale(0.9)' }}>
      <ThemeSwtichButton buttonsNames={[Avto, Yorqin, Qorongi]} />
    </div>
  );
});
