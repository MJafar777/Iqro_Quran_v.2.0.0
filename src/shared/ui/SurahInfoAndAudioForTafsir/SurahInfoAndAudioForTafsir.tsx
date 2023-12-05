/* eslint-disable react/no-unescaped-entities */
import React, { memo, useContext } from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { Icon } from '../Icon';
import cls from './SurahInfoAndAudioForTafsir.module.scss';
import { infosurah, playBtn } from '@/shared/assets/infoSurah';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getSelectedSura } from '@/entities/Surah';
import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';
import { Pause } from '@/shared/assets/iconsListening';

const SurahInfoAndAudio = () => {
  const data = useSelector(getSelectedSura);
  const { isPlay, setIsPlay } = useContext(ButtonsContext);

  return (
    <div className={classNames(cls.WrapperSurah, {}, [])}>
      <Link
        className={classNames(cls.InfoSurahPageWrapper, {}, [])}
        to={`/infoSurah/${data.quran_order}`}
      >
        <div className={classNames(cls.InfoSurahPage, {}, [])}>
          <Icon Svg={infosurah} width={20} />
          <pre> </pre>Sura haqida ma'lumot
        </div>
      </Link>

      <div
        onClick={() => setIsPlay(!isPlay)}
        className={classNames(cls.listening, {}, [])}
      >
        {isPlay ? <Pause /> : <Icon Svg={playBtn} width={20} />}
        <pre> </pre>Tinglash
      </div>
    </div>
  );
};

export default memo(SurahInfoAndAudio);
