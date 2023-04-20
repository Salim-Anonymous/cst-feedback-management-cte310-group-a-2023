import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/Avatar";
import { MoreHorizontal } from "lucide-react";
import Image from "next/image";

const Post: React.FC = () => {
  return(
    <div className="p-4 my-6 w-full bg-white rounded-md">
      <div className="flex items-center">
        <Avatar id="avatar">
          <AvatarImage src="https://avatars.githubusercontent.com/u/73750430?v=4" />
          <AvatarFallback>SP</AvatarFallback>
        </Avatar>
        <div className="flex flex-col ml-4">
          <h1 className="text-md font-semibold">Salim Anonymous</h1>
          <p className="text-sm">2 days ago</p>
        </div>
        <MoreHorizontal
          className="ml-auto"
          size={24}
          color="#000"
        />
      </div>
      <div className="mt-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <img src="https://unsplash.it/500/300" />
      </div>
      <div className="flex">
        status bar
      </div>
      <hr />
      <div className="flex">
        action bar
      </div>
      <hr />
    </div>
  )
}

export default Post;