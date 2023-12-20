import { memo, ReactElement } from 'react';
import { useLocation } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MainLayout.module.scss';
import { Footer } from '@/widgets/Footer';
// import { Footer } from '@/widgets/Footer';

interface MainLayoutProps {
  className?: string;
  header: ReactElement;
  content: ReactElement;
  sidebar?: ReactElement;
  toolbar?: ReactElement;
}

export const MainLayout = memo((props: MainLayoutProps) => {
  const { className, content, toolbar, header, sidebar } = props;
  const path = useLocation();
  return (
    <div className={classNames(cls.MainLayout, {}, [className])}>
      <div className={cls.content}>{content}</div>
      {/* <div className={cls.sidebar}>{sidebar}</div> */}
      <div className={cls.rightbar}>
        <div className={cls.header}>{header}</div>
        <div className={cls.toolbar}>{toolbar}</div>
      </div>
      {path.pathname === '/reading' ? '' : <Footer />}
    </div>
  );
});
