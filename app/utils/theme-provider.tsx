import { createContext, useContext, useEffect, useRef, useState } from 'react';
import type { Dispatch, ReactNode, SetStateAction } from 'react';
import clsx from 'clsx';
import { useFetcher } from '@remix-run/react';

enum Theme {
    DARK = 'dark',
    LIGHT = 'light',
}
const prefersDarkMQ = '(prefers-color-scheme: dark)';
const getPreferredTheme = () => (window.matchMedia(prefersDarkMQ).matches ? Theme.DARK : Theme.LIGHT);
const clientThemeCode = `
;(() => {
  const theme = window.matchMedia(${JSON.stringify(prefersDarkMQ)}).matches
    ? 'dark'
    : 'light';
  const cl = document.documentElement.classList;
  const themeAlreadyApplied = cl.contains('light') || cl.contains('dark');
  if (themeAlreadyApplied) {
    // this script shouldn't exist if the theme is already applied!
    console.warn(
      "Hi there, could you let Matt know you're seeing this message? Thanks!",
    );
  } else {
    cl.add(theme);
  }
})();
`;
function NonFlashOfWrongThemeEls({ ssrTheme }: { ssrTheme: boolean }) {
    return <>{ssrTheme ? null : <script dangerouslySetInnerHTML={{__html: clientThemeCode }} />}</>;
}
type ThemeContextType = [Theme | null, Dispatch<SetStateAction<Theme | null>>];

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function ThemeProvider({ children, specifiedTheme }: { children: ReactNode, specifiedTheme: Theme | null }) {
    const persistTheme = useFetcher();

    const persistThemeRef = useRef(persistTheme);
    useEffect(() => {
        persistThemeRef.current = persistTheme;
    }, [persistTheme]);

    const mountRun = useRef(false);

    
    const [theme, setTheme] = useState<Theme | null>(() => {
        if (specifiedTheme) {
            if (themes.includes(specifiedTheme)) {
                return specifiedTheme;
            } else {
                return null;
            }
        }
        if (typeof window !== 'object') {
            return null; // if this returns null, clsx will make it as ''
        }
        return getPreferredTheme();
    });
    useEffect(() => {
        if (!mountRun.current) {
            mountRun.current = true;
            return;
        }
        if (!theme) {
            return;
        }
        persistThemeRef.current.submit({ theme }, { action: 'set-theme?index', method: 'post' });
    }, [theme]);
    return <ThemeContext.Provider value={[theme, setTheme]}>{children}</ThemeContext.Provider>;
}

function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
const themes: Array<Theme> = Object.values(Theme);

function isTheme(value: unknown): value is Theme {
    return typeof value === 'string' && themes.includes(value as Theme);
}

export { Theme, ThemeProvider, useTheme, NonFlashOfWrongThemeEls, isTheme };