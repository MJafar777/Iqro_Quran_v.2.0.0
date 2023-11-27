import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import cls from './ReadingNavbarRight.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getSelectedPage } from '@/entities/Page';

interface ReadingNavbarRgihtProps {
  className?: string;
}

const ReadingNavbarRgiht = memo(({ className }: ReadingNavbarRgihtProps) => {
  const { t } = useTranslation();
  const currentPage = useSelector(getSelectedPage);

  return (
    <div className={classNames(cls.ReadingNavbarRgiht, {}, [className])}>
      <p>{t('page')}</p>

      <p>{currentPage.pageNumber}</p>
    </div>
  );
});

export default ReadingNavbarRgiht;
