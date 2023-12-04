import React, { memo, useContext } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import cls from './ReadingNavbarRight.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getSelectedPage } from '@/entities/Page';
import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';
import { getSelectedPageRead } from '@/entities/PageRead';

interface ReadingNavbarRgihtProps {
  className?: string;
}

const ReadingNavbarRgiht = memo(({ className }: ReadingNavbarRgihtProps) => {
  const { t } = useTranslation();
  const currentPage = useSelector(getSelectedPage);
  const currentPageRead = useSelector(getSelectedPageRead);
  const { readingPageTubBtn } = useContext(ButtonsContext);

  return (
    <div className={classNames(cls.ReadingNavbarRgiht, {}, [className])}>
      <p>{t('page')}</p>

      <p>
        {readingPageTubBtn === 3
          ? currentPageRead.pageNumber
          : currentPage.pageNumber}
      </p>
    </div>
  );
});

export default ReadingNavbarRgiht;
