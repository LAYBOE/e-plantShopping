import React from 'react';

const AboutUs = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>About Plant Shopping</h1>
        <p style={styles.subtitle}>Bringing nature closer to your living space, one leaf at a time.</p>
      </header>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Story</h2>
        <p style={styles.text}>
          Founded in 2026, **Plant Shopping** started with a simple belief: everyone deserves a touch of green in their lives. 
          Whether you are a seasoned plant parent or just starting your journey with your first succulent, we carefully 
          source and nurture every plant to ensure it arrives healthy, vibrant, and ready to thrive in its new home.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Why Choose Us?</h2>
        <div style={styles.grid}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>🌱 Hand-Picked Quality</h3>
            <p style={styles.cardText}>Every single plant is thoroughly inspected and packed with care by our team of expert botanists.</p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>🚚 Safe & Fast Delivery</h3>
            <p style={styles.cardText}>Our specialized eco-friendly packaging keeps your plants secure, hydrated, and safe during transit.</p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>🏡 Lifetime Support</h3>
            <p style={styles.cardText}>We don't just sell plants. We provide detailed care guides and continuous support for your green friends.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

// Simple inline styling for instant use without external CSS files
const styles = {
  container: {
    fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '40px 20px',
    color: '#2d3748',
    lineHeight: '1.6',
  },
  header: {
    textAlign: 'center',
    marginBottom: '50px',
  },
  title: {
    fontSize: '2.5rem',
    color: '#2f855a', // Plant Green
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#718096',
  },
  section: {
    marginBottom: '40px',
  },
  sectionTitle: {
    fontSize: '1.8rem',
    color: '#2c5282',
    borderBottom: '2px solid #e2e8f0',
    paddingBottom: '10px',
    marginBottom: '20px',
  },
  text: {
    fontSize: '1.1rem',
    color: '#4a5568',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px',
    marginTop: '20px',
  },
  card: {
    background: '#f7fafc',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    borderLeft: '4px solid #48bb78',
  },
  cardTitle: {
    fontSize: '1.3rem',
    color: '#2d3748',
    marginBottom: '10px',
    marginTop: '0',
  },
  cardText: {
    fontSize: '1rem',
    color: '#4a5568',
    margin: '0',
  },
};

export default AboutUs;

