import React from 'react';
import { CostCalculator } from './components/CostCalculator';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            LLM Cost Calculator
          </h1>
          <p className="text-lg text-gray-600">
            Calculate and track your LLM API costs across different models
          </p>
        </div>
        
        <div className="flex justify-center">
          <CostCalculator />
        </div>
      </div>
    </div>
  );
}

export default App;