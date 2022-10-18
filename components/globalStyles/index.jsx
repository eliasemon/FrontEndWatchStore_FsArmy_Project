import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: none;
  font-family: "Montserrat", sans-serif;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

body {
  font-family: 'Montserrat', sans-serif;
}
`;
export default GlobalStyle;
