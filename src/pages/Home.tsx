import { Link } from 'react-router-dom';
import { SearchBar } from '../components/SearchBar';
import { BottomTabBar } from '../components/BottomTabBar';

const images = Array.from({ length: 50 }).map((_, i) => `https://picsum.photos/seed/${i}/400/600`);

export const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 pb-16">
      <SearchBar />
      
      <div className="p-2 columns-2 gap-2 space-y-2">
        {images.map((src, i) => (
          <Link key={i} to={`/detail/${i}`} className="block break-inside-avoid">
            <img 
              src={src} 
              alt="" 
              className="w-full rounded-xl object-cover"
              loading="lazy"
            />
          </Link>
        ))}
      </div>

      <BottomTabBar />
    </div>
  );
};
