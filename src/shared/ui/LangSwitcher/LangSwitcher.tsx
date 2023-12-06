import React, { memo, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Lang } from '@/shared/assets/icons/navbar';

import cls from './LangSwitcher.module.scss';

export const LangSwitcher = memo(() => {
  const { i18n } = useTranslation();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const toggle = async (lang: string) => {
    i18n.changeLanguage(lang);
    setIsOpenMenu(false);
  };

  useEffect(() => {
    const handleWindowLoad = () => {
      setIsOpenMenu(false);
    };

    window.addEventListener('click', handleWindowLoad);

    return () => {
      window.removeEventListener('click', handleWindowLoad);
    };
  }, []);

  const renderMenu = useMemo(() => {
    return (
      <div className={cls.menu}>
        <div
          className={cls.menuItem}
          onClick={() => {
            toggle('uz');
          }}
        >
          Lotincha
        </div>
        <div
          className={cls.menuItem}
          onClick={() => {
            toggle('kr');
          }}
        >
          Криллча
        </div>
      </div>
    );
  }, [toggle]);

  return (
    <div className={cls.containerLang}>
      <div
        onClick={(e) => {
          e.stopPropagation();
          setIsOpenMenu((pre) => !pre);
        }}
        className={cls.icon}
      >
        <Lang className={cls.icon} />
      </div>
      {isOpenMenu ? renderMenu : ''}
    </div>
  );
});
