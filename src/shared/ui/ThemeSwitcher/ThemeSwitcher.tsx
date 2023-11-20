/* eslint-disable react/button-has-type */
/* eslint-disable i18next/no-literal-string */
/* eslint-disable react/no-unescaped-entities */
import React, { memo, useState } from 'react';
// import { Button } from '../Button';
import SwtichButton from '../SwitchButton/SwtichButton';

interface ThemeSwitcherProp {
  className?: string;
}
export const ThemeSwitcher = memo((prop: ThemeSwitcherProp) => {
  const [active, setActive] = useState(1);

  return <SwtichButton buttonsNames={['Avto', 'Yorqin', 'Qorong‘i']} />;
});
