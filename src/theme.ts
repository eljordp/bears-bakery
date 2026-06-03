export type ThemeId = "heirloom" | "island" | "modern";

export const themeOptions: Array<{
  id: ThemeId;
  label: string;
  swatches: [string, string, string];
}> = [
  {
    id: "heirloom",
    label: "Heirloom",
    swatches: ["#2b1d12", "#f7f0e3", "#6f7d5d"],
  },
  {
    id: "island",
    label: "Island",
    swatches: ["#1c342d", "#fff8e6", "#e8a83a"],
  },
  {
    id: "modern",
    label: "Modern",
    swatches: ["#1a1b19", "#faf9f4", "#923126"],
  },
];

export function isThemeId(value: string | null): value is ThemeId {
  return themeOptions.some((theme) => theme.id === value);
}
