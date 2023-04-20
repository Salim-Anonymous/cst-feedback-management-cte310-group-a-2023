import React from "react";
import TopBar from "~/components/Topbar";
import Sidebar from "~/components/Sidebar";
import ContentArea from "~/components/ContentArea";

type AppShellProps = {
  children?: React.ReactNode;
};
const AppShell: React.FC = ({children}:AppShellProps) => {
  return (
    <>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore*/}
      <ContentArea>
        {children}
      </ContentArea>
      <TopBar />
      <Sidebar />
    </>
  );
};

export default AppShell;