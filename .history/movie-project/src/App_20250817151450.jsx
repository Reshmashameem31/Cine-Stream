import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import Navbar from "./pages/Navbar";
import Watchlist from "./pages/WatchList";
import Home from "./pages/Home";
import Enter from "./pages/Enter";
import { WatchListProvider } from "./context/WatchListContext";

function AppContent() {
  const location = useLocation(); // gives current URL path

  return (
    <>
      {/* Show Navbar only when not on "/" */}
      {location.pathname !== "/" && <Navbar />}

      <Routes>
        <Route path="/" element={<Enter />} />
        <Route path="/home" element={<Home />} />
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <WatchListProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </WatchListProvider>
  );
}

export default App;
