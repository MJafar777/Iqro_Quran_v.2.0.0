import { useEffect, useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getFontFaceNameForPage,
  getV1OrV2FontFaceSource,
} from '../../utils/fontFaceHelper';
import { removeItemFromArray } from '../../utils/arrry';
import { Verse, addLoadedFontFace } from '@/pages/Tafsir';
import { StateSchema } from '@/app/providers/StoreProvider';

const useQcfFont = (verses: Verse[]) => {
  const currentlyFetchingFonts = useRef<string[]>([]); // Specify the type of elements in the array
  const dispatch = useDispatch();
  const isFontQCF = true;
  const loadedFonts = useSelector(
    (state: StateSchema) => state.tafsirPage.loadedFontFaces,
  );

  const onFontLoaded = useCallback(
    (fontFace: string) => {
      dispatch(addLoadedFontFace(fontFace));
    },
    [dispatch],
  );

  useEffect(() => {
    if (isFontQCF && verses?.length > 0) {
      verses.forEach((verse) => {
        const isV1 = true;
        const fontFaceName = getFontFaceNameForPage(
          isV1,
          verse?.page_number ? verse.page_number : 1,
        );

        const fontFace = new FontFace(
          fontFaceName,
          getV1OrV2FontFaceSource(true, verse.chapter_id.quran_order),
        );

        if (
          !loadedFonts.includes(fontFaceName) &&
          !currentlyFetchingFonts.current.includes(fontFaceName)
        ) {
          currentlyFetchingFonts.current = [
            ...currentlyFetchingFonts.current,
            fontFaceName,
          ];

          fontFace.display = 'block';

          fontFace
            .load()
            .then(() => {
              // @ts-ignore
              document.fonts.add(fontFace);
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
  }, [verses, loadedFonts, isFontQCF, currentlyFetchingFonts, onFontLoaded]);
};

export default useQcfFont;
