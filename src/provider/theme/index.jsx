import { createContext, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
  const theme = {
    'blueLight': 'rgb(244, 249, 255)',
    'blue': 'rgb(218, 233, 255)',
    'purple': 'rgb(237, 219, 255)',
    'purpleDark': 'rgb(105, 112, 180)',
    'wine': 'rgb(205, 156, 212)',
    'yellow': 'rgb(255, 245, 219)',
    'green': 'rgb(219, 255, 229)',
    'salmon': 'rgb(255, 198, 198)',
  };

  return <ThemeContext.Provider value={{theme}}>
      {children}
  </ThemeContext.Provider>;
};

export const useThemeContext = () => useContext(ThemeContext);