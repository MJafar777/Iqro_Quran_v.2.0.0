import React, { memo, useEffect, useState } from 'react';
import cls from './OneTafsirCard.module.scss';
import { IconsOfTafsir } from '@/shared/ui/IconsOfTafsir';
import { ContentOfTafsir } from '@/shared/ui/ContentOfTafsir';
import { OneVerseTafsirScheme } from '@/pages/Tafsir';

interface OneTafsirCardProp {
  data?: OneVerseTafsirScheme;
}

export const OneTafsirCard = memo((prop: OneTafsirCardProp) => {
  const { data } = prop;
  console.log(data?.verse_key);

  const [fontLoaded, setFontLoaded] = useState(false);

  console.log(data?.page_number, 'fsfs');

  useEffect(() => {
    const fontPromise = document.fonts.load(`16px "p${data?.page_number}-v1"`);
    fontPromise
      .then(() => {
        // Font is loaded, update state to trigger re-render
        setFontLoaded(true);
      })
      .finally(() => {
        // console.log("Done");
      });
  }, [data?.page_number]);

  return (
    <div className={cls.oneTafsirCard}>
      <IconsOfTafsir verse={data?.verse_key} />
      <ContentOfTafsir
        // @ts-ignore
        words={data?.words || []}
        text={data?.tafsir[0].more_text}
        arab={data?.text}
      />
    </div>
  );
});
