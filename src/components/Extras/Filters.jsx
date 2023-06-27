import "../../styles/filters.scss";

export default function Filters(setFilterSelected) {
  function addToFilters(event) {
    event.target.checked === true &&
      setFilterSelected((prev) => [...prev, event.target.name]);
    event.target.checked === false &&
      setFilterSelected((prev) =>
        prev.filter((iterator) => iterator !== event.target.name)
      );
  }

  return (
    <div className="filter-container">
      <span style={{ widht: "10%" }}>
        <h3>Filters</h3>
      </span>

      <div className="filters">
        <span>
          <p>Available for Delivery</p>
          <input type="checkbox" name="delivery" onClick={addToFilters} />
        </span>

        <span>
          <p>Exclude out of stock</p>

          <input type="checkbox" name="inStock" onClick={addToFilters} />
        </span>
      </div>
    </div>
  );
}
