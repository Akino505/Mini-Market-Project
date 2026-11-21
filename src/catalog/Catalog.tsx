import { useMemo, useState } from 'react';
import styled from 'styled-components';
import { Button, Grid, Input } from '../components';
import { ProductCard } from './ProductCard';
import { PRODUCTS } from './products';

const Toolbar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space(3)};
  margin-bottom: ${({ theme }) => theme.space(6)};
`;

const SearchWrap = styled.div`
  flex: 1 1 240px;
`;

const Empty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.space(3)};
  padding: ${({ theme }) => theme.space(12)} 0;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const ALL = 'Все';
const categories = [ALL, ...new Set(PRODUCTS.map((p) => p.category))];

export function Catalog({ onAdd }: { onAdd: () => void }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState(ALL);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PRODUCTS.filter(
      (p) =>
        (category === ALL || p.category === category) &&
        p.title.toLowerCase().includes(q),
    );
  }, [query, category]);

  const reset = () => { setQuery(''); setCategory(ALL); };

  return (
    <>
      <Toolbar>
        <SearchWrap>
          <Input
            placeholder="Поиск по названию"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </SearchWrap>
        {categories.map((c) => (
          <Button
            key={c}
            size="sm"
            variant={c === category ? 'primary' : 'outline'}
            onClick={() => setCategory(c)}
          >
            {c}
          </Button>
        ))}
      </Toolbar>

      {visible.length === 0 ? (
        <Empty>
          <span style={{ fontSize: 48 }}>🔍</span>
          <p>Ничего не найдено</p>
          <Button variant="secondary" onClick={reset}>Сбросить фильтры</Button>
        </Empty>
      ) : (
        <Grid>
          {visible.map((p) => (
            <ProductCard key={p.id} product={p} onAdd={onAdd} />
          ))}
        </Grid>
      )}
    </>
  );
}