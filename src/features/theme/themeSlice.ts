import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { palettes, themeIds, type ThemeId } from '@/theme/palettes';

export const THEME_KEY = 'klnp-theme';

function initial(): ThemeId {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved && saved in palettes) return saved as ThemeId;
  } catch { /* storage unavailable */ }
  return 'dark';
}

const slice = createSlice({
  name: 'theme',
  initialState: { id: initial() as ThemeId },
  reducers: {
    setTheme: (s, a: PayloadAction<ThemeId>) => { s.id = a.payload; },
    cycleTheme: (s) => { s.id = themeIds[(themeIds.indexOf(s.id) + 1) % themeIds.length]; },
  },
});
export const { setTheme, cycleTheme } = slice.actions;
export default slice.reducer;
