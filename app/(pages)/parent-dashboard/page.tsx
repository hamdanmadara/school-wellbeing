'use client';

import LineChart from '@/components/charts/LineChart';
import RadarChart from '@/components/charts/RadarChart';
import { currentStudentData } from '@/lib/mockData';
import { MessageSquare, Book, GraduationCap, Phone } from 'lucide-react';

export default function ParentDashboardPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="bg-teal-500 dark:bg-teal-700 rounded-3xl p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-white text-2xl font-bold">保護者用イメージ</h1>
          <div className="flex gap-2">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-white/50 rounded-full"></div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column - Child's State */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                お子さんのこころの状態
              </h2>
              
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-2xl p-6 border-2 border-purple-200 dark:border-purple-800">
                {/* Line Chart */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-purple-800 dark:text-purple-200 mb-4">
                    こころの温度計
                  </h3>
                  <LineChart data={currentStudentData.temperatureHistory} />
                </div>

                {/* Radar Chart */}
                <div>
                  <h3 className="text-lg font-bold text-purple-800 dark:text-purple-200 mb-4">
                    パワーチャート
                  </h3>
                  <RadarChart data={currentStudentData.powers} />
                </div>
              </div>
            </div>

            {/* Right Column - Support Features */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                サポート機能
              </h2>

              {/* AI Advice */}
              <div className="bg-blue-100 dark:bg-blue-900 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <MessageSquare className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
                  <div>
                    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-2">
                      お子さんの状態にあったケアや声かけのAIアドバイス
                    </h3>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      お子さんの現在の状態を分析し、適切なケア方法と声かけの例を提案します。
                    </p>
                  </div>
                </div>
              </div>

              {/* Library */}
              <div className="bg-green-100 dark:bg-green-900 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <Book className="w-6 h-6 text-green-600 dark:text-green-400 mt-1" />
                  <div>
                    <h3 className="font-bold text-green-800 dark:text-green-200 mb-2">
                      ライブラリ
                    </h3>
                    <p className="text-sm text-green-700 dark:text-green-300 mb-2">
                      一般的知識
                    </p>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      声かけ例一覧
                    </p>
                  </div>
                </div>
              </div>

              {/* Learning Content */}
              <div className="bg-purple-100 dark:bg-purple-900 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-6 h-6 text-purple-600 dark:text-purple-400 mt-1" />
                  <div>
                    <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-2">
                      子育てに関するワークショップなど学習コンテンツ
                    </h3>
                    <p className="text-sm text-purple-700 dark:text-purple-300">
                      専門家によるワークショップや学習資料にアクセスできます。
                    </p>
                  </div>
                </div>
              </div>

              {/* Consultation Window */}
              <div className="bg-orange-100 dark:bg-orange-900 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-6 h-6 text-orange-600 dark:text-orange-400 mt-1" />
                  <div>
                    <h3 className="font-bold text-orange-800 dark:text-orange-200 mb-2">
                      相談窓口
                    </h3>
                    <p className="text-sm text-orange-700 dark:text-orange-300 mb-2">
                      相談方法
                    </p>
                    <p className="text-sm text-orange-700 dark:text-orange-300">
                      選択肢
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="flex justify-center mt-8">
          <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-gray-400 dark:border-gray-600 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

