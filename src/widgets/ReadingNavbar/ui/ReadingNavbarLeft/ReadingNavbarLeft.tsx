import React, { memo, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ReadingNavbarLeft.module.scss';
import { useSelectedSuraValue } from '@/entities/Surah';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';

interface ReadingNavbarLeftProps {
  className?: string;
}

const ReadingNavbarLeft = memo(({ className }: ReadingNavbarLeftProps) => {
  const { i18n } = useTranslation();

  const currentSura = useSelectedSuraValue();
  const { readingSidebarActive, setReadingSidebarActive } =
    useContext(ButtonsContext);

  return (
    <div
      onClick={() =>
        setReadingSidebarActive &&
        setReadingSidebarActive(!readingSidebarActive)
      }
      className={classNames(cls.ReadingNavbarLeft, {}, [className])}
    >
      <p>
        {
          currentSura?.translated_names?.find(
            (name: { lang_id: { iso_code: string } }) =>
              name.lang_id?.iso_code === i18n.language,
          )?.name
        }
      </p>

      <ArrowIcon
        className={classNames(
          cls.collapseBtn,
          { [cls.collapsed]: readingSidebarActive },
          [className],
        )}
      />
    </div>
  );
});

export default ReadingNavbarLeft;
