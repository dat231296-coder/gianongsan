/**
 * PriceCard Component
 * Design: Modern Agritech Dashboard
 * - Displays product price with trend indicator
 * - Animated price changes with color feedback
 * - Supports realtime updates
 */

import { Product } from '@/lib/products';
import { TrendingDown, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';

interface PriceCardProps {
  product: Product;
  onUpdate?: (product: Product) => void;
  onClick?: () => void;
}

export function PriceCard({ product, onClick }: PriceCardProps) {
  const [displayPrice, setDisplayPrice] = useState(product.currentPrice);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    if (displayPrice !== product.currentPrice) {
      setIsUpdating(true);
      const timer = setTimeout(() => {
        setDisplayPrice(product.currentPrice);
        setIsUpdating(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [product.currentPrice, displayPrice]);

  const trendColor = product.trend === 'up' ? 'text-green-600' : product.trend === 'down' ? 'text-red-600' : 'text-amber-600';
  const bgColor = product.trend === 'up' ? 'bg-green-50' : product.trend === 'down' ? 'bg-red-50' : 'bg-amber-50';
  const borderColor = product.trend === 'up' ? 'border-green-200' : product.trend === 'down' ? 'border-red-200' : 'border-amber-200';

  return (
    <button
      onClick={onClick}
      className={`w-full rounded-lg border-2 ${borderColor} ${bgColor} p-4 text-left transition-all duration-300 hover:shadow-md hover:scale-105`}
    >
      {/* Product Header */}
      <div className="mb-3 flex items-start justify-between">
        <div className="flex-1">
          <h3 className="font-medium text-foreground">{product.name}</h3>
          <p className="text-sm text-muted-foreground">{product.unit}</p>
        </div>
        {product.trend === 'up' ? (
          <TrendingUp className={`${trendColor} h-5 w-5`} />
        ) : product.trend === 'down' ? (
          <TrendingDown className={`${trendColor} h-5 w-5`} />
        ) : (
          <div className={`${trendColor} h-5 w-5 rounded-full border-2`} />
        )}
      </div>

      {/* Price Display */}
      <div className="mb-3">
        <div className={`transition-all duration-300 ${isUpdating ? 'scale-105 opacity-75' : 'scale-100 opacity-100'}`}>
          <p className="font-mono text-2xl font-bold text-foreground">
            {displayPrice.toLocaleString('vi-VN')}₫
          </p>
        </div>
      </div>

      {/* Change Indicator */}
      <div className="flex items-center justify-between">
        <span className={`text-sm font-semibold ${trendColor}`}>
          {product.priceChange > 0 ? '+' : ''}{product.priceChange.toFixed(2)}%
        </span>
        {product.region && (
          <span className="text-xs text-muted-foreground">{product.region}</span>
        )}
      </div>
    </button>
  );
}
