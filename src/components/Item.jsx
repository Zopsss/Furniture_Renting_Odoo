import "./Item.css"
import { Link } from "react-router-dom";
import digital_chair from "../image/digital-chair.png";
import shopping_bag from "../image/svg/shopping-bag.svg";

const Item = () => {
  return (
    <div className="tab-content mt-25" id="ap-tabContent">
      <div
        className="tab-pane fade show active"
        id="ap-overview"
        role="tabpanel"
        aria-labelledby="ap-overview-tab"
      >
        <div className="row product-page-list justify-content-center">
          <div className="cus-xl-3 col-lg-4 col-md-11 col-12 mb-4 px-10">
            <div className="card product product--grid">
              <div className="h-100">
                <div className="product-item">
                  <div className="product-item__image">
                    <Link to="/item_detail">
                      <img
                        style={{ height: "50%", width: "50%" }}
                        className="card-img-top img-fluid"
                        src={digital_chair}
                        alt="digital-chair"
                      />
                    </Link>
                  </div>
                  <div className="card-body px-20 pb-25 pt-25">
                    <div className="product-item__body text-capitalize">
                      <Link to="/item_detail"
                        href="#"
                        style={{ textDecoration: "none", color: "#000" }}
                      >
                        <p className="card-title" style={{ fontWeight: "700" }}>
                          Montes scelerisque
                        </p>
                      </Link>
                    </div>
                    <div className="product-item__footer">
                      <div className="ms-5 d-flex align-items-center flex-wrap">
                        <span
                          className="product-desc-price text-primary ms-5"
                          style={{
                            fontSize: "1.5rem",
                          }}
                        >
                          $200.00
                        </span>
                      </div>
                    </div>
                    <div className="ms-4 product-item__button d-flex mt-20 flex-wrap">
                      <button className="btn btn-light px-20 me-3">
                        <img
                          src={shopping_bag}
                          alt="shopping-bag"
                          className="svg me-2"
                        />
                        Add To Cart
                      </button>
                      <button className="btn btn-primary btn-default btn-squared px-20">
                        Rent now
                      </button>
                    </div>
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

export default Item;
