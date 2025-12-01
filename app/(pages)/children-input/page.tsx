'use client';

import { useState } from 'react';
import Slider from '@/components/ui/Slider';
import Button from '@/components/ui/Button';
import DoctorCharacter from '@/components/DoctorCharacter';
import { currentStudentData } from '@/lib/mockData';

export default function ChildrenInputPage() {
  const [emotions, setEmotions] = useState(currentStudentData.emotions);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="bg-teal-500 dark:bg-teal-700 rounded-3xl p-8 border-2 border-purple-300 dark:border-purple-600">
        <div className="text-center mb-6">
          <h1 className="text-white text-2xl font-bold mb-2">こども用イメージ</h1>
          <div className="flex justify-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-white/50 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Heart/Mind Thermometer */}
            <div className="bg-purple-200 dark:bg-purple-800 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-6">
                こころの温度計
              </h2>
              
              <div className="space-y-6">
                <Slider
                  label="① たのしみな気もち 【わくわく】がどれくらいありますか？"
                  value={emotions.excitement}
                  onChange={(value) => setEmotions({ ...emotions, excitement: value })}
                />
                
                <Slider
                  label="② かなしい気持ちがどれくらいありますか？"
                  value={emotions.sadness}
                  onChange={(value) => setEmotions({ ...emotions, sadness: value })}
                />
                
                <Slider
                  label="③ ふあん(心配やこわい気持ち)がどれくらいありますか？"
                  value={emotions.anxiety}
                  onChange={(value) => setEmotions({ ...emotions, anxiety: value })}
                />
              </div>
            </div>

            {/* Regular Check-up Button */}
            <div className="bg-purple-200 dark:bg-purple-800 rounded-2xl p-6">
              <Button variant="secondary" className="w-full">
                こころの定期検診 (実施するときだけ表示)
              </Button>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Doctor Character */}
            <DoctorCharacter />

            {/* See State Button */}
            <div className="bg-gradient-to-r from-orange-400 to-yellow-400 rounded-2xl p-6">
              <Button 
                variant="gradient" 
                className="w-full"
                onClick={() => window.location.href = '/children-dashboard'}
              >
                こころの様子をみる (ワードは考える必要あり)
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

