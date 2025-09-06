# Social Web Frontend

Dự án frontend cho ứng dụng Social Web được xây dựng với Vite, React, TypeScript và Ant Design.

## 🚀 Công nghệ sử dụng

- **Vite** - Build tool nhanh và hiện đại
- **React 18** - Thư viện UI
- **TypeScript** - Ngôn ngữ lập trình type-safe
- **Ant Design** - UI component library
- **Axios** - HTTP client
- **React Router** - Client-side routing
- **Sass** - CSS preprocessor

## 📁 Cấu trúc thư mục

```
src/
├── components/          # Các component tái sử dụng
│   ├── Layout.tsx      # Layout chính
│   └── ProtectedRoute.tsx # Route bảo vệ
├── pages/              # Các trang của ứng dụng
│   ├── Home.tsx        # Trang chủ
│   ├── Login.tsx       # Trang đăng nhập
│   └── Register.tsx    # Trang đăng ký
├── services/           # API services
│   ├── api.ts         # Cấu hình Axios
│   └── authService.ts # Service xử lý authentication
├── contexts/           # React Context
│   └── AuthContext.tsx # Context quản lý auth
├── types/              # TypeScript type definitions
│   └── index.ts       # Các types chung
├── utils/              # Utility functions
├── hooks/              # Custom React hooks
├── assets/             # Static assets
└── App.tsx            # Component chính
```

## 🛠️ Cài đặt và chạy

### Yêu cầu hệ thống
- Node.js >= 16.0.0
- npm >= 8.0.0

### Cài đặt dependencies
```bash
npm install
```

### Chạy development server
```bash
npm run dev
```

Ứng dụng sẽ chạy tại `http://localhost:3000`

### Build cho production
```bash
npm run build
```

### Preview build
```bash
npm run preview
```

## 🔧 Cấu hình

### Environment Variables
Tạo file `.env` trong thư mục gốc:

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:8000

# App Configuration
VITE_APP_NAME=Social Web
VITE_APP_VERSION=1.0.0

# Development
VITE_DEBUG=true
```

### Path Aliases
Dự án đã cấu hình các path aliases để import dễ dàng hơn:

- `@/` → `src/`
- `@components/` → `src/components/`
- `@pages/` → `src/pages/`
- `@services/` → `src/services/`
- `@utils/` → `src/utils/`
- `@types/` → `src/types/`
- `@assets/` → `src/assets/`

## 📝 Tính năng chính

- ✅ Authentication (Đăng nhập/Đăng ký)
- ✅ Protected Routes
- ✅ Responsive Layout
- ✅ TypeScript support
- ✅ Path aliases
- ✅ API integration với Axios
- ✅ Ant Design UI components
- ✅ Vietnamese localization

## 🎨 UI/UX

- Sử dụng Ant Design làm UI framework chính
- Responsive design cho mobile và desktop
- Theme tùy chỉnh
- Vietnamese localization

## 🔐 Authentication

Dự án sử dụng JWT token-based authentication:
- Access token lưu trong localStorage
- Refresh token để gia hạn access token
- Automatic token refresh
- Protected routes với role-based access

## 📱 Responsive

- Mobile-first approach
- Breakpoints: xs (480px), sm (576px), md (768px), lg (992px), xl (1200px)
- Collapsible sidebar trên mobile

## 🚀 Deployment

### Build cho production
```bash
npm run build
```

### Deploy lên Vercel
```bash
npm install -g vercel
vercel --prod
```

### Deploy lên Netlify
```bash
npm run build
# Upload thư mục dist lên Netlify
```

## 🤝 Contributing

1. Fork dự án
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.