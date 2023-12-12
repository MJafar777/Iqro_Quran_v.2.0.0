/* eslint-disable camelcase */
import React, { memo, useContext } from 'react';
import { useSelector } from 'react-redux';
import cls from './ListOfTafsir.module.scss';
import { OneTafsirCard } from '../OneTafsirCard/OneTafsirCard';
import SurahInfoAndAudioForTafsir from '@/shared/ui/SurahInfoAndAudioForTafsir/SurahInfoAndAudioForTafsir';
import useQcfFont from '@/shared/lib/hooks/useQcfFont/useQcfFont';
// import { Verse } from '@/entities/ReadingArabic';
import { OneTafsirCardSkleton } from '../OneTafsirCard/OneTafsirCardSkleton';
import { AudioPlayer } from '@/shared/ui/AudioPlayer/AudioPlayer';
import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';
import { getDataTafsir, isLoading } from '@/pages/Tafsir';
import { getSelectedSura } from '@/entities/Surah';

interface ListOfTafsirProp {
  className?: string;
}

export const ListOfTafsir = memo((prop: ListOfTafsirProp) => {
  const { audioUrl, isPlay } = useContext(ButtonsContext);
  const getIsLoading = useSelector(isLoading);
  const dataOfTafsir = useSelector(getDataTafsir);
  const surahId = useSelector(getSelectedSura);

  // @ts-ignore
  useQcfFont(dataOfTafsir![surahId?.quran_order]?.data?.data);

  const content = (
    <div className={cls.listOfTafsir}>
      <SurahInfoAndAudioForTafsir />

      {dataOfTafsir![surahId?.quran_order]?.data?.data?.map((oneVerse) => {
        return <OneTafsirCard data={oneVerse} />;
      })}

      {getIsLoading ? <OneTafsirCardSkleton /> : ''}

      {audioUrl ? <AudioPlayer src={audioUrl} /> : ''}
    </div>
  );

  return content;
});
// import React, { memo, useContext } from 'react';
// import { useSelector } from 'react-redux';
// import { List } from 'react-virtualized'; // Import List component
// import cls from './ListOfTafsir.module.scss';
// import { OneTafsirCard } from '../OneTafsirCard/OneTafsirCard';
// import SurahInfoAndAudioForTafsir from '@/shared/ui/SurahInfoAndAudioForTafsir/SurahInfoAndAudioForTafsir';
// import useQcfFont from '@/shared/lib/hooks/useQcfFont/useQcfFont';
// import { OneTafsirCardSkleton } from '../OneTafsirCard/OneTafsirCardSkleton';
// import { AudioPlayer } from '@/shared/ui/AudioPlayer/AudioPlayer';
// import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';
// import { getDataTafsir, isLoading } from '@/pages/Tafsir';
// import { getSelectedSura } from '@/entities/Surah';

// interface ListOfTafsirProp {
//   className?: string;
// }

// export const ListOfTafsir = memo((prop: ListOfTafsirProp) => {
//   const { audioUrl, isPlay } = useContext(ButtonsContext);
//   const getIsLoading = useSelector(isLoading);
//   const dataOfTafsir = useSelector(getDataTafsir);
//   const surahId = useSelector(getSelectedSura);

//   // @ts-ignore
//   useQcfFont(dataOfTafsir![surahId?.quran_order]?.data?.data);

//   // Function to render each row
//   const rowRenderer = ({
//     key,
//     index,
//     style,
//   }: {
//     key: string;
//     index: number;
//     style: React.CSSProperties;
//   }) => {
//     const oneVerse = dataOfTafsir![surahId?.quran_order]?.data?.data[index];
//     // @ts-ignore
//     return <OneTafsirCard key={key} data={oneVerse} />;
//   };

//   const content = (
//     <div className={cls.listOfTafsir}>
//       <SurahInfoAndAudioForTafsir />

//       {/* Replace the map function with the List component */}
//       <List
//         style={{
//           width: '100%',
//           height: '100vh',
//         }}
//         width={1200} // Set the width of the list
//         height={700} // Set the height of the list
//         rowCount={dataOfTafsir![surahId?.quran_order]?.data?.data.length || 0} // Set the total number of rows
//         rowHeight={400} // Set the height of each row
//         rowRenderer={rowRenderer} // Pass the row rendering function
//       />

//       {getIsLoading ? <OneTafsirCardSkleton /> : ''}

//       <AudioPlayer src={audioUrl} />
//     </div>
//   );

//   return content;
// });
