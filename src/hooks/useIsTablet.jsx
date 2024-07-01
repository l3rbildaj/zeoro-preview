'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const isClient = typeof window === 'object';

export const useIsTablet = () => {
  const pathname = usePathname();
  const [isTablet, setIsTablet] = useState(isClient && window.innerWidth <= 1150);

  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth <= 1150;
      setIsTablet(newIsMobile);
    };

    if (isClient) {
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [pathname]);

  return isTablet;
};
