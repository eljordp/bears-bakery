import { themeOptions, type ThemeId } from "../../theme";

type ThemeSwitcherProps = {
  theme: ThemeId;
  onThemeChange: (theme: ThemeId) => void;
};

export default function ThemeSwitcher({
  theme,
  onThemeChange,
}: ThemeSwitcherProps) {
  return (
    <div
      aria-label="Style options"
      className="flex items-center gap-1 rounded-md border border-ink/15 bg-ivory/80 p-1 shadow-sm"
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
            className={`inline-flex h-8 items-center gap-2 rounded px-2 font-serif italic text-sm transition-colors ${
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
  );
}
