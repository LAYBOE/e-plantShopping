import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'; 

export default function Header() {
  const carts = useSelector((state) => state.plant.carts)
  const totalCartItem = carts.length
  
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <Link to='/plant-shopping/landing'>🪴 PlantShop</Link></div>
      <nav style={styles.nav}>
        <Link to="/plant-shopping/landing" style={styles.link}>Home</Link>
        <Link to="/plant-shopping/about-us" style={styles.link}>About</Link>
        <Link to="/plant-shopping/product" style={styles.link}>Product</Link>
        <Link to="/plant-shopping/cart" style={styles.link}>[ 🛒 {totalCartItem != 0 ? totalCartItem : ''}]
        </Link>
      </nav>
    </header>
  );
}

// Quick inline styles for layout
const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 40px',
    backgroundColor: '#1b4332',
    color: '#fff',
  },
  logo: { fontSize: '24px', fontWeight: 'bold' },
  nav: { display: 'flex', gap: '20px' },
  link: { color: '#fff', textDecoration: 'none' }
};
