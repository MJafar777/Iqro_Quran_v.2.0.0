import { memo, useContext } from 'react';
import { useSelector } from 'react-redux';
import { getSelectedPage } from '@/entities/Page';
import { getSelectedSura } from '@/entities/Surah';
import ReadingPrevNextBtn from '../../ReadingPrevNextBtn/ui/ReadingPrevNextBtn';
import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';
import { getSelectedPageRead } from '@/entities/PageRead';
import { getSelectedSuraRead } from '@/entities/SurahRead';

const ReadingPrevNextBtnGroup = memo(() => {
  const { readingPageTubBtn } = useContext(ButtonsContext);
  const currentPage = useSelector(getSelectedPage);
  const currentSura = useSelector(getSelectedSura);
  const currentPageRead = useSelector(getSelectedPageRead);
  const currentSuraRead = useSelector(getSelectedSuraRead);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {readingPageTubBtn === 3 ? (
        <>
          {currentPageRead.pageNumber > currentSuraRead.pages[0] && (
            <ReadingPrevNextBtn nextIcon next />
          )}

          {currentPageRead.pageNumber < currentSuraRead.pages[1] && (
            <ReadingPrevNextBtn prevIcon prev />
          )}
        </>
      ) : (
        <>
          {currentSura.pages[1] - currentSura.pages[0] >
            currentPage.pageNumber && <ReadingPrevNextBtn prevIcon prev />}

          {currentPage.pageNumber > 1 && <ReadingPrevNextBtn nextIcon next />}
        </>
      )}
    </>
  );
});

export default ReadingPrevNextBtnGroup;
