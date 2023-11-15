import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './BookBox.module.scss';

interface BookBoxProps {
  className?: string;
  imgUrl?: string;
}

const BookBox = ({ className, imgUrl }: BookBoxProps) => {
  return (
    <div className={classNames(cls.BookContainer, {}, [className])}>
      <img
        src={imgUrl}
        alt="Reading book"
        className={classNames(cls.BookContainer__box, {}, [className])}
      />
    </div>
  );
};

export default BookBox;
