import { type NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>CST-FMS</title>
        <meta name="description" content="login page got cst feedback management system" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Feedback <span className="text-[hsl(280,100%,70%)]">CST</span>
          </h1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <AuthShowcase />
          </div>
      </main>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  return (
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void gotoSite() : () => void signIn()}
      >
        {sessionData ? "Go to Site" : "Sign in"}
      </button>
  );
};

const gotoSite = () => {
  window.location.href = "/dashboard";
}
