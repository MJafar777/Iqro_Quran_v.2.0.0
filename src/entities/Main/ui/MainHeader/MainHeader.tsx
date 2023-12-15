/* eslint-disable max-len */
/* eslint-disable react/no-children-prop */
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import iconSearch from '../../../../shared/assets/icons/icon-Search.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MainHeader.tsx.module.scss';
import oyat from '../../../../shared/assets/icons/oyat.svg';
import { Icon } from '@/shared/ui/Icon';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text, TextAlign } from '@/shared/ui/Text';
import { Button, ButtonSize } from '@/shared/ui/Button/Button';
import { MostSearchButton } from '@/shared/ui/MostSearchButton/MostSearchButton';
import { getListOfSurahs } from '@/pages/MainPage';
import {
  // Fotiha,
  surahNameList,
  surahNameListRu,
} from '@/shared/const/listOfSurah';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSetSearchActions } from '../../model/slice/sliceSearch';
// import { LAST_READ_SURAH } from '@/shared/const/localstorage';

interface MainHeaderComponentProps {
  className?: string;
}

const arrMostSearchSurah = [
  { name: 'Fatihah', nameKr: 'Фатиҳаҳ', suraId: 1, numberOfOyat: 7 },
  { name: 'Mulk', nameKr: 'Мулк', suraId: 67, numberOfOyat: 30 },
  { name: 'Ya-Sin', nameKr: 'Я-Син', suraId: 36, numberOfOyat: 83 },
  { name: 'Kahf', nameKr: 'Каҳф', suraId: 18, numberOfOyat: 110 },
  { name: "Waqi'ah", nameKr: 'Вақиъаҳ', suraId: 56, numberOfOyat: 96 },
];

export const MainHeader = memo((prop: MainHeaderComponentProps) => {
  const { className } = prop;
  const { t, i18n } = useTranslation();
  const [searchSurah, setSearchSurah] = useState('');
  const [length, setLength] = useState(1);
  const [chapterCode, setChapterCode] = useState(1);
  // localStorage.setItem(LAST_READ_SURAH, JSON.stringify([Fotiha]));
  const [dataWhichLang, setDataWhichLang] = useState(
    chapterCode >= 65 || chapterCode <= 90 ? surahNameList : surahNameListRu,
  );
  const dispatch = useAppDispatch();
  const { setSearch } = useSetSearchActions();
  const getSearch = (e: any) => {
    setSearchSurah(e.target.value);
    setLength(searchSurah.length + 1);
    setChapterCode(e.target.value.toUpperCase().charCodeAt(0));
  };

  useEffect(() => {
    if (chapterCode >= 65 && chapterCode <= 90) setDataWhichLang(surahNameList);
    else setDataWhichLang(surahNameListRu);
  }, [chapterCode]);

  const listOfSurah = useSelector(getListOfSurahs);
  const filter = useCallback(() => {
    return dataWhichLang?.filter(
      (sura) =>
        sura.nom.toLocaleUpperCase().slice(0, length) ===
        searchSurah.toUpperCase(),
    );
  }, [dataWhichLang, length, searchSurah]);

  const result = filter();

  useEffect(() => {
    dispatch(setSearch({ search: searchSurah, data: [...result] }));
  }, [dispatch, filter, result, searchSurah, setSearch]);

  const mostSearchSurah = useMemo(
    () =>
      arrMostSearchSurah.map((oneSurah) => (
        <MostSearchButton
          key={oneSurah.suraId}
          children={i18n.language === 'uz' ? oneSurah.name : oneSurah.nameKr}
          suraId={oneSurah.suraId}
          numberOfOyat={oneSurah.numberOfOyat}
        />
      )),
    [i18n.language],
  );

  return (
    <div className={classNames(cls.MainHeader)}>
      <VStack align="center">
        <Icon Svg={oyat} className={cls.icon} />
        <Text
          className={cls.text}
          align={TextAlign.CENTER}
          text={t('titleHeader')}
        />
        <HStack className={cls.containerOfIput} gap="8" justify="between">
          <Icon Svg={iconSearch} className={cls.search} />
          <input
            className={cls.input}
            placeholder={t('placeholderMainSearch')}
            onChange={(e) => getSearch(e)}
          />
          <Button size={ButtonSize.M} className={cls.buttons}>
            {t('Qidirish')}
          </Button>
        </HStack>
        <HStack justify="between" gap="16">
          {' '}
          {mostSearchSurah}
        </HStack>
      </VStack>
    </div>
  );
});
