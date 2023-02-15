import React from 'react'
import ReactStars from "react-rating-stars-component"
import { Link, useLocation } from 'react-router-dom'

function ProductCard(props) {
    const { grid } = props;
    let location = useLocation();

    return (
        <>
        <div className={` ${location.pathname === "/store" ? `col-${grid}` : "col-3"} mb-4`}>
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
                        Havels
                    </h6>
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
                    <p className={` description ${grid === 12 ? 'd-block' : 'd-none'} `}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione odit quod assumenda necessitatibus explicabo ducimus molestiae omnis autem illum voluptatibus, provident fuga doloribus dicta voluptates iure cum asperiores vel nihil?
                    </p>
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
        </>
        

    )
}

export default ProductCard