import { memo } from 'react';
import { useSelector } from 'react-redux';
import { getSelectedPage } from '@/entities/Page';
import ReadingPrevNextBtn from '../../ReadingPrevNextBtn/ui/ReadingPrevNextBtn';

const ReadingPrevNextBtnGroup = memo(() => {
  const currentPage = useSelector(getSelectedPage);

  return (
    <>
      {currentPage.pageNumber > 1 && <ReadingPrevNextBtn prevIcon prev />}

      <ReadingPrevNextBtn nextIcon next />
    </>
  );
});

export default ReadingPrevNextBtnGroup;
