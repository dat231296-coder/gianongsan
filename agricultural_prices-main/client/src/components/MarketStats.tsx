/**
 * MarketStats Component
 * Design: Modern Agritech Dashboard
 * - Shows market statistics
 * - Displays top gainers and losers
 * - Market overview
 */

import { Product, allProducts } from '@/lib/products';
import { TrendingDown, TrendingUp } from 'lucide-react';
import { useMemo } from 'react';

export function MarketStats() {
  const stats = useMemo(() => {
    const gainers = [...allProducts]
      .sort((a, b) => b.priceChange - a.priceChange)
      .slice(0, 3);

    const losers = [...allProducts]
      .sort((a, b) => a.priceChange - b.priceChange)
      .slice(0, 3);

    const avgChange = (allProducts.reduce((sum, p) => sum + p.priceChange, 0) / allProducts.length).toFixed(2);
    const upCount = allProducts.filter(p => p.trend === 'up').length;
    const downCount = allProducts.filter(p => p.trend === 'down').length;

    return { gainers, losers, avgChange, upCount, downCount };
  }, []);

  return (
    <div className="space-y-6">
      {/* Market Overview */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="text-sm text-muted-foreground">Trung bình thay đổi</p>
          <p className={`mt-2 text-2xl font-bold ${parseFloat(stats.avgChange) > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {parseFloat(stats.avgChange) > 0 ? '+' : ''}{stats.avgChange}%
          </p>
        </div>

        <div className="rounded-lg border border-border bg-card p-4">
          <p className="text-sm text-muted-foreground">Sản phẩm tăng giá</p>
          <p className="mt-2 text-2xl font-bold text-green-600">{stats.upCount}</p>
        </div>

        <div className="rounded-lg border border-border bg-card p-4">
          <p className="text-sm text-muted-foreground">Sản phẩm giảm giá</p>
          <p className="mt-2 text-2xl font-bold text-red-600">{stats.downCount}</p>
        </div>
      </div>

      {/* Top Gainers */}
      <div className="rounded-lg border border-border bg-card p-6">
        <h3 className="mb-4 flex items-center gap-2 font-semibold text-foreground">
          <TrendingUp className="h-5 w-5 text-green-600" />
          Top Tăng Giá
        </h3>
        <div className="space-y-3">
          {stats.gainers.map(product => (
            <div key={product.id} className="flex items-center justify-between rounded-lg bg-green-50 p-3">
              <span className="font-medium text-foreground">{product.name}</span>
              <span className="font-mono font-bold text-green-600">+{product.priceChange.toFixed(2)}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Top Losers */}
      <div className="rounded-lg border border-border bg-card p-6">
        <h3 className="mb-4 flex items-center gap-2 font-semibold text-foreground">
          <TrendingDown className="h-5 w-5 text-red-600" />
          Top Giảm Giá
        </h3>
        <div className="space-y-3">
          {stats.losers.map(product => (
            <div key={product.id} className="flex items-center justify-between rounded-lg bg-red-50 p-3">
              <span className="font-medium text-foreground">{product.name}</span>
              <span className="font-mono font-bold text-red-600">{product.priceChange.toFixed(2)}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
