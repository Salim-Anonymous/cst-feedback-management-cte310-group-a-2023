import {type NextPage } from "next";
import Head from "next/head";
import React from "react";
import AppShell from "~/components/AppShell";
import Post from "~/components/Post";

const Dashboard:NextPage = () => {
  return (
    <>
      <Head>
        <title>CST-FMS</title>
        <meta name="description" content="login page got cst feedback management system" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore*/}
      <AppShell>
          <Post />
      </AppShell>
    </>
  );
}

export default Dashboard;