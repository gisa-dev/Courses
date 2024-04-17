import {useContext} from 'react';
import {ThemeContext} from '../context/ThemeContext';

export const useThemeContext = () => {
  const {setTheme, currentTheme, colors, isDark} = useContext(ThemeContext);

  return {setTheme, currentTheme, colors, isDark};
};
