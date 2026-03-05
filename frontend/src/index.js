import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// ✅ Make sure Bootstrap loads before your own CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// ✅ Import Auth Context Provider
import { AuthProvider } from "./context/AuthContext";

// ⚙️ Mount the App
const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* ✅ Wrap the app in AuthProvider for global login/register access */}
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
