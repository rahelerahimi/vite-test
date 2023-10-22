import React from "react";
import { BsArrowRight } from "react-icons/bs";
import "./bestoffweek.css";
const BestOffWeek = ({ progress }) => {
  return (
    <div className="parent-best-week">
      <div className="top-off">
        <span>up to</span>
        <span>30%</span>
      </div>

      <div className="flex-best-week">
        <figure>
          <img src="/images/image-02.png" alt="image-best-week" />
        </figure>
        <div className="parent-text-bestweek">
          <p className="small-title">best fo the week</p>
          <p className="text-bestweek">
            our colorful bowls are on discount this weekend!
          </p>
          <div className="parent-price">
            <span>$ 299</span>
            <span>$ 299</span>
          </div>
          <div className="parent-progress">
            <div className="text-progress">
              <span>available: 7</span>
              <span>already sold: 18</span>
            </div>
            <div className="progress-relative">
              <div
                className="progress-absolute"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <div className="parent-timer">
              <div>
                <p className="text-blue-bold">15</p>
                <p className="text-gray">hours</p>
              </div>
              <p>:</p>
              <div>
                <p className="text-blue-bold">03</p>
                <p className="text-gray">mins</p>
              </div>
              <p>:</p>
              <div>
                <p className="text-blue-bold"> 27</p>
                <p className="text-gray">secc</p>
              </div>
            </div>

            <div className="link">
              <p>dont miss discount</p>
              <p>
                <BsArrowRight />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestOffWeek;
