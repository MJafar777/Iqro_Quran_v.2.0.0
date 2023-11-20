import { memo } from 'react';
import ReadingPrevNextBtn from '../../ReadingPrevNextBtn/ui/ReadingPrevNextBtn';

const ReadingPrevNextBtnGroup = memo(() => {
  return (
    <>
      <ReadingPrevNextBtn prevIcon prev />

      <ReadingPrevNextBtn nextIcon next />
    </>
  );
});

export default ReadingPrevNextBtnGroup;
