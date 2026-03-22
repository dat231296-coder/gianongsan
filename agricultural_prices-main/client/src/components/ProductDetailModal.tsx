/**
 * ProductDetailModal Component
 * Design: Modern Agritech Dashboard
 * - Shows detailed product information
 * - Displays price history chart
 * - Interactive close button
 */

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Product } from '@/lib/products';
import { TrendingDown, TrendingUp, X } from 'lucide-react';
import { useMemo } from 'react';
import { PriceChart } from './PriceChart';

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductDetailModal({ product, isOpen, onClose }: ProductDetailModalProps) {
  // Generate mock historical data for the chart
  const chartData = useMemo(() => {
    if (!product) return [];
    const data = [];
    const basePrice = product.currentPrice * 0.95;
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      data.push({
        time: date.toLocaleDateString('vi-VN', { month: 'short', day: 'numeric' }),
        price: Math.round(basePrice + Math.random() * product.currentPrice * 0.1),
      });
    }
    return data;
  }, [product]);

  if (!product) return null;

  const trendColor = product.trend === 'up' ? 'text-green-600' : product.trend === 'down' ? 'text-red-600' : 'text-amber-600';
  const bgColor = product.trend === 'up' ? 'bg-green-50' : product.trend === 'down' ? 'bg-red-50' : 'bg-amber-50';

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>{product.name}</span>
            <button
              onClick={onClose}
              className="rounded-lg p-1 hover:bg-secondary"
            >
              <X className="h-5 w-5" />
            </button>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Current Price Info */}
          <div className={`rounded-lg ${bgColor} p-6`}>
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Giá hiện tại</span>
              <div className="flex items-center gap-2">
                {product.trend === 'up' ? (
                  <TrendingUp className={`${trendColor} h-5 w-5`} />
                ) : (
                  <TrendingDown className={`${trendColor} h-5 w-5`} />
                )}
              </div>
            </div>
            <p className="font-mono text-3xl font-bold text-foreground">
              {product.currentPrice.toLocaleString('vi-VN')}₫
            </p>
            <p className={`mt-2 text-sm font-semibold ${trendColor}`}>
              {product.priceChange > 0 ? '+' : ''}{product.priceChange.toFixed(2)}% so với hôm qua
            </p>
          </div>

          {/* Product Info */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-sm text-muted-foreground">Đơn vị</p>
              <p className="font-semibold text-foreground">{product.unit}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Khu vực</p>
              <p className="font-semibold text-foreground">{product.region || 'N/A'}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Danh mục</p>
              <p className="font-semibold text-foreground">{product.category}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Cập nhật lúc</p>
              <p className="font-semibold text-foreground">
                {product.lastUpdated.toLocaleTimeString('vi-VN')}
              </p>
            </div>
          </div>

          {/* Price Chart */}
          <PriceChart productName={product.name} data={chartData} height={250} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
