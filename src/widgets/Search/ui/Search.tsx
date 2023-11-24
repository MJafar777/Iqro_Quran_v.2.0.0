/* eslint-disable array-callback-return */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable consistent-return */
/* eslint-disable react/no-children-prop */
import React, {
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { Li } from '@/shared/ui/li/li';
import cls from './Search.module.scss';
import { SerchTile } from '@/shared/ui/SearchTitle';
import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';
import CloseIcon from '@/shared/assets/icons/close-icon.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '@/shared/ui/Stack';
import { SearchSmall } from '@/shared/assets/icons/sidebarSearch';
import { LAST_READ_SURAH } from '@/shared/const/localstorage';
import { surahNameList, surahNameListRu } from '@/shared/const/listOfSurah';
import { useSetSearchActions } from '@/entities/Main';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { MostSearchButton } from '@/shared/ui/MostSearchButton/MostSearchButton';
import { OneSuraInListSchema } from '@/pages/MainPage';

interface SearchProp {
  className?: string;
}

export const Search = memo((prop: SearchProp) => {
  const { t, i18n } = useTranslation();

  const { isRightsidebarActive, setIsRightsidebarActive } =
    useContext(ButtonsContext);
  const [searchSurah, setSearchSurah] = useState('');
  const [length, setLength] = useState(1);
  const [chapterCode, setChapterCode] = useState(1);

  const [dataWhichLang, setDataWhichLang] = useState(
    chapterCode >= 65 || chapterCode <= 90 ? surahNameList : surahNameListRu,
  );

  const dispatch = useAppDispatch();

  const { setSearchSidebar } = useSetSearchActions();

  const onToggle = () => {
    setIsRightsidebarActive(!isRightsidebarActive);
  };

  const getSearch = (e: any) => {
    setSearchSurah(e.target.value);
    setLength(searchSurah.length + 1);
    setChapterCode(e.target.value.toUpperCase().charCodeAt(0));
  };

  // @ts-ignore
  const getList = JSON.parse(localStorage.getItem(LAST_READ_SURAH));

  const filter = useCallback(() => {
    return dataWhichLang?.filter(
      (sura) =>
        sura.nom.toLocaleUpperCase().slice(0, length) ===
        searchSurah.toUpperCase(),
    );
  }, [dataWhichLang, length, searchSurah]);

  const result = filter();

  useEffect(() => {
    dispatch(setSearchSidebar({ search: searchSurah, data: [...result] }));
  }, [dispatch, filter, result, searchSurah, setSearchSidebar]);

  useEffect(() => {
    if (chapterCode >= 65 && chapterCode <= 90) setDataWhichLang(surahNameList);
    else setDataWhichLang(surahNameListRu);
  }, [chapterCode]);

  const itemsOfMostRead = useMemo(
    () =>
      (i18n.language === 'uz' ? surahNameList : surahNameListRu).map(
        (item, index) => {
          if (index < 5) {
            return (
              <Li
                search
                to="/reading"
                key={item.nom}
                suraId={item.nomer}
                numberOfOyat={item.oyatlarSoni}
              >
                {item.nom}
              </Li>
            );
          }
        },
      ),
    [i18n.language],
  );

  const itemsLastRead = useMemo(
    () =>
      // eslint-disable-next-line array-callback-return
      getList?.reverse()?.map((item: OneSuraInListSchema, index: number) => {
        if (index < 4) {
          return (
            <Li to="/reading" key={item?.id} suraId={item?.quran_order} search>
              {
                item?.translated_names?.filter(
                  (lang) => lang?.lang_id?.iso_code === i18n?.language,
                )[0]?.name
              }
            </Li>
          );
        }
      }),
    [getList, i18n.language],
  );

  const mostSearchSurah = useMemo(
    () =>
      result.map((oneSurah) => (
        <MostSearchButton
          className={classNames(cls.buttonMostSearch)}
          key={oneSurah.nom}
          children={oneSurah.nom}
          suraId={oneSurah.nomer}
          numberOfOyat={oneSurah.oyatlarSoni}
        />
      )),
    [result],
  );
  return (
    <div className={classNames(cls.wrapperListSearch)}>
      <HStack className={cls.headerOfSidebar} max>
        <SearchSmall className={cls.icon} />
        <input
          onChange={getSearch}
          type="text"
          placeholder={t('placeholderMainSearch')}
          className={cls.input}
        />

        <CloseIcon className={cls.closeBtn} onClick={onToggle} />
      </HStack>
      <HStack gap="8" className={cls.mostSearchButtonWrapper}>
        {mostSearchSurah}
      </HStack>
      <SerchTile>{t('mostSearch')}</SerchTile>
      {itemsOfMostRead}
      <SerchTile>{t('lastRead')}</SerchTile>
      {itemsLastRead}
      <SerchTile>{t('mentionList')}</SerchTile>
      {itemsOfMostRead}
    </div>
  );
});
