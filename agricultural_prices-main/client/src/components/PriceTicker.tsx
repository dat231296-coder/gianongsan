/**
 * PriceTicker Component
 * Design: Modern Agritech Dashboard
 * - Displays top moving products in realtime
 * - Animated scrolling ticker
 * - Shows biggest gainers and losers
 */

import { allProducts } from '@/lib/products';
import { TrendingDown, TrendingUp } from 'lucide-react';
import { useMemo } from 'react';

export function PriceTicker() {
  const topMovers = useMemo(() => {
    const sorted = [...allProducts].sort((a, b) => Math.abs(b.priceChange) - Math.abs(a.priceChange));
    return sorted.slice(0, 5);
  }, []);

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-gradient-to-r from-primary/5 via-background to-accent/5">
      <div className="flex items-center gap-4 px-6 py-4">
        <div className="flex items-center gap-2 whitespace-nowrap">
          <span className="text-sm font-semibold text-primary">📊 TOP MOVERS</span>
          <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
        </div>

        {/* Scrolling ticker */}
        <div className="flex-1 overflow-hidden">
          <div className="flex gap-6" style={{
            animation: 'scroll 20s linear infinite',
          }}>
            {[...topMovers, ...topMovers].map((product, idx) => (
              <div key={`${product.id}-${idx}`} className="flex items-center gap-2 whitespace-nowrap">
                <span className="text-sm font-medium text-foreground">{product.name}</span>
                <div className="flex items-center gap-1">
                  {product.trend === 'up' ? (
                    <TrendingUp className="h-4 w-4 text-green-600" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-red-600" />
                  )}
                  <span
                    className={`font-mono text-sm font-bold ${
                      product.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {product.priceChange > 0 ? '+' : ''}{product.priceChange.toFixed(2)}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
