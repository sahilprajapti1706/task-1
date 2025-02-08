import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { ImExit } from "react-icons/im";

const Hero = () => {
  const [joinBtn, setJoinBtn] = useState(false);

  return (
    <div className="hero-section position-relative">
      <div className="hero-container" style={{
        height: "280px", 
      }}>
        
        <img
          src="./hero.png"
          alt="Hero"
          className="img-fluid w-100 h-100"
          style={{
            objectFit: "cover",
            filter: "brightness(50%)",
          }}
        />

        
        <div className="position-absolute top-50 start-50 translate-middle text-white text-center w-100 px-3 px-md-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8">
                <h1 className="display-5 fw-semibold mb-2 fs-2 fs-md-1">
                  Computer Engineering
                </h1>
                <p className="fs-6 fs-md-5 mb-0">
                  142,765 Computer Engineers follow this
                </p>
              </div>
            </div>
          </div>
        </div>

       
        <div className="position-absolute top-0 start-0 m-4 d-md-none">
          <Button variant="link" className="text-white p-0 border-0">
            <FaArrowLeft size={24} />
          </Button>
        </div>

        
        <div className="position-absolute top-0 end-0 m-4 d-md-none">
          <Button
            variant={joinBtn ? "light" : "outline-light"}
            onClick={() => setJoinBtn(!joinBtn)}
            className="d-flex align-items-center gap-2"
          >
            {joinBtn ? (
              "Join Group"
            ) : (
              <>
                <ImExit /> <span>Leave</span>
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;