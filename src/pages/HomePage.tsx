import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import { CATEGORIES } from '../constants/categories';
import type { CategoryTile as CategoryTileType } from '../types/agent.types';
import '../css/HomePage.css';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category: CategoryTileType) => {
    navigate(category.route, { state: { categoryId: category.id } });
  };

  return (
    <div className="home-page">
      <main className="home-content">
        {/* Hero Section with Logo and Title */}
        <section className="hero-section">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVPmlzoXKw20K6j8cmukDjRRdeIW63Er8ROg&s"
            alt="Innovation Incubator"
            className="hero-logo"
          />
          <h1 className="hero-title">Agent Management Platform</h1>
          <p className="hero-subtitle">
            Select a category to explore specialized AI agents
          </p>
        </section>

        {/* Categories Section */}
        <section className="categories-section">
          <div className="categories-grid">
            {CATEGORIES.map((category) => (
              <div
                key={category.id}
                className="category-tile"
                onClick={() => handleCategoryClick(category)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') handleCategoryClick(category);
                }}
              >
                <div className="category-icon">{category.icon}</div>
                <h3 className="category-title">{category.displayName}</h3>
                <p className="category-description">{category.description}</p>
                <div className="category-arrow">→</div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
