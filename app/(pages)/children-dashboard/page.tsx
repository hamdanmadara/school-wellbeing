'use client';

import LineChart from '@/components/charts/LineChart';
import RadarChart from '@/components/charts/RadarChart';
import { currentStudentData } from '@/lib/mockData';
import { User } from 'lucide-react';

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

              {/* AI Advice */}
              <div className="bg-white dark:bg-gray-700 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-600">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                  AIキャラクターがセルフケアにつながる助言やスキルに誘導
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      今日は少し疲れているようですね。十分な睡眠を取って、リラックスする時間を作りましょう。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

