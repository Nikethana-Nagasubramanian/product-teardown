# UI Component Library

A modern Next.js application built with TypeScript and Tailwind CSS, showcasing reusable UI components.

## Features

- ⚛️ Next.js 14 with React 18
- 🎨 Tailwind CSS for styling
- 📝 TypeScript for type safety
- 🚀 App Router for file-based routing
- 📦 Modular component structure

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

### Build

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Structure

```
src/
├── app/                # Next.js App Router
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page (/)
│   ├── globals.css     # Global styles
│   ├── accordion/      # Accordion page route
│   │   └── page.tsx
│   ├── counter/        # Counter page route
│   │   └── page.tsx
│   ├── progressbar/    # Progress bar page route
│   │   └── page.tsx
│   └── contact-form/   # Contact form page route
│       └── page.tsx
├── components/         # Reusable UI components
│   ├── accordion/      # Accordion component and sub-components
│   ├── counter/        # Counter component
│   ├── progressbar/    # Progress bar component
│   ├── contact-form/   # Contact form component
│   └── NavBar.tsx      # Navigation bar
├── hooks/              # Custom React hooks (for future use)
├── types/              # TypeScript type definitions (for future use)
└── utils/              # Utility functions (for future use)
```

## Adding New Components

1. Create a new folder in `src/components/` for your component
2. Create the component file(s) inside that folder (add `'use client'` if using hooks)
3. Create a new route folder in `src/app/` (e.g., `src/app/button/`)
4. Create a `page.tsx` file in that route folder
5. Add a navigation item in `src/components/NavBar.tsx`

## Components

### Accordion
Collapsible content sections with support for single or multiple open items.

### Counter
Interactive counter with increment, decrement, and reset functionality.

### Progress Bar
Visual progress indicators with customizable colors and labels.

### Contact Form
Form with validation, error handling, and submission feedback.

## Technologies

- Next.js 14.0
- React 18.2
- TypeScript 5.2
- Tailwind CSS 3.3

