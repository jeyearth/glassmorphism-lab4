import { createContext, useContext, useEffect, useState, useRef, type ReactNode } from 'react';

interface ScrollContextType {
  isScrolling: boolean;
  velocity: number;
}

const ScrollContext = createContext<ScrollContextType>({ isScrolling: false, velocity: 0 });

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [velocity, setVelocity] = useState(0);
  const lastScrollY = useRef(window.scrollY);
  const lastTime = useRef(performance.now());
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentTime = performance.now();
      const deltaY = currentScrollY - lastScrollY.current;
      const deltaTime = currentTime - lastTime.current;

      if (deltaTime > 0) {
        const currentVelocity = Math.abs(deltaY / deltaTime);
        setVelocity(currentVelocity);
      }

      setIsScrolling(true);

      lastScrollY.current = currentScrollY;
      lastTime.current = currentTime;

      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = window.setTimeout(() => {
        setIsScrolling(false);
        setVelocity(0);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ isScrolling, velocity }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
