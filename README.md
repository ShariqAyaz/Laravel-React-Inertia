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
1. **Fork the repository** to your own GitHub account, then clone it locally:
```
git clone git@github.com:ShariqAyaz/Laravel-React-Inertia.git
```
2. Install dependencies
- Install Inertia Laravel package
```
composer require inertiajs/inertia-laravel
```
- Inertia Middleware
```
php artisan inertia:middleware
```
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

## Request Lifecycle & Page Resolution

### Request Flow
1. **Initial Request**: Browser makes request to Laravel route (e.g., `/about`)
2. **Server Processing**: 
   - Laravel routes (`routes/web.php`) handle the request
   - Route returns `Inertia::render('PageName')`
   - Server prepares initial page data

2. **First Visit (Full Page Load)**
   - Server returns complete HTML with app.blade.php
   - Vite bundles JavaScript and React components
   - createInertiaApp bootstraps the React application
   - Page component loads and renders

3. **Subsequent Navigation**
   - Inertia intercepts client-side navigation
   - XHR request made to server
   - Server returns JSON response
   - React updates only necessary components

### Page Resolution Architecture
```typescript
// How resolvePageComponent works with routes
createInertiaApp({
  resolve: (name) => resolvePageComponent(
    `./Pages/${name}.tsx`,
    import.meta.glob('./Pages/**/*.tsx')
  ),
  // ...
})
```

- **Dynamic Import Mapping**:
  - `name` parameter matches route response (e.g., 'About' → './Pages/About.tsx')
  - `import.meta.glob` creates a module map during build time
  - Components lazy-load only when needed

- **Route-Component Correlation**:
  ```php
  // routes/web.php → resources/js/Pages
  Route::get('/about', fn() => Inertia::render('About'))
  // Maps to: resources/js/Pages/About.tsx
  ```

This architecture enables:
- Automatic code splitting
- On-demand component loading
- Seamless SPA-like navigation
- Server-side route handling with client-side rendering

## Component Resolution Approaches

### 1. Dynamic Module Resolution (Default)
```typescript
resolve: (name) => resolvePageComponent(
    `./Pages/${name}.tsx`,
    import.meta.glob<any>('./Pages/**/*.tsx')
)
```
Benefits:
- Automatic code splitting
- Dynamic imports for better performance
- No manual page registration needed
- Scales well with many pages

### 2. Direct Resolution (Explicit)
```typescript
const pages = {
    'Welcome': Welcome,
    'About': About,
    'Products/Show': ProductShow,
    'Search': Search
}

resolve: (name) => {
    const page = pages[name]
    if (!page) throw new Error(`Page ${name} not found`)
    return page
}
```
Benefits:
- More readable and explicit
- Easier to debug
- Clear dependency tree
- Better IDE support and type checking
- Immediate error detection for missing pages

Choose approach based on your needs:
- Use Dynamic for large apps with many pages
- Use Direct for smaller apps where explicitness is valued over automation
