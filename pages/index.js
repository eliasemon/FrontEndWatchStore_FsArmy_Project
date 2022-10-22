// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

import Head from "next/head";
import { ThemeProvider } from "styled-components";
import theme from './theme';

export default function Home() {
  return (
    <>
      {/* <Head>
        <title>Watch Store #Team-F</title>
        <link rel="icon" href="/watch-favicon.ico" />
      </Head> */}
      <ThemeProvider theme={theme}>
      <h1> Hello Watch Store </h1>
      </ThemeProvider>

    </>
  );
}
