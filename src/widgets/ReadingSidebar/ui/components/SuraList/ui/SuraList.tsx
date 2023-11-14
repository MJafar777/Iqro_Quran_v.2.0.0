import React, { useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './SuraList.module.scss';

interface SuraListProps {
  className?: string;
}

interface SurahDataData {
  suraId: number;
  nameLotin: string;
  nameKril: string;
  numberOfOyat: number;
}

export const SurahData: SurahDataData[] = [
  {
    suraId: 1,
    nameLotin: 'Fotiha',
    nameKril: '',
    numberOfOyat: 7,
  },
  {
    suraId: 2,
    nameLotin: 'Baqara',
    nameKril: '',
    numberOfOyat: 286,
  },
  {
    suraId: 3,
    nameLotin: 'Oli Imron',
    nameKril: '',
    numberOfOyat: 200,
  },
  {
    suraId: 4,
    nameLotin: 'Niso',
    nameKril: '',
    numberOfOyat: 176,
  },
  {
    suraId: 5,
    nameLotin: 'Moida',
    nameKril: '',
    numberOfOyat: 120,
  },
  {
    suraId: 6,
    nameLotin: "An'om",
    nameKril: '',
    numberOfOyat: 165,
  },
  {
    suraId: 7,
    nameLotin: "A'rof",
    nameKril: '',
    numberOfOyat: 206,
  },
  {
    suraId: 8,
    nameLotin: 'Anfol',
    nameKril: '',
    numberOfOyat: 75,
  },
  {
    suraId: 9,
    nameLotin: 'Tavba',
    nameKril: '',
    numberOfOyat: 129,
  },
  {
    suraId: 10,
    nameLotin: 'Yunus',
    nameKril: '',
    numberOfOyat: 109,
  },
  {
    suraId: 11,
    nameLotin: 'Hud',
    nameKril: '',
    numberOfOyat: 123,
  },
  {
    suraId: 12,
    nameLotin: 'Yusuf',
    nameKril: '',
    numberOfOyat: 111,
  },
  {
    suraId: 13,
    nameLotin: "Ra'd",
    nameKril: '',
    numberOfOyat: 43,
  },
  {
    suraId: 14,
    nameLotin: 'Ibrohim',
    nameKril: '',
    numberOfOyat: 52,
  },
  {
    suraId: 15,
    nameLotin: 'Hijr',
    nameKril: '',
    numberOfOyat: 99,
  },
  {
    suraId: 16,
    nameLotin: 'Nahl',
    nameKril: '',
    numberOfOyat: 128,
  },
  {
    suraId: 17,
    nameLotin: 'Isro',
    nameKril: '',
    numberOfOyat: 111,
  },
  {
    suraId: 18,
    nameLotin: 'Kahf',
    nameKril: '',
    numberOfOyat: 110,
  },
  {
    suraId: 19,
    nameLotin: 'Maryam',
    nameKril: '',
    numberOfOyat: 98,
  },
  {
    suraId: 20,
    nameLotin: 'Toha',
    nameKril: '',
    numberOfOyat: 135,
  },
  {
    suraId: 21,
    nameLotin: 'Anbiyo',
    nameKril: '',
    numberOfOyat: 112,
  },
  {
    suraId: 22,
    nameLotin: 'Haj',
    nameKril: '',
    numberOfOyat: 78,
  },
  {
    suraId: 23,
    nameLotin: "Mu'minun",
    nameKril: '',
    numberOfOyat: 118,
  },
  {
    suraId: 24,
    nameLotin: 'Nur',
    nameKril: '',
    numberOfOyat: 64,
  },
  {
    suraId: 25,
    nameLotin: 'Furqon',
    nameKril: '',
    numberOfOyat: 77,
  },
  {
    suraId: 26,
    nameLotin: 'Shuaro',
    nameKril: '',
    numberOfOyat: 227,
  },
  {
    suraId: 27,
    nameLotin: 'Naml',
    nameKril: '',
    numberOfOyat: 93,
  },
  {
    suraId: 28,
    nameLotin: 'Qasos',
    nameKril: '',
    numberOfOyat: 88,
  },
  {
    suraId: 29,
    nameLotin: 'Ankabut',
    nameKril: '',
    numberOfOyat: 69,
  },
  {
    suraId: 30,
    nameLotin: 'Rum',
    nameKril: '',
    numberOfOyat: 60,
  },
  {
    suraId: 31,
    nameLotin: 'Luqmon',
    nameKril: '',
    numberOfOyat: 34,
  },
  {
    suraId: 32,
    nameLotin: 'Sajda',
    nameKril: '',
    numberOfOyat: 30,
  },
  {
    suraId: 33,
    nameLotin: 'Ahzob',
    nameKril: '',
    numberOfOyat: 73,
  },
  {
    suraId: 34,
    nameLotin: "Saba'",
    nameKril: '',
    numberOfOyat: 54,
  },
  {
    suraId: 35,
    nameLotin: 'Fotir',
    nameKril: '',
    numberOfOyat: 45,
  },
  {
    suraId: 36,
    nameLotin: 'Yosin',
    nameKril: '',
    numberOfOyat: 83,
  },
  {
    suraId: 37,
    nameLotin: 'Soffaat',
    nameKril: '',
    numberOfOyat: 182,
  },
  {
    suraId: 38,
    nameLotin: 'Sod',
    nameKril: '',
    numberOfOyat: 88,
  },
  {
    suraId: 39,
    nameLotin: 'Zumar',
    nameKril: '',
    numberOfOyat: 75,
  },
  {
    suraId: 40,
    nameLotin: "G'ofir",
    nameKril: '',
    numberOfOyat: 85,
  },
];

const SuraList = ({ className }: SuraListProps) => {
  const [selectedSura, setSelectedSura] = useState<SurahDataData>({
    suraId: 1,
    nameLotin: 'Fotiha',
    nameKril: '',
    numberOfOyat: 7,
  });

  return (
    <div className={classNames(cls.SuraList, {}, [className])}>
      {SurahData?.map((element) => (
        <div
          key={element.suraId}
          className={classNames(
            cls.SuraList__item,
            { [cls.active]: element.suraId === selectedSura?.suraId },
            [className],
          )}
          onClick={() => setSelectedSura(element)}
        >
          <p className={classNames(cls.SuraList__suraNumber, {}, [])}>
            {element.suraId}
          </p>

          <p className={classNames(cls.SuraList__suraName, {}, [])}>
            {element.nameLotin}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SuraList;
