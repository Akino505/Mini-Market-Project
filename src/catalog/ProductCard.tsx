import { useState } from 'react';
import styled from 'styled-components';
import { Badge, Button, Card } from '../components';
import { formatPrice, type Product } from './products';

const Cover = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.brandSoft};
`;

const Title = styled.h3`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

const Footer = styled.div`
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Price = styled.span`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

interface Props {
  product: Product;
  onAdd: (p: Product) => void;
}

export function ProductCard({ product, onAdd }: Props) {
  const [loading, setLoading] = useState(false);

  const handleAdd = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    onAdd(product);
    setLoading(false);
  };

  return (
    <Card>
      <Cover src={product.image} alt={product.title} loading="lazy" />
      <div>
        {product.isNew && <Badge $tone="success">Новинка</Badge>}{' '}
        <Badge $tone="neutral">{product.category}</Badge>
      </div>
      <Title>{product.title}</Title>
      <Footer>
        <Price>{formatPrice(product.price)}</Price>
        <Button size="sm" loading={loading} onClick={handleAdd}>
          В корзину
        </Button>
      </Footer>
    </Card>
  );
}