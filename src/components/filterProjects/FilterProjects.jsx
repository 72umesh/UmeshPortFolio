import "./FilterProjects.css";

function FilterProjects({ selectedCategory, setSelectedCategory }) {
  const categories = ["All", "React.js", "Next.js", "Fullstack", "HTML/CSS"];
  return (
    <div className="categories-filter">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={selectedCategory === category ? "active" : ""}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
export default FilterProjects;
