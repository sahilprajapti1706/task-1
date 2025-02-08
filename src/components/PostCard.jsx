import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { IoEyeSharp } from "react-icons/io5";
import { FaShareAlt } from "react-icons/fa";

const PostCard = ({ post }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleToggle = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="card my-3 mx-auto" style={{ maxWidth: "670px" }}>
      <div className="col-12">
        <img
          src={post.url}
          className="img-fluid rounded-top"
          alt=""
          style={{ width: "100%", height: "220px", objectFit: "cover" }}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title fs-6 text-muted">{post.category}</h5>
        <div className="d-flex justify-content-between align-items-start">
          <h2 className="card-title fs-5 fs-md-4">{post.title}</h2>
          <div onClick={handleToggle} style={{ cursor: "pointer" }}>
            <i className="fa-solid fa-ellipsis fs-5 fs-md-4"></i>
            {showDropdown && (
              <Dropdown.Menu show>
                <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Report</Dropdown.Item>
                <Dropdown.Item href="#/action-3">option3</Dropdown.Item>
              </Dropdown.Menu>
            )}
          </div>
        </div>
        <p className="card-text fs-6 text-muted">{post.description}</p>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <div className="d-flex align-items-center">
            <img
              src={post.authorImg}
              className="rounded-circle me-2"
              alt=""
              style={{ width: "40px", height: "40px" }}
            />
            <p className="mb-0 fw-medium fs-6">{post.author}</p>
          </div>
          <div className="d-flex align-items-center gap-2">
            <p className="fw-light fs-6 mb-0 d-flex justify-content-center align-items-center gap-2">
              <IoEyeSharp />
              {post.view}K views
            </p>
            <div className=" px-3 py-2" style={{ backgroundColor: "#EDEEF0" }}>
              <FaShareAlt className="w-3 h-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
