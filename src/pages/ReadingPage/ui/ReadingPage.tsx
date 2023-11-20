import React, { useContext } from 'react';
import cls from './ReadingPage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

// ---------- | | ---------- //
import { Navbar } from '@/widgets/Nabar';
import { Sidebar } from '@/widgets/Sidebar';
import { ReadingNavbar } from '@/widgets/ReadingNavbar';
import { ReadingSidebar } from '@/widgets/ReadingSidebar';
// import { ReadingArabic } from '@/entities/ReadingArabic';
import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';
import { ReadingTranskriptLotin } from '@/entities/ReadingTranskriptLotin';
import { ReadingPrevNextBtnGroup } from '@/shared/ui/ReadingPrevNextBtnGroup';
import { ReadingPrevNextSuraBtnGroup } from '@/shared/ui/ReadingPrevNextSuraBtnGroup';

interface ReadingPageProps {
  className?: string;
}

const ReadingPage = (props: ReadingPageProps) => {
  const { className } = props;
  const { readingSidebarActive } = useContext(ButtonsContext);

  return (
    <div
      data-testid="ReadingPage"
      className={classNames(cls.ReadingPage, {}, [className])}
    >
      <Navbar />

      <ReadingNavbar />

      <Sidebar>
        <ReadingSidebar />
      </Sidebar>

      <div
        className={classNames(
          cls.ReadingPage__readingContainer,
          { [cls.fullWidth]: readingSidebarActive },
          [className],
        )}
      >
        {/* <ReadingArabic /> */}

        <ReadingTranskriptLotin />

        <ReadingPrevNextBtnGroup />

        <ReadingPrevNextSuraBtnGroup />
      </div>
    </div>
  );
};

export default ReadingPage;
