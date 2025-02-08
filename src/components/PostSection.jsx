import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PostCard from "./PostCard";
import RecommendedGroups from "./RecommendedGroups";
import { FaCaretDown, FaShareAlt } from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";
import { IoEyeSharp } from "react-icons/io5";
import { ImExit } from "react-icons/im";
import { UserContext } from "../context/UserContext";
import { Dropdown } from "react-bootstrap";

const PostSection = () => {
  const [activeTab, setActiveTab] = useState("All Post");
  const [filter, setFilter] = useState(""); // Added filter state
  const section = ["All Post", "Article", "Event", "Education", "Job"];
  const [showDropdown, setShowDropdown] = useState(false);
  const { isJoinedGrp, setIsJoinedGrp } = useContext(UserContext);

  const handleToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleGroupToggle = () => {
    setIsJoinedGrp((prev) => !prev); 
  };

  const posts = [
    {
      url: "./post1.png",
      category: "✍️ Article",
      title: "What if famous brands had regular fonts? Meet RegulaBrands!",
      description: "I've worked in UX for the better part of a decade. From now on, I plan to rei…",
      author: "Sarthak Kumar",
      authorImg: "./author1.png",
      view: 1.4,
    },
    {
      url: "./post2.png",
      category: "🔬️ Education",
      title: "How to create a responsive website using React",
      description: "In this tutorial, we will learn how to create a responsive website using React and CSS…",
      author: "Jane Doe",
      authorImg: "./author2.png",
      view: 2.3,
    },
    {
      url: "./post3.png",
      category: "🗓️ Meetup",
      title: "Latest updates in the tech industry",
      description: "Stay updated with the latest news and trends in the tech industry. This week we cover…",
      author: "John Smith",
      authorImg: "./author3.png",
      view: 3.1,
    },
  ];

  return (
    <div className="container-fluid container-lg mt-4 mt-lg-5 px-3 px-lg-5">
      <header className="sticky-top bg-white border-bottom" style={{ top: "72px", zIndex: "1020" }}>
        <div className="container-fluid container-lg px-3 px-lg-5">
          <div className="row align-items-center py-2">
            {/* Desktop Navigation */}
            <div className="col-md-8 d-none d-md-block">
              <nav className="nav">
                {section.map((item, index) => (
                  <span
                    key={index}
                    className={`nav-link fw-semibold pb-3 me-4 ${
                      activeTab === item
                        ? "text-dark border-bottom border-3 border-dark"
                        : "text-muted"
                    }`}
                    style={{ cursor: "pointer" }}
                    onClick={() => setActiveTab(item)}
                  >
                    {item}
                  </span>
                ))}
              </nav>
            </div>

            
            <div className="col-12 d-md-none">
              <div className="d-flex justify-content-between align-items-center">
                <span className="nav-link fw-semibold pb-2 border-bottom border-3 border-dark">
                  All Posts
                </span>
                <select 
                  className="form-select w-auto"
                  value={filter}
                  onChange={handleFilterChange}
                >
                  <option value="" disabled>Filter: All</option>
                  <option value="all">All</option>
                  <option value="education">Education</option>
                  <option value="job">Job</option>
                  <option value="event">Event</option>
                </select>
              </div>
            </div>

            
            <div className="col-md-4 d-none d-md-flex justify-content-end gap-3">
              <button className="btn btn-secondary d-flex align-items-center gap-2">
                Write a Post <FaCaretDown />
              </button>
              <button
                className={`btn ${isJoinedGrp ? "btn-outline-secondary" : "btn-primary"}`}
                onClick={handleGroupToggle}
              >
                {isJoinedGrp ? (
                  <span className="d-flex align-items-center gap-2">
                    <ImExit /> Leave
                  </span>
                ) : (
                  <span className="d-flex align-items-center gap-2">
                    <HiMiniUserGroup /> Join Group
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="row g-4 mt-2">
        {/* Posts Column */}
        <div className="col-12 col-lg-8">
          {posts.map((post, idx) => (
            <div key={idx} className="mb-4">
              <PostCard post={post} />
            </div>
          ))}
        </div>

        
        <div className="col-lg-4 d-none d-lg-block">
          <div className="sticky-top" style={{ top: "150px" }}>
            <RecommendedGroups />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostSection;