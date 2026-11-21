import styled from 'styled-components';

export const Input = styled.input<{ $invalid?: boolean }>`
  width: 100%;
  padding: ${({ theme }) => `${theme.space(2)} ${theme.space(3)}`};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid
    ${({ theme, $invalid }) => ($invalid ? theme.colors.danger : theme.colors.border)};
  border-radius: ${({ theme }) => theme.radius.md};
  font: inherit;

  &::placeholder { color: ${({ theme }) => theme.colors.textMuted}; }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.focus};
    outline-offset: 1px;
  }
`;