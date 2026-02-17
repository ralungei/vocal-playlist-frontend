import Header from './components/Header';
import SongCard from './components/SongCard';
import songs from './data/songs';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="songs-grid">
        {songs.map((song, index) => (
          <SongCard key={song.id} song={song} index={index} />
        ))}
      </main>
    </div>
  );
}

export default App;
