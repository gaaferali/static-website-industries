# IronCore Industries Website

A modern industrial services website built with **React, TypeScript, and Vite**. The project presents industrial services through a professional responsive interface with dedicated service pages, contact functionality, reusable components, and AI-related service content.

## Overview

IronCore Industries is a frontend business website designed to provide a strong digital presence for an industrial company.

The application uses a component-based React architecture with dedicated pages and reusable UI components, making the project easier to maintain and extend.

## Features

- Professional industrial-themed user interface
- Fully responsive design
- Home page with hero presentation
- Industrial services showcase
- Dedicated service detail pages
- AI service page
- Contact page and contact form
- Reusable service cards
- Responsive navigation bar
- Footer component
- Automatic scroll-to-top behavior
- Client-side routing
- Structured service data
- Fast development and optimized builds using Vite

## Technologies Used

- **React 19** — Component-based frontend development
- **TypeScript** — Type-safe application development
- **Vite** — Development and production build system
- **React Router DOM** — Client-side page routing
- **CSS** — Custom responsive styling
- **Oxc / Oxlint** — Code linting and quality checking

## Application Structure

```text
src/
│
├── assets/
│
├── components/
│   ├── ContactForm.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── Navbar.tsx
│   ├── ScrollToTop.tsx
│   └── ServiceCard.tsx
│
├── data/
│   └── servicesData.ts
│
├── pages/
│   ├── AIServicePage.tsx
│   ├── ContactPage.tsx
│   ├── HomePage.tsx
│   └── ServiceDetailPage.tsx
│
├── App.tsx
├── App.css
├── index.css
└── main.tsx
```

The project separates **pages**, **reusable components**, **assets**, and **service data**, providing a clean frontend architecture.

## Main Pages

### Home

The main landing page introduces the company and its industrial services through the hero section and reusable service components.

### Service Details

Individual services can be presented through dedicated service detail pages, allowing users to learn more about each offering.

### AI Services

A dedicated AI service page presents technology-focused solutions alongside the company's traditional industrial services.

### Contact

The contact page provides users with a dedicated contact form for communicating with the business.

## Getting Started

### Prerequisites

Install:

- Node.js
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/gaaferali/static-website-industries.git
```

Enter the project:

```bash
cd static-website-industries
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Production Build

Build the project:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Linting

Run the configured code quality checker with:

```bash
npm run lint
```

## Purpose

This project demonstrates the development of a professional industrial company website using a structured React and TypeScript architecture.

It focuses on responsive design, reusable components, service presentation, client-side routing, maintainable project organization, and modern frontend development practices.

