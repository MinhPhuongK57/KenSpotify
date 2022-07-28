import { useState } from "react";
import ListSongs from "./components/ListSong";
import Navbar from "./components/Navbar";
import PlayingSong from "./components/PlayingSong";
import SongDetail from "./components/SongDetail";
import { Songs } from "./Context";
import DataSongs from "./data/listsongs.json";
import { StyleKenSpotify } from "./StyleKenSpotify";
function App() {
  const [song, setSong] = useState(DataSongs[0]);

  const handleSetSong = (idSong) => {
    const song = DataSongs.find((song) => song.id === idSong);
    if (!song) setSong(DataSongs[0]);
    else setSong(song);
  };
  return (
    <StyleKenSpotify>
      <Songs.Provider value={{ DataSongs, song, handleSetSong }}>
        <Navbar />
        <div className="boxSong">
          <SongDetail />
          <ListSongs />
        </div>
        <PlayingSong />
      </Songs.Provider>
    </StyleKenSpotify>
  );
}

export default App;
