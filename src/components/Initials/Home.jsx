import categories from "../Extras/categories.json";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import "../../styles/home.scss";
import { Animation } from "rsuite";

export default function Home(isCartVisible) {
  return (
    <>
      <Animation.Slide in={true} placement="left">
        <div id="categories-container">
          {categories.map((iterator) => (
            <Link key={iterator.id} to={`./menu/${iterator.id}`}>
              <div className="category-links-Home">{iterator.name}</div>
            </Link>
          ))}

          <Link to={`/menu`}>
            <div className="category-links-Home">Explore All Products</div>
          </Link>
          <Cart isOpen={isCartVisible} />
        </div>
      </Animation.Slide>
    </>
  );
}
