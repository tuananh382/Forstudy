import React from "react";
import imgbanner from "../assets/img/imgbanner.jpg"
import teacher from "../assets/img/teacher.jpg"
import review from "../assets/img/review/1.png"
import instructor from "../assets/img/instructor/1.png"
import courseshealth1 from "../assets/img/courses/health/1.jpg"
import courseshealth2 from "../assets/img/courses/health/2.jpg"
import coursemusic1 from "../assets/img/courses/music/1.jpg"
import coursemusic2 from "../assets/img/courses/music/2.jpg"
import coursesweb1 from "../assets/img/courses/web-development/1.jpg"
import coursesweb2 from "../assets/img/courses/web-development/2.jpg"
import coursesweb3 from "../assets/img/courses/web-development/3.jpg"
import coursesweb4 from "../assets/img/courses/web-development/4.jpg"
import testimonial1 from "../assets/img/testimonial/1.jpg"
import testimonial3 from "../assets/img/testimonial/3.jpg"
import testimonial4 from "../assets/img/testimonial/4.png"
import reviewnike from "../assets/video/nike-review.mp4"

import Header from "./header";
import Footer from "./footer";

function Coursedetail() {
    return (
        <div>

            <Header />
            <section class="course-details section-padding">
                <div class="container">
                    <div className="row">
                        <div class="col-lg-8">
                            <div class="course-header box">
                                <h2 class="text-capitalize">Nike</h2>
                                <div class="rating">
                                    <span class="average-rating">(4.5)</span>
                                    <span class="average-stars">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                    </span>
                                    <span class="reviews">(230 Reviews)</span>
                                </div>
                                <ul>
                                    <li>Đã mua - <span>2200</span></li>
                                    <li>Mã sản phẩm - <span><a href="#">Nike123</a></span></li>
                                    <li>Ngày ra mắt - <span>10/10/2021</span></li>
                                </ul>
                            </div>

                            <nav class="course-tabs">
                                <div class="nav nav-tabs border-0" id="nav-tab" role="tablist">
                                    <button class="nav-link" id="course-description-tab" data-bs-toggle="tab" data-bs-target="#course-description" type="button" role="tab" aria-controls="course-description" aria-selected="false">miêu tả</button>
                                    <button class="nav-link" id="course-reviews-tab" data-bs-toggle="tab" data-bs-target="#course-reviews" type="button" role="tab" aria-controls="course-reviews" aria-selected="false">đánh giá</button>
                                </div>
                            </nav>

                            <div class="tab-content" id="nav-tabContent">

                                <div class="tab-pane fade " id="course-description" role="tabpanel" aria-labelledby="course-description-tab">
                                    <div class="course-description box">
                                        <h3 class="text-capitalize mb-4">mô tả</h3>
                                        <p>Mô tả đang được cập nhập</p>
                                    </div>
                                </div>


                                <div class="tab-pane fade " id="course-reviews" role="tabpanel" aria-labelledby="course-reviews-tab">
                                    <div class="course-reviews box">

                                        <div class="rating-summary">
                                            <h3 class="mb-4 text-capitalize">phản hồi</h3>
                                            <div class="row">
                                                <div class="col-md-4 d-flex align-items-center justify-content-center text-center">
                                                    <div class="rating-box">
                                                        <div class="average-rating">4.5</div>
                                                        <div class="average-stars">
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star-half-alt"></i>
                                                        </div>
                                                        <div class="reviews">230 đánh giá</div>
                                                    </div>
                                                </div>
                                                <div class="col-md-8">
                                                    <div class="rating-bars">
                                                        <div class="rating-bars-item">
                                                            <div class="star-text">5 sao</div>
                                                            <div class="progress">
                                                                <div class="progress-bar" style={{ width: "50%" }}></div>
                                                            </div>
                                                            <div class="percent">50%</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="reviews-filter">
                                            <h3 class="mb-4 text-capitalize">nhận xét</h3>
                                            <form action="">
                                                <div class="form-group">
                                                    <i class="fas fa-chevron-down select-icon"></i>
                                                    <select class="form-control">
                                                        <option value="">All Reviews</option>
                                                        <option value="1">1 sao</option>
                                                        <option value="2">2 sao</option>
                                                        <option value="3">3 sao</option>
                                                        <option value="4">4 sao</option>
                                                        <option value="5">5 sao</option>
                                                    </select>
                                                </div>
                                            </form>
                                        </div>

                                        <div class="reviews-list">

                                            <div class="reviews-item">
                                                <div class="img-box">
                                                    <img src={review} alt="review img" />
                                                </div>
                                                <h4>khánh ly</h4>
                                                <div class="stars-rating">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <span class="date">hôm qua</span>
                                                </div>
                                                <p>Rất đáng tiền, quá đẹp cho một mức giá</p>
                                            </div>

                                            <div class="reviews-item">
                                                <div class="img-box">
                                                    <img src={review} alt="review img" />
                                                </div>
                                                <h4>dath tran</h4>
                                                <div class="stars-rating">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <span class="date">1 tuần trước</span>
                                                </div>
                                                <p>Rất đáng tiền, quá đẹp cho một mức giá</p>
                                            </div>

                                            <div class="reviews-item">
                                                <div class="img-box">
                                                    <img src={review} alt="review img" />
                                                </div>
                                                <h4>khánh</h4>
                                                <div class="stars-rating">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <span class="date">1 tuần trước</span>
                                                </div>
                                                <p>Rất đáng tiền, quá đẹp cho một mức giá</p>
                                            </div>

                                        </div>

                                        <button type="button" class="btn btn-theme">nhận xét khác</button>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div class="col-lg-4">
                            <div class="course-sidebar box">
                                <div class="img-box position-relative" data-bs-toggle="modal" data-bs-target="#video-modal">
                                    <img src={coursesweb1} class="w-100"  />
                                    {/* <div class="play-icon">
                                        <i class="fas fa-play"></i>
                                    </div>
                                    <p class="text-center">Xem chi tiết</p> */}
                                </div>
                                <div class="price d-flex align-items-center mb-3">
                                    <span class="price-old text-decoration-line-through">$100</span>
                                    <span class="price-new">$49</span>
                                    <span class="price-discount">51% giảm</span>
                                </div>
                                <h3 class="mb-3">Đặc trưng khoá học</h3>
                                <ul class="features-list">
                                    <li>Bền bỉ theo thời gian</li>
                                    <li>Thời thượng</li>
                                    <li>tính năng khác</li>
                                    <li>tính năng khác</li>
                                </ul>
                                <div class="btn-wrap">
                                    <button type="button" class="btn btn-theme btn-block">Mua ngay</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Coursedetail