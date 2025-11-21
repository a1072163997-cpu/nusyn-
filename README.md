# Nusyn Web App

This is a React-based e-commerce landing page for Nusyn, featuring a Gemini-powered AI assistant.

## 🔑 API Key Setup (Crucial)

To make the AI Assistant work, you need a Google Gemini API Key.

1. **Get a Key**: Go to [Google AI Studio](https://aistudio.google.com/app/apikey) and create a new API key.
2. **Configure**: Create a file named `.env` in the root folder of this project.
3. **Paste Key**: Add the following line to the `.env` file:
   ```
   VITE_API_KEY=AIzaSyYourKeyHere...
   ```
   *(Replace the value with your actual key)*

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
  ├── vite.config.ts
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
      │   ├── NewsletterSubscribe.tsx
      │   ├── PromoPopup.tsx
      │   └── FloatingSupport.tsx
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
Ensure `vite.config.ts` is created with the provided code.

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
- **Live Sale Popup**: Interactive visual component.
