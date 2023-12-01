/* eslint-disable max-len */
import { Suspense, useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
//
import { Loader } from '@/widgets/Loader';
import { ListeningJuz } from '../../../entities/ListenJuz';
import { ListeningSura } from '../../../entities/ListenSura';
import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';
import { ListenSurahAudioPlayer } from '@/shared/ui/ListenSurahAudioPlayer';
import ListeningSwtichButton from '@/shared/ui/ListeningSwitchButton/ListeningSwtichButton';
//
import cls from './Listen.module.scss';

const ListenParent = () => {
  const { surahListenNumber } = useContext(ButtonsContext);

  const [pageSuraOrJuz, setPageSuraOrJuz] = useState(true);

  const { t } = useTranslation();

  const Sura = t('Sura');
  const Juz = t('Juz');

  // const numberOfDigits = surahListenNumber.toString().length;

  // const modifiedValue =
  //   numberOfDigits === 1
  //     ? `00${numberOfDigits}`
  //     : numberOfDigits === 2
  //     ? `0${numberOfDigits}`
  //     : numberOfDigits;

  const srcSuraListen = `http://iqro-quran.uz/backend/suras/${surahListenNumber}.mp3`;
  const srcJuzsListen = `http://iqro-quran.uz/developmentBackend/juzes/juz${surahListenNumber}.mp3`;
  // const srcSuraListen = `https://server8.mp3quran.net/afs/${modifiedValue}.mp3`;

  return (
    <div className={cls.ParentListener}>
      <div data-testid="Listening" className={cls.ListenParentWrapper}>
        <div className={cls.ListenSwitcher}>
          <ListeningSwtichButton
            setPageSuraOrJuz={setPageSuraOrJuz}
            pageSuraOrJuz={pageSuraOrJuz}
            buttonsNames={[Sura, Juz]}
          />
        </div>

        <Suspense fallback={<Loader />}>
          {pageSuraOrJuz ? <ListeningSura /> : <ListeningJuz />}
        </Suspense>
        <hr />
      </div>
      {pageSuraOrJuz && surahListenNumber > 0 && surahListenNumber < 115 ? (
        <ListenSurahAudioPlayer
          src={surahListenNumber > 0 ? srcSuraListen : ''}
        />
      ) : (
        ''
      )}
      {!pageSuraOrJuz && surahListenNumber > 0 && surahListenNumber < 31 ? (
        <ListenSurahAudioPlayer
          src={
            surahListenNumber > 0 && surahListenNumber < 31 ? srcJuzsListen : ''
          }
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default ListenParent;
