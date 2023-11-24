// /* eslint-disable react/jsx-no-duplicate-props */
// import { useTranslation } from 'react-i18next';
// import { HTMLAttributeAnchorTarget, memo } from 'react';
// import { List, ListRowProps, WindowScroller } from 'react-virtualized';
// import cls from './ListOfSuras.module.scss';
// import { OneSuraInListSchema } from '@/pages/MainPage';
// import OneItemSurah from '../OneSurahItem/OneItemSurah';
// import { classNames } from '@/shared/lib/classNames/classNames';
// // import { TextSize } from '@/shared/ui/Text';
// import { OneItemSurahSkleton } from '../OneSurahItem/OneItemSurahSkleton';
// import { HStack } from '@/shared/ui/Stack';

// interface ListOfSurahProp {
//   className?: string;
//   articles?: OneSuraInListSchema[];
//   isLoading?: boolean;
//   target?: HTMLAttributeAnchorTarget;
//   data?: any;
//   error?: string;
// }

// export const Virtual = memo((props: ListOfSurahProp) => {
//   const { className, articles, isLoading, target, data, error } = props;
//   const { t, i18n } = useTranslation();

//   const itemsPerRow = 12;
//   // eslint-disable-next-line no-unsafe-optional-chaining
//   const rowCount = Math.ceil(data?.length / itemsPerRow);

//   const skeletonList = Array.from({ length: 18 }, () => (
//     <OneItemSurahSkleton />
//   ));

//   const rowRender = ({ index, isScrolling, key, style }: ListRowProps) => {
//     const items = [];
//     const fromIndex = index * itemsPerRow;
//     const toIndex = Math.min(fromIndex + itemsPerRow, data?.length);

//     for (let i = fromIndex; i < toIndex; i += 1) {
//       items.push(
//         <OneItemSurah
//           oneSurah={data?.[i]}
//           key={`str${i}`}
//           title={
//             data[i]?.translated_names.filter(
//               (lang: any) => lang.lang_id.iso_code === i18n.language,
//             )[0].name
//           }
//           numberOfOyat={data?.[i].count_verse}
//           orderOfSura={data?.[i].quran_order}
//           arabic={`00${data?.[i].quran_order}`}
//           className={classNames(cls.oneSurah)}
//         />,
//       );
//     }

//     return (
//       <HStack
//         className={classNames(cls.surahList, {}, [className])}
//         // gap="16"
//         style={{
//           flexWrap: 'wrap',
//           marginTop: '30px',
//           justifyContent: 'center',
//         }}
//         key={key}
//       >
//         {items}
//       </HStack>
//     );
//   };

//   if (!isLoading && !data?.length) {
//     return <div>Errro</div>;
//   }

//   // scrollElement={document.getElementById(PAGE_ID) as Element}
//   return (
//     <WindowScroller>
//       {({
//         height,
//         width,
//         registerChild,
//         onChildScroll,
//         isScrolling,
//         scrollTop,
//       }) => (
//         <div
//           //@ts-ignore
//           ref={registerChild}
//           // className={classNames(cls.ArticleList, {}, [className, cls[view]])}
//         >
//           <List
//             height={height ?? 700}
//             rowCount={rowCount}
//             rowHeight={700}
//             rowRenderer={rowRender}
//             width={width ? width - 80 : 700}
//             autoHeight
//             onScroll={onChildScroll}
//             isScrolling={isScrolling}
//             scrollTop={scrollTop}
//           />
//           {isLoading && skeletonList}
//         </div>
//       )}
//     </WindowScroller>
//   );
// });
import React from 'react'

export const Virtual = () => {
  return (
    <div>Virtual</div>
  )
}

