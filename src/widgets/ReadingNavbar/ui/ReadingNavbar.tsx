import { memo } from 'react';
import cls from './ReadingNavbar.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import ReadingNavbarLeft from './ReadingNavbarLeft/ReadingNavbarLeft';
import ReadingNavbarRgiht from './ReadingNavbarRight/ReadingNavbarRight';
import ReadingNavbarProgress from './ReadingNavbarProgress/ReadingNavbarProgress';
import ReadingNavbarCenter from './ReadingNavbarCenter/ReadingNavbarCenter';

interface ReadingNavbarProps {
  className?: string;
}

const ReadingNavbar = memo(({ className }: ReadingNavbarProps) => {
  return (
    <div className={classNames(cls.ReadingNavbar, {}, [className])}>
      <div className={cls.ReadingNavbar__content}>
        <ReadingNavbarLeft />

        <ReadingNavbarCenter />

        <ReadingNavbarRgiht />
      </div>

      <ReadingNavbarProgress />
    </div>
  );
});

export default ReadingNavbar;
