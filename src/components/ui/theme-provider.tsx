
import React, { createContext, useContext, useState, useEffect } from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: "dark",
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  storageKey = "sireiq-theme",
  ...props
}: ThemeProviderProps) {
  // Initialize with defaultTheme first, then update from localStorage in useEffect
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  // Initialize theme from localStorage after component mounts
  useEffect(() => {
    const storedTheme = localStorage.getItem(storageKey) as Theme;
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, [storageKey]);

  useEffect(() => {
    const root = window.document.documentElement;

    // First, remove all theme classes to avoid conflicts
    root.classList.remove("light", "dark");
    
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
      // Store the actual applied theme for consistency
      document.body.dataset.theme = systemTheme;
    } else {
      root.classList.add(theme);
      // Store the theme in a data attribute for easier CSS targeting
      document.body.dataset.theme = theme;
    }
    
    // Store preference in localStorage
    localStorage.setItem(storageKey, theme);
    
    // Dispatch a custom event that components can listen to
    window.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
  }, [theme, storageKey]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
