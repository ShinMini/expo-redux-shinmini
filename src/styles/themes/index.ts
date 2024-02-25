import { Colors } from '../constants';


const DarkColorTheme = {
  ...Colors,
};
const LightColorTheme = {
  ...Colors,
};

export const Themes = {
  DarkColorTheme,
  LightColorTheme,
} as const;
