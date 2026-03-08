# Video Game Hub

A responsive, multi-page web application for browsing, searching, and exploring video games — powered by the [RAWG Video Games Database API](https://rawg.io/apidocs).

## Features

- **Home page** — hero search, Trending, Top Rated, and New Releases sections
- **Games browser** (`/games`) — filter by genre and platform, sort by multiple criteria, infinite scroll with Load More
- **Game detail page** (`/games/:id`) — full info including description, screenshots, platforms, genres, developers, and publishers
- Search from anywhere — navigates to the games browser automatically
- Dark mode by default with light mode toggle
- Responsive layout (mobile → 4-column grid)
- Skeleton loading states
- About & contact section on the home page

## Tech Stack

| | |
|---|---|
| **React 18** + **TypeScript** | UI and type safety |
| **React Router v6** | Client-side routing |
| **React Query v4** | Data fetching, caching, infinite scroll |
| **Axios** | HTTP client with API key injection |
| **Chakra UI** | Component library and theming |
| **Framer Motion** | Animations (Chakra peer dep) |
| **React Icons** | Platform and UI icons |
| **Vite** | Build tool with code splitting |

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
| `npm run build` | Production build with code splitting |
| `npm run preview` | Preview the production build locally |

## Project Structure

```
src/
├── types/              # Shared TypeScript interfaces (Game, Genre, Platform)
├── context/            # GameQueryContext — global filter/search state
├── hooks/              # React Query data hooks
│   ├── useData.tsx     # Generic useQuery wrapper
│   ├── useGames.tsx    # Game list (home sections)
│   ├── useInfiniteGames.ts  # Paginated game list (/games)
│   ├── useGame.ts      # Single game detail
│   ├── useGameScreenshots.ts
│   ├── useGenres.tsx
│   └── usePlatform.tsx
├── services/           # Axios client, image URL helper
├── components/
│   ├── layout/         # Header, Footer
│   ├── ui/             # CriticScore, Emoji, PlatformIconList, SearchInput, AboutSection, ...
│   └── game/           # GameCard, GameGrid, GameSection, GenreList, SortMenu, ...
├── pages/              # Route-level components
│   ├── HomePage.tsx
│   ├── GamesPage.tsx
│   └── GameDetailPage.tsx
├── App.tsx             # Router shell + lazy-loaded routes
├── theme.tsx           # Chakra UI dark theme
└── main.tsx            # React root + providers
```

## Routes

| Path | Page |
|---|---|
| `/` | Home — hero, curated game sections, about |
| `/games` | Full game browser with filters and infinite scroll |
| `/games/:id` | Game detail — screenshots, description, metadata |
