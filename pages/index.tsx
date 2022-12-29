import Image from "next/image";

import album from "../public/images/album.avif";
import profile from "../public/images/profile.avif";
import song from "../public/images/song.avif";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="relative max-w-xl w-full h-36 bg-white rounded-lg shadow-lg overflow-hidde mb-32">
        <div className="absolute inset-0 rounded-lg overflow-hidden bg-red-200">
          <Image src={album} alt=""/>
          <div className="absolute inset-0 backdrop backdrop-blur-10 bg-gradient-to-b from-transparent to-black">
          </div>
        </div>
        <div className="absolute flex space-x-6 transform translate-x-6 translate-y-8">
          <div className="w-36 h-36 rounded-lg shadow-lg overflow-hidden">
            <Image src={profile} alt="" />
          </div>
          <div className="text-white pt-12">
            <h3 className="font-bold">Album</h3>
            <div className="text-sm opacity-60">Super Interpret</div>
            <div className="mt-8 text-gray-400">
              <div className="flex items-center space-x-2 text-xs">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
                <span>Easy listening</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative">
          <Image
            src={song}
            className="object-song" alt=""/>
          <div className="absolute p-4 inset-0 flex flex-col justify-end bg-gradient-to-b from-transparent to-gray-900 backdrop backdrop-blur-5 text-white">
            <h3 className="font-bold">Super Artist</h3>
            <span className="opacity-70">Albumtitle</span>
          </div>
        </div>
        <div>
          <div className="relative h-1 bg-gray-200">
            <div className="absolute h-full w-1/2 bg-green-500 flex items-center justify-end">
              <div className="rounded-full w-3 h-3 bg-white shadow"></div>
            </div>
          </div>
        </div>
        <div className="flex justify-between text-xs font-semibold text-gray-500 px-4 py-2">
          <div>
        1:50
          </div>
          <div className="flex space-x-3 p-2">
            <button className="focus:outline-none">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line></svg>
            </button>
            <button className="rounded-full w-8 h-8 flex items-center justify-center pl-0.5 ring-2 ring-gray-100 focus:outline-none">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            </button>
            <button className="focus:outline-none">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line></svg>
            </button>
          </div>
          <div>
        3:00
          </div>
        </div>
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
    </div>
  );
}
