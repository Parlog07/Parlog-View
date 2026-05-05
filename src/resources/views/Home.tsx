import Hero from '../components/Hero';
import MovieRow from '../components/MovieRow';

const Home = () => {
  return (
    <div className="pb-16 overflow-hidden">
      <Hero />
      <div className="-mt-32 relative z-10 flex flex-col gap-8">
        <MovieRow title="Trending Now" endpoint="/trending/movie/day" />
        <MovieRow title="Top Rated Movies" endpoint="/movie/top_rated" />
        <MovieRow title="Action Movies" endpoint="/discover/movie?with_genres=28" />
        <MovieRow title="Comedies" endpoint="/discover/movie?with_genres=35" />
        <MovieRow title="Horror Movies" endpoint="/discover/movie?with_genres=27" />
        <MovieRow title="Sci-Fi & Fantasy" endpoint="/discover/movie?with_genres=878" />
      </div>
    </div>
  );
};

export default Home;
