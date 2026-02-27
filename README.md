# TruVector

A simple multi-page React website with basic authentication.

## Features

- 🔐 **Basic Authentication**: Login system with protected routes
- 🗺️ **Multi-Page Navigation**: Multiple pages with React Router
- ⚡ **Modern Stack**: Built with React 19, Vite, and React Router
- 💾 **Persistent Sessions**: Login state stored in localStorage
- 🎨 **Clean UI**: Simple and intuitive design

## Pages

- **Login**: Authentication page
- **Landing**: Main navigation page with links to all sections
- **InTellMe**: Information about InTellMe and its mission
- **TruVector Overview**: Details about TruVector technology
- **Technical Architecture**: Technical infrastructure overview
- **Emma Placement**: Emma AI placement information
- **For Investors**: Investment opportunities and growth strategy
- **Dashboard**: User dashboard with statistics and activity

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/GooseyPrime/truvector.git
cd truvector
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Usage

1. Navigate to the application in your browser
2. You'll be redirected to the login page
3. Enter your provided credentials to access the application
4. Once logged in, you can navigate between the different sections
5. Use the Logout button in the navigation bar to sign out

## Project Structure

```
truvector/
├── src/
│   ├── components/         # Reusable components
│   │   ├── Layout.jsx      # Layout with navigation
│   │   ├── Layout.css
│   │   └── ProtectedRoute.jsx  # Route protection wrapper
│   ├── context/            # React Context
│   │   └── AuthContext.jsx # Authentication state management
│   ├── pages/              # Page components
│   │   ├── Login.jsx       # Login page
│   │   ├── Home.jsx        # Home page
│   │   ├── About.jsx       # About page
│   │   └── Dashboard.jsx   # Dashboard page
│   ├── App.jsx             # Main app with routing
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
├── index.html              # HTML template
├── package.json            # Dependencies
└── vite.config.js          # Vite configuration
```

## Technologies

- **React 19**: JavaScript library for building user interfaces
- **React Router 7**: Declarative routing for React applications
- **Vite**: Next-generation frontend build tool
- **Context API**: State management for authentication

## Authentication

This application uses a client-side authentication system. For production deployment:

- Credentials are managed client-side for demonstration purposes
- In a production environment, implement proper backend authentication
- Use secure password hashing and JWT tokens or session cookies
- Add password validation and security measures
- Use HTTPS for all communications
- Consider implementing rate limiting and brute-force protection

## License

See the [LICENSE](LICENSE) file for details.

