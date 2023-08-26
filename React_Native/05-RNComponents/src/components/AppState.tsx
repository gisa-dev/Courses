import { ThemeProvider } from '../context/theme/ThemeContext';

export const AppState = ({ children }: any) => {
	return <ThemeProvider>{children}</ThemeProvider>;
};
