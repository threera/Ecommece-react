import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import { BiPhoneCall, BiInfoCircle } from 'react-icons/bi';


function Contact() {
  return (
    <>
      <Meta title={"Blogs"} />
      <BreadCrumb title="Blogs" />
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3787.6620210759834!2d99.3986862!3d18.3170581!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30d96f16df85adb1%3A0xc11e50b2286fcbba!2z4Liq4LiZ4Liy4Lih4Lif4Li44LiV4Lia4Lit4LilIOC4leC4s-C4muC4pSDguJvguIfguKLguLLguIfguITguIEg4Lit4Liz4LmA4Lig4Lit4Lir4LmJ4Liy4LiH4LiJ4Lix4LiV4LijIOC4peC4s-C4m-C4suC4hyA1MjE5MA!5e0!3m2!1sth!2sth!4v1676442852786!5m2!1sth!2sth"
                width="100"
                height="450"
                className="border-0 w-100"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="myFrame">
              </iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper row">
                <div className='col-6'>
                  <h3 className="contact-title mb-4">Contact</h3>
                  <form action="" className='d-flex flex-column gap-15'>
                    <div>
                      <input type="text" className="form-control" placeholder='Name' />
                    </div>
                    <div>
                      <input type="email" className="form-control" placeholder='Email' />
                    </div>
                    <div>
                      <input type="tel" className="form-control" placeholder='Moblie Number' />
                    </div>
                    <div>
                      <textarea rows="10" cols="30" className='w-100 form-control' placeholder='Comments'></textarea>
                    </div>
                    <div className='d-flex justify-content-center'>
                      <button type="submit" className='button border-0 w-50'>SEND</button>
                    </div>
                  </form>
                </div>
                <div className='col-6'>
                  <h3 className="contact-title mb-4">Get in touch with us</h3>
                  <div>
                    <ul className='ps-0'>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                      <AiOutlineHome className='fs-5' />
                        <address className='mb-0'> 
                          สนามฟุตบอล
                          ตำบล ปงยางคก อำเภอห้างฉัตร ลำปาง 52190
                        </address>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <BiPhoneCall className='fs-5' />
                        <a href="tel:0619358134">0619358134</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <AiOutlineMail className='fs-5' />
                        <a href="mailto:threerapat.pitarapang@gmail.com">threerapat.pitarapang@gmail.com</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <BiInfoCircle className='fs-5' />
                        <p className="mb-0">Monday - Friday 8:00 - 17.00</p>
                      </li>
                    </ul>
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

export default Contact