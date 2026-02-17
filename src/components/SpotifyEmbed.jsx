import './SpotifyEmbed.css';

function SpotifyEmbed({ trackId }) {
  return (
    <div className="spotify-embed">
      <iframe
        src={`https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0`}
        width="100%"
        height="80"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Spotify player"
      />
    </div>
  );
}

export default SpotifyEmbed;
