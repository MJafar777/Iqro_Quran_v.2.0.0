/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Icon } from '../Icon';
import cls from './SurahInfoAndAudio.module.scss';
import { infosurah, playBtn } from '@/shared/assets/infoSurah';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getSelectedSura } from '@/entities/Surah';

const SurahInfoAndAudio = () => {
  const data = useSelector(getSelectedSura);
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.WrapperSurah, {}, [])}>
      <Link
        className={classNames(cls.InfoSurahPageWrapper, {}, [])}
        to={`/infoSurah/${data.quran_order}`}
      >
        <div className={classNames(cls.InfoSurahPage, {}, [])}>
          <Icon Svg={infosurah} width={20} />
          <pre> </pre>
          {t("Sura haqida ma'lumot")}
        </div>
      </Link>

      <div className={classNames(cls.listening, {}, [])}>
        <Icon Svg={playBtn} width={20} />
        <pre> </pre>
        {t('Tinglash')}
      </div>
    </div>
  );
};

export default SurahInfoAndAudio;
