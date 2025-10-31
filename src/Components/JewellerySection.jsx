import React from "react";
import { categories } from "./Data";

const JewellerySection = () => {
  return (
    <section className="jewellery-section container my-5">
      <div className="row g-3">
        {categories.map((item, index) => (
          <div className="col-6 col-md-6 col-lg-4" key={index}>
            <div className="category-card text-center" data-aos="fade-up">
              <img src={item.img} alt={item.name} className="img-fluid" />
              <p>{item.name}</p>
            </div>
          </div>
        ))}
      </div>

      <a href="#" className="more-link d-block mt-3 text-center">
        More Jewellery →
      </a>

      <div className="banner mt-4">
        <img src="swash_sub_banner1.jpg" alt="22KT Jewellery Banner" className="img-fluid rounded-4" />
      </div>
    </section>
  );
};

export default JewellerySection;
