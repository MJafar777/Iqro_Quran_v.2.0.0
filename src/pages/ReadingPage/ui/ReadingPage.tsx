import React, { useContext } from 'react';
import cls from './ReadingPage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

// ---------- | | ---------- //
import { Navbar } from '@/widgets/Nabar';
import { Sidebar } from '@/widgets/Sidebar';
import { ReadingSidebar } from '@/widgets/ReadingSidebar';
import { ReadingArabic } from '@/entities/ReadingArabic';
import { ReadingNavbar } from '@/widgets/ReadingNavbar';
import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';
import SwtichButton from '@/shared/ui/SwitchButton/SwtichButton';
import { ReadingPrevNextBtnGroup } from '@/shared/ui/ReadingPrevNextBtnGroup';
import { ReadingPrevNextSuraBtnGroup } from '@/shared/ui/ReadingPrevNextSuraBtnGroup';

// import { ReadingTranskriptLotin } from '@/entities/ReadingTranskriptLotin';

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
        <SwtichButton buttonsNames={['Reading', 'Translate', 'Verbatim']} />

        <ReadingArabic />

        <ReadingPrevNextBtnGroup />

        <ReadingPrevNextSuraBtnGroup />
      </div>

      {/* <ReadingTranskriptLotin /> */}
    </div>
  );
};

export default ReadingPage;
