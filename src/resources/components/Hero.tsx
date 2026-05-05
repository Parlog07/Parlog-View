import { useQuery } from '@tanstack/react-query';
import { Play, Info } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { getTrendingMovies, getMoviesByCategory, getImageUrl } from '../../services/tmdb';

interface HeroProps {
  mediaType?: 'movie' | 'tv';
}

const Hero = ({ mediaType = 'movie' }: HeroProps = {}) => {
  const navigate = useNavigate();
  
  const { data: mediaItems, isLoading } = useQuery({
    queryKey: ['trendingHero', mediaType],
    queryFn: () => mediaType === 'tv' ? getMoviesByCategory('/trending/tv/day') : getTrendingMovies(),
  });

  if (isLoading || !mediaItems || mediaItems.length === 0) {
    return (
      <div className="w-full h-[80vh] bg-background animate-pulse flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const media = mediaItems[Math.floor(Math.random() * Math.min(5, mediaItems.length))];
  const displayTitle = media.title || media.name;
  const link = `/${mediaType === 'tv' ? 'series' : 'movie'}/${media.id}`;

  return (
    <div className="relative w-full h-[80vh] text-white">
      <div className="absolute w-full h-full">
        <img
          src={getImageUrl(media.backdrop_path, 'original')}
          alt={displayTitle}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="absolute top-1/4 left-4 md:left-12 max-w-2xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow-md">
          {displayTitle}
        </h1>
        <p className="text-gray-300 text-lg md:text-xl line-clamp-3 mb-8 text-shadow-md max-w-xl">
          {media.overview}
        </p>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate(link)}
            className="flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors"
          >
            <Play fill="currentColor" size={20} />
            Play
          </button>
          <Link 
            to={link}
            className="flex items-center gap-2 px-6 py-3 bg-gray-500/50 hover:bg-gray-500/70 text-white font-semibold rounded-full transition-colors backdrop-blur-sm"
          >
            <Info size={20} />
            More Info
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
