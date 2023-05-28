import { useState } from "react";

function CategoryFilter({ categories, onSelectedCategory, category }) {
  // const [selectedCategory, setSelectedCategory] = useState("All");

  // const handleCategory = (cat) => {
  //   // setSelectedCategory(category);
  //   onSelectedCategory(cat);
  // };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((cat) => (
        <button
          onClick={() => onSelectedCategory(cat)}
          key={cat}
          className={cat === category ? "selected" : null}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
