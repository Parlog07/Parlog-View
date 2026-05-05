import Hero from '../components/Hero';
import MovieRow from '../components/MovieRow';

const Series = () => {
  return (
    <div className="pb-16 overflow-hidden">
      <Hero />
      <div className="-mt-32 relative z-10 flex flex-col gap-8">
        <MovieRow title="Trending TV Shows" endpoint="/trending/tv/day" mediaType="tv" />
        <MovieRow title="Top Rated Series" endpoint="/tv/top_rated" mediaType="tv" />
        <MovieRow title="Action & Adventure" endpoint="/discover/tv?with_genres=10759" mediaType="tv" />
        <MovieRow title="Comedies" endpoint="/discover/tv?with_genres=35" mediaType="tv" />
        <MovieRow title="Sci-Fi & Fantasy" endpoint="/discover/tv?with_genres=10765" mediaType="tv" />
      </div>
    </div>
  );
};

export default Series;
