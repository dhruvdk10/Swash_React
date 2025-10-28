import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ""

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
        {/* Indicators */}
        <div className="carousel-indicators">
          {[0, 1, 2, 3].map(i => (
            <button
              key={i}
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to={i}
              className={i === 0 ? "active" : ""}
            ></button>
          ))}
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          {[
            "https://images.unsplash.com/photo-1722248210669-46bb3e01dabc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
            "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=3384&auto=format&fit=crop&ixlib=rb-4.1.0",
            "https://images.unsplash.com/photo-1721742734891-fb1f0a03c810?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0",
            "https://images.unsplash.com/photo-1741288340766-12515252119c?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0"
          ].map((src, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <img src={src} className="w-100" alt={`Banner${index + 1}`} />
            </div>
          ))}
        </div>

        {/* Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
