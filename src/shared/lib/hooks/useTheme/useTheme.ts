import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage';
import { ThemeContext } from '../../context/ThemeContext';
import { Theme } from '../../../const/theme';

interface UseThemeResult {
  toggleTheme: (newTheme: Theme) => void;
  theme: Theme;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = (theme: Theme) => {
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, JSON.stringify(theme));
    setTheme?.(theme || Theme.LIGHT);
    // let newTheme: Theme;
    // switch (theme) {
    //   case Theme.DARK:
    //     newTheme = Theme.LIGHT;
    //     break;
    //   case Theme.LIGHT:
    //     newTheme = Theme.ORANGE;
    //     break;
    //   case Theme.ORANGE:
    //     newTheme = Theme.DARK;
    //     break;
    //   default:
    //     newTheme = Theme.LIGHT;
    // }
    // setTheme?.(newTheme);

    // saveAction?.(newTheme);
  };

  return {
    theme: theme || Theme.LIGHT,
    toggleTheme,
  };
}
