import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shirts from "./pages/Shirts.jsx";
import OverSized from "./pages/OverSized.jsx";
import Plain from "./pages/Plain.jsx";
import Ragular from "./pages/Ragular.jsx";
import BottomWear from "./pages/BottomWear.jsx";
import BestSeller from "./pages/BestSeller.jsx";
import Cart from "./pages/Cart.jsx";
import Hero from "./pages/Hero.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Hero />} />
          <Route path="/shirts" element={<Shirts />} />
          <Route path="/oversized" element={<OverSized />} />
          <Route path="/plain" element={<Plain />} />
          <Route path="/ragular" element={<Ragular />} />
          <Route path="/bottomWear" element={<BottomWear />} />
          <Route path="/bestSeller" element={<BestSeller />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
