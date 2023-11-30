import React, { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import cls from './OyatReadList.module.scss';
import clsSearch from '../../../shared/ui/searchInput/ui/Searchinput.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SurahPageOyah } from '@/entities/Surah';
import { getSelectedOyatRead } from '../model/selectors/getSelectedOyatRead';
import { useSelectedOyatReadActions } from '../model/slice/seletedOyatReadSlice';

import { Skeleton } from '@/shared/ui/Skeleton';
import { getError, getIsLoading } from '@/pages/MainPage';
import { getSelectedPage } from '@/entities/Page';
import { useSelectedPageReadActions } from '@/entities/PageRead';
import {
  getSelectedSuraRead,
  useSelectedSuraReadValue,
} from '@/entities/SurahRead';

interface OyatReadListProps {
  className?: string;
}

const OyatReadList = memo(({ className }: OyatReadListProps) => {
  const { t } = useTranslation();
  const selectedSuraRead = useSelectedSuraReadValue();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const currentSuraRead = useSelector(getSelectedSuraRead);

  const currentOyatRead = useSelector(getSelectedOyatRead);
  const { setSelectedReadOyat } = useSelectedOyatReadActions();

  const currentPageRead = useSelector(getSelectedPage);
  const { setSelectedPageRead } = useSelectedPageReadActions();

  const [searchOyatNumber, setSearchOyatNumber] = useState<string>('');

  const handleClickOyat = (oyatNumber: number) => {
    setSelectedReadOyat(oyatNumber);
  };

  useEffect(() => {
    setSelectedReadOyat(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSuraRead]);

  useEffect(() => {
    SurahPageOyah[currentSuraRead.quran_order]?.forEach((element: any) => {
      if (
        Number(element.page) ===
        Number(currentSuraRead.pages[0] + currentPageRead.pageNumber - 1)
      ) {
        setSelectedReadOyat(Number(element.start));
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPageRead]);

  // useEffect(() => {
  //   SurahPageOyah[currentSuraRead.quran_order]?.forEach((element: any) => {
  //     if (
  //       Number(element.start) <= currentOyatRead.oyatNumber &&
  //       Number(element.end) >= currentOyatRead.oyatNumber
  //     ) {
  //       setSelectedPageRead(element.page - currentSuraRead.pages[0] + 1);
  //     }
  //   });

  //   const selectedElement2 = document.getElementById(
  //     `${currentOyatRead.oyatNumber}oyat`,
  //   );

  //   if (selectedElement2) {
  //     selectedElement2.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //   }

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [currentOyatRead.oyatNumber]);

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

      <div className={classNames(cls.OyatReadList, {}, [className])}>
        {!isLoading && !error
          ? Array.from(
              { length: selectedSuraRead.count_verse },
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
                    cls.OyatReadList__item,
                    { [cls.active]: element === currentOyatRead.oyatNumber },
                    [className],
                  )}
                >
                  <p
                    className={classNames(cls.OyatReadList__oyatNumber, {}, [])}
                  >
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

export default OyatReadList;
