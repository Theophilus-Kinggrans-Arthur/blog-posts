import { SessionProvider } from "next-auth/providers";

import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, session, ...pageProps }) {
  return (
    <SessionProvider session={session}>
      <Navbar />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
