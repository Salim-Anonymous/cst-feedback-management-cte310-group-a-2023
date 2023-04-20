import React from "react";

type ContentAreaProps = {
  children?: React.ReactNode;
}
const ContentArea: React.FC = ({children}:ContentAreaProps) => {
  return (
    <main className="fixed top-20 overflow-y-auto p-4 h-full w-full right-0 flex flex-col items-center justify-start bg-gray-600">
      {children}
    </main>
  )
}

export default ContentArea;