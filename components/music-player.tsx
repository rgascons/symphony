import { useCallback, useEffect, useRef, useState } from "react";

export type MusicPlayerProps = {
  songPath: string
};

const formatMMSS = (time: number) => {
  var minutes = Math.floor(time / 60);
  var seconds = Math.floor(time) - minutes * 60;

  const str_pad_left = (str: number, pad: string, len: number) => {
    return (new Array(len+1).join(pad)+str).slice(-len);
  };

  return str_pad_left(minutes, '0', 2) + ':' + str_pad_left(seconds, '0', 2);
};

export const MusicPlayer = (props: MusicPlayerProps) => {
  const { songPath } = props;

  const audioRef = useRef<HTMLAudioElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [isSongPlaying, setIsSongPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [progressBarPosition, setProgressBarPosition] = useState<string>('2%');
  const [duration, setDuration] = useState<string>('0:00');

  const handleCurrentTimeChange = useCallback((e: Event) => {
    const audio = e.target as HTMLAudioElement;
    setCurrentTime(audio.currentTime);

    // Sets the progress bar width.
    // The min percentage supported by the CSS is 2%.
    const percentageWholeNumber = Math.max(2, audio.currentTime / audio.duration*100);
    setProgressBarPosition(`${percentageWholeNumber}%`);
  }, []);

  const addDuration = useCallback((e: Event) => {
    const audio = e.target as HTMLAudioElement;
    setDuration(formatMMSS(audio.duration));
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;
    const audio = audioRef.current;
    audio.addEventListener('timeupdate', handleCurrentTimeChange);
    audio.addEventListener('canplay', addDuration);
  }, [handleCurrentTimeChange, addDuration]);

  const playSong = () => {
    if (!audioRef.current) return;
    if (!isSongPlaying) {
      audioRef.current.play();
      setIsSongPlaying(true);
    } else {
      audioRef.current.pause();
      setIsSongPlaying(false);
    }
  };

  useEffect(() => {
    if (!audioRef.current) return;
    const audio = audioRef.current;
    audio.pause();
    audio.load();
    setIsSongPlaying(false);
    setProgressBarPosition('2%');
  }, [songPath]);

  const handleChangeOfTrackTime = (event: React.MouseEvent) => {
    if (!progressBarRef.current || !audioRef.current) return;

    // Provides information about the size of an element and its position relative to the viewport.
    // More info at https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
    const progressBarRect = progressBarRef.current.getBoundingClientRect();

    const relativeClickPos = event.nativeEvent.clientX - progressBarRect.left;
    const clickedTime = (audioRef.current.duration * relativeClickPos) / progressBarRect.width;
    const newProgressPosition = `${((relativeClickPos / progressBarRect.width) * 100).toFixed(2)}%`;
    setProgressBarPosition(newProgressPosition);
    setCurrentTime(clickedTime);
    audioRef.current.currentTime = clickedTime;
  };

  return (
    <>
      <div>
        <div className="relative h-1 bg-gray-200" ref={progressBarRef} onMouseDown={handleChangeOfTrackTime}>
          <div className="absolute h-full bg-green-500 flex items-center justify-end" style={{width: progressBarPosition}}>
            <div className="rounded-full w-3 h-3 hover:w-4 hover:h-4 bg-white shadow"></div>
          </div>
        </div>
      </div>
      <div className="flex justify-between text-xs font-semibold text-gray-500 px-4 py-2">
        <audio controls={false} ref={audioRef}>
          <source src={songPath}/>
        </audio>
        <div>
          {formatMMSS(currentTime)}
        </div>
        <div className="flex space-x-3 p-2">
          <button className="focus:outline-none">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line></svg>
          </button>
          <button className="rounded-full w-8 h-8 flex items-center justify-center pl-0.5 ring-2 ring-gray-100 focus:outline-none" onClick={playSong}>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              {isSongPlaying ? 
                <><line x1="17" y1="5" x2="17" y2="19"></line><line x1="7" y1="5" x2="7" y2="19"></line></> : 
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              }
            </svg>
          </button>
          <button className="focus:outline-none">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line></svg>
          </button>
        </div>
        <div>
          {duration}
        </div>
      </div>
    </>
  );
};