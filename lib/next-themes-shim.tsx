"use client"

import * as React from "react"

type Theme = "light" | "dark" | "system"

interface ThemeContextValue {
  theme: Theme
  setTheme: (theme: Theme) => void
}

/**
 * A _very_ small subset of **next-themes** API
 * – enough to satisfy `ThemeToggle` & `ThemeProvider` in your code-base.
 */
const ThemeContext = React.createContext<ThemeContextValue | undefined>(undefined)

function ThemeProvider({
  children,
  attribute = "class",
  defaultTheme = "system",
}: {
  children: React.ReactNode
  attribute?: string
  defaultTheme?: Theme
}) {
  const getSystemTheme = () =>
    typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? ("dark" as Theme)
      : ("light" as Theme)

  const [theme, setTheme] = React.useState<Theme>(() => (defaultTheme === "system" ? getSystemTheme() : defaultTheme))

  // Apply theme class to <html>
  React.useEffect(() => {
    const root = document.documentElement
    root.classList.remove("light", "dark")
    if (theme === "system") {
      root.classList.add(getSystemTheme())
    } else {
      root.classList.add(theme)
    }
    // Also update the specified attribute (defaults to class)
    if (attribute !== "class") root.setAttribute(attribute, theme)
  }, [theme, attribute])

  const value = React.useMemo(() => ({ theme, setTheme }), [theme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

function useTheme(): ThemeContextValue {
  const ctx = React.useContext(ThemeContext)
  if (!ctx) {
    throw new Error("useTheme must be used inside ThemeProvider")
  }
  return ctx
}

export { ThemeProvider, useTheme }
