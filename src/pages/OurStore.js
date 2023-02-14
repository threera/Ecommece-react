import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

const OurStore = () => {
  return (
    <>
        <Meta title={"Our Store"} />
        <BreadCrumb title="Our Store"/>
        <div className="store-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
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
                               <div className="form-check">
                                    <input type="checkbox" value="" id='' className="form-check-input"  />
                                    <label className='form-check-lable' htmlFor="In">
                                        In Stock (1)
                                    </label>
                               </div>
                               <div className="form-check">
                                    <input type="checkbox" value="" id='' className="form-check-input" />
                                    <label className='form-check-lable'  htmlFor="Out">
                                        Out of Stock (0)
                                    </label>
                               </div>
                            </div>
                        </div>
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
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default OurStore