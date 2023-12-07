import React, { useContext } from 'react';
import cls from './IconsOfTafsir.module.scss';
import { Book2 } from '@/shared/assets/icons/SidebarListOfPages';
import { Play } from '@/shared/assets/iconsListening';
import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';

interface IconsOfTafsirProp {
  verse?: string;
}

export const IconsOfTafsir = (prop: IconsOfTafsirProp) => {
  const { verse } = prop;
  const { setVerseKey, setIsPlay } = useContext(ButtonsContext);
  const [chapter, verseNumber] = verse ? verse.split(':') : ['1', '1'];

  const handleAudioPlay = () => {
    if (verse) setVerseKey(verse);
    setIsPlay(true);
    console.log(verse);
  };

  return (
    <div className={cls.iconsOfTafsir}>
      <p className={cls.verse}>{verse || '1:1'}</p>
      <div className={cls.iconWrapper} onClick={handleAudioPlay}>
        <Play className={cls.playIcon} />
      </div>
      <div className={cls.iconWrapper}>
        <Book2 className={cls.playIcon} />
      </div>
    </div>
  );
};
