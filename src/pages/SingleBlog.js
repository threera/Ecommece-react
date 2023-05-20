import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Container from "../components/Container";

function SingleBlog() {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blogs" className="d-flex align-items-center gap-10 mb-2">
                  <HiOutlineArrowLeft className="fs-4" />
                  Go back to Blog
                </Link>
                <h3 className="title">
                  A Beautiful Sunday Morning Renaissance
                </h3>
                <img
                  src="images/blog-1.jpg"
                  alt="blog"
                  className="img-fluid w-100 my-4"
                />
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Magni laboriosam fuga eos, iusto cum dicta pariatur odio,
                  veniam numquam, sequi ut? Laborum adipisci sequi quo placeat
                  possimus consequuntur quos sapiente!
                </p>
              </div>
            </div>
          </div>
      </Container>
    </>
  );
}

export default SingleBlog;
