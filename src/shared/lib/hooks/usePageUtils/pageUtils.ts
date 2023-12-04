// Pages where we want to have center align text to resemble the Madani Mushaf
const CENTER_ALIGNED_PAGES = [1, 2];

type CenterAlignedPageLines = {
  [pageNumber: number]: number[];
};

// Lines that need to be center aligned
const CENTER_ALIGNED_PAGE_LINES: CenterAlignedPageLines = {
  255: [2], // 13(Ar-Ra'd), last ayah
  528: [9], // 67 (Al Qalam) last ayah
  534: [6], // 55(Ar-Rahman) last ayah
  545: [6], // 58(Al-Mujadila) last ayah
  586: [15], // 80('Abasa) last ayah
  593: [2], // 88(Al-Ghashiyah) last 2 ayah
  594: [5], // 89(Al-Fajr) last 2 ayah
  600: [13], // 100(Al-'Adiyat) last 2 ayah
  602: [3, 13], // 106(Quraysh) last ayah, 108(Al-Kawthar) last ayah
  603: [8, 13], // 110(An-Nasr) last ayah, 111(Al-Masad) last ayah
  604: [3, 7, 12, 13], // 112(Al-Ikhlas) last ayah, 113(Al-Falaq) last ayah, 114(An-Nas) last 2 ayah
};

/**
 * Util function to check if page or specific line should be center aligned to
 * resemble the printed Madani Mushaf.
 *
 * @param {number} pageNumber
 * @param {number} lineNumber
 * @returns {boolean}
 */
const isCenterAlignedPage = (
  pageNumber: number,
  lineNumber: number,
): boolean => {
  const centerAlignedLines = CENTER_ALIGNED_PAGE_LINES[pageNumber] || [];
  return (
    CENTER_ALIGNED_PAGES.includes(pageNumber) ||
    centerAlignedLines.includes(lineNumber)
  );
};

export default isCenterAlignedPage;
