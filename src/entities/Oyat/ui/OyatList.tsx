import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import cls from './OyatList.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  useSelectedSuraValue,
  SurahPageOyah,
  getSelectedSura,
} from '@/entities/Surah';
import { useSelectedOyatActions } from '../model/slice/seletedOyatSlice';
import { getSelectedOyat } from '../model/selectors/getSelectedOyat';

import { getError, getIsLoading } from '@/pages/MainPage';
import { Skeleton } from '@/shared/ui/Skeleton';
import { getSelectedPage } from '@/entities/Page';

interface OyatListProps {
  className?: string;
}

const OyatList = ({ className }: OyatListProps) => {
  const selectedSura = useSelectedSuraValue();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const currentSura = useSelector(getSelectedSura);

  const currentOyat = useSelector(getSelectedOyat);
  const { setSelectedtOyat } = useSelectedOyatActions();

  const currentPage = useSelector(getSelectedPage);

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

  return (
    <div className={classNames(cls.OyatList, {}, [className])}>
      {!isLoading && !error
        ? Array.from(
            { length: selectedSura.count_verse },
            (_, index) => index + 1,
          ).map((element: number) => (
            <div
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
  );
};

export default OyatList;
