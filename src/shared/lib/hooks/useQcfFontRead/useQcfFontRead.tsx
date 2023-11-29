/* eslint-disable no-use-before-define */
import { useEffect, useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getFontFaceNameForPage,
  getV1OrV2FontFaceSource,
} from '../../utils/fontFaceHelper';
import { removeItemFromArray } from '../../utils/arrry';
import { StateSchema } from '@/app/providers/StoreProvider';
// eslint-disable-next-line ulbi-tv-plugin/public-api-imports
import { Verse } from '@/entities/ReadingArabic/model/types/readingSura';
// eslint-disable-next-line ulbi-tv-plugin/public-api-imports
import { addLoadedFontFaceReadingArabic } from '@/entities/ReadingArabic/model/slice/readingArabicSlice';

const useQcfFontRead = (verses: Verse[]) => {
  const currentlyFetchingFonts = useRef<string[]>([]);
  const dispatch = useDispatch();
  const isFontQCF = true;
  const loadedFonts = useSelector(
    (state: StateSchema) => state.readingArabic?.loadedFontFaces,
  );

  console.log(verses, 'verser');

  const onFontLoaded = useCallback(
    (fontFace: string) => {
      dispatch(addLoadedFontFaceReadingArabic(fontFace));
    },
    [dispatch],
  );

  useEffect(() => {
    if (isFontQCF && verses?.length > 0) {
      verses?.forEach((verse) => {
        const isV1 = true;
        const fontFaceName = getFontFaceNameForPage(isV1, verse.page_number);
        const fontFace = new FontFace(
          fontFaceName,
          getV1OrV2FontFaceSource(true, verse.page_number),
        );
        console.log(loadedFonts);
        console.log(fontFaceName);
        if (
          !loadedFonts?.includes(fontFaceName) &&
          !currentlyFetchingFonts.current.includes(fontFaceName)
        ) {
          fontFace.display = 'block';
          currentlyFetchingFonts.current.push(fontFaceName);
          fontFace
            .load()
            .then(() => {
              console.log('Test');
              (document.fonts as any).add(fontFace); // Type assertion
              onFontLoaded(fontFaceName);
            })
            .finally(() => {
              currentlyFetchingFonts.current = removeItemFromArray(
                fontFaceName,
                currentlyFetchingFonts.current,
              );
            });
        }
      });
    }
    //   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [verses, loadedFonts, isFontQCF, currentlyFetchingFonts, onFontLoaded]);

  // // Return any additional data or functions that might be useful in your component
  return {
    currentlyFetchingFonts: currentlyFetchingFonts.current,
    loadedFonts,
  };
};

export default useQcfFontRead;
