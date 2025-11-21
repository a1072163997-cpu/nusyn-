# Nusyn Web App

This is a React-based e-commerce landing page for Nusyn, featuring a Gemini-powered AI assistant.

## How to Export and Run Locally

Since you cannot download a ZIP directly from the chat interface, follow these steps to set this project up on your local machine.

### 1. Prerequisites
Ensure you have **Node.js** installed (version 16 or higher).

### 2. Setup Project Structure
Create a new folder for your project and creating the following file structure:

```
/nusyn-app
  ├── index.html
  ├── package.json
  ├── tsconfig.json
  └── src
      ├── index.tsx
      ├── App.tsx
      ├── types.ts
      ├── constants.ts
      ├── components
      │   ├── Navbar.tsx
      │   ├── Hero.tsx
      │   ├── ProductCard.tsx
      │   ├── AiAssistant.tsx
      │   ├── EndorsementCarousel.tsx
      │   ├── ExclusiveAdvantages.tsx
      │   └── UserReviews.tsx
      └── services
          └── geminiService.ts
```

### 3. Copy File Contents
Copy the code provided in the chat for each file into the corresponding file on your computer.

### 4. Install Dependencies
Run the following command in your terminal to install React, TypeScript, and other tools.

```bash
npm init -y
npm install react react-dom lucide-react @google/genai
npm install -D typescript vite @vitejs/plugin-react tailwindcss autoprefixer postcss
```

### 5. Configure Vite & Tailwind
Create a `vite.config.ts`:
```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

Initialize Tailwind:
```bash
npx tailwindcss init -p
```
(And configure `tailwind.config.js` content to allow all files in `./src/**/*.{js,ts,jsx,tsx}`).

### 6. Run the App
```bash
npx vite
```

The app should now be running at `http://localhost:5173`.

## Features
- **Typewriter Animation**: See `src/components/Hero.tsx` and `index.html` styles.
- **AI Assistant**: Powered by Google Gemini (`src/services/geminiService.ts`).
- **Responsive Design**: Tailwind CSS.
