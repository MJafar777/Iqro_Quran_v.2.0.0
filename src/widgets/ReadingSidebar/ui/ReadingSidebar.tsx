import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ReadingSidebar.module.scss';

// ----------- |Elements |----------- //
import { Searchinput } from '@/shared/ui/searchInput';
import { SuraList } from '@/entities/Surah';
import { OyatList } from '@/entities/Oyat';

interface ReadingSidebarProps {
  className?: string;
}

const ReadingSidebar = ({ className }: ReadingSidebarProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.ReadingSidebar, {}, [className])}>
      <div className={classNames(cls.ReadingSidebar__selectionSura, {}, [])}>
        <Searchinput placeHolder={t('Sura qidirish')} className="searchSura" />

        <SuraList />
      </div>

      <div className={classNames(cls.ReadingSidebar__selectionOyat, {}, [])}>
        <Searchinput placeHolder={t('Oyat')} className="searchOyat" />

        <OyatList />
      </div>
    </div>
  );
};

export default ReadingSidebar;
