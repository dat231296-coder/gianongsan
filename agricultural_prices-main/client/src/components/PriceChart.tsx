/**
 * PriceChart Component
 * Design: Modern Agritech Dashboard
 * - Displays price history as a line chart
 * - Shows trend over time
 * - Interactive tooltips
 */

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ChartDataPoint {
  time: string;
  price: number;
}

interface PriceChartProps {
  productName: string;
  data: ChartDataPoint[];
  height?: number;
}

export function PriceChart({ productName, data, height = 300 }: PriceChartProps) {
  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <h3 className="mb-4 font-semibold text-foreground">{productName} - Biểu đồ giá 7 ngày</h3>

      <ResponsiveContainer width="100%" height={height}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
          <XAxis
            dataKey="time"
            stroke="var(--muted-foreground)"
            style={{ fontSize: '12px' }}
          />
          <YAxis
            stroke="var(--muted-foreground)"
            style={{ fontSize: '12px' }}
            tickFormatter={(value) => `${value.toLocaleString('vi-VN')}₫`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
            }}
            labelStyle={{ color: 'var(--foreground)' }}
            formatter={(value) => [`${value.toLocaleString('vi-VN')}₫`, 'Giá']}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke="var(--primary)"
            strokeWidth={2}
            dot={{ fill: 'var(--primary)', r: 4 }}
            activeDot={{ r: 6 }}
            isAnimationActive={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
