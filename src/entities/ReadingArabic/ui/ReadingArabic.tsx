import { memo } from 'react';
import { useSelector } from 'react-redux';
import cls from './ReadingArabic.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  getReadingArabicData,
  getReadingArabicError,
  getReadingArabicIsLoading,
} from '../model/selectors/readingArabic';

import {
  ReducersList,
  DynamicModuleLoader,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { readingArabicReducer } from '../model/slice/readingArabicSlice';
import { getSelectedPage, useSelectedPageActions } from '@/entities/Page';

// import BookBox from '@/shared/ui/BookBox/BookBox';
// import BookBoxSkeleton from '@/shared/ui/BookBoxSkeleton/BookBoxSkeleton';
// import ReadingQuranErrorDialog from '@/shared/ui/ErrorDialog/ErrorDialog';

// eslint-disable-next-line ulbi-tv-plugin/public-api-imports
import { useSelectedSuraValue } from '@/entities/Surah/model/selectors/getSelectedSuraValue/getSelectedSuraValue';
// eslint-disable-next-line ulbi-tv-plugin/public-api-imports
// import { SurahPageOyah } from '@/entities/Surah/model/consts/SurahData';
// eslint-disable-next-line ulbi-tv-plugin/public-api-imports
import { getSelectedSura } from '@/entities/Surah/model/selectors/getSelectedSura/getSelectedSura';
// eslint-disable-next-line ulbi-tv-plugin/public-api-imports
import {
  // selectedOyatActions,
  useSelectedOyatActions,
} from '@/entities/Oyat/model/slice/seletedOyatSlice';
// eslint-disable-next-line ulbi-tv-plugin/public-api-imports
import { getSelectedOyat } from '@/entities/Oyat/model/selectors/getSelectedOyat';

interface ReadingArabicProps {
  className?: string;
  disabled?: boolean;
}

const reducers: ReducersList = {
  readingArabic: readingArabicReducer,
};

export const ReadingArabic = memo(
  ({ className, disabled }: ReadingArabicProps) => {
    const currentSura = useSelectedSuraValue();

    const data = useSelector(getReadingArabicData);
    const isLoading = useSelector(getReadingArabicIsLoading);
    const isError = useSelector(getReadingArabicError);

    const currentPage = useSelector(getSelectedPage);
    const { setSelectedPage, incrementCurrentPage, decrementCurrentPage } =
      useSelectedPageActions();

    const selectedSura = useSelector(getSelectedSura);

    const currentOyat = useSelector(getSelectedOyat);
    const { setSelectedtOyat } = useSelectedOyatActions();

    if (isError) {
      console.log(isError);
    }

    // if (data) {
    //   console.log(data[currentSura.suraId]?.data);
    //   // console.log(data[currentSura.suraId]?.data?.data[0]?.pages[0]);

    //   // console.log(currentPage.pageNumber);

    //   // console.log(data[currentSura.suraId]?.data.resourse);
    // }

    // const handleClickNextPagebBtn = () => {
    //   SurahPageOyah[selectedSura.suraId].forEach((element) => {
    //     if (Number(element.page) === currentPage.pageNumber + 1) {
    //       console.log(element, currentPage.pageNumber + 1, 'ikkisi teng');
    //       setSelectedtOyat(Number(element.start));
    //     } else if (Number(element.page) < currentPage.pageNumber + 1) {
    //       console.log(element, currentPage.pageNumber + 1, 'currentPage katta');
    //     } else if (Number(element.page) > currentPage.pageNumber + 1) {
    //       console.log(
    //         element,
    //         currentPage.pageNumber + 1,
    //         'currentPage kichik',
    //       );
    //     }
    //   });
    // };

    // const handleClickPrevPagebBtn = () => {
    //   SurahPageOyah[selectedSura.suraId].forEach((element) => {
    //     if (Number(element.page) === currentPage.pageNumber - 1) {
    //       console.log(element, currentPage.pageNumber + 1, 'ikkisi teng');
    //       setSelectedtOyat(Number(element.start));
    //     } else if (Number(element.page) < currentPage.pageNumber + 1) {
    //       console.log(element, currentPage.pageNumber + 1, 'currentPage katta');
    //     } else if (Number(element.page) > currentPage.pageNumber + 1) {
    //       console.log(
    //         element,
    //         currentPage.pageNumber + 1,
    //         'currentPage kichik',
    //       );
    //     }
    //   });
    // };

    return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
        <div
          data-testid="reading-arabic"
          className={classNames(cls.ReadingArabic, {}, [className])}
        >
          <div
            className={classNames(cls.ReadingArabic__readBox, {}, [className])}
          >
            {/* {isLoading ? (
              <BookBoxSkeleton />
            ) : data && data[currentSura.suraId]?.data.resourse ? (
              <BookBox
                imgUrl={`${
                  data[currentSura.suraId]?.data.resourse[
                    Number(data[currentSura.suraId]?.data?.data[0]?.pages[0]) -
                      currentPage.pageNumber -
                      1
                  ]
                }`}
              />
            ) : isError ? (
              <ReadingQuranErrorDialog
                isErrorProps={!false}
                errorProps={isError}
              />
            ) : (
              ''
            )} */}
          </div>
        </div>
      </DynamicModuleLoader>
    );
  },
);
