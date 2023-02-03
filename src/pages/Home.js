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
              <div className="d-flex flex-wrap justifu-content-between align-items-center">
                <div className="small-banner position-relative">
                  <img src="images/catbanner-1.jpg" className='img-fluid rounded-3' alt="main banner" />
                  <div className="small-banner-content position-absulute">
                    <h4>SUPERCHARGED FOR PROS.</h4>
                    <h5>ipad S53+ Pro.</h5>
                    <p>From $999.00 or $41.62/mo.</p>
                    <Link to=""> BUY NOW</Link>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img src="images/main-banner-1.jpg" className='img-fluid rounded-3' alt="main banner" />
                  <div className="small-banner-content position-absulute">
                    <h4>SUPERCHARGED FOR PROS.</h4>
                    <h5>ipad S53+ Pro</h5>
                    <p>From $999.00 or $41.62/mo.</p>
                    <Link to=""> BUY NOW</Link>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img src="images/main-banner-1.jpg" className='img-fluid rounded-3' alt="main banner" />
                  <div className="small-banner-content position-absulute">
                    <h4>SUPERCHARGED FOR PROS.</h4>
                    <h5>ipad S53+ Pro</h5>
                    <p>From $999.00 or $41.62/mo.</p>
                    <Link to=""> BUY NOW</Link>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img src="images/main-banner-1.jpg" className='img-fluid rounded-3' alt="main banner" />
                  <div className="small-banner-content position-absulute">
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
    </>
  )
}

export default Home