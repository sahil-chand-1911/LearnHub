# LearnHub

LearnHub is a comprehensive full-stack e-learning platform designed to provide a seamless educational experience. It features a modern, responsive frontend built with React and Vite, paired with a robust backend powered by Node.js, Express, and Prisma.

## 🚀 Features

- **Interactive User Interface**: A fast, responsive, and intuitive UI built with React and styled with Tailwind CSS.
- **Robust Backend**: A scalable Node.js and Express RESTful API.
- **Database Management**: Seamless data modeling and migrations using Prisma ORM.
- **Secure Authentication**: User authentication and authorization handled via JWT and bcrypt.
- **Modern Tooling**: Leveraging Vite for blazing-fast frontend builds and Nodemon for seamless backend development.

## 🛠️ Tech Stack

### Frontend (`/client`)
- **Framework**: [React](https://reactjs.org/) (via [Vite](https://vitejs.dev/))
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **HTTP Client**: [Axios](https://axios-http.com/)

### Backend (`/server`)
- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Authentication**: JWT (JSON Web Tokens) & `bcryptjs`
- **Environment Management**: `dotenv`

## 📁 Project Structure

The project is structured as a monorepo, cleanly separating the client UI from the backend services.

```text
LearnHub/
├── client/       # React (Vite) frontend application
└── server/       # Node.js/Express backend API
```

## ⚙️ Installation & Setup

### Prerequisites

Ensure you have the following installed on your local machine:
- **Node.js** (v16 or higher recommended)
- **npm** or **yarn**
- **Database** (PostgreSQL, MySQL, etc., depending on your Prisma schema configuration)

### 1. Clone the Repository

```bash
git clone <repository-url>
cd LearnHub
```

### 2. Setup the Backend (Server)

Navigate to the server directory and install dependencies:

```bash
cd server
npm install
```

Set up your environment variables by creating a `.env` file in the `server` directory:

```env
DATABASE_URL="your_database_connection_string"
JWT_SECRET="your_jwt_secret"
PORT=5000
```

Run database migrations to set up your schema:

```bash
npx prisma migrate dev
```

Start the backend development server:

```bash
npm run dev
```

### 3. Setup the Frontend (Client)

Open a new terminal, navigate to the client directory, and install dependencies:

```bash
cd client
npm install
```

Start the frontend development server:

```bash
npm run dev
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! 

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## 📄 License

This project is licensed under the ISC License.
