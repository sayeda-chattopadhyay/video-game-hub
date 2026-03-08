# Video Game Hub

A responsive web app to browse and filter video games using the [RAWG Video Games Database API](https://rawg.io/apidocs).

## Features

- Browse games with cover images, ratings, and Metacritic scores
- Filter by genre and platform
- Search games by title
- Sort by various criteria
- Dark mode by default
- Responsive grid layout (1–4 columns)
- Skeleton loading states

## Tech Stack

- **React 18** + **TypeScript**
- **Chakra UI** — component library and theming
- **React Query** — data fetching and caching
- **Axios** — HTTP client
- **Vite** — build tool
- **Framer Motion** — animations
- **React Icons** — platform icons

## Getting Started

### Prerequisites

- Node.js
- A free [RAWG API key](https://rawg.io/apidocs)

### Setup

1. Clone the repo and install dependencies:

```bash
npm install
```

2. Create a `.env` file in the project root:

```env
VITE_API_KEY=your_rawg_api_key_here
```

3. Start the development server:

```bash
npm run dev
```

The app runs at `http://localhost:5173`.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## Project Structure

```
src/
├── components/   # UI components (GameCard, GenreList, Navbar, etc.)
├── hooks/        # Custom React Query hooks (useGames, useGenres, etc.)
├── services/     # Axios client and image URL helpers
├── App.tsx       # Root layout
├── main.tsx      # Entry point
└── theme.tsx     # Chakra UI custom theme
```
