import "../styles/globals.scss";
import "../styles/nav.scss";
import "../styles/landing.scss";
import "../styles/projects.scss";
import "../styles/technologies.scss";
import "../styles/about.scss";
import "../styles/contact.scss";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
