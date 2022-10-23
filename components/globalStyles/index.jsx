import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: none;
}

body {
  font-family: ${({ theme }) => theme?.typography};
}

p{
  font-size: 1.125rem;
  font-weight: 400;
  color: #333;
}

span{
  display: inline-block;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
`;
export default GlobalStyle;
