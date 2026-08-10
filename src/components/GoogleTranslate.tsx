import { useEffect, useState } from "react";

const languages = [
  { code: "en", name: "English" },
  { code: "si", name: "සිංහල" },
  { code: "ta", name: "தமிழ்" },
  { code: "hi", name: "हिन्दी" },
  { code: "ar", name: "العربية" },
  { code: "fr", name: "Français" },
  { code: "zh-CN", name: "中文" },
  { code: "ja", name: "日本語" },
  { code: "ru", name: "Русский" },
];

export default function GoogleTranslate() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("en");

  useEffect(() => {
    const interval = setInterval(() => {
      const googleSelect = document.querySelector(
        ".goog-te-combo"
      ) as HTMLSelectElement | null;

      if (googleSelect) {
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const translate = (language: string) => {
    setSelected(language);
    setOpen(false);

    const googleSelect = document.querySelector(
      ".goog-te-combo"
    ) as HTMLSelectElement | null;

    if (!googleSelect) return;

    googleSelect.value = language;

    googleSelect.dispatchEvent(
      new Event("change", {
        bubbles: true,
      })
    );
  };

  const current =
    languages.find((language) => language.code === selected) ||
    languages[0];

  return (
    <div className="fixed right-6 top-6 z-[9999]">
      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2.5 text-sm font-medium text-white shadow-lg backdrop-blur-md transition-all duration-200 hover:bg-black/60"
        >
          <span>{current.name}</span>

          <svg
            className={`h-4 w-4 transition-transform ${
              open ? "rotate-180" : ""
            }`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-44 overflow-hidden rounded-2xl border border-white/10 bg-black/80 p-1.5 shadow-2xl backdrop-blur-xl">
            {languages.map((language) => (
              <button
                key={language.code}
                type="button"
                onClick={() => translate(language.code)}
                className={`w-full rounded-xl px-3 py-2.5 text-left text-sm transition-colors ${
                  selected === language.code
                    ? "bg-white/15 text-white"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                {language.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}