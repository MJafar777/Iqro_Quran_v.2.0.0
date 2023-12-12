import React, { memo } from 'react';
import cls from './SuraName.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import SuraName from './SuraName';

export enum SuraNameSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
  Mega = 'mega',
}

interface SuraNameProps {
  suraId: string;
  size?: SuraNameSize;
  hasSurahPrefix?: boolean;
}

const SuraNameContainer: React.FC<SuraNameProps> = memo(
  // eslint-disable-next-line react/prop-types
  ({ suraId, size = SuraNameSize.Medium, hasSurahPrefix = true }) => {
    console.log('surah');

    return (
      <div
        className={classNames(cls.suraNameContainer, {
          [cls.suraNameContainerSmall]: size === SuraNameSize.Small,
          [cls.suraNameContainerLarge]: size === SuraNameSize.Large,
          [cls.suraNameContainerMega]: size === SuraNameSize.Mega,
        })}
      >
        <SuraName id={suraId} />
        {hasSurahPrefix && <SuraName id="surah" />}
      </div>
    );
  },
);

export default SuraNameContainer;
