import type { ButtonHTMLAttributes } from 'react';
import styled, { css, keyframes } from 'styled-components';

export type Variant = 'primary' | 'secondary' | 'outline' | 'danger';
export type Size = 'sm' | 'md' | 'lg';

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const Spinner = styled.span`
  width: 1em;
  height: 1em;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: ${spin} 0.7s linear infinite;
`;

const variants = {
  primary: css`
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.onPrimary};
    &:hover:not(:disabled) { background: ${({ theme }) => theme.colors.primaryHover}; }
  `,
  secondary: css`
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.onSecondary};
    &:hover:not(:disabled) { background: ${({ theme }) => theme.colors.secondaryHover}; }
  `,
  outline: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border-color: currentColor;
    &:hover:not(:disabled) { background: ${({ theme }) => theme.colors.surfaceHover}; }
  `,
  danger: css`
    background: ${({ theme }) => theme.colors.danger};
    color: ${({ theme }) => theme.colors.onDanger};
    &:hover:not(:disabled) { background: ${({ theme }) => theme.colors.dangerHover}; }
  `,
} satisfies Record<Variant, unknown>;

const sizes = {
  sm: css`
    padding: ${({ theme }) => `${theme.space(1)} ${theme.space(3)}`};
    font-size: ${({ theme }) => theme.fontSizes.sm};
  `,
  md: css`
    padding: ${({ theme }) => `${theme.space(2)} ${theme.space(4)}`};
    font-size: ${({ theme }) => theme.fontSizes.md};
  `,
  lg: css`
    padding: ${({ theme }) => `${theme.space(3)} ${theme.space(6)}`};
    font-size: ${({ theme }) => theme.fontSizes.lg};
  `,
} satisfies Record<Size, unknown>;

const StyledButton = styled.button<{ $variant: Variant; $size: Size; $loading: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space(2)};
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.radius.md};
  font: inherit;
  cursor: pointer;
  transition: background 150ms ease;

  ${({ $variant }) => variants[$variant]}
  ${({ $size }) => sizes[$size]}

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.focus};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ $loading }) => $loading && css`cursor: progress;`}
`;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
}

export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled,
  children,
  ...rest
}: ButtonProps) {
  return (
    <StyledButton
      $variant={variant}
      $size={size}
      $loading={loading}
      disabled={disabled || loading}
      aria-busy={loading}
      {...rest}
    >
      {loading && <Spinner aria-hidden />}
      {children}
    </StyledButton>
  );
}