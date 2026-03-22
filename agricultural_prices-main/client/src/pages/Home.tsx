/**
 * Home Page - Agricultural Market Prices Dashboard
 * Design: Modern Agritech Dashboard
 * - Real-time price display with animated updates
 * - Category-based product organization
 * - Price ticker showing top movers
 * - Responsive grid layout with sidebar
 */

import { CategorySection } from '@/components/CategorySection';
import { MarketStats } from '@/components/MarketStats';
import { PriceTicker } from '@/components/PriceTicker';
import { ProductDetailModal } from '@/components/ProductDetailModal';
import { SearchFilter } from '@/components/SearchFilter';
import { Product, allCategories } from '@/lib/products';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header with Hero Section */}
      <header className="relative overflow-hidden border-b border-border bg-white">
        {/* Background Image */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663458004549/nBvweTUFieJEnAi4qe4evK/rice_field_hero-N4ZMQyxfiqNXYnHYnfBjr8.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground">
              🌾 Giá Nông Sản Thị Trường
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Cập nhật giá thời gian thực từ các khu vực sản xuất nông sản chính
            </p>
          </div>

          {/* Price Ticker */}
          <PriceTicker />
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Sidebar */}
          <aside className="space-y-6 lg:col-span-1">
            <SearchFilter
              onSearch={() => {}}
              onCategoryFilter={() => {}}
              onTrendFilter={() => {}}
            />
            <MarketStats />
          </aside>

          {/* Main Products Area */}
          <div className="lg:col-span-3">
            {isLoading ? (
              <div className="flex items-center justify-center py-12">
                <div className="text-center">
                  <div className="mb-4 inline-block">
                    <div className="h-12 w-12 animate-spin rounded-full border-4 border-border border-t-primary" />
                  </div>
                  <p className="text-muted-foreground">Đang tải dữ liệu giá...</p>
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                {allCategories.map((category, index) => (
                  <div
                    key={category.id}
                    className="animate-in fade-in slide-in-from-bottom-4 duration-500"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <CategorySection category={category} onProductClick={handleProductClick} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {/* About */}
            <div>
              <h3 className="mb-4 font-semibold text-foreground">Về Trang Web</h3>
              <p className="text-sm text-muted-foreground">
                Cung cấp thông tin giá nông sản thị trường thời gian thực, giúp nông dân và thương lái nắm bắt xu hướng giá.
              </p>
            </div>

            {/* Categories */}
            <div>
              <h3 className="mb-4 font-semibold text-foreground">Danh Mục</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {allCategories.map(cat => (
                  <li key={cat.id}>{cat.icon} {cat.name}</li>
                ))}
              </ul>
            </div>

            {/* Info */}
            <div>
              <h3 className="mb-4 font-semibold text-foreground">Thông Tin</h3>
              <p className="text-sm text-muted-foreground">
                Dữ liệu được cập nhật liên tục từ các thị trường nông sản chính ở Việt Nam.
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                © 2026 Agricultural Market Prices. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
