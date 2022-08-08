import { useCallback, useEffect, useState } from "react";

function useTheme() {
  const [theme, setTheme] = useState("light");

  const onChangeTheme = useCallback(() => {
    const updatedTheme = theme === "light" ? "dark" : "light";
    setTheme(updatedTheme);
    localStorage.setItem("theme", updatedTheme);
  }, [theme]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      setTheme(savedTheme);
      return;
    }
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme("dark");
    }
  }, []);

  return {
    theme,
    onChangeTheme,
  };
}

export default useTheme;
