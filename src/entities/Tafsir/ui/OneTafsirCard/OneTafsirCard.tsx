import React, { memo, useEffect, useState } from 'react';
import cls from './OneTafsirCard.module.scss';
import { IconsOfTafsir } from '@/shared/ui/IconsOfTafsir';
import { ContentOfTafsir } from '@/shared/ui/ContentOfTafsir';
import { Chapter } from '@/pages/Tafsir';
import { OneTafsirCardSkleton } from './OneTafsirCardSkleton';

interface OneTafsirCardProp {
  data?: Chapter;
  isLoading: boolean;
}

export const OneTafsirCard = memo((prop: OneTafsirCardProp) => {
  const { data, isLoading } = prop;

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

  if (isLoading) {
    return <OneTafsirCardSkleton />;
  }

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
