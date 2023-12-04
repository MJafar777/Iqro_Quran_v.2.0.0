import React, { Suspense, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
//
import { Loader } from '@/widgets/Loader';
import { HStack } from '@/shared/ui/Stack';
import { OneSuraInListSchema } from '@/pages/MainPage';
import { ListenActive } from '@/shared/ui/ListenActive';
import { Download, Play } from '@/shared/assets/iconsListening';
import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';
//
import cls from './listeningJuz.module.scss';

interface CardItemsvalue {
  info?: OneSuraInListSchema;
  index: number;
}

const CardItems = (props: CardItemsvalue) => {
  const { t } = useTranslation();
  const Juz = t('Juz');
  const { index, info } = props;

  const srcDownload = `http://iqro-quran.uz/developmentBackend/juzes/juz${index}.mp3`;

  const {
    surahOnEnded,
    setSurahOnEnded,
    setSurahListenNumber,
    surahListenNumber,
    setCloseAudio,
  } = useContext(ButtonsContext);

  return (
    <Suspense fallback={<Loader />}>
      <div className={cls.CardsItems}>
        <div className={cls.LeftItems}>
          <div className={cls.SquareNumber}>
            <span className={cls.Span}>{index}</span>
          </div>

          <div className={cls.TextCard}>
            <h3 className={cls.FirstText}>{Juz}</h3>
          </div>
        </div>

        {/*  */}

        <div className={cls.RightItems}>
          <button
            type="button"
            className={cls.Button}
            onClick={() => {
              setSurahListenNumber(index);
              setCloseAudio(false);
            }}
          >
            {surahListenNumber !== index && surahOnEnded ? (
              <Play className={cls.ButtonIcon} />
            ) : !surahOnEnded && surahListenNumber === index ? (
              <ListenActive />
            ) : (
              <Play className={cls.ButtonIcon} />
            )}
          </button>

          <button aria-label="save" className={cls.Button} type="button">
            <Link
              to={srcDownload}
              download
              target="_blank"
              rel="noopener noreferrer"
              className={cls.ButtonDownload}
            >
              <Download className={cls.ButtonIcon} />
            </Link>
          </button>
        </div>
      </div>
    </Suspense>
  );
};

const ListeningJuz = () => {
  const salom: number = 30;
  const arrayEmpty: number[] = Array.from(
    { length: salom },
    (_, index) => index + 1,
  );

  return (
    <div>
      <HStack max className={cls.ListenJuzWrapper} gap="16">
        {arrayEmpty.map((item: number, index: number) => {
          return <CardItems key={index} index={item} />;
        })}
      </HStack>
    </div>
  );
};

export default ListeningJuz;
