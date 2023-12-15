import { useEffect, useRef, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './BookBox.module.scss';
// import BookBoxSkeleton from '../BookBoxSkeleton/BookBoxSkeleton';

interface BookBoxProps {
  className?: string;
  imgUrl?: string;
}
const useImageLoaded = (): [
  React.RefObject<HTMLImageElement>,
  boolean,
  () => void,
] => {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  const onLoad = () => {
    setLoaded(true);
  };

  useEffect(() => {
    const currentRef = ref.current;

    if (currentRef && currentRef.complete && !loaded) {
      onLoad();
    }
  }, [loaded]);

  return [ref, loaded, onLoad];
};

const BookBox = ({ className, imgUrl }: BookBoxProps) => {
  const [ref, loaded, onLoad] = useImageLoaded();

  return (
    <div>
      {/* {!loaded ? (
        <BookBoxSkeleton />
      ) : ( */}
      <img
        src={imgUrl}
        alt="Reading book"
        className={classNames(cls.BookContainer, {}, [className])}
        ref={ref}
        onLoad={onLoad}
      />
      {/* )} */}
    </div>
  );
};

export default BookBox;
