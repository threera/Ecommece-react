import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
    <div className='col-3'>
        <div className="blog-card">
            <div className="card-image">
                <img src="images/blog-1.jpg" alt="" className="img-fluid" />
            </div>
            <div className="blog-content">
                <p className="date">1 Dec, 2023</p>
                <h5 className="title">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h5>
                <p className='desc'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione expedita sapiente consectetur saepe placeat molestiae aspernatur repellendus recusandae a cupiditate.
                </p>
                <Link to="/" className="button">
                    Read More
                </Link>
            </div>
        </div>
    </div>
  )
}

export default BlogCard