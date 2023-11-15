import { useEffect } from 'react';
import cls from './SuraList.module.scss';
import { SurahData } from '../../model/consts/SurahData';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useSelectedSuraActions } from '../../model/slice/selectedSuraSlice';
import { useSelectedSuraValue } from '../../model/selectors/getSelectedSuraValue/getSelectedSuraValue';
import { SuraSchema } from '../../model/types/selectedSuraSchema';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchReadingArabic } from '@/entities/ReadingArabic';
import { fetchReadingTranskriptLotin } from '@/entities/ReadingTranskriptLotin';

interface SuraListProps {
  className?: string;
}

const SuraList = ({ className }: SuraListProps) => {
  const dispatch = useAppDispatch();
  const selectedSura = useSelectedSuraValue();
  const { currentSura } = useSelectedSuraActions();

  useEffect(() => {
    dispatch(
      fetchReadingArabic({
        suraId: selectedSura.suraId,
        pageNumber: 1,
        limitOfPage: 1,
      }),
    );
  }, [dispatch, selectedSura.suraId]);

  useEffect(() => {
    dispatch(
      fetchReadingTranskriptLotin({
        suraId: selectedSura.suraId,
        pageNumber: 1,
        limitOfPage: 1,
      }),
    );
  }, [dispatch, selectedSura.suraId]);

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
          onClick={() => currentSura(element)}
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
};

export default SuraList;
