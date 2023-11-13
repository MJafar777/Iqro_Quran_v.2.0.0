import { classNames } from '@/shared/lib/classNames/classNames';
import  cls from './OrderWrapper.module.scss'

interface OrderWrapperProp{
  className?:string;
  orderOfOyat:number;
}

const OrderWrapper = (prop:OrderWrapperProp) => {
  const {className,orderOfOyat} =prop
  return (
    <div className={classNames(cls.orderWrapper,{},[className])}>{orderOfOyat}</div>
  )
}

export default OrderWrapper