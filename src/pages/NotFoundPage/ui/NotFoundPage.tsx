import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';
import { NotFound } from '@/shared/assets/Not_Found';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation();
  return (
    <div
      data-testid="NotFoundPage"
      className={classNames(cls.NotFoundPage, {}, [className])}
    >
      <NotFound
        className={classNames(cls.NotFoundPageChild, {}, [className])}
      />
      {t('Sahifa topilmadi!')}
    </div>
  );
};
