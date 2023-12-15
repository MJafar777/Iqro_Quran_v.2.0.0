import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './OrderWrapper.module.scss';

interface OrderWrapperProp {
  className?: string;
  orderOfOyat: number;
}

export const OrderWrapper = (prop: OrderWrapperProp) => {
  const { className, orderOfOyat } = prop;

  return (
    <div className={classNames(cls.parentOrder, {}, [className])}>
      <div className={classNames(cls.orderWrapper, {}, [className])}>
        <pre>{orderOfOyat}</pre>
      </div>
    </div>
  );
};
