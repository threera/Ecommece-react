import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

function ProductCard(props) {
  const { grid } = props;
  let location = useLocation();
  console.log(grid);
  return (
    <>
      <div
        className={` ${
          location.pathname === "/product" ? `col-${grid}` : "col-3"
        } mb-4`}
      >
        <Link to="/product/:id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src="images/wish.svg" alt="wish" />
            </button>
          </div>
          <div className="product-image">
            <img
              src="images/watch.jpg"
              className="img-fluid"
              alt="productimage"
            />
            <img
              src="images/watch-1.jpg"
              className="img-fluid"
              alt="productimage"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              kids Headphone bulk kids Headphone bulk
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
            <p
              className={` description ${grid === 12 ? "d-block" : "d-none"} `}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              odit quod assumenda necessitatibus explicabo ducimus molestiae
              omnis autem illum voluptatibus, provident fuga doloribus dicta
              voluptates iure cum asperiores vel nihil?
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src="images/prodcompare.svg" alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src="images/view.svg" alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src="images/add-cart.svg" alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default ProductCard;
