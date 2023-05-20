import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";
import Color from "../components/Color";
import { Link } from "react-router-dom";
import Zoom from "react-img-zoom";
import { AiOutlineHeart } from "react-icons/ai";
import { TbGitCompare } from "react-icons/tb";
import Container from "../components/Container";

function SingleProduct() {
  const [orderdproduct, setorderdproduct] = useState(true);

  const copyToClipboard = (text) => {
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <Zoom
                  img="https://cdn.anscommerce.com/catalog/brandstore/johnson/17_7_20/Sale.jpg"
                  zoomScale={2}
                  width={600}
                  height={600}
                />
              </div>
            </div>
            <div className="other-product-image d-flex flex-wrapper gap-15">
              <div>
                <img
                  src="https://cdn.anscommerce.com/catalog/brandstore/johnson/17_7_20/Sale.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="https://cdn.anscommerce.com/catalog/brandstore/johnson/17_7_20/Sale.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="https://cdn.anscommerce.com/catalog/brandstore/johnson/17_7_20/Sale.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="https://cdn.anscommerce.com/catalog/brandstore/johnson/17_7_20/Sale.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-buttom">
                <h3 className="title">
                  Kid Lorem ipsum dolor sit amet consectetur
                </h3>
              </div>
              <div className="border-buttom py-3">
                <p className="price">$ 100</p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0">(2 Reviwes)</p>
                </div>
                <a className="review-btn" href="#review">
                  Write a Review
                </a>
              </div>
              <div className="border-buttom py-3">
                <div className="d-flex gap-10 align-items center my-2">
                  <h3 className="product-heading">Type :</h3>
                  <p className="product-data">Watch</p>
                </div>
                <div className="d-flex gap-10 align-items center my-2">
                  <h3 className="product-heading">Brand :</h3>
                  <p className="product-data">Havells</p>
                </div>
                <div className="d-flex gap-10 align-items center my-2">
                  <h3 className="product-heading">Category :</h3>
                  <p className="product-data">Wath</p>
                </div>
                <div className="d-flex gap-10 align-items center my-2">
                  <h3 className="product-heading">Tags :</h3>
                  <p className="product-data">GFd</p>
                </div>
                <div className="d-flex gap-10 align-items center my-2">
                  <h3 className="product-heading">Availabity :</h3>
                  <p className="product-data">In Stock</p>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">Size :</h3>
                  <div className="d0flex flex-wrap gap-15">
                    <span className="badge border border-secondary bg-white text-dark m-2">
                      S
                    </span>
                    <span className="badge border border-secondary bg-white text-dark m-2">
                      M
                    </span>
                    <span className="badge border border-secondary bg-white text-dark m-2">
                      XL
                    </span>
                    <span className="badge border border-secondary bg-white text-dark m-2">
                      XXL
                    </span>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">Color :</h3>
                  <Color />
                </div>
                <div className="d-flex gap-15 align-items-center flex-row mt-2 mb-3">
                  <h3 className="product-headinsg">Quantity :</h3>
                  <div>
                    <input
                      type="number"
                      name=""
                      min={1}
                      max={10}
                      className="form-control"
                      style={{ width: "50px" }}
                      id=""
                    />
                    <div></div>
                  </div>
                  <div className="d-flex align-items-center gap-30 ms-5">
                    <button
                      type="submit"
                      className="button border-0 gap-10 align-items-center"
                    >
                      Add to Cart
                    </button>
                    <Link to="/signup" className="button signup">
                      Buy It Now
                    </Link>
                  </div>
                </div>
                <div className="d-flex gap-15 align-items-center">
                  <div>
                    <a href="# ">
                      <TbGitCompare className="fs-5 me-2" /> Add to Compare
                    </a>
                  </div>
                  <div>
                    <a href="# ">
                      <AiOutlineHeart className="fs-5 me-2" /> Add to Wishlist
                    </a>
                  </div>
                </div>
                <div className="d-flex gap-10 align-items-center my-3">
                  <h3 className="product-heading">Shipping & Return :</h3>
                  <p className="product-data">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit
                    <br />
                    Omnis dolores animi sint
                    <b> 5-10 business days!</b>
                  </p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Product Link :</h3>
                  <a
                    href="javacript:void(0);"
                    onClick={() => {
                      copyToClipboard(
                        "https://cdn.anscommerce.com/catalog/brandstore/johnson/17_7_20/Sale.jpg"
                      );
                    }}
                  >
                    Copy Product Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="bg-white p-3">
              <h4>Description</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
                quasi quo voluptas perferendis. Atque aperiam eius ex quam aut
                ratione officia qui eos. Commodi nisi blanditiis voluptatibus,
                magni iure tempora.
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="reviwes-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="review-head d-flex justify-content-between align-items-end">
              <div>
                <h4 className="mb-2">Customer Reviwes</h4>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0">based on 2 Reviwes</p>
                </div>
              </div>
              {orderdproduct && (
                <div>
                  <a href="# " className="text-dark text-decoration-underline">
                    Write a Review
                  </a>
                </div>
              )}
            </div>
            <div id="review" className="review-form py-4">
              <h4>Write a Review</h4>
              <from action="" className="d-flex flex-column gap-15">
                <div>
                  <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    edit={true}
                    activeColor="#ffd700"
                  />
                </div>
                <div>
                  <textarea
                    name=""
                    placeholder="Comment"
                    className="form-control"
                    rows="4"
                    cols="30"
                  ></textarea>
                </div>
                <div className="d-flex justify-content-end">
                  <button className="button border-0">Submit Review</button>
                </div>
              </from>
            </div>
            <div className="review mt-3">
              <div className="review">
                <div className="d-flex gap-10 align-items-center">
                  <h6 className="mb-0">Navdeep</h6>
                  <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    edit={false}
                    activeColor="#ffd700"
                  />
                </div>
                <p className="mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus error quisquam doloremque reprehenderit, deleniti
                  perspiciatis, delectus quas fuga dolorem distinctio blanditiis
                  debitis et animi porro officia ratione architecto provident
                  aspernatur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="popular-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
    </>
  );
}

export default SingleProduct;
