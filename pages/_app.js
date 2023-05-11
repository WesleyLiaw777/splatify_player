import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      {" "}
      <Component {...pageProps} />{" "}
    </SessionProvider>
  );
}

//brackets with quotes are auto-added.. check back here if there's issues later.