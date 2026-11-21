import styled, { css } from 'styled-components';

type Tone = 'brand' | 'success' | 'neutral';

const tones = {
  brand: css`
    background: ${({ theme }) => theme.colors.brandSoft};
    color: ${({ theme }) => theme.colors.primary};
  `,
  success: css`
    background: ${({ theme }) => theme.colors.successSoft};
    color: ${({ theme }) => theme.colors.success};
  `,
  neutral: css`
    background: ${({ theme }) => theme.colors.surfaceHover};
    color: ${({ theme }) => theme.colors.textMuted};
  `,
} satisfies Record<Tone, unknown>;

export const Badge = styled.span<{ $tone?: Tone }>`
  display: inline-block;
  width: fit-content;
  padding: ${({ theme }) => `${theme.space(0.5)} ${theme.space(2)}`};
  border-radius: 999px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
  ${({ $tone = 'brand' }) => tones[$tone]}
`;