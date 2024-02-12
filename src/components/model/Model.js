import React, { Component } from "react";
import "./model.css";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

// import Swiper core and required modules
import { Navigation, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

export default class Model extends Component {
  render() {
    let modelStyle = {
      display: "block",
      backgroundColor: "rgba(0,0,0,0.6)",
    };
    return (
      <div className="modal show fade" tabIndex="-1" style={modelStyle}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{this.props.title}</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={this.props.hide}
              ></button>
            </div>
            <div className="modal-body pt-0">
              {this.props.content}
              <a href={this.props.link} target="_blank"></a>
              <Swiper
                // install Swiper modules
                loop={true}
                effect={"fade"}
                navigation={{
                  nextEl: ".button-next-slide",
                  prevEl: ".button-prev-slide",
                }}
                modules={[Navigation, EffectFade]}
                spaceBetween={0}
                speed={1000}
              >
                {this.props.images.map((image, index) => {
                  return (
                    <SwiperSlide key={index} className="portfolio__images">
                      <img
                        src={image}
                        alt={this.props.title}
                        className="img-fluid"
                      />
                    </SwiperSlide>
                  );
                })}
                <div className="button-prev-slide">
                  <BiSolidLeftArrow />
                </div>
                <div className="button-next-slide">
                  <BiSolidRightArrow />
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
