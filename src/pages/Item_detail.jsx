import React from "react";
import { Link } from "react-router-dom";
import digital_chair from "../image/digital-chair.png";
import shopping_bag from "../image/svg/shopping-bag.svg";

const Item_detail = () => {
  return (
    <div className="container-fluid">
      <div className="card product-details h-100" style={{boxShadow: '0px 10px 20px 2px rgba(0, 0, 0, 0.25)'}}>
        <div className="product-item d-flex p-sm-50 p-20">
          <div className="row">
            <div className="col-lg-5">
              <div className="product-item__image">
                <div
                  className="wrap-gallery-article carousel slide carousel-fade"
                  id="carouselExampleCaptions"
                  data-bs-ride="carousel"
                >
                  <div className="overflow-hidden">
                    <div className="reset-ul d-flex flex-wrap list-thumb-gallery">
                      <a
                        href="#"
                        className="thumbnail active"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to={0}
                        aria-current="true"
                        aria-label="Slide 1"
                      >
                        <img
                          className="img-fluid d-flex"
                          src={digital_chair}
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="b-normal-b mb-25 pb-sm-35 pb-15 mt-lg-0 mt-15">
                <div className="product-item__body">
                  <div className="product-item__title" style={{marginLeft: '-18%'}}>
                    <p className="card-title" style={{fontSize:'2.1rem'}}>
                      These stools are also decently stored
                    </p>
                  </div>
                  <div className="product-item__content text-capitalize">
                    <span className="product-details-brandName" style={{float:'left'}}>
                      Brand:<span>Louis Poulsen</span>
                    </span>
                    <br />
                    <span
                      className="product-desc-price text-primary"
                      style={{
                        fontSize: "1.5rem",
                        marginLeft: '-88%'
                      }}
                    >
                      $200.00
                    </span>
                    <p className="product-deatils-pera mt-3" style={{textAlign:'left'}}>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna.
                    </p>
                    <div className="product-item__button mt-lg-30 mt-sm-25 mt-20 d-flex flex-wrap">
                      <div className="d-flex flex-wrap product-item__action align-items-center">
                        <button className="btn btn-primary btn-default btn-squared border-0 px-25 me-2 my-sm-0 my-2">
                          Rent now
                        </button>
                        <button className="btn btn-light px-20 me-3">
                          <img
                            src={shopping_bag}
                            alt="shopping-bag"
                            className="svg me-2"
                          />
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-details__availability mt-3">
                  <div className="title">
                    <p style={{float:'left'}} className="me-1">Category:</p>
                    <p style={{float:'left'}}>Furniture</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item_detail;
