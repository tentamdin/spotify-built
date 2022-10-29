import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { shuffle } from "lodash";

const colors = [
  "from-indigo-500",
  "from-blue-500",
  "from-green-500",
  "from-yellow-500",
  "from-pink-500",
  "from-purple-500",
  "from-cyan-500",
  "from-orange-500",
];

function Center() {
  const [color, setColor] = useState(null);
  const { data: session } = useSession();

  useEffect(() => {
    setColor(shuffle(colors).pop());
  }, []);

  return (
    <div className="flex-grow text-white ">
      <header className="absolute top-5 right-8">
        <div className="flex items-center space-x-2 opacity-90 hover:opacity-80 cursor-pointer bg-black rounded-full p-1 pr-2">
          <img
            alt="profile-img"
            className="rounded-full w-10 h-30 "
            src={session?.user.image}
          />
          <h2>{session?.user.name}</h2>
          <ChevronDownIcon className="w-5 h-5" />
        </div>
      </header>

      <section
        className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white p-8`}
      >
        <h2>hello</h2>
      </section>
    </div>
  );
}

export default Center;
