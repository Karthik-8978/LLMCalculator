import React, { useState } from 'react';
import { Calculator, Brain, DollarSign } from 'lucide-react';
import { calculateCost, MODEL_PRICING } from '../utils/costCalculator';

export function CostCalculator() {
  const [model, setModel] = useState('gpt-4');
  const [inputTokens, setInputTokens] = useState('');
  const [outputTokens, setOutputTokens] = useState('');
  const [result, setResult] = useState<{ totalCost: number } | null>(null);

  const handleCalculate = () => {
    const cost = calculateCost(
      model,
      parseInt(inputTokens || '0'),
      parseInt(outputTokens || '0')
    );
    setResult(cost);
  };

  return (
    <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
      <div className="flex items-center gap-3 mb-6">
        <Calculator className="w-8 h-8 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-800">LLM Cost Calculator</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Model
          </label>
          <select
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {Object.entries(MODEL_PRICING).map(([key, value]) => (
              <option key={key} value={key}>
                {value.name}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Input Tokens
            </label>
            <input
              type="number"
              value={inputTokens}
              onChange={(e) => setInputTokens(e.target.value)}
              placeholder="Enter input tokens"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Output Tokens
            </label>
            <input
              type="number"
              value={outputTokens}
              onChange={(e) => setOutputTokens(e.target.value)}
              placeholder="Enter output tokens"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <button
          onClick={handleCalculate}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
        >
          <Brain className="w-5 h-5" />
          Calculate Cost
        </button>

        {result && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-green-600" />
              <span className="text-lg font-semibold text-gray-900">
                Estimated Cost: ${result.totalCost.toFixed(4)}
              </span>
            </div>
          </div>
        )}

        <div className="mt-6 text-sm text-gray-600">
          <p className="font-medium mb-2">Current Pricing (per 1K tokens):</p>
          <ul className="space-y-1">
            <li>Input: ${MODEL_PRICING[model].inputPrice.toFixed(4)}</li>
            <li>Output: ${MODEL_PRICING[model].outputPrice.toFixed(4)}</li>
            <li>Context Window: {MODEL_PRICING[model].contextWindow.toLocaleString()} tokens</li>
          </ul>
        </div>
      </div>
    </div>
  );
}