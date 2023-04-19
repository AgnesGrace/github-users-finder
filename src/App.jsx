import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/routes/Home";
import { GithubProvider } from "./context/github/GithubContext";
function App() {
  const [count, setCount] = useState(0);

  return (
    <GithubProvider>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <Home />
        <Footer />
      </div>
    </GithubProvider>
  );
}

export default App;
