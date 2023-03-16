import React from "react";

function Courseitem(props) {
    return (
        <div class="col-md-6 col-lg-3">
            <div className="courses-item">
                <a href="coursedetail" className="link">
                    <div className="courses-item-inner">
                        <div className="img-box">
                            <img src={props.imgcourse} />
                        </div>
                        <h3 className="title">{props.title}</h3>
                        <div className="instructor">
                            <img src={props.imginstructor} />
                            <span className="instructor-name">{props.nameinstructor}</span>
                        </div>
                        <div className="rating">
                            <span className="average-rating">{props.star}</span>
                            <span className="average-stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </span>
                            <span className="reviews">{props.reviews}</span>
                        </div>
                        <div className="price">{props.price}</div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Courseitem