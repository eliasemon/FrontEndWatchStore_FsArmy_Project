import styled, { css } from "styled-components";

const Text = css`
  font-size: ${({ size, theme }) => theme.fontSizes[size] ?? "1rem"};
  color: ${({ color, theme }) =>
    color === "primary" ? theme?.color?.primaryColor : theme?.color?.textColor};
  line-height: ${({ line, theme }) => theme.lineHeights[line] ?? 1};
  font-weight: ${({weight, theme}) => theme?.fontWeight[weight] ?? theme?.fontWeight['regular']};
  text-decoration: ${(props) => props.cross ? 'line-through' : 'none'};
`;

export const BlockText = styled.p`
  ${Text}
`;

export const InlineText = styled.span`
  ${Text}
`;
