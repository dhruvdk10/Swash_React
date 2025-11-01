import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { products } from "./Data";

const ProductCards = () => {
  return (
    <div className="container my-5 text-center mx-auto">
      <h3 className="heading my-5">Trending Products</h3>
      <div className="row gy-4">
        {products.map((item) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={item.id}>
            <div className="card item-card border-0 shadow-sm">
              <div className="img-container position-relative">
                <img src={item.img} className="card-img-top" alt={item.name} />
                <div className="overlay-icons d-flex justify-content-center align-items-center gap-3">
                  <span><FontAwesomeIcon icon={faCartShopping} /></span>
                  <span><FontAwesomeIcon icon={faHeart} /></span>
                  <span><FontAwesomeIcon icon={faShareAlt} /></span>
                </div>
              </div>
              <div className="card-body">
                <p className="card-text name mb-1 fw-bold">{item.name}</p>
                <p className="card-text category mb-1">{item.material} | {item.gemstone}</p>
                <p className="price fw-bold">
                  ₹{item.price} <span className="old">₹{item.oldPrice}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCards;
