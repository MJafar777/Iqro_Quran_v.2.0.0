/* eslint-disable react/button-has-type */
/* eslint-disable i18next/no-literal-string */
import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { burger } from '@/shared/assets/icons_iqro';
import { Icon } from '@/shared/ui/Icon';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <Icon
        className={classNames(cls.icon_burger, {}, [className])}
        Svg={burger}
      />

      <h2 className={classNames(cls.title, {}, [className])}>
        {t("Iqro Qu'ran")}
      </h2>
    </header>
  );
});
