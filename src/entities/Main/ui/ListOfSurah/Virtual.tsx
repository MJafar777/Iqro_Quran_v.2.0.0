import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { FixedSizeList as List } from 'react-window';
import { AutoSizer } from 'react-virtualized';
import cls from './ListOfSuras.module.scss';
import OneItemSurah from '../OneSurahItem/OneItemSurah';
import { classNames } from '@/shared/lib/classNames/classNames';
import { OneItemSurahSkleton } from '../OneSurahItem/OneItemSurahSkleton';
import { HStack } from '@/shared/ui/Stack';

interface ListOfSurahProp {
  className?: string;
  target?: HTMLAttributeAnchorTarget;
  data?: any;
}

export const Virtual = memo((props: ListOfSurahProp) => {
  const { t, i18n } = useTranslation();
  const { data, className, target } = props;
  const itemsPerRow = 3;
  // eslint-disable-next-line no-unsafe-optional-chaining
  const rowCount = Math.ceil(data?.length / itemsPerRow);
  console.log(rowCount);

  const skeletonList = Array.from({ length: 18 }, () => (
    <OneItemSurahSkleton />
  ));

  // @ts-ignore
  const rowRender = ({ index, style }) => {
    const fromIndex = index * itemsPerRow;
    const toIndex = Math.min(fromIndex + itemsPerRow, data?.length);
    //  const contentEachRow=
    return (
      <HStack
        className={classNames(cls.surahList, {}, [className])}
        // gap="16"
        style={{
          flexWrap: 'wrap',
          marginTop: '30px',
          justifyContent: 'center',
        }}
        max
        key={data?.[fromIndex]?.quran_order}
      >
        <OneItemSurah
          title={
            data?.[fromIndex]?.translated_names.filter(
              (lang: { lang_id: { iso_code: string } }) =>
                lang.lang_id.iso_code === i18n.language,
            )[0].name
          }
          key={fromIndex}
          oneSurah={data?.[fromIndex]}
          numberOfOyat={data?.[fromIndex]?.count_verse}
          orderOfSura={data?.[fromIndex]?.quran_order}
          arabic={`00${data?.[fromIndex]?.quran_order}`}
          className={classNames(cls.data?.[index])}
        />
        <OneItemSurah
          title={
            data?.[fromIndex + 1]?.translated_names.filter(
              (lang: { lang_id: { iso_code: string } }) =>
                lang.lang_id.iso_code === i18n.language,
            )[0].name
          }
          oneSurah={data?.[fromIndex + 1]}
          numberOfOyat={data?.[fromIndex + 1]?.count_verse}
          orderOfSura={data?.[fromIndex + 1]?.quran_order}
          arabic={`00${data?.[fromIndex + 1]?.quran_order}`}
          className={classNames(cls.data?.[fromIndex + 1])}
        />
        {toIndex !== 114 ? (
          <OneItemSurah
            title={
              data?.[toIndex]?.translated_names.filter(
                (lang: { lang_id: { iso_code: string } }) =>
                  lang.lang_id.iso_code === i18n.language,
              )[0].name
            }
            oneSurah={data?.[toIndex]}
            numberOfOyat={data?.[toIndex]?.count_verse}
            orderOfSura={data?.[toIndex]?.quran_order}
            arabic={`00${data?.[toIndex]?.quran_order}`}
            className={classNames(cls.data?.[toIndex])}
          />
        ) : (
          ''
        )}
      </HStack>
    );
  };

  return (
    <AutoSizer>
      {({ height = '100vh', width = '100vw' }) => (
        <List height={height} width={width} itemCount={114} itemSize={74}>
          {rowRender}
        </List>
      )}
    </AutoSizer>
  );
});
