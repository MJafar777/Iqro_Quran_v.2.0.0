import React from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ReadingPage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

// ---------- | | ---------- //
import { Sidebar } from '@/widgets/Sidebar';
import { ReadingSidebar } from '@/widgets/ReadingSidebar';
import { ReadingArabic } from '@/entities/ReadingArabic';
// import { ReadingTranskriptLotin } from '@/entities/ReadingTranskriptLotin';

interface ReadingPageProps {
  className?: string;
}

const ReadingPage = (props: ReadingPageProps) => {
  const { className } = props;
  const { t } = useTranslation('Reading');

  return (
    <div
      data-testid="ReadingPage"
      className={classNames(cls.ReadingPage, {}, [className])}
    >
      {t('')}

      <Sidebar>
        <ReadingSidebar />
      </Sidebar>

      <ReadingArabic />

      {/* <ReadingTranskriptLotin /> */}
    </div>
  );
};

export default ReadingPage;
