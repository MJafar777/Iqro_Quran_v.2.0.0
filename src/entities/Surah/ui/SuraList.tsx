import { useSelector } from 'react-redux';
import { memo, useEffect } from 'react';
import cls from './SuraList.module.scss';
import { SurahData, SurahPageOyah } from '../model/consts/SurahData';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useSelectedSuraActions } from '../model/slice/selectedSuraSlice';
// import { useSelectedSuraValue } from '../../model/selectors/getSelectedSuraValue/getSelectedSuraValue';
import { SuraSchema } from '../model/types/selectedSuraSchema';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchReadingArabic } from '@/entities/ReadingArabic';
// import { fetchReadingTranskriptLotin } from '@/entities/ReadingTranskriptLotin';
import { getSelectedSura } from '../model/selectors/getSelectedSura/getSelectedSura';
// eslint-disable-next-line ulbi-tv-plugin/public-api-imports
import { getReadingArabicData } from '@/entities/ReadingArabic/model/selectors/readingArabic';
import { getSelectedPage, useSelectedPageActions } from '@/entities/Page';
// eslint-disable-next-line ulbi-tv-plugin/public-api-imports
import { getSelectedOyat } from '@/entities/Oyat/model/selectors/getSelectedOyat';
// eslint-disable-next-line ulbi-tv-plugin/public-api-imports
import { useSelectedOyatActions } from '@/entities/Oyat/model/slice/seletedOyatSlice';
import { fetchSurahlesList } from '@/pages/MainPage';
// import { getSelectedOyat, useSelectedOyatActions } from '@/entities/Oyat';

interface SuraListProps {
  className?: string;
}

const SuraList = memo(({ className }: SuraListProps) => {
  const dispatch = useAppDispatch();
  const readingArabicDataInRedux = useSelector(getReadingArabicData);

  const selectedSura = useSelector(getSelectedSura);
  const { setSelectedSura } = useSelectedSuraActions();

  const currentOyat = useSelector(getSelectedOyat);
  const { setSelectedtOyat } = useSelectedOyatActions();
  
  useEffect(() => {
    dispatch(fetchSurahlesList({}));
  }, [dispatch]);

  const currentPage = useSelector(getSelectedPage);
  const { setSelectedPage, incrementCurrentPage } = useSelectedPageActions();

  useEffect(() => {
    setSelectedtOyat(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSura.suraId]);

  if (SurahPageOyah[selectedSura.suraId]) {
    SurahPageOyah[selectedSura.suraId].forEach((element) => {
      if (
        Number(element.start) <= currentOyat.oyatNumber &&
        Number(element.end) >= currentOyat.oyatNumber
      ) {
        setSelectedPage(Number(element.page));
      }
    });
  }

  useEffect(() => {
    dispatch(
      fetchReadingArabic({
        suraId: selectedSura.suraId,
        pageNumber: 1,
        limitOfPage: 1,
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(
      fetchReadingArabic({
        suraId: selectedSura.suraId,
        pageNumber: Number(currentPage.pageNumber),
        limitOfPage: 1,
      }),
    );
  }, [dispatch, currentPage.pageNumber, selectedSura.suraId]);

  // useEffect(() => {
  //   dispatch(
  //     fetchReadingTranskriptLotin({
  //       suraId: selectedSura.suraId,
  //       pageNumber: 1,
  //       limitOfPage: 1,
  //     }),
  //   );
  // }, [dispatch, selectedSura.suraId]);

  return (
    <div className={classNames(cls.SuraList, {}, [className])}>
      {SurahData?.map((element: SuraSchema) => (
        <div
          key={element.suraId}
          className={classNames(
            cls.SuraList__item,
            { [cls.active]: element.suraId === selectedSura?.suraId },
            [className],
          )}
          onClick={() => setSelectedSura(element)}
        >
          <p className={classNames(cls.SuraList__suraNumber, {}, [])}>
            {element.suraId}
          </p>

          <p className={classNames(cls.SuraList__suraName, {}, [])}>
            {element.nameLotin}
          </p>
        </div>
      ))}
    </div>
  );
});

export default SuraList;
