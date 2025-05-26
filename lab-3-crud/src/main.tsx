import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { BlogContextProvider } from "./Providers/BlogProvider.tsx";
import BlogEdit from "./Pages/BlogUpsert.tsx";
import BlogDetails from "./Pages/BlogDetails.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BlogContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/upsert/:id?" element={<BlogEdit />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
        </Routes>
      </BrowserRouter>
    </BlogContextProvider>
  </StrictMode>
);
