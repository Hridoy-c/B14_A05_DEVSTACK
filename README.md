# Dev Stack

## Description

Dev Stack is a React + TypeScript project that lets users explore different development technologies (organized in a `components/technologies` folder — cards, grid, and stack sidebar) and build their own custom tech stack by adding or removing tools. It also includes a Navbar, Hero section, Footer, and a custom loading animation, all built with Vite and Tailwind CSS.

## Technologies Used

1. React.js
2. Tailwind CSS
3. TypeScript
4. React-Toastify (NPM Package)
5. JSON (for technology data)
6. Vite (build tool)

## Features

1. **Technology Explorer** – Users can explore different frontend, backend, and development technologies with useful information, powered by JSON data.
2. **Technology Comparison** – Users can compare technologies side by side to understand their differences and choose the right stack for their projects.
3. **Responsive & Modern UI** – The website is built with React, TypeScript, and Tailwind CSS and provides a clean, responsive experience across desktop and mobile devices.

## React Questions & Answers

**1. What is JSX, and why is it used in React?**
JSX is a way to write HTML-like code inside JavaScript. It makes React code easier to read and helps us create UI components easily.

**2. What is the difference between props and state?**
Props are used to send data from a parent component to a child component.
State is used to store and manage data inside a component.

**3. What does the useState hook do, and where did you use it in this project?**
useState helps us store and update data in a React component. I used it to manage the selected technologies/stack in my project.

**4. What does the useEffect hook do, and why did you need it to load the JSON data?**
useEffect is used to run some code when a component loads or when certain data changes. I used it to load the technology data from the JSON file when the page starts.

**5. Why does every item in a `.map()` list need a unique key prop?**
React needs a unique key to identify each item in a list. It helps React understand which item has changed, been added, or removed.

**6. What is conditional rendering? Show one place you used it.**
Conditional rendering means showing something only when a certain condition is true.

For example, when no technology is added to the stack, I show an empty stack message:

```jsx
{stack.length === 0 && (
  <p>Your stack is empty. Add some technologies!</p>
)}
```

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
We can pass data from parent to child using props.

```jsx
<TechnologyCard technology={technology} />
```

If the child needs to send something back to the parent, the parent can pass a function as a prop. The child calls that function when an action happens.

```jsx
<TechnologyCard onAdd={handleAdd} />
```

This allows the child component to communicate with the parent.
