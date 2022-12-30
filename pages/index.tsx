import { Album } from "../components/album";
import { MusicPlayer } from "../components/music-player";
import albumImg from "../public/images/album.avif";
import profileImg from "../public/images/profile.avif";
import songImg from "../public/images/song.avif";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <Album albunImage={albumImg} profileImage={profileImg}/>
      <MusicPlayer songImage={songImg} />
    </div>
  );
}
