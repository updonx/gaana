import { useContext, useEffect, useRef } from "react";
import { FaPlayCircle, FaStepBackward } from "react-icons/fa";
import { ImNext2 } from "react-icons/im";
import { MusicContext } from "../contexts/Music";
import { song } from "../contexts/song";
import './musicplayer.css';

function MusicPlayer() {
  const { thumbnail, title, cruntsong } = useContext(song);
  const { isPlaying, setIsPlaying } = useContext(MusicContext);
  const audioElement = useRef();

  useEffect(() => {
    if (isPlaying) {
      audioElement.current.play();
    } else {
      audioElement.current.pause();
    }
  }, [isPlaying]);

  const playPauseHandler = () => {
    setIsPlaying(!isPlaying);
  };

  const nextTrackHandler = () => {
    // Implement logic to play the next track
  };

  const prevTrackHandler = () => {
    // Implement logic to play the previous track
  };

  return (
    <div className="mainContainer">
      <div className="player">
        <ul className='info'>
          <li>
            <img src={thumbnail} alt="" height={50} width={60} id='main-poster' />
          </li>
          <li>
            <span id='bt'>Premium</span>
          </li>
          <li id='tit'>
            <p>{title}</p>
          </li>
        </ul>
      </div>
      <audio src={cruntsong} ref={audioElement}></audio>
      {/* musicPlayer */}
      <div className="musicPlayer">
        <ul className="ul">
          <li id="play" onClick={playPauseHandler}>
            <FaPlayCircle style={{ fontSize: '2em', color: isPlaying ? 'red' : 'gray' }} />
          </li>
          <li id="next" onClick={nextTrackHandler}>
            <ImNext2 style={{ fontSize: '1.4em' }} />
          </li>
          <li id="prev" onClick={prevTrackHandler}>
            <FaStepBackward style={{ fontSize: '1.4em' }} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MusicPlayer;
