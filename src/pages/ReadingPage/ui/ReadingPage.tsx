import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import cls from './ReadingPage.module.scss';
import cls2 from '../../../entities/ReadingTranskriptLotin/ui/ReadingTranskriptLotin.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

// ---------- | | ---------- //
import { Navbar } from '@/widgets/Nabar';
import { Sidebar } from '@/widgets/Sidebar';
import { getIsLoading } from '@/pages/MainPage';
import { ReadingNavbar } from '@/widgets/ReadingNavbar';
import { ReadingSidebar } from '@/widgets/ReadingSidebar';
// import { ReadingArabic } from '@/entities/ReadingArabic';
import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';
import SwtichButton from '@/shared/ui/SwitchButton/SwtichButton';
import BookBoxSkeleton from '@/shared/ui/BookBoxSkeleton/BookBoxSkeleton';
import { ReadingTranskriptLotin } from '@/entities/ReadingTranskriptLotin';
import { ReadingPrevNextBtnGroup } from '@/shared/ui/ReadingPrevNextBtnGroup';
import { ReadingPrevNextSuraBtnGroup } from '@/shared/ui/ReadingPrevNextSuraBtnGroup';
import SurahInfoAndAudio from '@/shared/ui/SurahInfoAndAudio/SurahInfoAndAudio';
// import { ReadingTabBtn } from '@/shared/ui/ReadingTabBtn';

interface ReadingPageProps {
  className?: string;
}

const ReadingPage = (props: ReadingPageProps) => {
  const { className } = props;
  const { readingSidebarActive } = useContext(ButtonsContext);
  const isLoading = useSelector(getIsLoading);

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
        <SwtichButton buttonsNames={["O'qilishi", 'Tarjimasi', 'Kitob']} />

        {/* <ReadingTabBtn /> */}

        <SurahInfoAndAudio />

        {/* <ReadingArabic /> */}

        {isLoading ? (
          <div
            className={classNames(cls2.ReadingTranskriptLotin, {}, [className])}
          >
            <div
              className={classNames(cls2.ReadingTranskriptLotin__readBox, {}, [
                className,
              ])}
            >
              <BookBoxSkeleton />
            </div>
          </div>
        ) : (
          <>
            <ReadingTranskriptLotin />

            <ReadingPrevNextBtnGroup />

            <ReadingPrevNextSuraBtnGroup />
          </>
        )}
      </div>
    </div>
  );
};

export default ReadingPage;
