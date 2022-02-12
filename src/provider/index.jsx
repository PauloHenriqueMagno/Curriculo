import { ThemeProvider } from "./theme";

const Provider = ({children}) => {
  return <ThemeProvider>
    {children}
  </ThemeProvider>;
};

export default Provider;