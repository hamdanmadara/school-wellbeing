'use client';

import LineChart from '@/components/charts/LineChart';
import RadarChart from '@/components/charts/RadarChart';
import { currentStudentData } from '@/lib/mockData';

export default function ChildrenDashboardPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="bg-teal-500 dark:bg-teal-700 rounded-3xl p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-white text-2xl font-bold">こころの様子</h1>
          <div className="flex gap-2">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-white/50 rounded-full"></div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Charts */}
            <div className="space-y-6">
              {/* Line Chart */}
              <div>
                <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4">
                  こころの温度計
                </h2>
                <LineChart data={currentStudentData.temperatureHistory} />
              </div>

              {/* Radar Chart */}
              <div>
                <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4">
                  パワーチャート
                </h2>
                <RadarChart data={currentStudentData.powers} />
              </div>
            </div>

            {/* Right Column - Advice */}
            <div className="space-y-6">
              {/* Power Explanation */}
              <div className="bg-blue-100 dark:bg-blue-900 rounded-xl p-4">
                <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-2">
                  わくわくパワーとは？
                </h3>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  おすすめケア
                </p>
              </div>

              {/* AI Advice with Character */}
              <div className="mt-8 flex items-center justify-end gap-3">
                {/* Speech Bubble on the left of character */}
                <div className="relative bg-white dark:bg-gray-700 rounded-[2rem] p-5 border-2 border-black dark:border-gray-300 shadow-lg">
                  <p className="text-sm text-gray-900 dark:text-gray-100 leading-relaxed font-medium">
                    AIキャラクターが<br />
                    セルフケアにつながる<br />
                    助言やスキルに誘導
                  </p>
                  {/* Speech bubble tail pointing right to character */}
                  <div className="absolute right-[-14px] top-1/2 -translate-y-1/2">
                    {/* Outer border tail */}
                    <div className="w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[14px] border-l-black dark:border-l-gray-300"></div>
                    {/* Inner fill tail */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[12px] border-l-white dark:border-l-gray-700"></div>
                  </div>
                </div>

                {/* Character Image on the right, moved down */}
                <div className="flex-shrink-0 self-end">
                  <img
                    src="/images/character-1.png"
                    alt="AI Character"
                    className="w-40 h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

