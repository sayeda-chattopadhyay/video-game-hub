import { Box, Flex } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GameQueryProvider } from "./context/GameQueryContext";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import GamesPage from "./pages/GamesPage";
import GameDetailPage from "./pages/GameDetailPage";

// App is now a thin shell: providers + router + layout frame only.
// All state lives in GameQueryContext; all pages are self-contained.
function App() {
  return (
    <GameQueryProvider>
      <BrowserRouter>
        <Flex direction="column" minH="100vh">
          <Header />
          <Box flex={1}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/games" element={<GamesPage />} />
              <Route path="/games/:id" element={<GameDetailPage />} />
            </Routes>
          </Box>
          <Footer />
        </Flex>
      </BrowserRouter>
    </GameQueryProvider>
  );
}

export default App;
