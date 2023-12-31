import React, { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import cls from './OyatList.module.scss';
import clsSearch from '../../../shared/ui/searchInput/ui/Searchinput.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  useSelectedSuraValue,
  SurahPageOyah,
  getSelectedSura,
} from '@/entities/Surah';
import { getSelectedOyat } from '../model/selectors/getSelectedOyat';
import { useSelectedOyatActions } from '../model/slice/seletedOyatSlice';

import { Skeleton } from '@/shared/ui/Skeleton';
import { getError, getIsLoading } from '@/pages/MainPage';
import { getSelectedPage, useSelectedPageActions } from '@/entities/Page';

interface OyatListProps {
  className?: string;
}

const OyatList = memo(({ className }: OyatListProps) => {
  const { t } = useTranslation();
  const selectedSura = useSelectedSuraValue();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const currentSura = useSelector(getSelectedSura);

  const currentOyat = useSelector(getSelectedOyat);
  const { setSelectedtOyat } = useSelectedOyatActions();

  const currentPage = useSelector(getSelectedPage);
  const { setSelectedPage } = useSelectedPageActions();

  const [searchOyatNumber, setSearchOyatNumber] = useState<string>('');

  const handleClickOyat = (oyatNumber: number) => {
    setSelectedtOyat(oyatNumber);
  };

  useEffect(() => {
    setSelectedtOyat(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSura]);

  useEffect(() => {
    SurahPageOyah[currentSura.quran_order]?.forEach((element: any) => {
      if (
        Number(element.page) ===
        Number(currentSura.pages[0] + currentPage.pageNumber - 1)
      ) {
        setSelectedtOyat(Number(element.start));
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  useEffect(() => {
    SurahPageOyah[currentSura.quran_order]?.forEach((element: any) => {
      if (
        Number(element.start) <= currentOyat.oyatNumber &&
        Number(element.end) >= currentOyat.oyatNumber
      ) {
        setSelectedPage(element.page - currentSura.pages[0] + 1);
      }
    });

    const selectedElement2 = document.getElementById(
      `${currentOyat.oyatNumber}oyat`,
    );

    if (selectedElement2) {
      selectedElement2.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentOyat.oyatNumber]);

  const handleSearchOyatInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchOyatNumber(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder={t('oyat')}
        value={searchOyatNumber}
        onChange={handleSearchOyatInputChange}
        className={classNames(clsSearch.SearchInput, {}, [className])}
      />

      <div className={classNames(cls.OyatList, {}, [className])}>
        {!isLoading && !error
          ? Array.from(
              { length: selectedSura.count_verse },
              (_, index) => index + 1,
            )
              .filter((item) =>
                searchOyatNumber
                  ? item.toString().includes(searchOyatNumber)
                  : true,
              )
              .map((element: number) => (
                <div
                  id={`${element}oyat`}
                  key={element}
                  onClick={() => handleClickOyat(element)}
                  className={classNames(
                    cls.OyatList__item,
                    { [cls.active]: element === currentOyat.oyatNumber },
                    [className],
                  )}
                >
                  <p className={classNames(cls.OyatList__oyatNumber, {}, [])}>
                    {element}
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

export default OyatList;
