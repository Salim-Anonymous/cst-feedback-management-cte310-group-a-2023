import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/Avatar"


const TopBar: React.FC = () => {
  return (
    <div className="fixed top-0 right-0 flex items-center justify-between px-8 w-full sm:w-4/5 h-20 bg-gray-900">
      <h1>Feedback Management System</h1>
      <Avatar>
        <AvatarImage src="https://avatars.githubusercontent.com/u/73750430?v=4" />
        <AvatarFallback>SP</AvatarFallback>
      </Avatar>
    </div>
  )
}

export default TopBar;