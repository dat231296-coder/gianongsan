/**
 * CategorySection Component
 * Design: Modern Agritech Dashboard
 * - Displays a category with its products in a grid
 * - Expandable/collapsible design
 * - Animated entrance
 */

import { Product, ProductCategory } from '@/lib/products';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { PriceCard } from './PriceCard';

interface CategorySectionProps {
  category: ProductCategory;
  defaultExpanded?: boolean;
  onProductClick?: (product: Product) => void;
}

export function CategorySection({ category, defaultExpanded = true, onProductClick }: CategorySectionProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-card transition-all duration-300">
      {/* Category Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full bg-gradient-to-r from-primary/5 to-transparent px-6 py-4 text-left transition-colors hover:bg-primary/10"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{category.icon}</span>
            <div>
              <h2 className="text-lg font-semibold text-foreground">{category.name}</h2>
              <p className="text-sm text-muted-foreground">{category.description}</p>
            </div>
          </div>
          <ChevronDown
            className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
          />
        </div>
      </button>

      {/* Products Grid */}
      {isExpanded && (
        <div className="border-t border-border bg-background/50 p-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {category.products.map((product, index) => (
              <div
                key={product.id}
                className="animate-in fade-in slide-in-from-bottom-2 duration-300"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <PriceCard product={product} onClick={() => onProductClick?.(product)} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Collapsed State Info */}
      {!isExpanded && (
        <div className="border-t border-border px-6 py-3 text-sm text-muted-foreground">
          {category.products.length} sản phẩm
        </div>
      )}
    </div>
  );
}
