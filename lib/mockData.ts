import { StudentData, TemperatureData, PowerData, AggregatedData } from '@/types';

// Generate dates for March
const generateMarchDates = (): string[] => {
  const dates: string[] = [];
  for (let i = 1; i <= 31; i++) {
    dates.push(`3/${i}`);
  }
  return dates;
};

// Generate temperature history with some variation
export const generateTemperatureHistory = (): TemperatureData[] => {
  const dates = generateMarchDates();
  return dates.map((date, index) => ({
    date,
    temperature: 100 + Math.sin(index * 0.2) * 30 + Math.random() * 20,
  }));
};

// Generate power data
export const generatePowerData = (): PowerData => ({
  sleep: 3 + Math.random(),
  excitement: 2 + Math.random(),
  focus: 3 + Math.random(),
  relax: 2 + Math.random(),
  connect: 3 + Math.random(),
  move: 3 + Math.random(),
  eat: 3 + Math.random(),
});

// Current student data (child's perspective)
export const currentStudentData: StudentData = {
  id: 'student-001',
  name: '太郎',
  grade: '3',
  className: '3-A',
  emotions: {
    excitement: 50,
    sadness: 50,
    anxiety: 50,
  },
  powers: generatePowerData(),
  temperatureHistory: generateTemperatureHistory(),
  phqScore: 8,
  riskLevel: 'low',
};

// Mock data for teacher dashboard
export const mockStudents: StudentData[] = [
  {
    id: 'student-001',
    name: '太郎',
    grade: '3',
    className: '3-A',
    emotions: { excitement: 50, sadness: 50, anxiety: 50 },
    powers: generatePowerData(),
    temperatureHistory: generateTemperatureHistory(),
    phqScore: 8,
    riskLevel: 'low',
  },
  {
    id: 'student-002',
    name: '花子',
    grade: '3',
    className: '3-A',
    emotions: { excitement: 70, sadness: 30, anxiety: 40 },
    powers: generatePowerData(),
    temperatureHistory: generateTemperatureHistory(),
    phqScore: 12,
    riskLevel: 'medium',
  },
  {
    id: 'student-003',
    name: '次郎',
    grade: '3',
    className: '3-A',
    emotions: { excitement: 40, sadness: 60, anxiety: 70 },
    powers: generatePowerData(),
    temperatureHistory: generateTemperatureHistory(),
    phqScore: 15,
    riskLevel: 'high',
  },
];

export const aggregatedData: AggregatedData = {
  schoolWide: {
    averageTemperature: 120,
    atRiskCount: 15,
    totalStudents: 200,
  },
  gradeLevel: {
    '1': { averageTemperature: 110, atRiskCount: 3 },
    '2': { averageTemperature: 115, atRiskCount: 4 },
    '3': { averageTemperature: 120, atRiskCount: 5 },
    '4': { averageTemperature: 125, atRiskCount: 2 },
    '5': { averageTemperature: 130, atRiskCount: 1 },
    '6': { averageTemperature: 128, atRiskCount: 0 },
  },
  classLevel: {
    '3-A': { averageTemperature: 120, atRiskCount: 1 },
    '3-B': { averageTemperature: 118, atRiskCount: 2 },
    '3-C': { averageTemperature: 122, atRiskCount: 2 },
  },
};

