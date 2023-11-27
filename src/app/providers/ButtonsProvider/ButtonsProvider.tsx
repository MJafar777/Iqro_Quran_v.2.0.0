import React, { ReactNode, useMemo, useState } from 'react';
import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';

interface ButtonsProviderProps {
  initialButton?: string;
  children: ReactNode;
}

const ButtonsProvider = (props: ButtonsProviderProps) => {
  const { initialButton, children } = props;

  const [readingSidebarActive, setReadingSidebarActive] =
    useState<boolean>(true);

  const [isSidebarActive, setIsSidebarActive] = useState<boolean>(true);

  const [isRightsidebarActive, setIsRightsidebarActive] = useState(true);

  const [fontSize, setFontSize] = useState(3);

  const [readingPageTubBtn, setReadingPageTubBtn] = useState(1);

  const defaultProps = useMemo(
    () => ({
      readingSidebarActive,
      setReadingSidebarActive,
      isSidebarActive,
      setIsSidebarActive,
      isRightsidebarActive,
      setIsRightsidebarActive,
      fontSize,
      setFontSize,
      readingPageTubBtn,
      setReadingPageTubBtn,
    }),
    [
      fontSize,
      isRightsidebarActive,
      isSidebarActive,
      readingSidebarActive,
      readingPageTubBtn,
      setReadingPageTubBtn,
    ],
  );

  return (
    <ButtonsContext.Provider value={defaultProps}>
      {children}
    </ButtonsContext.Provider>
  );
};

export default ButtonsProvider;
