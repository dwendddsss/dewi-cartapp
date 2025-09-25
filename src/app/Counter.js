"use client";

export default function Counter({ value, onChange }) {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => onChange(value - 1)}
        disabled={value <= 1}
        className="px-2 py-1 bg-gray-300 rounded disabled:opacity-50"
      >
        -
      </button>

      <span className="px-3">{value}</span>

      <button
        onClick={() => onChange(value + 1)}
        className="px-2 py-1 bg-gray-300 rounded"
      >
        +
      </button>
    </div>
  );
}
