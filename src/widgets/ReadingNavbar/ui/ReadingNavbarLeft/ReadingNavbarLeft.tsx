import React, { memo, useContext } from 'react';
import cls from './ReadingNavbarLeft.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';
import { useSelectedSuraValue } from '@/entities/Surah';

interface ReadingNavbarLeftProps {
  className?: string;
}

const ReadingNavbarLeft = memo(({ className }: ReadingNavbarLeftProps) => {
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
      <p>{currentSura.nameLotin}</p>

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
