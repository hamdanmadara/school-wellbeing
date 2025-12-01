'use client';

import { useState } from 'react';
import LineChart from '@/components/charts/LineChart';
import RadarChart from '@/components/charts/RadarChart';
import { mockStudents, aggregatedData } from '@/lib/mockData';
import { BarChart3, Users, Book, AlertTriangle } from 'lucide-react';

export default function TeacherDashboardPage() {
  const [selectedStudent, setSelectedStudent] = useState(mockStudents[0]);
  const [viewLevel, setViewLevel] = useState<'school' | 'grade' | 'class' | 'individual'>('individual');

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="bg-teal-500 dark:bg-teal-700 rounded-3xl p-8">
        <h1 className="text-white text-2xl font-bold mb-6">教員用イメージ</h1>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Results */}
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4">結果</h2>
              
              <div className="space-y-2">
                <button
                  onClick={() => setViewLevel('school')}
                  className={`w-full text-left px-4 py-2 rounded-lg ${
                    viewLevel === 'school' ? 'bg-teal-100 dark:bg-teal-900' : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <span className="text-red-500 mr-2">◆</span>
                  学校全体
                </button>
                <button
                  onClick={() => setViewLevel('grade')}
                  className={`w-full text-left px-4 py-2 rounded-lg ${
                    viewLevel === 'grade' ? 'bg-teal-100 dark:bg-teal-900' : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <span className="text-red-500 mr-2">◆</span>
                  学年
                </button>
                <button
                  onClick={() => setViewLevel('class')}
                  className={`w-full text-left px-4 py-2 rounded-lg ${
                    viewLevel === 'class' ? 'bg-teal-100 dark:bg-teal-900' : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <span className="text-red-500 mr-2">◆</span>
                  クラス
                </button>
                <button
                  onClick={() => setViewLevel('individual')}
                  className={`w-full text-left px-4 py-2 rounded-lg ${
                    viewLevel === 'individual' ? 'bg-teal-100 dark:bg-teal-900' : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <span className="text-red-500 mr-2">◆</span>
                  個人
                </button>
              </div>

              <div className="mt-6">
                <h3 className="text-md font-bold text-gray-800 dark:text-gray-200 mb-3">ライブラリ</h3>
                <div className="space-y-2">
                  <div className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                    <Book className="w-4 h-4 inline mr-2" />
                    一般的知識
                  </div>
                  <div className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                    <Book className="w-4 h-4 inline mr-2" />
                    助言一覧
                  </div>
                  <div className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                    <Book className="w-4 h-4 inline mr-2" />
                    生徒向け授業コンテンツ
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Column - Power BI Outputs */}
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4">
                Power BIで出力している以下を
              </h2>
              
              <div className="space-y-3">
                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="w-5 h-5 text-red-600 dark:text-red-400" />
                    <span className="font-semibold text-red-800 dark:text-red-200">PHQの点数分布</span>
                  </div>
                  <p className="text-sm text-red-700 dark:text-red-300">
                    平均スコア: {aggregatedData.schoolWide.averageTemperature}
                  </p>
                </div>

                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                    <span className="font-semibold text-yellow-800 dark:text-yellow-200">層別化の結果</span>
                  </div>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    リスクレベル別の分布
                  </p>
                </div>

                <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                    <span className="font-semibold text-orange-800 dark:text-orange-200">希死念慮傾向</span>
                  </div>
                  <p className="text-sm text-orange-700 dark:text-orange-300">
                    監視が必要: {aggregatedData.schoolWide.atRiskCount}名
                  </p>
                </div>

                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    <span className="font-semibold text-purple-800 dark:text-purple-200">要注意者</span>
                  </div>
                  <p className="text-sm text-purple-700 dark:text-purple-300">
                    {aggregatedData.schoolWide.atRiskCount}名の生徒が要注意
                  </p>
                </div>
              </div>

              {/* Student Selector */}
              {viewLevel === 'individual' && (
                <div className="mt-6">
                  <h3 className="text-md font-bold text-gray-800 dark:text-gray-200 mb-3">生徒選択</h3>
                  <select
                    value={selectedStudent.id}
                    onChange={(e) => {
                      const student = mockStudents.find(s => s.id === e.target.value);
                      if (student) setSelectedStudent(student);
                    }}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
                  >
                    {mockStudents.map((student) => (
                      <option key={student.id} value={student.id}>
                        {student.name} ({student.className})
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            {/* Right Column - Charts */}
            {viewLevel === 'individual' && (
              <div className="space-y-6">
                <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                  こころの温度計
                </h2>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-4">
                  <LineChart data={selectedStudent.temperatureHistory} />
                  <div className="mt-4">
                    <RadarChart data={selectedStudent.powers} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

