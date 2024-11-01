import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './Sell.css';

const products = [
  // ... (avatars)
{ image: require('./book1.png'), title: 'Childrens Book Illustration', price: '$1.99', rating: 4.6, category: 'avatars' },
{ image: require('./book2.png'), title: 'Childrens Book Illustration', price: '$2.99', rating: 4.5, category: 'avatars' },
{ image: require('./book3.png'), title: 'Childrens Book Illustration', price: '$1.99', rating: 4.6, category: 'avatars' },
{ image: require('./book1.png'), title: 'Childrens Book Illustration', price: '$2.99', rating: 4.5, category: 'avatars' },
{ image: require('./book2.png'), title: 'Childrens Book Illustration', price: '$1.99', rating: 4.6, category: 'avatars' },
{ image: require('./book3.png'), title: 'Childrens Book Illustration', price: '$2.99', rating: 4.5, category: 'avatars' },
{ image: require('./book1.png'), title: 'Childrens Book Illustration', price: '$1.99', rating: 4.6, category: 'avatars' },
{ image: require('./book2.png'), title: 'Childrens Book Illustration', price: '$2.99', rating: 4.5, category: 'avatars' },
{ image: require('./book3.png'), title: 'Childrens Book Illustration', price: '$1.99', rating: 4.6, category: 'avatars' },
{ image: require('./book1.png'), title: 'Childrens Book Illustration', price: '$2.99', rating: 4.5, category: 'avatars' },
// ... (prompts)
{ image: require('./book3.png'), title: 'Childrens Book Illustration', price: '$3.99', rating: 4.8, category: 'prompts' },
{ image: require('./book4.png'), title: 'Childrens Book Illustration', price: '$4.99', rating: 4.9, category: 'prompts' },
{ image: require('./book5.png'), title: 'Childrens Book Illustration', price: '$3.99', rating: 4.8, category: 'prompts' },
{ image: require('./book3.png'), title: 'Childrens Book Illustration', price: '$4.99', rating: 4.9, category: 'prompts' },
{ image: require('./book4.png'), title: 'Childrens Book Illustration', price: '$3.99', rating: 4.8, category: 'prompts' },
{ image: require('./book5.png'), title: 'Childrens Book Illustration', price: '$4.99', rating: 4.9, category: 'prompts' },
{ image: require('./book3.png'), title: 'Childrens Book Illustration', price: '$3.99', rating: 4.8, category: 'prompts' },
{ image: require('./book4.png'), title: 'Childrens Book Illustration', price: '$4.99', rating: 4.9, category: 'prompts' },
{ image: require('./book5.png'), title: 'Childrens Book Illustration', price: '$3.99', rating: 4.8, category: 'prompts' },
{ image: require('./book3.png'), title: 'Childrens Book Illustration', price: '$4.99', rating: 4.9, category: 'prompts' }, 
];



const Product = ({ product }) => (
  <Link to={`/product/${encodeURIComponent(product.title)}`} className="product">
    <img src={product.image} alt={product.title} />
    <div className="product-overlay">
      <span className="midjourney">Midjourney</span>
      <div className="product-rating">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
        {product.rating}
      </div>
    </div>
    <div className="product-details">
      <div className="product-title">{product.title}</div>
      <div className="product-price">{product.price}</div>
    </div>
  </Link>
);

const Sell = () => {
  const [currentCategory, setCurrentCategory] = useState('avatars');
  const profilePicture = require('./pp.png');

  const displayProducts = (category) => {
    setCurrentCategory(category);
  };

  return (
    <Router>
      <div id="container">
        <div id="header">
          <div id="logo">
            <h1>NOAH</h1>
          </div>
          <div id="search-box">
            <svg id="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input type="text" id="search" name="search" placeholder="Search items and collections" />
          </div>
          <div id="buttons">
            <button id="chatbot">ChatBot</button>
            <button id="marketplace">Marketplace</button>
            <button id="sell-button">Sell</button>
            <div className="profile">
              <a href={`path/to/profile.jsx`}>
                <img src={profilePicture} alt="Profile Picture" width="30" height="30" />
              </a>
              <span className="username">Nana Tana</span>
              <div className="dropdown-icon">
                <svg className="dropdown-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="content-buttons">
          <div className="content-button-group">
            <button
              className={`content-button ${currentCategory === 'avatars' ? 'active' : ''}`}
              onClick={() => displayProducts('avatars')}
            >
              Avatars
            </button>
            <button
              className={`content-button ${currentCategory === 'prompts' ? 'active' : ''}`}
              onClick={() => displayProducts('prompts')}
            >
              Prompts
            </button>
          </div>
        </div>

        <hr className="separator" />

        <div id="products">
          {products
            .filter((product) => product.category === currentCategory)
            .map((product, index) => (
              <Product key={index} product={product} />
            ))}
        </div>
      </div>
    </Router>
  );
};

export default Sell;