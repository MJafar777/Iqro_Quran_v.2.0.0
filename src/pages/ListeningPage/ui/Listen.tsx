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

  const srcSuraListen = `http://iqro-quran.uz/backend/suras/${surahListenNumber}.mp3`;
  const srcJuzsListen = `http://iqro-quran.uz/developmentBackend/juzes/juz${surahListenNumber}.mp3`;

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
