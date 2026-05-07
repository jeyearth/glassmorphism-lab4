import { useScroll } from '../ScrollContext';
import { useAppStore } from '../store';

const useGlassStyle = () => {
  const { isScrolling, velocity } = useScroll();
  const { strategy } = useAppStore();

  const baseBlur = 20;
  const baseOpacity = 0.6;
  const maxVelocity = 5;

  let blur = baseBlur;
  let opacity = baseOpacity;

  const normalizedVelocity = Math.min(velocity / maxVelocity, 1);

  if (strategy === 2 && isScrolling) {
    blur = 4;
    opacity = 0.95;
  } else if (strategy === 3 && isScrolling) {
    blur = 40;
    opacity = 0.3;
  } else if (strategy === 4) {
    blur = baseBlur + (0 - baseBlur) * normalizedVelocity;
    opacity = baseOpacity + (1.0 - baseOpacity) * normalizedVelocity;
  } else if (strategy === 5) {
    blur = baseBlur + (60 - baseBlur) * normalizedVelocity;
    opacity = baseOpacity + (0.2 - baseOpacity) * normalizedVelocity;
  }

  return {
    backdropFilter: `blur(${blur}px)`,
    backgroundColor: `rgba(255, 255, 255, ${opacity})`,
    transition: strategy === 2 || strategy === 3 ? 'none' : 'backdrop-filter 0.1s, background-color 0.1s',
  };
};

export default useGlassStyle;
