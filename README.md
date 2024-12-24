# Laravel React Inertia Starter

A modern full-stack application using Laravel, React, TypeScript, and Inertia.js.

## License

MIT License

Copyright (c) 2024 Shariq Ayaz

## Tech Stack

- **Backend**: Laravel 11.31
- **Frontend**: React 18.2 + TypeScript
- **Routing**: Inertia.js 2.0 (@inertiajs/react 2.0.0)
- **Styling**: Tailwind CSS 3.4.13
- **Build Tool**: Vite 5.0.0
- **Package Manager**: npm 10.9.2

## Features

- 🔄 SPA-like experience with server-side routing via Inertia.js
- 📝 TypeScript support with @types/react and @types/react-dom
- 🎨 Modern UI with Tailwind CSS and PostCSS
- ⚡ Vite for fast development and optimized builds
  - Hot Module Replacement (HMR)
  - Asset optimization and bundling
  - Path aliasing (@/ for resources/js)
  - Laravel Vite plugin integration
- 🔍 Pages and Components:
  - Welcome page (/)
  - About page (/about)
  - Product details (/products/show)
  - Search with filters (/search)

## Quick Start

1. Clone the repository```
git@github.com:ShariqAyaz/Laravel-React-Inertia.git
```
2. Install dependencies
```
composer install
npm install
```
3. Run the development server
```
php artisan serve
npm run dev
```
4. Access the application at http://localhost:8000

## Notes

- This starter uses Laravel Vite plugin for asset management.
- Ensure you have the correct environment variables set up in your `.env` file.
- The application is pre-configured with Tailwind CSS and PostCSS for styling.
- The build process is optimized with Vite for faster development and production builds.
- The `resources/js/app.tsx` file is the entry point for the React application.
- The `resources/js/Pages` directory contains the React pages.
