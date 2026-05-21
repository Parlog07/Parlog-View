import { useQuery } from '@tanstack/react-query';
import { Play, Info } from 'lucide-react';
import { motion } from 'framer-motion';
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

      <div className="absolute top-1/4 left-4 md:left-16 max-w-2xl px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-black mb-4 tracking-tight drop-shadow-2xl"
        >
          {displayTitle}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-300 text-lg md:text-xl line-clamp-3 mb-8 drop-shadow-lg max-w-xl font-medium leading-relaxed"
        >
          {media.overview}
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center gap-4"
        >
          <button 
            onClick={() => navigate(link)}
            className="flex items-center gap-2 px-8 py-3.5 bg-white text-black font-bold rounded-full hover:scale-105 hover:bg-gray-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            <Play fill="currentColor" size={20} />
            Watch Now
          </button>
          <Link 
            to={link}
            className="flex items-center gap-2 px-8 py-3.5 bg-black/40 hover:bg-black/60 text-white font-bold rounded-full transition-all duration-300 backdrop-blur-md border border-white/20 hover:border-white/40"
          >
            <Info size={20} />
            More Info
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
