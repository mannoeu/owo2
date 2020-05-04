import React from "react";

function MyIframe({ videoId, isListVisible, setIsListVisible }) {
  function handleClick() {
    setIsListVisible(!isListVisible);
  }

  return (
    <div>
      <h1>Tocando a playlist</h1>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/videoseries?list=${videoId}`}
        title="video"
        allow="accelerometer; autoplay; 
        encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <button onClick={handleClick}>Voltar</button>
    </div>
  );
}

export default MyIframe;
