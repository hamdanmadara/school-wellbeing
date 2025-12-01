'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Smile, Heart, GraduationCap, Home, Menu, X, ChevronLeft } from 'lucide-react';
import { useSidebar } from './SidebarContext';

const navItems = [
  { href: '/children-input', label: 'こども用', icon: Smile, color: 'from-emerald-500 to-teal-500' },
  { href: '/children-dashboard', label: 'こころの様子', icon: Heart, color: 'from-emerald-500 to-teal-500' },
  { href: '/teacher-dashboard', label: '教員用', icon: GraduationCap, color: 'from-emerald-500 to-teal-500' },
  { href: '/parent-dashboard', label: '保護者用', icon: Home, color: 'from-emerald-500 to-teal-500' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { isOpen, isMobile, toggleSidebar, closeSidebar } = useSidebar();

  return (
    <>
      {/* Mobile Toggle Button - Only shown when sidebar is closed */}
      {!isOpen && (
        <button
          onClick={toggleSidebar}
          className="md:hidden fixed top-5 left-5 z-50 p-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200 border border-gray-200 dark:border-gray-700"
          aria-label="Open sidebar"
        >
          <Menu className="w-6 h-6" />
        </button>
      )}

      {/* Desktop Toggle Button */}
      <button
        onClick={toggleSidebar}
        className={`hidden md:flex fixed top-5 z-50 items-center justify-center w-10 h-10 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-700 ${
          isOpen ? 'left-[224px]' : 'left-5'
        }`}
        aria-label="Toggle sidebar"
      >
        <ChevronLeft className={`w-5 h-5 transition-transform duration-300 ${!isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Overlay for mobile - lighter and more modern */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden transition-opacity duration-300"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`w-60 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-r border-gray-200 dark:border-gray-700 min-h-screen p-5 fixed left-0 top-0 z-40 transition-all duration-300 ease-in-out shadow-2xl ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                <Heart className="w-6 h-6 text-white" fill="white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800 dark:text-white">こころの健康</h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">Well-being App</p>
              </div>
            </div>
            {/* Close button for mobile */}
            {isMobile && (
              <button
                onClick={closeSidebar}
                className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </button>
            )}
          </div>
          <div className="h-px bg-gradient-to-r from-teal-200 via-cyan-200 to-transparent dark:from-teal-800 dark:via-cyan-800" />
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => isMobile && closeSidebar()}
                className={`group flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-200 relative overflow-hidden ${
                  isActive
                    ? 'bg-gradient-to-r ' + item.color + ' text-white shadow-lg shadow-teal-500/30 scale-[1.02]'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50 hover:scale-[1.02]'
                }`}
              >
                <div className={`p-2 rounded-lg ${
                  isActive
                    ? 'bg-white/20'
                    : 'bg-gray-100 dark:bg-gray-700 group-hover:bg-gray-200 dark:group-hover:bg-gray-600'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-medium text-sm">{item.label}</span>
                {isActive && (
                  <div className="absolute right-3 w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        {/* <div className="absolute bottom-6 left-6 right-6">
          <div className="p-4 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-xl border border-teal-100 dark:border-teal-800">
            <p className="text-xs text-gray-600 dark:text-gray-400 text-center">
              © 2024 Well-being System
            </p>
          </div>
        </div> */}
      </aside>
    </>
  );
}

