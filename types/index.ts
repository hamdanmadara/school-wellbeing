export interface EmotionData {
  excitement: number; // わくわく
  sadness: number;
  anxiety: number; // 不安
}

export interface PowerData {
  sleep: number; // ねむるパワー
  excitement: number; // わくわくパワー
  focus: number; // 集中パワー
  relax: number; // ほっとパワー
  connect: number; // つながるパワー
  move: number; // うごくパワー
  eat: number; // たべるパワー
}

export interface TemperatureData {
  date: string;
  temperature: number;
}

export interface StudentData {
  id: string;
  name: string;
  grade: string;
  className: string;
  emotions: EmotionData;
  powers: PowerData;
  temperatureHistory: TemperatureData[];
  phqScore?: number;
  riskLevel?: 'low' | 'medium' | 'high';
}

export interface AggregatedData {
  schoolWide: {
    averageTemperature: number;
    atRiskCount: number;
    totalStudents: number;
  };
  gradeLevel: {
    [grade: string]: {
      averageTemperature: number;
      atRiskCount: number;
    };
  };
  classLevel: {
    [className: string]: {
      averageTemperature: number;
      atRiskCount: number;
    };
  };
}

