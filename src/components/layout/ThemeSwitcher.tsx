import { ChevronDown, Palette } from "lucide-react";
import { useState } from "react";
import { themeOptions, type ThemeId } from "../../theme";

type ThemeSwitcherProps = {
  theme: ThemeId;
  onThemeChange: (theme: ThemeId) => void;
};

export default function ThemeSwitcher({
  theme,
  onThemeChange,
}: ThemeSwitcherProps) {
  const [open, setOpen] = useState(false);
  const activeTheme = themeOptions.find((option) => option.id === theme);

  return (
    <div className="relative">
      <div
        aria-label="Style options"
        className="hidden items-center gap-1 rounded-md border border-ink/15 bg-ivory/80 p-1 shadow-sm sm:flex"
      >
        {themeOptions.map((option) => {
          const active = option.id === theme;

          return (
            <button
              key={option.id}
              type="button"
              aria-label={`Use ${option.label} style`}
              aria-pressed={active}
              onClick={() => onThemeChange(option.id)}
              className={`inline-flex min-h-9 items-center gap-2 rounded px-2 font-serif italic text-sm transition-colors ${
                active
                  ? "bg-ink text-ivory"
                  : "text-ink/70 hover:bg-oat/45 hover:text-ink"
              }`}
            >
              <span className="flex -space-x-1" aria-hidden="true">
                {option.swatches.map((color) => (
                  <span
                    key={color}
                    className="h-3.5 w-3.5 rounded-full border border-ivory/80"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </span>
              <span className="hidden lg:inline">{option.label}</span>
            </button>
          );
        })}
      </div>

      <button
        type="button"
        aria-expanded={open}
        aria-label="Choose site style"
        onClick={() => setOpen((current) => !current)}
        className="inline-flex min-h-11 items-center gap-2 rounded-md border border-ink/15 bg-ivory/85 px-3 font-serif italic text-sm text-ink shadow-sm sm:hidden"
      >
        <Palette className="h-4 w-4" strokeWidth={1.7} />
        <span className="flex -space-x-1" aria-hidden="true">
          {activeTheme?.swatches.map((color) => (
            <span
              key={color}
              className="h-3.5 w-3.5 rounded-full border border-ivory/80"
              style={{ backgroundColor: color }}
            />
          ))}
        </span>
        <ChevronDown
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          strokeWidth={1.7}
        />
      </button>

      {open && (
        <div className="absolute right-0 top-[calc(100%+0.5rem)] z-50 w-48 rounded-md border border-ink/15 bg-ivory p-1 shadow-xl sm:hidden">
          {themeOptions.map((option) => {
            const active = option.id === theme;

            return (
              <button
                key={option.id}
                type="button"
                aria-pressed={active}
                onClick={() => {
                  onThemeChange(option.id);
                  setOpen(false);
                }}
                className={`flex min-h-11 w-full items-center justify-between rounded px-3 font-serif italic text-sm transition-colors ${
                  active
                    ? "bg-ink text-ivory"
                    : "text-ink/75 hover:bg-oat/45 hover:text-ink"
                }`}
              >
                <span>{option.label}</span>
                <span className="flex -space-x-1" aria-hidden="true">
                  {option.swatches.map((color) => (
                    <span
                      key={color}
                      className="h-4 w-4 rounded-full border border-ivory/80"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
