# Fwork — Hệ thống quản lý công việc & đo lường hiệu suất (FPT Schools)

Web app (SPA) quản lý công việc, phối hợp & đo lường hiệu suất cho đội Marketing FPT Schools.
Giao diện theo bộ nhận diện FSC-Insight (xanh #0064B1 · cam #EF7025 · lá #21B14B).

## Cấu trúc
```
.
├── index.html              # Trang chính, nạp style.css + js/tailwind.config.js + app.js
├── style.css               # CSS tuỳ biến
├── app.js                  # Toàn bộ logic ứng dụng (SPA, hash router)
├── js/
│   └── tailwind.config.js  # Cấu hình bảng màu thương hiệu (Tailwind Play CDN)
├── css/                    # (để thêm stylesheet nếu cần)
├── images/                 # logo.svg & ảnh tĩnh
└── README.md
```

## Công nghệ
HTML5 · TailwindCSS (Play CDN) · Chart.js (CDN) · Vanilla JavaScript. Không cần build.

## Chạy thử (web tĩnh, cần Internet cho CDN)
```bash
npx serve .
# hoặc
python3 -m http.server 8080
```
Mở http://localhost:8080

## Đẩy lên GitHub
```bash
git init
git add .
git commit -m "Fwork web app"
git branch -M main
git remote add origin <URL repo của bạn>
git push -u origin main
```
Triển khai miễn phí bằng GitHub Pages / Netlify / Vercel (chọn thư mục gốc).
