import HomePage from "./pages/Home";
import ChatPage from "./pages/Chat";
import NavBar from "./components/NavBar";
import Alert from "./components/Alert";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chats" element={<ChatPage />} />
        </Routes>
        <Alert />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
