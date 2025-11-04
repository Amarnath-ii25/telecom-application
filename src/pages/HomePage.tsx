import React from "react";
import { useNavigate } from "react-router-dom";
import { useCategories } from "../hooks/useCategories";
import "../css/HomePage.css";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { categories, loading, error } = useCategories();

  const handleCategoryClick = (category: any) => {
    navigate(category.config.route, {
      state: {
        categoryId: category.id,
        categoryName: category.name,
      },
    });
  };

  // Override display settings for specific categories
  const getCategoryDisplay = (category: any) => {
    if (category.name?.toLowerCase() === "testing") {
      return {
        ...category,
        config: {
          ...category.config,
          displayName: "Real Estate", // Change this to your desired name
          icon: "🏠", // Change this to your desired icon
          description: "Explore real estate AI agents and property solutions" // Change this to your desired description
        }
      };
    }
    return category;
  };

  const filteredCategories = categories
    .filter((category) =>
      ["telecom", "healthcare", "testing"].includes(category.name?.toLowerCase())
    )
    .map(getCategoryDisplay);

  if (loading) {
    return (
      <div className="home-page">
        <div className="logo-container">
          <img
            src="https://innovationincubator.com/wp-content/uploads/2023/05/Innovation-Incubator-logo.png"
            alt="Innovation Incubator"
            className="center-logo"
          />
        </div>
        <main className="home-content">
          <section className="hero-section">
            <h1 className="hero-title">Agent Management Platform</h1>
            <p className="hero-subtitle">Loading categories...</p>
          </section>
          <div className="loading-spinner">
            <div className="spinner"></div>
          </div>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="home-page">
        <div className="logo-container">
          <img
            src="https://innovationincubator.com/wp-content/uploads/2023/05/Innovation-Incubator-logo.png"
            alt="Innovation Incubator"
            className="center-logo"
          />
        </div>
        <main className="home-content">
          <section className="hero-section">
            <h1 className="hero-title">Agent Management Platform</h1>
            <p className="hero-subtitle error-text">{error}</p>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className="home-page">
      {/* Centered Logo */}
      <div className="logo-container">
        <img
          src="https://innovationincubator.com/wp-content/uploads/2023/05/Innovation-Incubator-logo.png"
          alt="Innovation Incubator"
          className="center-logo"
        />
      </div>

      <main className="home-content">
        <section className="hero-section">
          <h1 className="hero-title">Agent Management Platform</h1>
          <p className="hero-subtitle">
            Select a category to explore specialized AI agents
          </p>
        </section>

        <section className="categories-section">
          <div className="categories-grid">
            {filteredCategories.length === 0 ? (
              <div className="no-categories">
                <p>No categories found</p>
              </div>
            ) : (
              filteredCategories.map((category) => (
                <div
                  key={category.id}
                  className="category-tile"
                  onClick={() => handleCategoryClick(category)}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") handleCategoryClick(category);
                  }}
                >
                  <div className="category-icon">{category.config.icon}</div>
                  <h3 className="category-title">
                    {category.config.displayName}
                  </h3>
                  <p className="category-description">
                    {category.config.description || category.description}
                  </p>
                  <div className="category-arrow">→</div>
                </div>
              ))
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;