import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './SuraList.module.scss';

interface SuraListProps {
  className?: string;
  active?: string;
}

const SuraList = ({ className, active }: SuraListProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.SuraList, {}, [className])}>
      {[
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8,
        9, 10, 11, 12, 13, 14,
      ].map((index) => (
        <div className={classNames(cls.SuraList__item, {}, [className])}>
          <p className={classNames(cls.SuraList__suraNumber, {}, [])}>
            {index}
          </p>

          <p className={classNames(cls.SuraList__suraName, {}, [])}>
            {t('Fotiha')}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SuraList;
