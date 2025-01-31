import { useEffect, useRef, useState } from "react";
import { assets, songsData } from "../assets/assets";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentSong,
  togglePlay,
  togglePlayTrue,
} from "../../features/playerSlice";

function Player() {
  const audioRef = useRef();
  const seekRef = useRef();
  const seekBg = useRef();
  const dispatch = useDispatch();
  const [totalDuration, setTotalDuration] = useState(0);
  const [currentDuration, setCurrentDuration] = useState(0);
  const playerState = useSelector((state) => {
    return state.playerSlice;
  });
  const track = playerState.currentSong;

  useEffect(() => {
    if (playerState.currentSong && playerState.isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [playerState.isPlaying, playerState.currentSong]);

  useEffect(() => {
    audioRef.current.ontimeupdate = () => {
      setCurrentDuration(audioRef.current.currentTime);
      const width = `${Math.floor((currentDuration / totalDuration) * 100)}%`;
      seekBg.current.style.width = width;
      if (totalDuration === audioRef.current.currentTime) {
        dispatch(togglePlay());
      }
    };
  });

  const playSongOnSeek = (e) => {
    const totalLengthOfSeek = seekRef.current.offsetWidth;
    const userSeekWidth = e.nativeEvent.offsetX;
    const userSeekPercentage = userSeekWidth / totalLengthOfSeek;
    audioRef.current.currentTime = totalDuration * userSeekPercentage;
    dispatch(togglePlayTrue());
  };

  return (
    <div className="h-[20%] sm:h-[10%]  w-full px-4 flex justify-center m-auto lg:justify-between items-center grow-0 shrink-0 text-white ">
      <div className="justify-start items-center gap-4 hidden lg:flex min-w-[160px]">
        <img className="w-12" src={track.image} alt="image" />
        <div>
          <p className="">{track.name}</p>
          <p className="text-sm">{track.desc.slice(0, 12)}</p>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center gap-4 sm:gap-2">
        <div className="flex justify-center items-center gap-5">
          <img
            className="w-4 cursor-pointer"
            src={assets.shuffle_icon}
            alt=""
          />
          <img
            onClick={() => {
              if (track.id > 0) {
                dispatch(setCurrentSong(songsData[Number(track.id) - 1]));
              }
            }}
            className="w-4 cursor-pointer"
            src={assets.prev_icon}
            alt=""
          />
          {!playerState.isPlaying ? (
            <img
              onClick={() => {
                dispatch(togglePlay());
              }}
              className="w-4 cursor-pointer"
              src={assets.play_icon}
              alt=""
            />
          ) : (
            <img
              onClick={() => {
                dispatch(togglePlay());
              }}
              className="w-4 cursor-pointer"
              src={assets.pause_icon}
              alt=""
            />
          )}
          <img
            onClick={() => {
              if (track.id < songsData.length - 1) {
                dispatch(setCurrentSong(songsData[Number(track.id) + 1]));
              }
            }}
            className="w-4 cursor-pointer"
            src={assets.next_icon}
            alt=""
          />
          <img className="w-4 cursor-pointer" src={assets.loop_icon} alt="" />
        </div>
        <div className=" flex justify-center items-center gap-4">
          <p className="hidden md:block">{`${Math.floor(currentDuration / 60)
            .toString()
            .padStart(2, 0)} : ${Math.floor(currentDuration % 60)
            .toString()
            .padStart(2, 0)}`}</p>
          <div
            onClick={(e) => {
              playSongOnSeek(e);
            }}
            ref={seekRef}
            className="w-[60vw] max-w-[560px] bg-white rounded-full cursor-pointer"
          >
            <hr
              ref={seekBg}
              className="h-1 border-none w-0 bg-green-800 rounded-full"
            />
          </div>
          <p className="hidden md:block">{`${Math.floor(totalDuration / 60)
            .toString()
            .padStart(2, 0)} : ${Math.floor(totalDuration % 60)
            .toString()
            .padStart(2, 0)}`}</p>
        </div>
      </div>
      <div className=" hidden lg:flex justify-center items-center gap-2">
        <img className="w-4 cursor-pointer" src={assets.plays_icon} alt="" />
        <img className="w-4 cursor-pointer" src={assets.mic_icon} alt="" />
        <img className="w-4 cursor-pointer" src={assets.queue_icon} alt="" />
        <img className="w-4 cursor-pointer" src={assets.speaker_icon} alt="" />
        <img className="w-4 cursor-pointer" src={assets.volume_icon} alt="" />
        <div className=" cursor-pointer w-20 bg-white rounded-full">
          <hr className="h-1 w-[50%] bg-green-800 border-none rounded-full" />
        </div>
        <img className="w-4 cursor-pointer" src={assets.zoom_icon} alt="" />
      </div>
      <audio
        ref={audioRef}
        onLoadedMetadata={(e) => {
          setTotalDuration(audioRef.current.duration);
        }}
        preload="auto"
        src={track.file}
      />
    </div>
  );
}

export default Player;
