import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
<<<<<<< HEAD
import { Button } from '@/shared/ui/Button';
=======
>>>>>>> 7f8242471f42c7799e2cd0706f15ec49ff09cd72
import cls from './ErrorPage.module.scss';

interface ErrorPageProps {
  className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
  const { t } = useTranslation();

<<<<<<< HEAD
  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={classNames(cls.ErrorPage, {}, [className])}>
      <p>{t('Произошла непредвиденная ошибка')}</p>
      <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
=======
  return (
    <div className={classNames(cls.ErrorPage, {}, [className])}>
      <p>{t('Произошла непредвиденная ошибка')}</p>
>>>>>>> 7f8242471f42c7799e2cd0706f15ec49ff09cd72
    </div>
  );
};
