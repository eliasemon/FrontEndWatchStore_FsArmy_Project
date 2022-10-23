import styled from "styled-components";

const Background = styled.div`
  background-color: ${({ bg, theme }) =>
    bg === "primary"
      ? theme?.color?.primaryColor
      : theme?.color?.secondaryColor};
`;

export default Background;
