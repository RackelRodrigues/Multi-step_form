# Multi-Step Form — Frontend Mentor

Project developed as a Frontend Mentor challenge.
The goal is to build a complete multi-step form using modern frontend tools such as React, TypeScript, Context API, DTOs, SCSS, and Cypress for automated end-to-end testing.

This project demonstrates clean architecture, reusable components, global state management, validation handling, and a fully responsive layout.

---

## 🚀 Technologies Used

- **React + TypeScript (Create React App)**
- **Context API (useContext)** — to store and share state across all steps
- **DTO (Data Transfer Object)** — to organize the project’s data structure and types
- **Sass (SCSS)** — for modular and responsive styling
- **react-hook-form** — for fast and efficient form validation
- **Cypress** — end-to-end interface testing
- **Basic SEO** — essential metadata for the website
- **js-confetti** — used for the final success animation
---

## 📁 Main Folder Structure

```bash
├── components/   # Reusable UI components shared across the application
├── contexts/     # Global state management using React Context API
├── lib/          # Utility libraries and helpers (e.g., phone formatting)
├── DTO/          # Data Transfer Objects and TypeScript interfaces
├── pages/        # Multi-step form pages (Personal Info, Plan, Add-ons, etc.)
├── server/       # Mock API logic, data handlers, or service layer
├── styles/       # Global and modular SCSS styling
├── utils/        # Pure helper functions and validators
├── cypress/      # Cypress E2E and component tests
├── public/       # Static assets (images, icons, favicons)
└── assets/       # SVGs and design resources
```

## 📦 About the Project

The goal of this challenge is to build a multi-step form where users can enter personal information, choose a plan, select add-ons, and review the summary before confirmation.  
The app maintains state across steps, validates input, and offers a smooth and intuitive user flow.

---
