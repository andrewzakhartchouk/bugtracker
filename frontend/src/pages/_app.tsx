import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import { AuthGuard, Navbar } from "components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Hitlist.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RecoilRoot>
        <AuthGuard>
          <div className="flex flex-col h-screen bg-bg-green bg-bottom bg-waves overflow-y-scroll no-scrollbar">
            <Navbar></Navbar>
            <Component {...pageProps} />
          </div>
        </AuthGuard>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
