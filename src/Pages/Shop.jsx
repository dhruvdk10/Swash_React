import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { banner } from "../Components/Data";

const Shop = () => {
  const [visibleProfiles, setVisibleProfiles] = useState([]);

  const toggleProfile = (idx) => {
    setVisibleProfiles((prev) =>
      prev.includes(idx)
        ? prev.filter((i) => i !== idx)
        : [...prev, idx]
    );
  };


  return (
    <div>
      {/* Hero Section */}
      <section className="img_display">
        <div id="mybannerCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {banner.map((banner, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                <img
                  src={banner.img}
                  className="d-block w-100 img-fluid"
                  alt={banner.alt}
                  style={{ objectPosition: banner.position }}
                />
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#mybannerCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#mybannerCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
            <span className="visually-hidden">Next</span>
          </button>

        </div>
      </section>

      {/* About Section */}
      {/* <section>
        <div className="container about-section my-5">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 mb-4 about-img">
              <img src={aboutImage} className="img-fluid" style={{ borderRadius: "6px" }} alt="About Us Image" />
            </div>
            <div className="col-lg-6 col-md-12 about-content">
              <h2>OVERVIEW</h2>
              <hr className="mb-3" style={{ width: "100%", margin: "auto", height: "1px", color: "#000" }} />
              {aboutText.map((p, idx) => <p key={idx}>{p}</p>)}
            </div>
          </div>
        </div>
      </section> */}

      {/* Founders */}
      {/* <section>
        <div className="founder-container">
          <h2 className="section-title">FOUNDERS</h2>
        </div>
        <div className="row justify-content-center">
          {founders.map((f, idx) => (
            <div
              key={idx}
              className="col-md-6 col-sm-12 team-card"
              data-aos="fade-up"
            >
              <img
                src={f.img}
                alt={f.name}
                style={{ cursor: "pointer" }}
                onClick={() => toggleProfile(idx)}
              />
              <h5>{f.name}</h5>
              {visibleProfiles.includes(idx) && (
                <div className="profile-details mt-5" data-aos="fade-up">
                  {f.details.map((d, i) => (
                    <p key={i}>{d}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section> */}
    </div >
  );
};

export default Shop;
