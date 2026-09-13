🚀 DevStack

DevStack is a modern and responsive technology stack builder built with React and TypeScript. It allows users to explore different web development technologies and add their preferred technologies to a personal stack.

The project focuses on a clean UI, responsive design, reusable React components, and simple state management.

✨ Features
🧩 Explore Technologies
Browse different web development technologies with their icons, categories, and information.
🛠️ Build Your Own Stack
Add your favorite technologies to your personal stack and easily remove them whenever you want.
📱 Fully Responsive
Designed to provide a smooth experience across desktop, tablet, and mobile devices.
🛠️ Technologies Used
React
TypeScript
Tailwind CSS
Vite
React Toastify
JSON
📂 Project Structure
src/
├── assets/
├── components/
├── data/
├── types/
├── App.tsx
├── index.css
├──  main.tsx
🚀 Getting Started

Clone the repository and install the dependencies:

git clone <your-repository-url>
cd devstack
npm install

Run the development server:

npm run dev

Then open the local development URL provided by Vite in your browser.

🎯 Purpose

This project was built to practice and demonstrate modern frontend development concepts including:

React Components
TypeScript Interfaces and Types
Props
State Management with useState
Side Effects with useEffect
Responsive UI with Tailwind CSS
Reusable Components
Data Mapping
User Interaction and Toast Notifications

## ❓ React Questions

### 1. What is JSX, and why is it used in React?

JSX lets us write HTML-like code inside JavaScript. It makes React code easier to write and understand.

### 2. What is the difference between props and state?

**Props** are data passed from a parent to a child.
**State** is data managed inside a component that can change.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` stores data that can change. I used it to manage the technologies and the user's selected stack.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code after the component loads. I used it to load the JSON data when the Technologies component first appeared, so the technology list could be shown on the page.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

The `key` helps React identify each item and update the list correctly.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different things based on a condition. I used it to show an empty message when the stack has no technologies.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child using props. To communicate back, the parent can pass a function as a prop, and the child can call that function.
