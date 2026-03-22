# Brainstorm Thiết Kế: Trang Web Giá Nông Sản Thời Gian Thực

## Ý Tưởng 1: Modern Agritech Dashboard (Xác Suất: 0.08)

**Design Movement:** Contemporary Data Visualization + Minimalist Brutalism

**Core Principles:**
- Dữ liệu là trung tâm: Mọi yếu tố thiết kế phục vụ việc hiển thị thông tin rõ ràng
- Tính chất thô mộc: Sử dụng lưới rõ ràng, font monospace cho giá, border tối giản
- Tương tác trực tiếp: Người dùng có thể click vào bất kỳ sản phẩm nào để xem chi tiết realtime
- Hiệu suất trực quan: Màu sắc thay đổi theo xu hướng giá (xanh/đỏ)

**Color Philosophy:**
- Nền: Xám sáng (Neutral 50) với accent xanh lá cây (Emerald 600) cho tăng giá, đỏ (Rose 600) cho giảm giá
- Typography: Monospace cho số liệu, Sans-serif cho tiêu đề
- Reasoning: Phản ánh tính chất "công nghệ nông nghiệp" - kết hợp truyền thống với hiện đại

**Layout Paradigm:**
- Grid 3 cột cho các nhóm sản phẩm chính
- Mỗi nhóm là card có thể mở rộng để xem chi tiết
- Sidebar trái cho bộ lọc (theo khu vực, loại sản phẩm, khoảng giá)
- Realtime ticker ở header hiển thị 5 sản phẩm thay đổi nhiều nhất

**Signature Elements:**
- Animated price ticker với icon mũi tên (↑/↓)
- Sparkline charts nhỏ cho mỗi sản phẩm
- Pulse animation cho các giá cập nhật mới

**Interaction Philosophy:**
- Hover: Highlight card, hiển thị tooltip với thông tin chi tiết
- Click: Mở modal với biểu đồ giá lịch sử 7 ngày
- Realtime updates: Fade-in animation khi giá thay đổi

**Animation:**
- Price changes: Fade + scale-up animation (200ms)
- Card hover: Subtle shadow lift + border color change
- Ticker scroll: Smooth infinite scroll

**Typography System:**
- Display: IBM Plex Mono Bold (tiêu đề chính)
- Body: Inter Regular (mô tả)
- Data: IBM Plex Mono Regular (giá, số liệu)

---

## Ý Tưởng 2: Organic Marketplace Experience (Xác Suất: 0.07)

**Design Movement:** Earthy Minimalism + Agricultural Heritage

**Core Principles:**
- Kết nối với đất đai: Sử dụng texture gỗ, đất, lá cây
- Tính người: Ưu tiên hình ảnh thực tế của nông sản thay vì icon trừu tượng
- Cộng đồng: Hiển thị thông tin từ nông dân địa phương
- Bền vững: Nhấn mạnh giá công bằng, nguồn gốc sản phẩm

**Color Philosophy:**
- Nền: Kem nhạt (Amber 50) với accent nâu (Amber 700) và xanh lá (Lime 600)
- Accent: Terracotta (Orange 600) cho các thông báo quan trọng
- Reasoning: Phản ánh màu sắc tự nhiên của nông trại, tạo cảm giác ấm áp và đáng tin cậy

**Layout Paradigm:**
- Hero section: Ảnh nông sản lớn + trending products
- Masonry grid cho các nhóm sản phẩm (không đều đặn)
- Sidebar phải cho thông tin nông dân + đánh giá
- Footer: Thông tin về nguồn gốc sản phẩm

**Signature Elements:**
- Leaf icons cho các nhóm sản phẩm
- Handwritten-style labels cho tên sản phẩm
- Subtle grain texture trên background
- Farmer avatars + testimonials

**Interaction Philosophy:**
- Hover: Sản phẩm "nổi lên" với shadow + scale
- Click: Xem thông tin nông dân, khu vực sản xuất
- Scroll: Parallax effect trên hero image

**Animation:**
- Entrance: Stagger animation cho các sản phẩm
- Price updates: Gentle pulse + color fade
- Hover: Smooth scale + shadow transition

**Typography System:**
- Display: Playfair Display Bold (tiêu đề, serif)
- Body: Poppins Regular (mô tả, friendly)
- Accent: Handlee (labels, handwritten feel)

---

## Ý Tưởng 3: Real-Time Trading Floor (Xác Suất: 0.06)

**Design Movement:** Financial Dashboard + Kinetic Energy

**Core Principles:**
- Tốc độ: Mọi thứ phải cảm thấy nhanh và responsive
- Sự cạnh tranh: Hiển thị ranking, top movers, biggest losers
- Thông tin đầy đủ: Mật độ thông tin cao nhưng vẫn dễ đọc
- Gamification: Badges, streaks cho các sản phẩm "hot"

**Color Philosophy:**
- Nền: Đen đậm (Slate 950) với accent vàng (Amber 400) và xanh dương (Blue 500)
- Realtime: Xanh lá (Green 400) cho tăng, đỏ (Red 500) cho giảm
- Reasoning: Phản ánh sàn giao dịch tài chính, tạo cảm giác năng động, chuyên nghiệp

**Layout Paradigm:**
- Header: Ticker tape với top 10 movers
- Main: 3-column layout (Gainers | All Products | Losers)
- Mỗi cột là scrollable list với real-time updates
- Right sidebar: Market stats, volume, volatility

**Signature Elements:**
- Animated percentage badges (↑ 5.2%)
- Glowing effects cho hot products
- Candlestick-style mini charts
- Notification badges cho price alerts

**Interaction Philosophy:**
- Hover: Highlight row, show detailed stats
- Click: Open detailed trading chart (1h, 1d, 1w, 1m)
- Scroll: Infinite scroll với lazy loading

**Animation:**
- Price updates: Flash + color transition (100ms)
- Movers list: Slide-in animation
- Badges: Pulse effect khi có update

**Typography System:**
- Display: Space Mono Bold (tiêu đề, monospace)
- Body: Roboto Regular (mô tả)
- Data: Space Mono Regular (giá, số liệu)

---

## Lựa Chọn Thiết Kế

**Tôi chọn: Ý Tưởng 1 - Modern Agritech Dashboard**

Lý do:
- Phù hợp nhất với mục đích hiển thị dữ liệu giá thời gian thực
- Cân bằng tốt giữa tính chuyên nghiệp và dễ sử dụng
- Dễ mở rộng với các tính năng mới (bộ lọc, so sánh, cảnh báo)
- Tạo cảm giác "công nghệ nông nghiệp" - kết hợp truyền thống với hiện đại
