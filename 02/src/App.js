import React, { useState, useEffect } from "react";
import "./styles.css";
import api from "./services";

import MyIframe from "./components/MyIframe";

function App() {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isListVisible, setIsListVisible] = useState(true);
  const [selectedPlaylistId, setSelectedPlaylistId] = useState("");

  // especificar se quer listar playlists ou vídeos - type: ''
  // ja to iniciando com lofi fodase n é o importante agr
  async function initLoadYoutubeData(type) {
    const res = await api.get("/search", {
      params: {
        q: "lofi",
        type,
      },
    });
    console.log(res.data.items);
    setPlaylists(res.data.items);
    setLoading(false);
  }

  useEffect(() => {
    initLoadYoutubeData("playlist");
  }, []);

  function handleClickPlaylist(idPlaylist) {
    setIsListVisible(false);
    setSelectedPlaylistId(idPlaylist);
  }

  // então fodase passei o index mermo
  // <li>{video.snippet.title}</li>

  // se for usar vídeo = linkar para video+video.id.videoId
  // se for usar playlist = linkar para playlist+video.id.playlistId

  if (loading)
    return (
      <div>
        <h1>Carregando...</h1>
      </div>
    );

  return (
    <div className="container">
      {isListVisible ? (
        <>
          <h1>Playlists</h1>
          <ul>
            {playlists.map((playlist) => (
              <div
                key={playlist.id.playlistId}
                className="item"
                onClick={() => handleClickPlaylist(playlist.id.playlistId)}
              >
                <img
                  src={playlist.snippet.thumbnails.medium.url}
                  alt="Wallpaper"
                />
              </div>
            ))}
          </ul>
        </>
      ) : (
        <MyIframe
          videoId={selectedPlaylistId}
          isListVisible={isListVisible}
          setIsListVisible={setIsListVisible}
        />
      )}
    </div>
  );
}

export default App;
