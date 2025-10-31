import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { banner} from "../Components/Data";
import JewellerySection from "../Components/JewellerySection";

const Home = () => {
  // Stats Counter Animation
  useEffect(() => {
    const animateCounter = (counter) => {
      const target = +counter.getAttribute("data-target");
      let current = 0;
      const duration = 500;
      const startTime = performance.now();

      function updateCounter(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        current = Math.floor(progress * target);
        counter.textContent = current;
        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target;
        }
      }
      requestAnimationFrame(updateCounter);
    };

    const counters = document.querySelectorAll(".counter");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.classList.contains("animated")) {
          animateCounter(entry.target);
          entry.target.classList.add("animated");
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
  }, []);

  return (
    <>
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

<JewellerySection/>


      {/* Services Section */}
      {/* <section className="py-5">
        <div className="container">
          <div className="badge-icons row text-center">
            {badges.map((item, index) => (
              <div key={index} className="badge-icon col-md-3 col-6 mb-4" data-aos="fade-up">
                <i className={`fa-solid ${item.icon} mb-4`} style={{ fontSize: "60px"}}></i>
                <h6 className="fs-5 fw-bold">{item.title}</h6>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* <section className="pb-5">
        <div className="container">
          <div className="row text-center" data-aos="fade-up">
            {services.map((service, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card border-0">
                  <img
                    src={service.img}
                    className="img-fluid"
                    alt={service.title}
                    style={{ borderRadius: "6px" }}
                  />
                  <div className="card-body">
                    <h5 className="services fw-bold">{service.title}</h5>
                    <p className="text-muted">{service.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Stats Section */}
      {/* <section className="py-3">
        <div className="container">
          <div className="row text-center">
            {stats.map((stat, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div
                  className="testimonial p-4 shadow-sm h-100" data-aos="zoom-in"
                  style={{ backgroundColor: "whitesmoke", borderRadius: "12px" }}
                >
                  <h2 className="display-5 d-inline fw-bold counter" data-target={stat.number}>
                    0
                  </h2>
                  <h2 className="fw-bold d-inline">+</h2>
                  <hr className="w-25 mx-auto" />
                  <p className="text-muted">{stat.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Quote Section */}
    </>
  );
};

export default Home;
