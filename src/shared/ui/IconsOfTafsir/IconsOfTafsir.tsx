import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import cls from './IconsOfTafsir.module.scss';
import { Book2 } from '@/shared/assets/icons/SidebarListOfPages';
import { Play } from '@/shared/assets/iconsListening';
import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';
import { getListOfSurahs } from '@/pages/MainPage';
import { useSelectedSuraActions } from '@/entities/Surah';

interface IconsOfTafsirProp {
  verse?: string;
}

export const IconsOfTafsir = (prop: IconsOfTafsirProp) => {
  const { verse } = prop;

  // eslint-disable-next-line no-unsafe-optional-chaining
  const chapterId = parseInt(verse?.split(':')[0] || "1", 10);
  console.log(chapterId, 'verseeeee');

  const { setVerseKey, setIsPlay } = useContext(ButtonsContext);

  const navigate = useNavigate();

  const { setSelectedSura } = useSelectedSuraActions();

  const listOfSurahs = useSelector(getListOfSurahs);

  const handleAudioPlay = () => {
    if (verse) {
      setIsPlay(true);
      setVerseKey(verse);
    }
  };

  const toggleOneItemSurah = (id: number) => {
    const data = listOfSurahs?.filter((sura) => sura.quran_order === id)[0];

    if (data) {
      setSelectedSura(data);
      navigate('/reading');
    }
  };

  return (
    <div className={cls.iconsOfTafsir}>
      <p className={cls.verse}>{verse || '1:1'}</p>
      <div className={cls.iconWrapper} onClick={handleAudioPlay}>
        <Play className={cls.playIcon} />
      </div>
      <div
        className={cls.iconWrapper}
        onClick={() => toggleOneItemSurah(chapterId || 1)}
      >
        <Book2 className={cls.playIcon} />
      </div>
    </div>
  );
};
