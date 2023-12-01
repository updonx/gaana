import React, { createContext, useState } from "react";

const MusicContext = createContext();

const MusicProvider = ({ children }) => {
  const [songs, setSongs] = useState(); // Corrected variable name
  const [isPlaying, setIsPlaying] = useState(true);
  const [curuntsong, setCruntsong] = useState();

  return (
    <MusicContext.Provider
      value={{ songs, setSongs, isPlaying, setIsPlaying, curuntsong, setCruntsong }}
    >
      {children}
    </MusicContext.Provider>
  );
};

export { MusicProvider, MusicContext };
