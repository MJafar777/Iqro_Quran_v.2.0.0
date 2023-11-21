/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';

import { Icon } from '../Icon';
import cls from './SurahInfoAndAudio.module.scss';
import { infosurah, playBtn } from '@/shared/assets/infoSurah';
import { classNames } from '@/shared/lib/classNames/classNames';

const SurahInfoAndAudio = () => {
  return (
    <div className={classNames(cls.WrapperSurah, {}, [])}>
      <Link
        className={classNames(cls.InfoSurahPageWrapper, {}, [])}
        to="/infoSurah/1"
      >
        <div className={classNames(cls.InfoSurahPage, {}, [])}>
          <Icon Svg={infosurah} width={20} />
          <pre> </pre>Sura haqida ma'lumot
        </div>
      </Link>

      <div className={classNames(cls.listening, {}, [])}>
        <Icon Svg={playBtn} width={20} />
        <pre> </pre>Tinglash
      </div>
    </div>
  );
};

export default SurahInfoAndAudio;
