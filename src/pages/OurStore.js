import React, { useState } from 'react'
import ReactStars from 'react-rating-stars-component'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductCard'
import Container from '../components/Container'

const OurStore = () => {
    const [grid, setGrid] = useState(4);
    return (
        <>
            <Meta title={"Our Store"} />
            <BreadCrumb title="Our Store" />
            <Container class1="store-wrapper home-wrapper-2 py-5">
                    <div className="row">
                        <div className="col-3">
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">Shop by Categories</h3>
                                <div>
                                    <ul className="ps-0">
                                        <li>Watch</li>
                                        <li>Tv</li>
                                        <li>Camera</li>
                                        <li>Laptop</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">Filter By</h3>
                                <div>
                                    <h5 className="sub-title">Availablity</h5>
                                    <div>
                                        <div className="form-check">
                                            <input type="checkbox" value="" id='' className="form-check-input" />
                                            <label className='form-check-lable' htmlFor="In">
                                                In Stock (1)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" value="" id='' className="form-check-input" />
                                            <label className='form-check-lable' htmlFor="Out">
                                                Out of Stock (0)
                                            </label>
                                        </div>
                                    </div>
                                    <h5 className="sub-title">Price</h5>
                                    <div className='d-flex align-items-center gap-10'>
                                        <div className="form-floating">
                                            <input className='form-control' type="email" id='floatingInput' placeholder='From' />
                                            <label htmlFor="floatingInput">From</label>
                                        </div>
                                        <div className="form-floating">
                                            <input className='form-control' type="email" id='floatingInput' placeholder='From' />
                                            <label htmlFor="floatingInput">To</label>
                                        </div>
                                    </div>
                                    <h5 className="sub-title">Colors</h5>
                                    <div>
                                        <ul className="ps-0 colors">
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </div>
                                    <h5 className="sub-title">Size</h5>
                                    <div>
                                        <div className="form-check">
                                            <input type="checkbox" value="" id='color-1' className="form-check-input" />
                                            <label className='form-check-lable' htmlFor="color-1">
                                                S (2)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" value="" id='color-1' className="form-check-input" />
                                            <label className='form-check-lable' htmlFor="color-1">
                                                M (2)
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">Product Tags</h3>
                                <div>
                                    <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px3">
                                            Headphone
                                        </span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px3">
                                            Laptop
                                        </span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px3">
                                            Moblie
                                        </span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px3">
                                            Wire
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">Random Product</h3>
                                <div>
                                    <div className="random-products mb-3 d-flex">
                                        <div className="w-50">
                                            <img src="images/watch.jpg" alt="watch" className='img-fluid' />
                                        </div>
                                        <div className="w-50">
                                            <h5>
                                                Lorem ipsum dolor sit amet consectetur
                                            </h5>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <p className='price'>$ 300</p>
                                        </div>
                                    </div>
                                    <div className="random-products d-flex">
                                        <div className="w-50">
                                            <img src="images/watch.jpg" alt="watch" className='img-fluid' />
                                        </div>
                                        <div className="w-50">
                                            <h5>
                                                Lorem ipsum dolor sit amet consectetur
                                            </h5>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <p className='price'>$ 300</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="filter-sort-grid mb-3">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center gap-10">
                                        <p className="mb-0 d-block" style={{ width: "100px" }}>Sort By:</p>
                                        <select name="" id="" className="form-control form-select">
                                            <option value="manual">Featured</option>
                                            <option value="best-se">A</option>
                                            <option value="manual">B</option>
                                            <option value="manual">C</option>
                                            <option value="manual">D</option>
                                            <option value="manual">E</option>
                                            <option value="manual">F</option>
                                            <option value="manual">G</option>
                                        </select>
                                    </div>
                                    <div className="d-flex align-items-center gap-10">
                                        <p className="totalproducts mb-0">21 Products</p>
                                        <div className="d-flex gap-10 align-items-center grid">
                                            <img onClick={() => { setGrid(3); }} src="images/gr4.svg" alt="grid" className='d-block img-fluid' />
                                            <img onClick={() => { setGrid(4); }} src="images/gr3.svg" alt="grid" className='d-block img-fluid' />
                                            <img onClick={() => { setGrid(6); }} src="images/gr2.svg" alt="grid" className='d-block img-fluid' />
                                            <img onClick={() => { setGrid(12); }} src="images/gr.svg" alt="grid" className='d-block img-fluid' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product-list pb-5">
                                <div className="d-flex flex-wrap row">
                                    <ProductCard grid={grid} />
                                    <ProductCard grid={grid} />
                                    <ProductCard grid={grid} />
                                    <ProductCard grid={grid} />
                                    <ProductCard grid={grid} />
                                </div>
                            </div>
                        </div>
                </div>
            </Container>
        </>
    )
}

export default OurStore