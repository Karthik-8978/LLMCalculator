export interface ModelPricing {
  name: string;
  inputPrice: number;
  outputPrice: number;
  contextWindow: number;
}

export interface CostCalculation {
  inputTokens: number;
  outputTokens: number;
  totalCost: number;
}

export interface UsageMetrics {
  timestamp: Date;
  model: string;
  inputTokens: number;
  outputTokens: number;
  cost: number;
}