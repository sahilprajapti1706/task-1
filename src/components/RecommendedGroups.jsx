import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaMapMarkerAlt, FaThumbsUp } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FaCircleInfo } from "react-icons/fa6";
import { UserContext } from "../context/UserContext";

const RecommendedGroups = () => {
  const { isLoggedIn } = useContext(UserContext);

  // Define recommended groups array
  const recommendedGroups = [
    { name: "Leisure", img: "./R_user1.png" },
    { name: "Activism", img: "./R_user2.png" },
    { name: "MBA", img: "./R_user3.png" },
    { name: "Philosophy", img: "./R_user2.png" },
  ];

  const handleClear = () => {
    console.log("Clear location");
  };

  return (
    <div className="card border rounded-3 shadow-sm">
      <div className="card-body p-3 p-lg-4">
        <div className="input-group border-bottom pb-3 mb-3">
          <span className="input-group-text bg-transparent border-0">
            <FaMapMarkerAlt className="text-muted" />
          </span>
          <input
            type="text"
            className="form-control border-0 shadow-none px-2"
            placeholder="Enter location"
            aria-label="Location"
          />
          <button 
            className="btn btn-link text-muted border-0 p-0"
            type="button"
            onClick={handleClear}
            aria-label="Clear location"
          >
            <IoClose size={20} />
          </button>
        </div>

        <div className="d-flex align-items-start gap-2 mb-4">
          <FaCircleInfo 
            className="flex-shrink-0 text-muted mt-1" 
            style={{ width: '20px', height: "20px" }}
          />
          <p className="text-muted small mb-0">
            Your location will help us serve better and extend a personalised experience.
          </p>
        </div>

        {isLoggedIn && (
          <>
            <h6 className="d-flex align-items-center text-uppercase fw-bold small mb-3">
              <FaThumbsUp className="me-2" />
              <span>Recommended Groups</span>
            </h6>

            <div className="list-group list-group-flush mb-3">
              {recommendedGroups.map((group, index) => (
                <div
                  key={index}
                  className="list-group-item d-flex align-items-center justify-content-between px-0 py-2 border-0"
                >
                  <div className="d-flex align-items-center gap-2 gap-md-3">
                    <img
                      src={group.img}
                      alt={group.name}
                      className="rounded-circle"
                      width="36"
                      height="36"
                    />
                    <span className="fs-6">{group.name}</span>
                  </div>
                  <button 
                    className="btn btn-outline-secondary btn-sm rounded-pill px-3"
                    style={{ minWidth: "80px" }}
                  >
                    Follow
                  </button>
                </div>
              ))}
            </div>

            {/* See More Link */}
            <div className="text-end">
              <a 
                href="#"
                className="text-decoration-none small text-primary"
                onClick={(e) => e.preventDefault()}
              >
                See More...
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RecommendedGroups;