import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { AppContext } from "../contexts/context";
import "./musicDetail.css";
import Alltrack from "./Alltrack/Alltrack";
import { song } from "../contexts/song";

function Music_detail_card() {
  const { id } = useParams();
  const song_data = useContext(AppContext);
  const { cruntsong, setCruntsong, thumbnail, setThumbnail, title, setTitle } = useContext(song);

 console.log(cruntsong)
  const songDetail = song_data.filter((fin) => {
    return id === fin._id || id === fin._id;
  });
  // console.log(songDetail[0]);

  return (
    <>
      <Link to="/music">
        <div>
          <section className="album">
            <div className="link">
              <ul>
                <Link to="/">Gaana &gt; </Link>
                <Link to="/">Playlist &gt; </Link>
                <Link to="/">Hindi_Top50 </Link>
              </ul>
            </div>
            <div className="poster">
              <img className="p" src={songDetail[0].thumbnail} alt="" />
            </div>

            <div className="rightMusic">
              <p className="title">
                {songDetail[0].title} {songDetail[0].type}| {songDetail[0].artist[0].name}
              </p>
              <h1 className="songname"> {songDetail[0].title} </h1>
              <p className="songlink">{songDetail[0].title}</p>
              <p className="artist">{songDetail[0].artist[0].name} </p>

              <button
                id="song"
                type="submit"
                onClick={() => {
                  setThumbnail(songDetail[0].thumbnail);
                  setTitle(songDetail[0].title);
                  setCruntsong(songDetail[0].audio_url
                    )
                  
                }}
              >
                Play Song
              </button>
            </div>
          </section>
          <div className="trackInformation">
            <p>Track</p>
            <p className="ar1">Artist</p>
            <p>Album</p>
          </div>
        </div>
      </Link>

      <Alltrack />
    </>
  );
}

export default Music_detail_card;
