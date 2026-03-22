/**
 * Agricultural Products Data Structure
 * Design Philosophy: Modern Agritech Dashboard
 * - Clean data model for realtime price updates
 * - Organized by 5 main categories from the mindmap
 * - Support for price history and trend indicators
 */

export interface Product {
  id: string;
  name: string;
  category: string;
  unit: string; // kg, lít, etc.
  currentPrice: number;
  previousPrice: number;
  priceChange: number; // percentage
  trend: 'up' | 'down' | 'stable';
  lastUpdated: Date;
  image?: string;
  region?: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  products: Product[];
}

// Category 1: Lương thực chính (Cereals)
export const cerealsCategory: ProductCategory = {
  id: 'cereals',
  name: 'Lương thực chính',
  description: 'Gạo, ngô và các sản phẩm lương thực cơ bản',
  icon: '🌾',
  products: [
    {
      id: 'rice-white',
      name: 'Gạo trắng',
      category: 'Lương thực chính',
      unit: 'kg',
      currentPrice: 18500,
      previousPrice: 18200,
      priceChange: 1.65,
      trend: 'up',
      lastUpdated: new Date(),
      region: 'Mekong Delta',
    },
    {
      id: 'rice-jasmine',
      name: 'Gạo hương',
      category: 'Lương thực chính',
      unit: 'kg',
      currentPrice: 22000,
      previousPrice: 21500,
      priceChange: 2.33,
      trend: 'up',
      lastUpdated: new Date(),
      region: 'Mekong Delta',
    },
    {
      id: 'corn',
      name: 'Ngô',
      category: 'Lương thực chính',
      unit: 'kg',
      currentPrice: 8200,
      previousPrice: 8400,
      priceChange: -2.38,
      trend: 'down',
      lastUpdated: new Date(),
      region: 'Central Highlands',
    },
  ],
};

// Category 2: Họ Đậu & Hạt cơ bản (Legumes & Seeds)
export const legumesCategory: ProductCategory = {
  id: 'legumes',
  name: 'Họ Đậu & Hạt cơ bản',
  description: 'Đậu, hạt và các sản phẩm từ họ đậu',
  icon: '🫘',
  products: [
    {
      id: 'peanut',
      name: 'Lạc',
      category: 'Họ Đậu & Hạt cơ bản',
      unit: 'kg',
      currentPrice: 28500,
      previousPrice: 27800,
      priceChange: 2.51,
      trend: 'up',
      lastUpdated: new Date(),
      region: 'Binh Phuoc',
    },
    {
      id: 'soybean',
      name: 'Đậu nành',
      category: 'Họ Đậu & Hạt cơ bản',
      unit: 'kg',
      currentPrice: 12500,
      previousPrice: 12800,
      priceChange: -2.34,
      trend: 'down',
      lastUpdated: new Date(),
      region: 'Mekong Delta',
    },
    {
      id: 'mung-bean',
      name: 'Đậu xanh',
      category: 'Họ Đậu & Hạt cơ bản',
      unit: 'kg',
      currentPrice: 15200,
      previousPrice: 15000,
      priceChange: 1.33,
      trend: 'up',
      lastUpdated: new Date(),
      region: 'Mekong Delta',
    },
  ],
};

// Category 3: Đồ rừng & Gia vị Bắc (Forest Products & Northern Spices)
export const forestSpicesCategory: ProductCategory = {
  id: 'forest-spices',
  name: 'Đồ rừng & Gia vị Bắc',
  description: 'Gia vị, thảo dược và sản phẩm từ rừng',
  icon: '🌿',
  products: [
    {
      id: 'star-anise',
      name: 'Hồi',
      category: 'Đồ rừng & Gia vị Bắc',
      unit: 'kg',
      currentPrice: 185000,
      previousPrice: 180000,
      priceChange: 2.78,
      trend: 'up',
      lastUpdated: new Date(),
      region: 'Ha Giang',
    },
    {
      id: 'cinnamon',
      name: 'Quế',
      category: 'Đồ rừng & Gia vị Bắc',
      unit: 'kg',
      currentPrice: 125000,
      previousPrice: 128000,
      priceChange: -2.34,
      trend: 'down',
      lastUpdated: new Date(),
      region: 'Quang Tri',
    },
    {
      id: 'turmeric',
      name: 'Nghệ',
      category: 'Đồ rừng & Gia vị Bắc',
      unit: 'kg',
      currentPrice: 35000,
      previousPrice: 34000,
      priceChange: 2.94,
      trend: 'up',
      lastUpdated: new Date(),
      region: 'Dak Lak',
    },
  ],
};

// Category 4: Nguyên liệu bếp & Pha chế (Kitchen Ingredients & Beverages)
export const kitchenIngredientsCategory: ProductCategory = {
  id: 'kitchen-ingredients',
  name: 'Nguyên liệu bếp & Pha chế',
  description: 'Rau, gia vị và nguyên liệu nấu ăn',
  icon: '🧂',
  products: [
    {
      id: 'garlic',
      name: 'Tỏi',
      category: 'Nguyên liệu bếp & Pha chế',
      unit: 'kg',
      currentPrice: 42000,
      previousPrice: 40000,
      priceChange: 5.0,
      trend: 'up',
      lastUpdated: new Date(),
      region: 'Hung Yen',
    },
    {
      id: 'ginger',
      name: 'Gừng',
      category: 'Nguyên liệu bếp & Pha chế',
      unit: 'kg',
      currentPrice: 28000,
      previousPrice: 29000,
      priceChange: -3.45,
      trend: 'down',
      lastUpdated: new Date(),
      region: 'Hoa Binh',
    },
    {
      id: 'chili',
      name: 'Ớt',
      category: 'Nguyên liệu bếp & Pha chế',
      unit: 'kg',
      currentPrice: 65000,
      previousPrice: 62000,
      priceChange: 4.84,
      trend: 'up',
      lastUpdated: new Date(),
      region: 'Dak Lak',
    },
  ],
};

// Category 5: Dinh dưỡng & Ăn vặt cao cấp (Nutritious & Premium Snacks)
export const nutritionPremiumCategory: ProductCategory = {
  id: 'nutrition-premium',
  name: 'Dinh dưỡng & Ăn vặt cao cấp',
  description: 'Trái cây, hạt dinh dưỡng và sản phẩm cao cấp',
  icon: '🥑',
  products: [
    {
      id: 'cashew',
      name: 'Hạt điều',
      category: 'Dinh dưỡng & Ăn vặt cao cấp',
      unit: 'kg',
      currentPrice: 285000,
      previousPrice: 280000,
      priceChange: 1.79,
      trend: 'up',
      lastUpdated: new Date(),
      region: 'Binh Phuoc',
    },
    {
      id: 'mango',
      name: 'Xoài',
      category: 'Dinh dưỡng & Ăn vặt cao cấp',
      unit: 'kg',
      currentPrice: 32000,
      previousPrice: 35000,
      priceChange: -8.57,
      trend: 'down',
      lastUpdated: new Date(),
      region: 'Mekong Delta',
    },
    {
      id: 'dragon-fruit',
      name: 'Thanh long',
      category: 'Dinh dưỡng & Ăn vặt cao cấp',
      unit: 'kg',
      currentPrice: 45000,
      previousPrice: 42000,
      priceChange: 7.14,
      trend: 'up',
      lastUpdated: new Date(),
      region: 'Binh Thuan',
    },
  ],
};

export const allCategories: ProductCategory[] = [
  cerealsCategory,
  legumesCategory,
  forestSpicesCategory,
  kitchenIngredientsCategory,
  nutritionPremiumCategory,
];

export const allProducts: Product[] = allCategories.flatMap(cat => cat.products);
