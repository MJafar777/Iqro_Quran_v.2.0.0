import { createContext } from 'react';

export interface ButtonsClickedProps {
  readingSidebarActive?: boolean;
  setReadingSidebarActive?: (isActive: boolean) => void;
  isSidebarActive: boolean;
  setIsSidebarActive: (active: boolean) => void;
  isRightsidebarActive: boolean;
  setIsRightsidebarActive: (active: boolean) => void;
}

export const ButtonsContext = createContext<ButtonsClickedProps>({
  readingSidebarActive: true,
  setReadingSidebarActive: () => {},
  isSidebarActive: false,
  setIsSidebarActive: () => {},
  isRightsidebarActive: false,
  setIsRightsidebarActive: () => {},
});
