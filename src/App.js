import { useState } from "react";
import "./App.css";
import ListSongs from "./components/ListSongs";
import Navbar from "./components/Navbar";
import PlayingSong from "./components/PlayingSong";
import SongDetail from "./components/SongDetail";
import { Songs } from "./Context";
import DataSongs from "./data/listsongs.json";
function App() {
  const [song, setSong] = useState(DataSongs[0]);

  const handleSetSong = (idSong) => {
    const song = DataSongs.find((song) => song.id === idSong);
    if (!song) setSong(DataSongs[0]);
    else setSong(song);
  };
  return (
    <div className="App">
      <Songs.Provider value={{ DataSongs, song, handleSetSong }}>
        <Navbar />
        <div className="grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden">
          <SongDetail />
          <ListSongs />
        </div>
        <PlayingSong />
      </Songs.Provider>
    </div>
  );
}

export default App;
