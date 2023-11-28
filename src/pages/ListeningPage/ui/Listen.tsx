import { Suspense, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ListeningJuz } from '../../../entities/ListenJuz';
import { ListeningSura } from '../../../entities/ListenSura';
import ListeningSwtichButton from '@/shared/ui/ListeningSwitchButton/ListeningSwtichButton';
import { Loader } from '@/widgets/Loader';

const ListenParent = () => {
  const [pageSuraOrJuz, setPageSuraOrJuz] = useState(true);
  const { t } = useTranslation();

  const Sura = t('Sura');
  const Juz = t('Juz');

  return (
    <div
      data-testid="Listening"
      style={{
        maxWidth: '1366px',
        margin: '60px auto',
        backgroundColor: '#fff',
        borderRadius: '8px',
        overflow: 'hidden',
        WebkitBoxShadow: '4px 4px 19px 0px rgba(34, 60, 80, 0.1)',
        MozBoxShadow: '4px 4px 19px 0px rgba(34, 60, 80, 0.1)',
        boxShadow: '4px 4px 19px 0px rgba(34, 60, 80, 0.1)',
      }}
    >
      <div
        style={{
          width: '100%',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
          justifyContent: 'flex-start',
        }}
      >
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
  );
};

export default ListenParent;
