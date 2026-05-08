import { Home, Compass, PlusSquare, Heart, User } from 'lucide-react';
import useGlassStyle from '../hooks/useGlassStyle';

export const BottomTabBar = () => {
  const glassStyle = useGlassStyle();

  return (
    <div 
      className="fixed bottom-0 w-full z-10 border-t border-white/20 pb-safe"
      style={glassStyle}
    >
      <div className="flex justify-around items-center h-20">
        <button className="p-2 text-black"><Home className="w-8 h-8" /></button>
        <button className="p-2 text-gray-400"><Compass className="w-8 h-8" /></button>
        <button className="p-2 text-gray-400"><PlusSquare className="w-8 h-8" /></button>
        <button className="p-2 text-gray-400"><Heart className="w-8 h-8" /></button>
        <button className="p-2 text-gray-400"><User className="w-8 h-8" /></button>
      </div>
    </div>
  );
};
