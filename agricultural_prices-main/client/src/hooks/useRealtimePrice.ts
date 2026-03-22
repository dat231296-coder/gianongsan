/**
 * useRealtimePrice Hook
 * Design: Modern Agritech Dashboard
 * - Simulates realtime price updates
 * - Generates random price fluctuations
 * - Maintains trend indicators
 */

import { Product } from '@/lib/products';
import { useEffect, useState } from 'react';

interface UseRealtimePriceOptions {
  updateInterval?: number; // milliseconds
  volatility?: number; // percentage change range
}

export function useRealtimePrice(
  initialProduct: Product,
  options: UseRealtimePriceOptions = {}
) {
  const { updateInterval = 3000, volatility = 2 } = options;
  const [product, setProduct] = useState(initialProduct);

  useEffect(() => {
    const interval = setInterval(() => {
      setProduct(prev => {
        const changePercent = (Math.random() - 0.5) * volatility;
        const newPrice = Math.max(
          prev.currentPrice * (1 + changePercent / 100),
          prev.currentPrice * 0.8 // Prevent price from dropping too low
        );

        const priceChange = ((newPrice - prev.previousPrice) / prev.previousPrice) * 100;
        const trend = newPrice > prev.currentPrice ? 'up' : newPrice < prev.currentPrice ? 'down' : 'stable';

        return {
          ...prev,
          previousPrice: prev.currentPrice,
          currentPrice: Math.round(newPrice),
          priceChange: parseFloat(priceChange.toFixed(2)),
          trend,
          lastUpdated: new Date(),
        };
      });
    }, updateInterval);

    return () => clearInterval(interval);
  }, [updateInterval, volatility]);

  return product;
}
