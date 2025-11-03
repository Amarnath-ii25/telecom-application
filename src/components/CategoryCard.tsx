import React from "react";
import "../css/HomePage.css";

export interface CategoryCardProps {
  category: any;
  onCategoryClick: (category: any) => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  onCategoryClick,
}) => {
  return (
    <div
      className="category-tile"
      onClick={() => onCategoryClick(category)}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === "Enter") onCategoryClick(category);
      }}
    >
      <div className="category-icon">{category.config.icon}</div>
      <h3 className="category-title">{category.config.displayName}</h3>
      <p className="category-description">
        {category.config.description || category.description}
      </p>
      <div className="category-arrow">→</div>
    </div>
  );
};

export default CategoryCard;
