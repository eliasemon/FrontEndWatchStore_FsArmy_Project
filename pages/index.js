import { ThemeProvider } from "styled-components";
import theme from "./theme";
import Layout from "../components/layout";
import GlobalStyle from "../components/globalStyles";

export default function Home() {
  return (
    <>
      {/* <Head>
        <title>Watch Store #Team-F</title>
        <link rel="icon" href="/watch-favicon.ico" />
      </Head> */}

      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout />
      </ThemeProvider>
    </>
  );
}
