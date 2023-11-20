import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import cls from './SuraList.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  getError,
  getIsLoading,
  getListOfSurahs,
  fetchSurahlesList,
  OneSuraInListSchema,
} from '@/pages/MainPage';
import { Skeleton } from '@/shared/ui/Skeleton';
import { useSelectedSuraActions } from '../model/slice/selectedSuraSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getSelectedSura } from '../model/selectors/getSelectedSura/getSelectedSura';
import { useSelectedPageActions } from '@/entities/Page';

interface SuraListProps {
  className?: string;
}

const SuraList = memo(({ className }: SuraListProps) => {
  const dispatch = useAppDispatch();

  const currentSura = useSelector(getSelectedSura);
  const { setSelectedSura } = useSelectedSuraActions();

  const { setSelectedPage } = useSelectedPageActions();

  const listOfSurah = useSelector(getListOfSurahs);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    if (!listOfSurah) {
      dispatch(fetchSurahlesList({}));
    }

    if (!currentSura.id && listOfSurah) {
      setSelectedSura(listOfSurah[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, listOfSurah]);

  useEffect(() => {
    setSelectedPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSura]);

  return (
    <div className={classNames(cls.SuraList, {}, [className])}>
      {!isLoading && !error
        ? listOfSurah?.map((oneSurah: OneSuraInListSchema, index: number) => (
            <div
              key={oneSurah.quran_order}
              className={classNames(
                cls.SuraList__item,
                {
                  [cls.active]:
                    oneSurah.quran_order === currentSura?.quran_order,
                },
                [className],
              )}
              onClick={() => setSelectedSura(oneSurah)}
            >
              <p className={classNames(cls.SuraList__suraNumber, {}, [])}>
                {oneSurah.quran_order}
              </p>

              <p className={classNames(cls.SuraList__suraName, {}, [])}>
                {oneSurah.name_simple}
              </p>
            </div>
          ))
        : Array.from({ length: 20 }, (_, index) => index + 1).map(
            (el: number) => (
              <div style={{ marginTop: '10px' }}>
                <Skeleton
                  key={el}
                  className={cls.skeleton}
                  width="100%"
                  height={35}
                  border="3px"
                />
              </div>
            ),
          )}
    </div>
  );
});

export default SuraList;
