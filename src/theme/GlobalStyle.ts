import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }

  body {
    margin: 0;
    background: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.text};
    font-family: system-ui, sans-serif;
    font-size: ${({ theme }) => theme.fontSizes.md};
    color-scheme: ${({ theme }) => theme.name};
    transition: background 200ms ease, color 200ms ease;
  }
`;