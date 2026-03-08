import { lazy, Suspense } from "react";
import { Box, Flex, Spinner, Center } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GameQueryProvider } from "./context/GameQueryContext";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Lazy-loaded pages — each route's JS is downloaded only when first visited,
// keeping the initial bundle small and the first load fast.
const HomePage = lazy(() => import("./pages/HomePage"));
const GamesPage = lazy(() => import("./pages/GamesPage"));
const GameDetailPage = lazy(() => import("./pages/GameDetailPage"));

const PageLoader = () => (
  <Center py={32}>
    <Spinner size="xl" />
  </Center>
);

// App is now a thin shell: providers + router + layout frame only.
// All state lives in GameQueryContext; all pages are self-contained.
function App() {
  return (
    <GameQueryProvider>
      <BrowserRouter>
        <Flex direction="column" minH="100vh">
          <Header />
          <Box flex={1}>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/games" element={<GamesPage />} />
                <Route path="/games/:id" element={<GameDetailPage />} />
              </Routes>
            </Suspense>
          </Box>
          <Footer />
        </Flex>
      </BrowserRouter>
    </GameQueryProvider>
  );
}

export default App;
