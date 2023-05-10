import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Dashboard from "@/components/Dashboard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Spotify Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Dashboard/>
    </div>
  );
}
