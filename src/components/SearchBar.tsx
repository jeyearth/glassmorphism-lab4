import { Search } from 'lucide-react';
import useGlassStyle from '../hooks/useGlassStyle';

export const SearchBar = () => {
  const glassStyle = useGlassStyle();

  return (
    <div className="sticky top-0 z-10 p-4">
      <div 
        className="relative rounded-full border border-white/20 shadow-sm"
        style={glassStyle}
      >
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-700 w-5 h-5" />
        <input 
          type="text" 
          placeholder="検索" 
          className="w-full bg-transparent py-2 pl-10 pr-4 outline-none placeholder:text-gray-600"
        />
      </div>
    </div>
  );
};
