import { Routes, Route } from 'react-router-dom';
import Navbar from '../resources/components/Navbar';
import Home from '../resources/views/Home';
import Detail from '../resources/views/Detail';
import Search from '../resources/views/Search';
import Series from '../resources/views/Series';
import SeriesDetail from '../resources/views/SeriesDetail';
import Movies from '../resources/views/Movies';
import NewPopular from '../resources/views/NewPopular';
import MyList from '../resources/views/MyList';

function App() {
  return (
    <div className="min-h-screen bg-background text-white">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Detail />} />
          <Route path="/search" element={<Search />} />
          <Route path="/series" element={<Series />} />
          <Route path="/series/:id" element={<SeriesDetail />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/new" element={<NewPopular />} />
          <Route path="/list" element={<MyList />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
