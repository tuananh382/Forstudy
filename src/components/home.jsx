import React from "react";
import Header from "./header";
import Footer from "./footer";
import { Component } from "react";
import Courseitem from "./courseitem";
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



function Home() {
    window.addEventListener("load", () => {
        document.querySelector(".js-page-loader").classList.add("fade-out");
        setTimeout(() => {
            document.querySelector(".js-page-loader").style.display = "none";
        }, 600);
    })
    return (
        <div>
            <div className="page-loader js-page-loader">
                <div></div>
            </div>
            <Header />
            <section className="banner-section d-flex align-items-center position-relative">
                <div className="bubble-animation">
                    <div className="bubble-animation-item"></div>
                    <div className="bubble-animation-item"></div>
                    <div className="bubble-animation-item"></div>
                    <div className="bubble-animation-item"></div>
                    <div className="bubble-animation-item"></div>
                    <div className="bubble-animation-item"></div>
                    <div className="bubble-animation-item"></div>
                    <div className="bubble-animation-item"></div>
                    <div className="bubble-animation-item"></div>
                </div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="banner-text">
                                <h2 className="mb-3">Một khoản đầu tư vào kiến ​​thức mang lại lãi suất cao nhất.</h2>
                                <h1 className="mb-3 text-capitalize">nền tảng trực tuyến tốt nhất cho việc học tập.</h1>
                                <p className="mb-4">Lập trình máy tính hay lập chương trình máy tính thường gọi tắt là lập trình (tiếng Anh: Computer programming, thường gọi tắt là programming) là việc lập ra chương trình làm việc cho máy có bộ xử lý, nói riêng là máy tính, để thực thi nhiệm vụ xử lý thông tin nào đó. </p>
                                <a href="#" className="btn btn-theme">tham gia</a>
                            </div>
                        </div>
                        <div className="col-md-6 order-first order-md-last mb-5 mb-md-0">
                            <div className="banner-img">
                                <div className="circular-img">
                                    <div className="circular-img-inner">
                                        <div className="circular-img-circle"></div>
                                        {/* <img src="img/imgbanner.jpg" alt="banner img"> */}
                                        <img src={imgbanner} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="fun-facts-section">
                <div className="container">
                    <div className="box py-2">
                        <div className="row text-center">
                            <div className="col-md-6 col-lg-3">
                                <div className="fun-facts-item">
                                    <h2 className="style-1">800k</h2>
                                    <p>học viên</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="fun-facts-item">
                                    <h2 className="style-2">500+</h2>
                                    <p>khoá học</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="fun-facts-item">
                                    <h2 className="style-3">50+</h2>
                                    <p>quốc gia</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="fun-facts-item">
                                    <h2 className="style-4">100+</h2>
                                    <p>giảng viên chuyên nghiệp</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="courses-section section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="section-title text-center">
                                <h2 className="title">khoá học</h2>
                                <p className="sub-title">Tìm khóa học phù hợp với bạn</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <Courseitem imgcourse={coursesweb1} imginstructor={instructor} nameinstructor="Tuan tu" star="(4.9)" reviews="(230)" price="$ 49" />
                        <Courseitem imgcourse={coursesweb2} imginstructor={instructor} nameinstructor="Xuan Dieu" star="(4.0)" reviews="(130)" price="$ 24" />
                        <Courseitem imgcourse={coursesweb3} imginstructor={instructor} nameinstructor="Sieu Nhan" star="(4.7)" reviews="(200)" price="$ 43" />
                        <Courseitem imgcourse={coursesweb4} imginstructor={instructor} nameinstructor="Ha Vy" star="(4.8)" reviews="(400)" price="$ 99" />
                    </div>
                    <div className="row">
                        <div className="col-12 text-center mt-3">
                            <a href="courses.html" className="btn btn-theme">tất cả khoá học</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="testimonials-section section-padding position-relative">
                <div className="decoration-circles d-none d-lg-block">
                    <div className="decoration-circles-item"></div>
                    <div className="decoration-circles-item"></div>
                    <div className="decoration-circles-item"></div>
                    <div className="decoration-circles-item"></div>
                </div>
                <div className="decoration-imgs d-none d-lg-block">
                    <img src={testimonial4} alt="decoration img" className="decoration-imgs-item" />
                    <img src={testimonial4} alt="decoration img" className="decoration-imgs-item" />
                    <img src={testimonial4} alt="decoration img" className="decoration-imgs-item" />
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="section-title text-center">
                                <h2 className="title">phản hồi của học viên</h2>
                                <p className="sub-title">Học viên đã từng tham gia</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6">
                            <div className="img-box rounded-circle position-relative">
                                <img src={testimonial4} className="w-100 js-testimonial-img rounded-circle" alt="testimonial img" />
                            </div>
                            <div id="carouselOne" className="carousel slide text-center" data-bs-ride="carousel">
                                <div className="carousel-inner mb-4">
                                    <div className="carousel-item active" data-js-testimonial-img={testimonial1}>
                                        <div className="testimonials-item">
                                            <p className="text-1">Lập trình máy tính hay lập chương trình máy tính thường gọi tắt là lập trình (tiếng Anh: Computer programming, thường gọi tắt là programming) là việc lập ra chương trình làm việc cho máy có bộ xử lý, nói riêng là máy tính, để thực thi nhiệm vụ xử lý thông tin nào đó. </p>
                                            <h3>Quang Vũ</h3>
                                            <p className="text-2">lập trình web</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-js-testimonial-img={testimonial4}>
                                        <div className="testimonials-item">
                                            <p className="text-1">Lập trình máy tính hay lập chương trình máy tính thường gọi tắt là lập trình (tiếng Anh: Computer programming, thường gọi tắt là programming) là việc lập ra chương trình làm việc cho máy có bộ xử lý, nói riêng là máy tính, để thực thi nhiệm vụ xử lý thông tin nào đó. </p>
                                            <h3>Loan Trần</h3>
                                            <p className="text-2">lập trình web</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-js-testimonial-img={testimonial3}>
                                        <div className="testimonials-item">
                                            <p className="text-1">Lập trình máy tính hay lập chương trình máy tính thường gọi tắt là lập trình (tiếng Anh: Computer programming, thường gọi tắt là programming) là việc lập ra chương trình làm việc cho máy có bộ xử lý, nói riêng là máy tính, để thực thi nhiệm vụ xử lý thông tin nào đó. </p>
                                            <h3>Hoàng Lan</h3>
                                            <p className="text-2">lập trình web</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-js-testimonial-img={testimonial4}>
                                        <div className="testimonials-item">
                                            <p className="text-1">Lập trình máy tính hay lập chương trình máy tính thường gọi tắt là lập trình (tiếng Anh: Computer programming, thường gọi tắt là programming) là việc lập ra chương trình làm việc cho máy có bộ xử lý, nói riêng là máy tính, để thực thi nhiệm vụ xử lý thông tin nào đó. </p>
                                            <h3>Phạm Nhật</h3>
                                            <p className="text-2">lập trình web</p>
                                        </div>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselOne" data-bs-slide="prev">
                                    <i className="fas fa-arrow-left"></i>
                                    <span className="visually-hidden"></span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselOne" data-bs-slide="next">
                                    <i className="fas fa-arrow-right"></i>
                                    <span className="visually-hidden"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bai-section section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10">
                            <div className="box">
                                <div className="row align-items-center">
                                    <div className="col-md-6 mb-4 m-md-0">
                                        <div className="circular-img">
                                            <div className="circular-img-inner">
                                                <div className="circular-img-circle"></div>
                                                <img src={teacher} alt="bai img" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="section-title m-0">
                                            <h2 className="title">hợp tác với chúng tôi</h2>
                                            <p className="sub-title">trở thành giảng viên chính thức</p>
                                        </div>
                                        <a href="#" className="btn btn-theme">tham gia</a>
                                    </div>
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
export default Home