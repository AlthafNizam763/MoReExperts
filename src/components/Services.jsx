import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    id: 1,
    title: 'Resume Design',
    description:
      'Stand out from the competition with professionally designed resumes that highlight your strengths and experience.',
    isNew: false,
  },
  {
    id: 2,
    title: 'Poster Design',
    description:
      'Captivating posters for events, brands, and promotions. We create visuals that grab attention instantly.',
    isNew: false,
  },
  {
    id: 3,
    title: 'Website Development',
    description:
      'Modern, responsive, and high-performance websites tailored to your business needs using the latest technologies.',
    isNew: false,
  },
  {
    id: 4,
    title: 'Job Promotions',
    description:
      'We help companies find the right talent by promoting job openings on our dedicated platform.',
    isNew: false,
  },
];

const Services = () => {
  const [activeId, setActiveId] = useState(1);

  return (
    <>
      <section id="services" className="services-section">
        <div className="container">
          {/* Section title (optional based on image, but keeping for context) */}
          {/* <h2 className="section-title">Our Services</h2> */}

          <div className="services-list">
            {services.map((service, index) => (
              <ServiceItem
                key={service.id}
                service={service}
                index={index}
                isActive={activeId === service.id}
                onToggle={() => setActiveId(activeId === service.id ? null : service.id)}
              />
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .services-section {
          padding: 100px 0;
          background-color: #050505; /* Deep black bg */
          color: #ffffff;
          font-family: 'Inter', sans-serif;
        }
        
        .services-list {
          display: flex;
          flex-direction: column;
          /* gap: 1px; for borders if using background gap, but we use border-bottom */
          max-width: 1000px;
          margin: 0 auto;
        }
      `}</style>
    </>
  );
};

const ServiceItem = ({ service, index, isActive, onToggle }) => {
  return (
    <motion.div
      className={`service-item ${isActive ? 'active' : ''}`}
      onClick={onToggle}
      layout
      initial={false}
      animate={{
        backgroundColor: isActive ? 'rgba(255, 255, 255, 0.03)' : 'transparent',
        y: isActive ? -10 : 0, // The "rise upward" pop effect
        scale: isActive ? 1.02 : 1, // Slight pop scale
        zIndex: isActive ? 10 : 1,
        borderColor: isActive ? 'transparent' : '#333', // Hide border when popping maybe? Or keep it.
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      style={{
        position: 'relative',
        cursor: 'pointer',
        borderBottom: '1px solid #333',
        padding: '40px 20px',
        overflow: 'hidden' // contain content
      }}
    >
      <div className="service-content-wrapper">
        <div className="number">0{index + 1}</div>

        <div className="info-column">
          <div className="title-row">
            <h3>{service.title}</h3>
            {service.isNew && <span className="badge-new">New</span>}
          </div>

          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ height: 0, opacity: 0, marginTop: 0 }}
                animate={{ height: 'auto', opacity: 1, marginTop: 20 }}
                exit={{ height: 0, opacity: 0, marginTop: 0 }}
                transition={{ duration: 0.3 }}
                className="description-wrapper"
              >
                <p className="description">{service.description}</p>
                <div className="action-links">
                  {/* Placeholder for links like 'Location', 'Vacation' from image if needed */}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.div
          className="arrow-icon"
          animate={{ rotate: isActive ? 90 : 0 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="11" stroke="#333" strokeWidth="1" />
            <path d="M12 8L12 16M12 16L15 13M12 16L9 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            {/* Simple arrow down, will rotate */}
          </svg>
        </motion.div>
      </div>

      <style>{`
        .service-content-wrapper {
          display: grid;
          grid-template-columns: 100px 1fr 50px;
          gap: 40px;
          align-items: flex-start;
        }

        .number {
          font-size: 5rem;
          font-weight: 300;
          line-height: 1;
          color: #ffffff;
          font-feature-settings: "tnum" on, "lnum" on;
        }

        .info-column {
          padding-top: 10px; /* Align with top of number visually */
        }

        .title-row {
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .service-item h3 {
          font-size: 1.5rem;
          font-weight: 500;
          letter-spacing: 1px;
          margin: 0;
          text-transform: uppercase;
        }

        .badge-new {
          background-color: #ff4d6d;
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
        }

        .description {
          font-size: 1rem;
          color: #a1a1a1;
          line-height: 1.6;
          max-width: 500px;
        }

        .arrow-icon svg {
             display: block;
             transform: rotate(-90deg); /* Point right initially */
        }
        
        /* Override rotation for animation handled by motion */
        /* Actually I'll let the SVG be an arrow pointing Right, then rotate 90 to point Down */
        
        @media (max-width: 768px) {
           .service-content-wrapper {
              grid-template-columns: 1fr;
              gap: 20px;
           }
           
           .number {
              font-size: 3rem;
           }
        }

        @media (max-width: 600px) {
           .services-section {
              padding: 60px 0;
           }

           .service-item {
              padding: 30px 15px;
           }

           .number {
              font-size: 2.5rem;
           }

           .service-item h3 {
              font-size: 1.2rem;
           }
        }
      `}</style>

      {/* Inline styles for arrow icon svg adjustment to match image's right arrow circle */}
      <style>{`
        .arrow-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            padding-top: 10px;
        }
        .arrow-icon svg {
            stroke: #666;
            transition: stroke 0.3s;
        }
        .service-item:hover .arrow-icon svg {
            stroke: #fff;
        }
      `}</style>
    </motion.div>
  );
};

export default Services;
