/* eslint-disable no-use-before-define */
import React from 'react';
import { Link } from 'react-router-dom';
import cls from './listeningJuz.module.scss';

const ListeningJuz = () => {
  return (
    <div className={cls.ListenJuzWrapper}>
      <CardItems />
      <CardItems />
      <CardItems />
      <CardItems />
      <CardItems />
      <CardItems />
      <CardItems />
      <CardItems />
      <CardItems />
      <CardItems />
      <CardItems />
      <CardItems />
      <CardItems />
      <CardItems />
      <CardItems />
      <CardItems />
      <CardItems />
      <CardItems />
      <CardItems />
      <CardItems />
      <CardItems />
      <CardItems />
      <CardItems />
    </div>
  );
};

export default ListeningJuz;

const CardItems = () => {
  return (
    <div className={cls.CardsItems}>
      <div className={cls.LeftItems}>
        <div className={cls.SquareNumber}>
          <span className={cls.Span}>1</span>
        </div>

        <div className={cls.TextCard}>
          <div className={cls.FirstText}>Al-Fatihat</div>
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
