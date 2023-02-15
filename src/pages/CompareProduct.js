import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

function CompareProduct() {
    return (
        <>
            <Meta title={"Blogs"} />
            <BreadCrumb title="Blogs" />
            <div className="compare-product-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="compare-product-card position-relative">
                                <img src="images/cross.svg" alt="scorss" className='position-absolute cross img-fluid' />
                                <div className="product-card-image">
                                    <img src="images/watch.jpg" alt="watch" />
                                </div>
                                <div className="compare-product-details">
                                    <h5 className="title">
                                        Honor T1
                                    </h5>
                                    <h6 className="price">$ 100</h6>
                                    <div>
                                        <div className="product-detail">
                                            <h5>Brrand:</h5>
                                            <p>Havels</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompareProduct