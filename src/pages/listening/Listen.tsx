/* eslint-disable max-len */
import { Suspense, useState } from 'react';

import ListeningJuz from './listenJuz/ListeningJuz';
import ListeningSura from './listenSura/ListeningSura';
import ListeningSwtichButton from '@/shared/ui/ListeningSwitchButton/ListeningSwtichButton';

const ListenParent = () => {
  const [pageSuraOrJuz, setPageSuraOrJuz] = useState(true);

  return (
    <div
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
          buttonsNames={['Sura', 'Juz']}
        />
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        {pageSuraOrJuz ? <ListeningSura /> : <ListeningJuz />}
      </Suspense>
      <hr />
    </div>
  );
};

export default ListenParent;
