import { Link } from 'react-router-dom';
import { Play, Trash2 } from 'lucide-react';
import { useWatchlist } from '../../utils/useWatchlist';
import { getImageUrl } from '../../services/tmdb';

const MyList = () => {
  const { watchlist, removeFromWatchlist } = useWatchlist();

  if (watchlist.length === 0) {
    return (
      <div className="pt-32 pb-16 min-h-screen bg-background flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl font-bold text-white mb-4">Your List is Empty</h1>
        <p className="text-gray-400 mb-8 max-w-md">Add shows and movies to your list so you can easily find them later.</p>
        <Link to="/" className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors">
          Browse Content
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 min-h-screen bg-background px-4 md:px-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">My List</h1>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {watchlist.map((item: any) => {
          const displayTitle = item.title || item.name;
          // Guess media type based on whether it has a name instead of title, though we can just try to link to movie and it will 404 or we assume it's a movie if we didn't save media_type.
          // Let's assume media_type is stored, or default to movie if title exists.
          const isTv = item.name && !item.title;
          const link = `/${isTv ? 'series' : 'movie'}/${item.id}`;

          return (
            <div key={item.id} className="relative aspect-[2/3] rounded-xl overflow-hidden cursor-pointer group">
              <Link to={link} className="absolute inset-0 z-10" />
              <img 
                src={getImageUrl(item.poster_path, 'w500')} 
                alt={displayTitle}
                className="w-full h-full object-cover transition-all duration-300 group-hover:opacity-50"
              />
              <div className="absolute inset-0 border border-white/10 rounded-xl group-hover:border-primary/50 transition-colors"></div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                <h3 className="text-white font-bold text-sm mb-2 line-clamp-1">{displayTitle}</h3>
                <div className="flex items-center gap-2 mb-2 text-xs text-green-400 font-semibold">
                  <span>{item.vote_average?.toFixed(1) || '0.0'} Rating</span>
                </div>
                <div className="flex gap-2">
                  <button className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200 z-20">
                    <Play fill="currentColor" size={12} />
                  </button>
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      removeFromWatchlist(item.id);
                    }}
                    className="w-8 h-8 border border-gray-400 text-white rounded-full flex items-center justify-center hover:border-red-500 hover:text-red-500 z-20"
                    title="Remove from list"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyList;
