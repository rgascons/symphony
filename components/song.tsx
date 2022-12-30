import Image, { StaticImageData } from "next/image";
import { useRef,useState } from "react";

import { MusicPlayer } from "./music-player";


export type SongProps = {
  songImage: StaticImageData,
}

export const Song = (props: SongProps) => {
  const { songImage } = props;

  return (
    <div className="max-w-xl bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <Image
          src={songImage}
          className="object-song" alt=""/>
        <div className="absolute p-4 inset-0 flex flex-col justify-end bg-gradient-to-b from-transparent to-gray-900 backdrop backdrop-blur-5 text-white">
          <h3 className="font-bold">Super Artist</h3>
          <span className="opacity-70">Albumtitle</span>
        </div>
      </div>
      <MusicPlayer songPath="/song.mp3" />
      <ul className="text-xs sm:text-base divide-y border-t cursor-default">
        <li className="flex items-center space-x-3 hover:bg-gray-100">
          <button className="p-3 hover:bg-green-500 group focus:outline-none">
            <svg className="w-4 h-4 group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
          </button>
          <div className="flex-1">
          Artist - Title
          </div>
          <div className="text-xs text-gray-400">
          2:58
          </div>
          <button className="focus:outline-none pr-4 group">
            <svg className="w-4 h-4 group-hover:text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5"/></svg>
          </button>
        </li>
        <li className="flex items-center space-x-3 hover:bg-gray-100">
          <button className="p-3 hover:bg-green-500 group focus:outline-none">
            <svg className="w-4 h-4 group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
          </button>
          <div className="flex-1">
          Artist - Title
          </div>
          <div className="text-xs text-gray-400">
          2:58
          </div>
          <button className="focus:outline-none pr-4 group">
            <svg className="w-4 h-4 group-hover:text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5"/></svg>
          </button>
        </li>
      </ul>
    </div>
  );
};