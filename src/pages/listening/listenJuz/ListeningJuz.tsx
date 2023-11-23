/* eslint-disable no-use-before-define */
import React from 'react';
import { Link } from 'react-router-dom';
import cls from './listeningJuz.module.scss';

const ListeningJuz = () => {
  const salom: number = 30;
  const arrayEmpty: number[] = Array.from(
    { length: salom },
    (_, index) => index + 1,
  );

  return (
    <div className={cls.ListenJuzWrapper}>
      {arrayEmpty.map((item: number) => {
        return <CardItems index={item} />;
      })}
    </div>
  );
};

export default ListeningJuz;

interface CardItemsvalue {
  index: number;
}

const CardItems = (props: CardItemsvalue) => {
  const { index } = props;
  console.log(index, 'vvjvjvjvjvjvjvj');

  return (
    <div className={cls.CardsItems}>
      <div className={cls.LeftItems}>
        <div className={cls.SquareNumber}>
          <span className={cls.Span}>{index}</span>
        </div>

        <div className={cls.TextCard}>
          <div className={cls.FirstText}>Juz</div>
        </div>
      </div>

      {/*  */}

      <div className={cls.RightItems}>
        <button className={cls.Button} type="button">
          play
        </button>

        <button className={cls.Button} type="button">
          <Link
            to="http://iqro-quran.uz/backend/suras/1.mp3"
            download
            target="_blank"
          >
            down
          </Link>
        </button>
      </div>
    </div>
  );
};
