import { Suspense, useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
//
import { Loader } from '@/widgets/Loader';
import { ListeningJuz } from '../../../entities/ListenJuz';
import { ListeningSura } from '../../../entities/ListenSura';
import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';
import ListeningSwtichButton from '@/shared/ui/ListeningSwitchButton/ListeningSwtichButton';
//
import cls from './Listen.module.scss';
import { ListenSurahAudioPlayer } from '@/shared/ui/ListenSurahAudioPlayer';

const ListenParent = () => {
  const { surahListenNumber } = useContext(ButtonsContext);

  const [pageSuraOrJuz, setPageSuraOrJuz] = useState(true);
  const { t } = useTranslation();

  const Sura = t('Sura');
  const Juz = t('Juz');

  const srcSuraListen = `http://iqro-quran.uz/backend/suras/${surahListenNumber}.mp3`;

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
      {surahListenNumber > 0 ? (
        <ListenSurahAudioPlayer
          src={surahListenNumber > 0 ? srcSuraListen : ''}
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default ListenParent;
