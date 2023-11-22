import { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import cls from './SuraList.module.scss';
import clsSearch from '../../../shared/ui/searchInput/ui/Searchinput.module.scss';
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

  // | ---------- Input Filter (Sura name) ---------- | //
  const [searchSuraName, setSearchSuraName] = useState<string>('');

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

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchSuraName(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Sura qidirish"
        onChange={handleSearchInputChange}
        className={classNames(clsSearch.SearchInput, {}, [className])}
      />

      <div className={classNames(cls.SuraList, {}, [className])}>
        {!isLoading && !error
          ? listOfSurah
              ?.map((item: OneSuraInListSchema, index: number) => ({
                ...item,
                suraNumber: index + 1,
              }))
              ?.filter((item: OneSuraInListSchema): boolean | undefined => {
                if (!searchSuraName) return true;

                const suraNumber: string = item.quran_order.toString();

                const suraName = item.translated_names.find(
                  (name) => name.lang_id?.iso_code === 'uz',
                )?.name;

                const searchSuraNameText = searchSuraName.toLowerCase();

                return (
                  suraNumber.includes(searchSuraNameText) ||
                  suraName?.toLowerCase().includes(searchSuraNameText)
                );
              })
              ?.map((oneSurah: OneSuraInListSchema, index: number) => (
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

                  <p
                    className={classNames(
                      cls.SuraList__suraName,
                      { [cls.top]: Number(index) === 10 },
                      [],
                    )}
                  >
                    {
                      oneSurah.translated_names.find(
                        (name) => name.lang_id?.iso_code === 'uz',
                      )?.name
                    }
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
    </>
  );
});

export default SuraList;
