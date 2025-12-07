'use client';

import { RadarChart as RechartsRadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';
import { PowerData } from '@/types';

interface RadarChartProps {
  data: PowerData;
}

export default function RadarChart({ data }: RadarChartProps) {
  const chartData = [
    { power: 'ねむる', value: data.sleep, icon: '🌙' },
    { power: 'わくわく', value: data.excitement, icon: '✨' },
    { power: '集中', value: data.focus, icon: '🎯' },
    { power: 'ほっと', value: data.relax, icon: '☕' },
    { power: 'つながる', value: data.connect, icon: '💬' },
    { power: 'うごく', value: data.move, icon: '🏃' },
    { power: 'たべる', value: data.eat, icon: '🍃' },
  ];

  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsRadarChart 
          data={chartData}
          margin={{ top: 20, right: 30, bottom: 20, left: 30 }}
        >
          <PolarGrid stroke="#E5E7EB" />
          <PolarAngleAxis 
            dataKey="power" 
            tick={{ fill: '#6B7280', fontSize: 12 }}
            tickFormatter={(value) => value}
          />
          <PolarRadiusAxis 
            angle={90} 
            domain={[0, 4]} 
            tick={{ fill: '#6B7280', fontSize: 10 }}
          />
          <Radar 
            name="パワー" 
            dataKey="value" 
            stroke="#4FD1C7" 
            fill="#4FD1C7" 
            fillOpacity={0.6}
          />
        </RechartsRadarChart>
      </ResponsiveContainer>
    </div>
  );
}

