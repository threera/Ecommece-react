import React from 'react'
import ReactStars from "react-rating-stars-component"
import { Link } from 'react-router-dom'

function ProductCard() {
  return (
    <div className='col-3'>
        <div className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
                <Link to="/">
                 <img src="images/wish.svg" alt="wish" />
                </Link>
            </div>
            <div className="product-image">
                <img src="images/watch.jpg" className='img-fluid' alt="productimage" />
                <img src="images/watch-1.jpg" className='img-fluid' alt="productimage" />
            </div>
            <div className="product-details">
                <h6 className="brand">
                    Lorem ipsum dolor sit amet.
                </h6>
                <ReactStars
                    count={5}
                    size={24}
                    value={3}
                    edit={false}
                    activeColor="#ffd700"
                />
                <p className='price'>$100.00</p>
            </div>
            <div className="action-bar position-absolute">
                <div className="d-flex flex-column gap-15">
                    <Link to="/">
                        <img src="images/prodcompare.svg" alt="compare" />
                    </Link>
                    <Link to="/">
                        <img src="images/view.svg" alt="view" />
                    </Link>
                    <Link to="/">
                        <img src="images/add-cart.svg" alt="addcart" />
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard