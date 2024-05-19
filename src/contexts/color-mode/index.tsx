import {
  createTheme,
  ThemeProvider,
  TypographyVariantsOptions,
} from "@mui/material/styles";
import { RefineThemes } from "@refinedev/mui";
import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";

const typography: TypographyVariantsOptions = {
  fontFamily: [
    "Inter",
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
};

const enhancedLightTheme = createTheme({
  ...RefineThemes.Red,
  typography: {
    fontFamily: typography.fontFamily,
  },
});

const enhancedDarkTheme = createTheme({
  ...RefineThemes.RedDark,
  typography: {
    fontFamily: typography.fontFamily,
  },
});

type ColorModeContextType = {
  mode: string;
  setMode: () => void;
};

export const ColorModeContext = createContext<ColorModeContextType>(
  {} as ColorModeContextType
);

export const ColorModeContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const colorModeFromLocalStorage = localStorage.getItem("colorMode");
  const isSystemPreferenceDark = window?.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const systemPreference = isSystemPreferenceDark ? "dark" : "light";
  const [mode, setMode] = useState(
    colorModeFromLocalStorage || systemPreference
  );

  useEffect(() => {
    window.localStorage.setItem("colorMode", mode);
  }, [mode]);

  const setColorMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  return (
    <ColorModeContext.Provider
      value={{
        setMode: setColorMode,
        mode,
      }}
    >
      <ThemeProvider
        theme={mode === "light" ? enhancedLightTheme : enhancedDarkTheme}
      >
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
