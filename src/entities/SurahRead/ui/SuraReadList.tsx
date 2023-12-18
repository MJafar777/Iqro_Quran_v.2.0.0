import { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import cls from './SuraReadList.module.scss';
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
import { useSelectedSuraReadActions } from '../model/slice/selectedSuraReadSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getSelectedSuraRead } from '../model/selectors/getSelectedSuraRead/getSelectedSuraRead';
import { useSelectedPageReadActions } from '@/entities/PageRead';

interface SuraReadListProps {
  className?: string;
}

const SuraReadList = memo(({ className }: SuraReadListProps) => {
  const dispatch = useAppDispatch();
  const { t, i18n } = useTranslation();
  const currentSuraRead = useSelector(getSelectedSuraRead);
  const { setSelectedSuraRead } = useSelectedSuraReadActions();

  const { setSelectedPageRead } = useSelectedPageReadActions();

  const listOfSurah = useSelector(getListOfSurahs);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  // | ---------- Input Filter (Sura name) ---------- | //
  const [searchSuraName, setSearchSuraName] = useState<string>('');

  useEffect(() => {
    if (!listOfSurah) {
      dispatch(fetchSurahlesList({}));
    }

    if (!currentSuraRead.id && listOfSurah) {
      setSelectedSuraRead(listOfSurah[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, listOfSurah]);

  useEffect(() => {
    setSelectedPageRead(currentSuraRead.pages[0]);

    const selectedElement = document.getElementById(
      `${currentSuraRead?.quran_order}sura`,
    );

    if (selectedElement) {
      selectedElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSuraRead]);

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchSuraName(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder={t('searchSura')}
        onChange={handleSearchInputChange}
        className={classNames(clsSearch.SearchInput, {}, [className])}
      />

      <div className={classNames(cls.SuraReadList, {}, [className])}>
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
                  (name) => name.lang_id?.iso_code === i18n.language,
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
                    cls.SuraReadList__item,
                    {
                      [cls.active]:
                        oneSurah.quran_order === currentSuraRead?.quran_order,
                    },
                    [className],
                  )}
                  onClick={() => setSelectedSuraRead(oneSurah)}
                >
                  <p
                    className={classNames(cls.SuraReadList__suraNumber, {}, [])}
                  >
                    {oneSurah.quran_order}
                  </p>

                  <p
                    className={classNames(
                      cls.SuraReadList__suraName,
                      { [cls.top]: Number(index) === 10 },
                      [],
                    )}
                  >
                    {
                      oneSurah.translated_names.find(
                        (name) => name.lang_id?.iso_code === i18n.language,
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

export default SuraReadList;
