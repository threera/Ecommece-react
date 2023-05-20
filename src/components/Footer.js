import React from 'react'
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newsletter" />
                <h3 className="mb-0 text-white">Sing up for Newsletter</h3>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input type="text" className="form-control py-1" placeholder="You Email Address..." aria-label="You Email Address..." aria-describedby="basic-addon2" />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className='text-white mb-4'>Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  377/22 อาคารวัน,<br /> ชั้น3,<br /> ถนนคลองลำเจียก, <br />นวลจันทร์, <br />บึงกุ่ม,<br /> กรุงเทพ 10230
                </address>
                <a href="tel:0619358134" className='mt-4 d-block mb-1 text-white'>0619351384</a>
                <a href="mailto:threerapat.pitarapang@gmail.com" className='mt-2 d-block mb-0 text-white'>threerapat.pitarapang@gmail.com</a>
                <div className="scoial_icons d-flex align-items-center gap-30 mt-4">
                  <a href="https://www.youtube.com/?gl=TH" className='text-white'>
                    <BsLinkedin className=' fs-4' />
                  </a>
                  <a href="https://www.youtube.com/?gl=TH" className='text-white'>
                    <BsInstagram className=' fs-4' />
                  </a>
                  <a href="https://www.youtube.com/?gl=TH" className='text-white'>
                    <BsGithub className=' fs-4' />
                  </a>
                  <a href="https://www.youtube.com/?gl=TH" className='text-white'>
                    <BsYoutube className=' fs-4' />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className='text-white mb-4'>Information</h4>
              <div className='footer-link d-flex flex-column'>
                <Link to="/privacy-policy" className="text-white py-2 mb-1">Provacy Policy</Link>
                <Link to="/refund-policy" className="text-white py-2 mb-1">Refund Policy</Link>
                <Link to="/shipping-policy" className="text-white py-2 mb-1">Shipping Policy</Link>
                <Link to="/term-conditions" className="text-white py-2 mb-1">Terms & Conditons</Link>
                <Link to="/blogs" className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className='text-white mb-4'>Account</h4>
              <div className='footer-link d-flex flex-column'>
                <Link to="" className="text-white py-2 mb-1">About Us</Link>
                <Link to="" className="text-white py-2 mb-1">Faq</Link>
                <Link to="" className="text-white py-2 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className='text-white mb-4'>Quick Links</h4>
              <div className='footer-link d-flex flex-column'>
                <Link to="" className="text-white py-2 mb-1">Laptops</Link>
                <Link to="" className="text-white py-2 mb-1">Headphone</Link>
                <Link to="" className="text-white py-2 mb-1">Tablets</Link>
                <Link to="" className="text-white py-2 mb-1">Watch</Link>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="text-center mb-0 text-white">
                &copy;{new Date().getFullYear()}; Powered By Threerapat
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer