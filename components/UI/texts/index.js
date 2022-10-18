import styled, {css} from "styled-components";

const fontSizes = {
  sm: "0.8rem",
  md: "1.2rem",
  lg: "1.65rem",
  xl: "3.75rem",
};

const lineHeights = {
  sm: "1.2",
  md: "1.4",
  lg: "1.6",
};

const Text = css`
  font-size: ${(props) => fontSizes[props.size] ?? "1rem"};
  color: ${(props) => props.color ?? "black"};
  line-height: ${(props) => lineHeights[props.line] ?? 1};
`;

export const BlockText = styled.p`
  ${Text}
`

export const InlineText = styled.span`
  ${Text}
`