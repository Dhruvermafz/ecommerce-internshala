import React from "react";
import Navbar from "./components/Initials/Navbar";
import Menu from "./components/Extras/Menu";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Initials/Home";
import categories from "./components/Extras/categories.json";
import Cart from "./components/Cart/Cart";
import CartContext from "./context/CartContext";
import Footer from "./components/Initials/Footer";
import "./styles/app.scss";
import SharedStateContext from "./context/SharedStatesContext";
import FinalPage from "./components/Initials/FinalPage";

export default function App() {
  const [isCartVisible, setIsCartVisible] = React.useState(false);

  return (
    <>
      <SharedStateContext>
        <Navbar setIsCartVisible={setIsCartVisible} />

        <CartContext>
          <Cart
            isCartVisible={isCartVisible}
            setIsCartVisible={setIsCartVisible}
          />

          <Routes>
            <Route exact path="menu" element={<Menu categoryId={null} />} />

            {categories.map((iterator) => (
              <Route
                key={iterator.id}
                path={`menu/${iterator.id}`}
                element={<Menu categoryId={iterator.id} />}
              />
            ))}

            <Route index element={<Home />} />

            <Route
              path="*"
              element={
                <h1>
                  error 404:
                  <br />
                  Page Not Found
                </h1>
              }
            />

            <Route exact path="thanks" element={<FinalPage />} />
          </Routes>
        </CartContext>
      </SharedStateContext>

      <footer id="footer">
        <Footer />
      </footer>
    </>
  );
}
