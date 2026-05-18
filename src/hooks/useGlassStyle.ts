import { useScroll } from '../ScrollContext';
import { useAppStore } from '../store';
import { STRATEGIES, BASE_PROPERTIES } from '../strategies';

const useGlassStyle = () => {
  const { isScrolling, velocity } = useScroll();
  const { strategy, isBinaryAnimationEnabled } = useAppStore();
  const currentStrategy = STRATEGIES.find((s) => s.id === strategy) || STRATEGIES[0];

  const maxVelocity = 5;

  let blur = BASE_PROPERTIES.blur;
  let opacity = BASE_PROPERTIES.opacity;

  const normalizedVelocity = Math.min(velocity / maxVelocity, 1);

  if (currentStrategy.isDynamic) {
    if (currentStrategy.targetBlur !== undefined) {
      blur = BASE_PROPERTIES.blur + (currentStrategy.targetBlur - BASE_PROPERTIES.blur) * normalizedVelocity;
    }
    if (currentStrategy.targetOpacity !== undefined) {
      opacity = BASE_PROPERTIES.opacity + (currentStrategy.targetOpacity - BASE_PROPERTIES.opacity) * normalizedVelocity;
    }
  } else if (isScrolling) {
    if (currentStrategy.targetBlur !== undefined) {
      blur = currentStrategy.targetBlur;
    }
    if (currentStrategy.targetOpacity !== undefined) {
      opacity = currentStrategy.targetOpacity;
    }
  }

  const shouldAnimate = currentStrategy.isDynamic
    ? currentStrategy.hasAnimation
    : isBinaryAnimationEnabled;

  const transitionTime = 0.7;

  return {
    backdropFilter: `blur(${blur}px)`,
    backgroundColor: `rgba(255, 255, 255, ${opacity})`,
    transition: shouldAnimate ? `backdrop-filter ${transitionTime}s ease-out, background-color ${transitionTime}s ease-out` : 'none',
  };
};

export default useGlassStyle;
