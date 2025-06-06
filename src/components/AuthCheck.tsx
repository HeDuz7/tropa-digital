'use client';

import { useEffect } from 'react';

export default function AuthCheck({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      window.location.href = '/login';
    }
  }, []);

  return <>{children}</>;
}
