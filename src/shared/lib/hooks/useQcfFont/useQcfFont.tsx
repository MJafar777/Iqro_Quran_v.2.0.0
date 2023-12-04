/* eslint-disable no-use-before-define */
import { useEffect, useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getFontFaceNameForPage,
  getV1OrV2FontFaceSource,
} from '../../utils/fontFaceHelper';
import { removeItemFromArray } from '../../utils/arrry';
import { Chapter, addLoadedFontFace } from '@/pages/Tafsir';
import { StateSchema } from '@/app/providers/StoreProvider';

const useQcfFont = (verses: Chapter[]) => {
  const currentlyFetchingFonts = useRef<string[]>([]);
  const dispatch = useDispatch();
  const isFontQCF = true;
  const loadedFonts = useSelector(
    (state: StateSchema) => state.tafsirPage.loadedFontFaces,
  );

  useEffect(() => {
    if (isFontQCF && verses?.length > 0) {
      verses.forEach((verse) => {
        const isV1 = true;
        const fontFaceName = getFontFaceNameForPage(isV1, verse.page_number);

        const fontFace = new FontFace(
          fontFaceName,
          getV1OrV2FontFaceSource(true, verse.page_number),
        );

        if (
          !loadedFonts.includes(fontFaceName) &&
          !currentlyFetchingFonts.current.includes(fontFaceName)
        ) {
          fontFace.display = 'block';
          currentlyFetchingFonts.current.push(fontFaceName);

          fontFace
            .load()
            .then(() => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [verses, loadedFonts, isFontQCF, currentlyFetchingFonts]);

  const onFontLoaded = useCallback(
    (fontFace: string) => {
      dispatch(addLoadedFontFace(fontFace));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dispatch, loadedFonts],
  );
  // Return any additional data or functions that might be useful in your component
  return {
    currentlyFetchingFonts: currentlyFetchingFonts.current,
    loadedFonts,
  };
};

export default useQcfFont;
