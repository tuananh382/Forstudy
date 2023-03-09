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
import coursesweb2 from "../assets/img/courses/web-development/2.png"
import coursesweb3 from "../assets/img/courses/web-development/3.jpg"
import coursesweb4 from "../assets/img/courses/web-development/4.jpg"
import testimonial1 from "../assets/img/testimonial/1.jpg"
import testimonial3 from "../assets/img/testimonial/3.jpg"
import testimonial4 from "../assets/img/testimonial/4.png"
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
                                <h2 class="text-capitalize">javascript cơ bản</h2>
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
                                    <li>học viên - <span>2200</span></li>
                                    <li>giảng viên - <span><a href="#">khánh phạm</a></span></li>
                                    <li>cập nhập mới nhất - <span>10/10/2021</span></li>
                                    <li>ngôn ngữ - <span>tiếng việt</span></li>
                                </ul>
                            </div>

                            <nav class="course-tabs">
                                <div class="nav nav-tabs border-0" id="nav-tab" role="tablist">
                                    <button class="nav-link active" id="course-curriculum-tab" data-bs-toggle="tab" data-bs-target="#course-curriculum" type="button" role="tab" aria-controls="course-curriculum" aria-selected="true">chương trình giảng dạy</button>
                                    <button class="nav-link" id="course-description-tab" data-bs-toggle="tab" data-bs-target="#course-description" type="button" role="tab" aria-controls="course-description" aria-selected="false">sự miêu tả</button>
                                    <button class="nav-link" id="course-instructor-tab" data-bs-toggle="tab" data-bs-target="#course-instructor" type="button" role="tab" aria-controls="course-instructor" aria-selected="false">người hướng dẫn</button>
                                    <button class="nav-link" id="course-reviews-tab" data-bs-toggle="tab" data-bs-target="#course-reviews" type="button" role="tab" aria-controls="course-reviews" aria-selected="false">đánh giá</button>
                                </div>
                            </nav>

                            <div class="tab-content" id="nav-tabContent">
                                <div class="tab-pane fade show active" id="course-curriculum" role="tabpanel" aria-labelledby="course-curriculum-tab">
                                    <div class="course-curriculum box">
                                        <h3 class="text-capitalize mb-4">chương trình giảng dạy</h3>
                                        <div class="accordion" id="accordion">
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="heading-1">
                                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="true" aria-controls="collapse-1">
                                                        Khởi động <span>2 bài học | 20p</span>
                                                    </button>
                                                </h2>
                                                <div id="collapse-1" class="accordion-collapse collapse show" aria-labelledby="heading-1" data-bs-parent="#accordion">
                                                    <div class="accordion-body">
                                                        <ul>
                                                            <li>
                                                                <i class="fas fa-play-circle"></i>
                                                                Mở đầu
                                                                <span>06:00</span>
                                                            </li>
                                                            <li>
                                                                <i class="fas fa-play-circle"></i>
                                                                Giá trị
                                                                <span>06:00</span>
                                                            </li>
                                                            <li>
                                                                <i class="fas fa-play-circle"></i>
                                                                Kiểu giá trị
                                                                <span>06:00</span>
                                                            </li>
                                                            <li>
                                                                <i class="fas fa-play-circle"></i>
                                                                Biến
                                                                <span>06:00</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="heading-2">
                                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
                                                        Kiểu thành phần <span>2 bài học | 20p</span>
                                                    </button>
                                                </h2>
                                                <div id="collapse-2" class="accordion-collapse collapse" aria-labelledby="heading-2" data-bs-parent="#accordion">
                                                    <div class="accordion-body">
                                                        <ul>
                                                            <li>
                                                                <i class="fas fa-play-circle"></i>
                                                                Kiểu Strings
                                                                <span>06:00</span>
                                                            </li>
                                                            <li>
                                                                <i class="fas fa-play-circle"></i>
                                                                Kiểu Booleans
                                                                <span>06:00</span>
                                                            </li>
                                                            <li>
                                                                <i class="fas fa-play-circle"></i>
                                                                Kiểu Null và undefined
                                                                <span>06:00</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="heading-3">
                                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-3" aria-expanded="false" aria-controls="collapse-3">
                                                        Vòng lặp <span>2 bài học | 20p</span>
                                                    </button>
                                                </h2>
                                                <div id="collapse-3" class="accordion-collapse collapse" aria-labelledby="heading-3" data-bs-parent="#accordion">
                                                    <div class="accordion-body">
                                                        <ul>
                                                            <li>
                                                                <i class="fas fa-play-circle"></i>
                                                                Vòng lặp If / else
                                                                <span>06:00</span>
                                                            </li>
                                                            <li>
                                                                <i class="fas fa-play-circle"></i>
                                                                Sử dụng Switch
                                                                <span>06:00</span>
                                                            </li>
                                                            <li>
                                                                <i class="fas fa-play-circle"></i>
                                                                Vòng lặp Loops
                                                                <span>06:00</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="heading-4">
                                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-4" aria-expanded="false" aria-controls="collapse-4">
                                                        Hàm <span>2 bài học | 20p</span>
                                                    </button>
                                                </h2>
                                                <div id="collapse-4" class="accordion-collapse collapse" aria-labelledby="heading-4" data-bs-parent="#accordion">
                                                    <div class="accordion-body">
                                                        <ul>
                                                            <li>
                                                                <i class="fas fa-play-circle"></i>
                                                                Chức năng của hàm
                                                                <span>06:00</span>
                                                            </li>
                                                            <li>
                                                                <i class="fas fa-play-circle"></i>
                                                                Thông số
                                                                <span>06:00</span>
                                                            </li>
                                                            <li>
                                                                <i class="fas fa-play-circle"></i>
                                                                Giá trị trả về
                                                                <span>06:00</span>
                                                            </li>
                                                            <li>
                                                                <i class="fas fa-play-circle"></i>
                                                                Đệ quy
                                                                <span>06:00</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                                <div class="tab-pane fade " id="course-description" role="tabpanel" aria-labelledby="course-description-tab">
                                    <div class="course-description box">
                                        <h3 class="text-capitalize mb-4">mô tả</h3>
                                        <p>Lập trình máy tính hay lập chương trình máy tính thường gọi tắt là lập trình (tiếng Anh: Computer programming, thường gọi tắt là programming) là việc lập ra chương trình làm việc cho máy có bộ xử lý, nói riêng là máy tính, để thực thi nhiệm vụ xử lý thông tin nào đó. </p>
                                        <h4>For who is this course designed ?</h4>
                                        <p>Lập trình máy tính hay lập chương trình máy tính thường gọi tắt là lập trình (tiếng Anh: Computer programming, thường gọi tắt là programming) là việc lập ra chương trình làm việc cho máy có bộ xử lý, nói riêng là máy tính, để thực thi nhiệm vụ xử lý thông tin nào đó. </p>
                                        <h4>Why should you take this course ?</h4>
                                        <p>Lập trình máy tính hay lập chương trình máy tính thường gọi tắt là lập trình (tiếng Anh: Computer programming, thường gọi tắt là programming) là việc lập ra chương trình làm việc cho máy có bộ xử lý, nói riêng là máy tính, để thực thi nhiệm vụ xử lý thông tin nào đó. </p>
                                    </div>
                                </div>

                                <div class="tab-pane fade " id="course-instructor" role="tabpanel" aria-labelledby="course-instructor-tab">
                                    <div class="course-instructor box">
                                        <h3 class="mb-3 text-capitalize">giảng viên</h3>
                                        <div class="instructor-details">
                                            <div class="details-wrap d-flex align-items-center flex-wrap">
                                                <div class="left-box me-4">
                                                    <div class="img-box">
                                                        <img src={instructor} class="rounded-circle" alt="instructor img" />
                                                    </div>
                                                </div>
                                                <div class="right-box">
                                                    <h4>tuấn tú <span>(lập trình viên)</span></h4>
                                                    <ul>
                                                        <li><i class="fas fa-star"></i> 4.5 Rating</li>
                                                        <li><i class="fas fa-play-circle"></i> 10 Courses</li>
                                                        <li><i class="fas fa-certificate"></i> 3000 Reviews</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="text">
                                                <p class="mb-0">Lập trình máy tính hay lập chương trình máy tính thường gọi tắt là lập trình (tiếng Anh: Computer programming, thường gọi tắt là programming) là việc lập ra chương trình làm việc cho máy có bộ xử lý, nói riêng là máy tính, để thực thi nhiệm vụ xử lý thông tin nào đó. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="tab-pane fade " id="course-reviews" role="tabpanel" aria-labelledby="course-reviews-tab">
                                    <div class="course-reviews box">

                                        <div class="rating-summary">
                                            <h3 class="mb-4 text-capitalize">phản hồi của học viên</h3>
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
                                                <p>Công việc tuyệt vời. Tôi đã học được rất nhiều điều về javascript trong khóa học này.</p>
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
                                                <p>Công việc tuyệt vời. Tôi đã học được rất nhiều điều về javascript trong khóa học này.</p>
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
                                                <p>Công việc tuyệt vời. Tôi đã học được rất nhiều điều về javascript trong khóa học này.</p>
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
                                    <img src={coursesweb3} class="w-100" alt="course img" />
                                    <div class="play-icon">
                                        <i class="fas fa-play"></i>
                                    </div>
                                    <p class="text-center">Xem trước khoá học</p>
                                </div>
                                <div class="price d-flex align-items-center mb-3">
                                    <span class="price-old text-decoration-line-through">$100</span>
                                    <span class="price-new">$49</span>
                                    <span class="price-discount">51% giảm</span>
                                </div>
                                <h3 class="mb-3">Đặc trưng khoá học</h3>
                                <ul class="features-list">
                                    <li>Hơn 15 bài học</li>
                                    <li>tính năng khác</li>
                                    <li>tính năng khác</li>
                                    <li>tính năng khác</li>
                                </ul>
                                <div class="btn-wrap">
                                    <button type="button" class="btn btn-theme btn-block">Đăng ký</button>
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