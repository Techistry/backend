# 🧠 Encore AI Tools – Backend

This is the backend server for **Encore AI Tools**, built with **Express** and **TypeScript**, responsible for managing admin operations, tool listings, categories, reviews, image uploads, analytics metrics, and public site integrations.

---

## 🚀 Features

- 🔐 Admin authentication & management
- 🧰 CRUD for Tools, Categories, and Reviews
- 📊 Metrics APIs: Top tools, categories, recent, and most visited
- 📸 Image upload via Cloudinary
- 📂 Bulk tool import via CSV/Excel
- 🧾 User profile updates
- 🌍 CORS-enabled for both Admin and Public frontend

---

## 🛠 Tech Stack

- Node.js + Express
- TypeScript
- MongoDB (via Mongoose or other ODM)
- Cloudinary (for media)
- Multer (file upload handling)
- Dotenv for environment configuration

---

## 📁 Folder Structure

```
.
├── app.ts                 # Main Express app with all routes
├── server.ts              # Entry point
├── routes/
│   ├── adminRoutes.ts
│   ├── toolRoutes.ts
│   ├── categoryRoutes.ts
│   └── reviewRoutes.ts
├── utils/
│   ├── uploadImage.ts
│   ├── file-upload/
│   │   ├── upload.ts
│   │   └── importTools.ts
│   ├── editProfile.ts
│   ├── trackVisits.ts
│   └── metrics/
│       ├── top5Tools.ts
│       ├── top5Categories.ts
│       ├── recentlyAdded.ts
│       └── topVisitedTools.ts
├── config/
│   └── database_config.ts
├── .env
├── tsconfig.json
└── README.md
```

---

## ⚙️ Setup Instructions

1. **Clone the Repository**

```bash
git clone https://github.com/your-org/encore-ai-backend.git
cd encore-ai-backend
```

2. **Install Dependencies**

```bash
npm install
```

3. **Environment Variables**

Create a `.env` file based on the `.env.example` and configure:

```
PORT=5000
MONGODB_URI=mongodb+srv://your-mongo-url
CLOUDINARY_CLOUD_NAME=your-cloud
CLOUDINARY_API_KEY=your-key
CLOUDINARY_API_SECRET=your-secret
```

4. **Run in Dev Mode**

```bash
npm run dev
```

---

## 🧪 API Endpoints

### 🧑‍💼 Admin

- `POST /api/admin/register`
- `POST /api/admin/login`
- `GET /api/admin/profile`

### 🧰 Tools

- `GET /api/tool`
- `POST /api/tool`
- `PUT /api/tool/:id`
- `DELETE /api/tool/:id`
- `GET /api/tool/:id`

### 📂 Categories

- `GET /api/category`
- `POST /api/category`
- `GET /api/category/:id`

### 💬 Reviews

- `GET /api/review`
- `GET /api/review/:id`

### 📈 Metrics

- `GET /api/top-tools`
- `GET /api/top-categories`
- `GET /api/recent-tools`
- `GET /api/top-visited`

### 📸 Upload & Import

- `POST /api/upload-image` – Single image upload
- `POST /api/import-tools` – Bulk import via file

### ✍️ User Profile

- `PUT /api/edit-profile/:userId`

### 🔍 Tracking

- `POST /api/track-visits/:toolId`

---

## 🌐 CORS Configuration

Allowed origins:

- `http://localhost:5173`
- `http://localhost:5174`
- `https://admin.encoreaitools.com`
- `https://encoreaitools.com`

---

## 🚀 Deployment (Render)

1. Push code to GitHub
2. Go to [https://render.com](https://render.com) and create a new Web Service
3. Select your GitHub repo and choose Node environment
4. Set build command: `npm install`
5. Set start command: `npm run build && npm start` or just `npm start` depending on setup
6. Add environment variables in Render dashboard
7. Deploy

---

## 🤝 Contributions

If another developer joins in, ensure:

- You use consistent formatting with ESLint & Prettier
- You follow the API structure in `routes/`
- You write modular functions in `utils/`

---

## 📄 License

MIT © 2025 Encore AI Tools
