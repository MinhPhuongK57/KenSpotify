import React, { useContext, useEffect, useState } from "react";
import { Songs } from "../../Context";
import { StyledListSong } from "./StyledListSong.js";

export default function ListSongs() {
  const { DataSongs, handleSetSong, song } = useContext(Songs);
  const [idSong, setidSong] = useState(0);
  const handlePlaySong = (idSong) => {
    setidSong(idSong);
    handleSetSong(idSong);
  };
  useEffect(() => {
    setidSong(song.id);
  }, [song]);
  return (
    <StyledListSong>
      <table className="listSong">
        <thead className="listSong__heading">
          <tr>
            <th className="listSong__heading--percent10">#</th>
            <th className="listSong__heading--textLeft">
              Tên bài hát <span className="listSongBlock">- Tác giả</span>
            </th>
            <th className="listSong__heading--percent10 listSongHidden">
              Tác giả
            </th>
            <th className="listSong__heading--percent10 listSong__heading--percent15">
              Tải xuống
            </th>
          </tr>
        </thead>
        <tbody className="listSong__body">
          {DataSongs.map((song, index) => (
            <tr
              key={index}
              className={`listSong__body--BG ${
                idSong === song.id && "listSong__body--BGChecked"
              }`}
              onClick={() => handlePlaySong(song.id)}
            >
              <td className="text-center">{index + 1}</td>
              <td className="listSong__body--author">
                {song.name}
                <strong className="listSongBlock">
                  &nbsp;-- &nbsp;[ {song.author} ]
                </strong>
              </td>
              <td className="text-center noWrap listSongHidden">
                {song.author}
              </td>
              <td className="text-center">
                <a href={song.url}>
                  <i className="fa fa-arrow-down"></i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </StyledListSong>
  );
}
