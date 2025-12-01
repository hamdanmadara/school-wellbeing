'use client';

import { useSidebar } from './SidebarContext';

export default function MainWrapper({ children }: { children: React.ReactNode }) {
  const { isOpen, isMobile } = useSidebar();

  return (
    <main
      className={`flex-1 min-h-screen bg-gray-50 dark:bg-gray-900 transition-all duration-300 ease-in-out ${
        !isMobile && isOpen ? 'md:ml-72' : 'ml-0'
      }`}
    >
      {children}
    </main>
  );
}
