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
import ArrowBottom from '@/shared/assets/icons/arrow-bottom.svg';
import SwtichButton from '@/shared/ui/SwitchButton/SwtichButton';

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
        <div className={classNames(cls.ReadingPage__prevBtn, {}, [className])}>
          <ArrowBottom
            className={classNames(cls.ReadingPage__prevBtnIcon, {}, [])}
          />
        </div>

        <SwtichButton buttonsNames={['Reading', 'Translate', 'Verbatim']} />

        <ReadingArabic />

        <div
          className={classNames(
            cls.ReadingPage__nextBtn,
            { [cls.disabled]: false },
            [className],
          )}
        >
          <ArrowBottom
            className={classNames(cls.ReadingPage__nextBtnIcon, {}, [])}
          />
        </div>
      </div>

      {/* <ReadingTranskriptLotin /> */}
    </div>
  );
};

export default ReadingPage;
