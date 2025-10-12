# 🚀 Indirect Amazonas - A Vibey React App

Welcome to **Indirect Amazonas**, a sleek and interactive web application built with modern React technologies! This project showcases smooth animations, beautiful UI components, and a responsive design to create an engaging user experience. Inspired by the Amazon River's flow and diversity, it features galleries of cute animals and real motivations with indirect, sarcastic messages that make you reflect on life, love, and reality.

## ✨ What's This Project About?

Indirect Amazonas is a demo app that combines cutting-edge libraries for UI, animations, and interactions. Explore galleries of adorable animals with hidden truths and motivational posts that reveal the raw side of life through indirect commentary. Perfect for learning, prototyping, or just vibing with thought-provoking content. Key features include dynamic components, hover effects, and a clean, modern aesthetic.

## 🛠️ Technologies & Libraries Used

This project leverages the following awesome tools and libraries:

- **React + TypeScript + Vite**: For fast development, hot module replacement (HMR), and type safety.
- **Shadcn/UI**: A collection of reusable UI components built on Radix UI and Tailwind CSS for consistent, accessible design.
- **[React Bits](https://reactbits.dev/)**: A library of animated React components and hooks for adding interactive flair.
- **[SHSF UI](https://www.shsfui.com/)**: Custom UI elements and styles for enhanced visual appeal and functionality.

## 🚀 How to Run the Site

Getting started is super easy! Follow these steps:

1. **Clone the repo** (if not already done):
   ```bash
   git clone https://github.com/gustavofvs/Indirect-Amazonas
   cd Indirect-Amazonas
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000` (or the port shown in the terminal). Voilà! Your site is live with hot reloading.

For production build:
```bash
npm run build
npm run preview
```

## 📦 Official Plugins

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## ⚛️ React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## 🔧 Expanding the ESLint Configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

---

Enjoy coding with Indirect Amazonas! 🌟 If you have questions or want to contribute, feel free to open an issue or PR.
