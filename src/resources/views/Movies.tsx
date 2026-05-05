import Hero from '../components/Hero';
import MovieRow from '../components/MovieRow';

const Movies = () => {
  return (
    <div className="pb-16 overflow-hidden">
      <Hero />
      <div className="-mt-32 relative z-10 flex flex-col gap-8">
        <MovieRow title="Trending Movies" endpoint="/trending/movie/day" mediaType="movie" />
        <MovieRow title="Top Rated Movies" endpoint="/movie/top_rated" mediaType="movie" />
        <MovieRow title="Action Movies" endpoint="/discover/movie?with_genres=28" mediaType="movie" />
        <MovieRow title="Comedies" endpoint="/discover/movie?with_genres=35" mediaType="movie" />
        <MovieRow title="Horror Movies" endpoint="/discover/movie?with_genres=27" mediaType="movie" />
      </div>
    </div>
  );
};

export default Movies;
