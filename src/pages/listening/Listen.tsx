/* eslint-disable max-len */
import { Suspense, useState } from 'react';

import ListeningJuz from './listenJuz/ListeningJuz';
import ListeningSura from './listenSura/ListeningSura';
import ListeningSwtichButton from '@/shared/ui/ListeningSwitchButton/ListeningSwtichButton';

const ListenParent = () => {
  const [pageSuraOrJuz, setPageSuraOrJuz] = useState(true);
  console.log(pageSuraOrJuz);

  return (
    <div style={{ marginTop: '30px' }}>
      <div
        style={{
          maxWidth: '1250px',
          width: '100%',
          margin: '0rem auto',
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
          justifyContent: 'flex-start',
          marginTop: '70px',
        }}
      >
        <ListeningSwtichButton
          setPageSuraOrJuz={setPageSuraOrJuz}
          pageSuraOrJuz={pageSuraOrJuz}
          buttonsNames={['Sura', 'Juz']}
        />
        {/* <button type="button" onClick={() => setPageSuraOrJuz(true)}>
          Sura
        </button>

        <button type="button" onClick={() => setPageSuraOrJuz(false)}>
          Juz
        </button> */}
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        {pageSuraOrJuz ? <ListeningSura /> : <ListeningJuz />}
      </Suspense>
      <hr />
    </div>
  );
};

export default ListenParent;
