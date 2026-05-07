import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import useGlassStyle from '../hooks/useGlassStyle';

export const BackButton = () => {
  const navigate = useNavigate();
  const glassStyle = useGlassStyle();

  return (
    <button 
      onClick={() => navigate(-1)}
      className="fixed top-4 left-4 z-20 p-2 rounded-full border border-white/30"
      style={glassStyle}
    >
      <ChevronLeft className="w-6 h-6 text-black" />
    </button>
  );
};
