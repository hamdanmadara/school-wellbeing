'use client';

interface SliderProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

export default function Slider({ label, value, onChange, min = 0, max = 100 }: SliderProps) {
  return (
    <div className="w-full space-y-2">
      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-teal-500"
        />
        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
          <span>{min}</span>
          <span>50</span>
          <span>{max}</span>
        </div>
      </div>
      <div className="text-center text-lg font-semibold text-teal-600 dark:text-teal-400">
        {value}
      </div>
    </div>
  );
}

