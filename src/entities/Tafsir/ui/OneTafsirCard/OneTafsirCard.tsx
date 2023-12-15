import React, { memo, useEffect, useState } from 'react';
import cls from './OneTafsirCard.module.scss';
import { IconsOfTafsir } from '@/shared/ui/IconsOfTafsir';
import { ContentOfTafsir } from '@/shared/ui/ContentOfTafsir';
import { Verse } from '@/entities/ReadingArabic';

interface OneTafsirCardProp {
  data?: Verse;
  isLoading?: boolean;
}

export const OneTafsirCard = memo((prop: OneTafsirCardProp) => {
  const { data } = prop;

  const [fontLoaded, setFontLoaded] = useState(false);

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
    <div className={cls.oneTafsirCard} id={`${data?.verse_key}`}>
      <IconsOfTafsir verse={data?.verse_key} />
      <ContentOfTafsir
        // @ts-ignore
        words={data?.words || []}
        text={data?.tafsir[0].more_text}
        arab={data?.text}
        page_number={data?.page_number || 1}
      />
    </div>
  );
});
