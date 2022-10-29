import React, { useEffect, useState } from "react";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  RectangleStackIcon,
  PlusCircleIcon,
  HeartIcon,
  BookmarkIcon,
} from "@heroicons/react/24/outline";
import { signOut, useSession } from "next-auth/react";
import useSpotify from "../hooks/useSpotify";

function Sidebar() {
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((data) => {
        setPlaylists(data.body.items);
      });
    }
  }, [session, spotifyApi]);

  return (
    <div
      className=" text-gray-500 p-5 text-sm border-r border-gray-900 
    overflow-y-scroll h-screen "
    >
      <div className="space-y-4  ">
        <button
          className="flex hover:text-white space-x-2 items-center"
          onClick={() => signOut()}
        >
          <p>Log Out</p>
        </button>
        <button className="flex hover:text-white space-x-2 items-center">
          <HomeIcon className="h-5 w-5" />
          <p>Home</p>
        </button>
        <button className="flex hover:text-white space-x-2 items-center ">
          <MagnifyingGlassIcon className="h-5 w-5" />
          <p>Search</p>
        </button>
        <button className="flex hover:text-white space-x-2 items-center ">
          <RectangleStackIcon className="h-5 w-5" />
          <p>Your Library</p>
        </button>
        <hr className=" border-t-[0.1px] border-gray-900 " />
        <button className="flex hover:text-white space-x-2 items-center ">
          <PlusCircleIcon className="h-5 w-5" />
          <p>Create Playlist</p>
        </button>
        <button className="flex hover:text-white space-x-2 items-center ">
          <HeartIcon className="h-5 w-5" />
          <p>Like Songs</p>
        </button>
        <button className="flex hover:text-white space-x-2 items-center ">
          <BookmarkIcon className="h-5 w-5" />
          <p>Your Episodes</p>
        </button>
        <hr className=" border-t-[0.1px] border-gray-900 " />
        {/* Playlist ... */}
        <p className="cursor-pointer hover:text-white">Playlist name ... </p>
        <p className="cursor-pointer hover:text-white">Playlist name ... </p>
        <p className="cursor-pointer hover:text-white">Playlist name ... </p>
        <p className="cursor-pointer hover:text-white">Playlist name ... </p>
        <p className="cursor-pointer hover:text-white">Playlist name ... </p>
        <p className="cursor-pointer hover:text-white">Playlist name ... </p>
        <p className="cursor-pointer hover:text-white">Playlist name ... </p>
        <p className="cursor-pointer hover:text-white">Playlist name ... </p>
        <p className="cursor-pointer hover:text-white">Playlist name ... </p>
        <p className="cursor-pointer hover:text-white">Playlist name ... </p>
        <p className="cursor-pointer hover:text-white">Playlist name ... </p>
      </div>
    </div>
  );
}

export default Sidebar;
