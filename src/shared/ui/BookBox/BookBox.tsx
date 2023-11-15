import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './BookBox.module.scss';

interface BookBoxProps {
  className?: string;
  imgUrl?: string;
}

const BookBox = ({ className, imgUrl }: BookBoxProps) => {
  return (
    <img
      src={imgUrl}
      alt="Reading book"
      className={classNames(cls.BookContainer, {}, [className])}
    />
  );
};

export default BookBox;
