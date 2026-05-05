import MovieRow from '../components/MovieRow';

const NewPopular = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-background">
      <div className="px-4 md:px-12 mb-8">
        <h1 className="text-4xl font-bold text-white">New & Popular</h1>
      </div>
      <div className="flex flex-col gap-8">
        <MovieRow title="Upcoming Movies" endpoint="/movie/upcoming" mediaType="movie" />
        <MovieRow title="Now Playing in Theaters" endpoint="/movie/now_playing" mediaType="movie" />
        <MovieRow title="Trending This Week" endpoint="/trending/all/week" mediaType="movie" />
        <MovieRow title="Airing Today (TV)" endpoint="/tv/airing_today" mediaType="tv" />
        <MovieRow title="On The Air (TV)" endpoint="/tv/on_the_air" mediaType="tv" />
      </div>
    </div>
  );
};

export default NewPopular;
