import { ModelPricing, CostCalculation } from '../types';

export const MODEL_PRICING: Record<string, ModelPricing> = {
  'gpt-4': {
    name: 'GPT-4',
    inputPrice: 0.03,
    outputPrice: 0.06,
    contextWindow: 8192
  },
  'gpt-3.5-turbo': {
    name: 'GPT-3.5 Turbo',
    inputPrice: 0.0015,
    outputPrice: 0.002,
    contextWindow: 4096
  },
  'claude-2': {
    name: 'Claude 2',
    inputPrice: 0.008,
    outputPrice: 0.024,
    contextWindow: 100000
  }
};

export function calculateCost(
  model: string,
  inputTokens: number,
  outputTokens: number
): CostCalculation {
  const pricing = MODEL_PRICING[model];
  if (!pricing) {
    throw new Error(`Unknown model: ${model}`);
  }

  const inputCost = (inputTokens / 1000) * pricing.inputPrice;
  const outputCost = (outputTokens / 1000) * pricing.outputPrice;
  const totalCost = inputCost + outputCost;

  return {
    inputTokens,
    outputTokens,
    totalCost: Number(totalCost.toFixed(4))
  };
}