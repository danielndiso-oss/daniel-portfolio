# MONO//WORKS

A dark, minimal single-page portfolio built with React. It collects a student's
small projects in one place and lets visitors search, filter and add their own
example projects directly in the browser.

## Features

- Responsive navigation with links to Home, Projects, About and Contact
- Hero section with an introduction and a link to the projects
- Six sample projects in a responsive card grid
- Search projects by title or description
- Filter projects by category, combined with search
- Controlled form for adding new projects with basic validation
- Projects appear immediately after submitting the form
- Helpful empty state with a "Clear filters" button
- Keyboard-friendly focus states and simple hover effects

## Technologies used

- React 19 and Vite
- Plain CSS (organised in `src/styles/`)
- Jest, React Testing Library and jest-dom for tests
- ESLint for code checks

## Installation

You need Node.js and npm installed. From the project folder, run:

```bash
npm install
```

## Run the development server

```bash
npm run dev
```

Open the local URL printed in the terminal (usually `http://localhost:5173`).

## Run the tests

```bash
npm test
```

To run a single test file, use `npm test -- ProjectForm.test.jsx`.

## Build the project

```bash
npm run build
```

The production files are written to `dist/`. To preview the build locally, run
`npm run preview`.

## Project structure

```text
src/
  components/   Reusable UI components (Navbar, ProjectCard, form, etc.)
  data/         Sample project data
  styles/       Base, layout and component CSS
  __tests__/    Jest and React Testing Library tests
  App.jsx       State and filtering logic
```

State lives in `App.jsx`: the project list, search text and selected category.
`ProjectList` passes the filtered projects to `ProjectCard`, while `ProjectForm`
calls `onSubmit` with the new project details when the form is valid.

## Known limitations

- Projects are stored in React state only. Added projects disappear on refresh.
- There is no backend, login or database.
- Contact details are shown as plain text; the email uses a `mailto:` link.
- Category filtering is exact text matching, so spelling differences create
  separate categories.
