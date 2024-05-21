import React from "react";

function ThemeSelector({
  theme,
  setTheme,
}: {
  theme: string;
  setTheme: (theme: string) => void;
}) {
  const handleThemeChange = (newTheme:string) => {
    if (newTheme === "light-theme") {
      setTheme("bg-white");
    } else {
      setTheme("bg-slate-400");
    }
  };

  return (
    <div className="p-4">
      <div className="space-x-2">
        <button
          onClick={() => handleThemeChange("light-theme")}
          className={`px-4 py-2 rounded ${
            theme === "light-theme" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Light
        </button>
        <button
          onClick={() => handleThemeChange("dark-theme")}
          className={`px-4 py-2 rounded ${
            theme === "dark-theme" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Dark
        </button>
      </div>
    </div>
  );
}

export default ThemeSelector;
