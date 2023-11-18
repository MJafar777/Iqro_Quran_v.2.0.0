import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ErrorPage.module.scss';

interface ErrorPageProps {
  className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.ErrorPage, {}, [className])}>
      <p>{t('Произошла непредвиденная ошибка')}</p>
    </div>
  );
};
