import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <section className="home-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img src="images/main-banner-1.jpg" className='img-fluid rounded-3' alt="main banner" />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>ipad S53+ Pro.</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                  <Link to="" className='button'> BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative">
                  <img src="images/catbanner-01.jpg" className='img-fluid rounded-3' alt="main banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPERCHARGED FOR PROS.</h4>
                    <h5>ipad S53+ Pro.</h5>
                    <p>From $999.00 or $41.62/mo.</p>
                    <Link to=""> BUY NOW</Link>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img src="images/catbanner-02.jpg" className='img-fluid rounded-3' alt="main banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPERCHARGED FOR PROS.</h4>
                    <h5>ipad S53+ Pro</h5>
                    <p>From $999.00 or $41.62/mo.</p>
                    <Link to=""> BUY NOW</Link>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img src="images/catbanner-03.jpg" className='img-fluid rounded-3' alt="main banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPERCHARGED FOR PROS.</h4>
                    <h5>ipad S53+ Pro</h5>
                    <p>From $999.00 or $41.62/mo.</p>
                    <Link to=""> BUY NOW</Link>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img src="images/catbanner-04.jpg" className='img-fluid rounded-3' alt="main banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPERCHARGED FOR PROS.</h4>
                    <h5>ipad S53+ Pro</h5>
                    <p>From $999.00 or $41.62/mo.</p>
                    <Link to=""> BUY NOW</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">

            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="service d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service.png" alt="service" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0">From all orders over $5</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-02.png" alt="service" />
                  <div>
                    <h6>Daily Surprise Offiers</h6>
                    <p className="mb-0">From all orders over $5</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-03.png" alt="service" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">From all orders over $5</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-04.png" alt="service" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">From all orders over $5</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-05.png" alt="service" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className="mb-0">From all orders over $5</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">

      </section>
    </>
  )
}

export default Home