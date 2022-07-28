import React, { useContext } from "react";
import { Songs } from "../../Context";
import { StyleSongDetail } from "./StyleSongDetail.js";
export default function SongDetail() {
  const { song } = useContext(Songs);
  return (
    <StyleSongDetail>
      <div className="songDetail">
        <span>Bài hát bạn đang nghe</span>
        <h2 className="songDetail__name">{song.name}</h2>
        <div className="songDetail__content">
          <div className="songDetail__content--img">
            <img
              src={song.links.images[0].url}
              alt={song.links.images[0].url}
            />
          </div>
          <div className="songDetail__content--detail">
            <div className="songDetail__content--detailImg rotating">
              <img
                src={song.links.images[1].url}
                alt={song.links.images[1].url}
              />
            </div>
            <div className="songDetail__content--detailAuthor">
              {song.author}
            </div>
          </div>
        </div>
      </div>
    </StyleSongDetail>
  );
}
