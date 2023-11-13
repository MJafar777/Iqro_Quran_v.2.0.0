import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './OyatList.module.scss';

interface OyatListProps {
  className?: string;
  active?: string;
}

const OyatList = ({ className, active }: OyatListProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.OyatList, {}, [className])}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19].map(
        (index) => (
          <div className={classNames(cls.OyatList__item, {}, [className])}>
            <p className={classNames(cls.OyatList__oyatNumber, {}, [])}>
              {index}
            </p>
          </div>
        ),
      )}
    </div>
  );
};

export default OyatList;
