export interface AppTheme {
  name: 'light' | 'dark';
  colors: {
    bg: string; surface: string; surfaceHover: string;
    text: string; textMuted: string; border: string;
    primary: string; primaryHover: string; onPrimary: string;
    secondary: string; secondaryHover: string; onSecondary: string;
    danger: string; dangerHover: string; onDanger: string;
    success: string; successSoft: string;
    brandSoft: string;
    focus: string;
    shadow: string;
  };
  radius: { sm: string; md: string; lg: string };
  fontSizes: { sm: string; md: string; lg: string };
  breakpoints: { sm: string; lg: string; xl: string };
  space: (n: number) => string;
}

const shared = {
  radius: { sm: '6px', md: '10px', lg: '16px' },
  fontSizes: { sm: '14px', md: '16px', lg: '18px' },
  breakpoints: { sm: '600px', lg: '960px', xl: '1280px' },
  space: (n: number) => `${n * 4}px`,
};

export const light: AppTheme = {
  ...shared,
  name: 'light',
  colors: {
    bg: '#f6f7f9', surface: '#ffffff', surfaceHover: '#eef0f4',
    text: '#14161a', textMuted: '#5b6270', border: '#d9dde3',
    primary: '#3b5bdb', primaryHover: '#2f4ac0', onPrimary: '#ffffff',
    secondary: '#e3e7ef', secondaryHover: '#d3d9e6', onSecondary: '#14161a',
    danger: '#d6336c', dangerHover: '#b82a5c', onDanger: '#ffffff',
    success: '#2b8a3e', successSoft: '#e6f4ea',
    brandSoft: '#e7ecff',
    focus: '#74a0ff',
    shadow: 'rgba(20, 22, 26, 0.12)',
  },
};

export const dark: AppTheme = {
  ...shared,
  name: 'dark',
  colors: {
    bg: '#0f1115', surface: '#171a21', surfaceHover: '#212631',
    text: '#e8eaee', textMuted: '#9aa3b2', border: '#2b303b',
    primary: '#7c94ff', primaryHover: '#94a8ff', onPrimary: '#0f1115',
    secondary: '#262b36', secondaryHover: '#323847', onSecondary: '#e8eaee',
    danger: '#f06595', dangerHover: '#f783ac', onDanger: '#0f1115',
    success: '#69db7c', successSoft: '#17301f',
    brandSoft: '#222a4d',
    focus: '#94a8ff',
    shadow: 'rgba(0, 0, 0, 0.5)',
  },
};