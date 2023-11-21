import { memo } from 'react';
import { useSelector } from 'react-redux';
import { getSelectedPage } from '@/entities/Page';
import { getSelectedSura } from '@/entities/Surah';
import ReadingPrevNextBtn from '../../ReadingPrevNextBtn/ui/ReadingPrevNextBtn';

const ReadingPrevNextBtnGroup = memo(() => {
  const currentPage = useSelector(getSelectedPage);
  const currentSura = useSelector(getSelectedSura);

  return (
    <>
      {currentSura.pages[1] - currentSura.pages[0] > currentPage.pageNumber && (
        <ReadingPrevNextBtn prevIcon prev />
      )}

      {currentPage.pageNumber > 1 && <ReadingPrevNextBtn nextIcon next />}
    </>
  );
});

export default ReadingPrevNextBtnGroup;
