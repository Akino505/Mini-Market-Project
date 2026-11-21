import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Badge, Button } from './components';
import { Catalog } from './catalog/Catalog';
import { GlobalStyle } from './theme/GlobalStyle';
import { useThemeMode } from './theme/useThemeMode';

const Page = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.space(6)};
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space(3)};
  margin-bottom: ${({ theme }) => theme.space(6)};
`;

export default function App() {
  const { theme, mode, toggle } = useThemeMode();
  const [cartCount, setCartCount] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Page>
        <Header>
          <h1>Мини-маркет</h1>
          <div>
            <Badge $tone="brand">Корзина: {cartCount}</Badge>{' '}
            <Button variant="secondary" size="lg" onClick={toggle}>
              {mode === 'dark' ? 'На светлую ☀️' : 'На темную 🌙'}
            </Button>
          </div>
        </Header>
        <Catalog onAdd={() => setCartCount((c) => c + 1)} />
      </Page>
    </ThemeProvider>
  );
}
