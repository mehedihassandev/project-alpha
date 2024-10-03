import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ErrorBoundary } from "./app/components/ErrorBoundary.jsx";
import { NotificationProvider } from "@utils/hooks/notification-hook.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NotificationProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </NotificationProvider>
  </React.StrictMode>,
);
