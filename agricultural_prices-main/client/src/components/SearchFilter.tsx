/**
 * SearchFilter Component
 * Design: Modern Agritech Dashboard
 * - Search products by name
 * - Filter by category and trend
 * - Real-time filtering
 */

import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search } from 'lucide-react';
import { useState } from 'react';

interface SearchFilterProps {
  onSearch: (query: string) => void;
  onCategoryFilter: (category: string) => void;
  onTrendFilter: (trend: string) => void;
}

export function SearchFilter({ onSearch, onCategoryFilter, onTrendFilter }: SearchFilterProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    onSearch(value);
  };

  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <h3 className="mb-4 font-semibold text-foreground">Tìm kiếm & Lọc</h3>

      <div className="space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Tìm kiếm sản phẩm..."
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Category Filter */}
        <div>
          <label className="mb-2 block text-sm font-medium text-muted-foreground">Danh mục</label>
          <Select onValueChange={onCategoryFilter} defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="Chọn danh mục" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tất cả danh mục</SelectItem>
              <SelectItem value="cereals">Lương thực chính</SelectItem>
              <SelectItem value="legumes">Họ Đậu & Hạt cơ bản</SelectItem>
              <SelectItem value="forest-spices">Đồ rừng & Gia vị Bắc</SelectItem>
              <SelectItem value="kitchen-ingredients">Nguyên liệu bếp & Pha chế</SelectItem>
              <SelectItem value="nutrition-premium">Dinh dưỡng & Ăn vặt cao cấp</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Trend Filter */}
        <div>
          <label className="mb-2 block text-sm font-medium text-muted-foreground">Xu hướng</label>
          <Select onValueChange={onTrendFilter} defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="Chọn xu hướng" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tất cả</SelectItem>
              <SelectItem value="up">📈 Giá tăng</SelectItem>
              <SelectItem value="down">📉 Giá giảm</SelectItem>
              <SelectItem value="stable">➡️ Ổn định</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
