'use client';

import { useState } from 'react';
import { User } from 'lucide-react';

export default function DoctorCharacter() {
  const [showCursor, setShowCursor] = useState(false);

  return (
    <div className="relative">
      <div 
        className="cursor-pointer"
        onMouseEnter={() => setShowCursor(true)}
        onMouseLeave={() => setShowCursor(false)}
        onClick={() => setShowCursor(!showCursor)}
      >
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg relative">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-teal-600 dark:text-teal-400" />
            </div>
            <div className="flex-1">
              <div className="bg-white dark:bg-gray-700 rounded-lg p-3 shadow-md relative">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  今日のこころの温度は？
                </p>
                {showCursor && (
                  <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                    触ったらカーソルが出てくる
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

