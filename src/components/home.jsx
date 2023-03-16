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
import coursesweb2 from "../assets/img/courses/web-development/2.jpg"
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
                                <h2 className="mb-3">Cửa hàng cung cấp giày chính hãng</h2>
                                <h1 className="mb-3 text-capitalize">Uy tín chất lượng tạo nên thương hiệu</h1>
                                <p className="mb-4">Giày được sản xuất tại xưởng với quy mô lớn, cung cấp mẫu giày trên toàn thế giới, thương hiệu đến từ Việt Nam chất lượng được kiểm định thế giới tạo nên thương hiệu số 1 Việt Nam, sẵn sàng cạnh tranh với các thương hiệu lớn trên toàn thế giới.</p>
                                <a href="#" className="btn btn-theme">Mua Ngay</a>
                            </div>
                        </div>
                        <div className="col-md-6 order-first order-md-last mb-5 mb-md-0">
                            <div className="banner-img">
                                <div className="circular-img">
                                    <div className="circular-img-inner">
                                        <div className="circular-img-circle"></div>
                                        {/* <img src="img/imgbanner.jpg" alt="banner img"> */}
                                        <img src={coursemusic1} />
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
                                    <p>Khách hàng</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="fun-facts-item">
                                    <h2 className="style-2">500+</h2>
                                    <p>Sản phẩm</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="fun-facts-item">
                                    <h2 className="style-3">50+</h2>
                                    <p>Quốc gia</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="fun-facts-item">
                                    <h2 className="style-4">1000+</h2>
                                    <p>Cửa hàng</p>
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
                                <p className="sub-title">Mẫu giày bán chạy nhất</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <Courseitem imgcourse={coursesweb1} imginstructor={instructor} nameinstructor="Tuan tu" star="(4.9)" reviews="(230)" price="$ 49" title="Nike"/>
                        <Courseitem imgcourse={coursesweb2} imginstructor={instructor} nameinstructor="Xuan Dieu" star="(4.0)" reviews="(130)" price="$ 24" title="Nike"/>
                        <Courseitem imgcourse={coursesweb3} imginstructor={instructor} nameinstructor="Sieu Nhan" star="(4.7)" reviews="(200)" price="$ 43" title="Nike"/>
                        <Courseitem imgcourse={coursesweb1} imginstructor={instructor} nameinstructor="Ha Vy" star="(4.8)" reviews="(400)" price="$ 99" title="Nike"/>
                    </div>
                </div>
            </section>

            <section className="courses-section section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="section-title text-center">
                                
                                <p className="sub-title">Mẫu giày mới ra mắt</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <Courseitem imgcourse={coursesweb1} imginstructor={instructor} nameinstructor="Tuan tu" star="(4.9)" reviews="(230)" price="$ 49" title="Nike"/>
                        <Courseitem imgcourse={coursesweb2} imginstructor={instructor} nameinstructor="Xuan Dieu" star="(4.0)" reviews="(130)" price="$ 24" title="Nike"/>
                        <Courseitem imgcourse={coursesweb3} imginstructor={instructor} nameinstructor="Sieu Nhan" star="(4.7)" reviews="(200)" price="$ 43" title="Nike"/>
                        <Courseitem imgcourse={coursesweb2} imginstructor={instructor} nameinstructor="Ha Vy" star="(4.8)" reviews="(400)" price="$ 99" title="Nike"/>
                    </div>
                </div>
            </section>

            <section className="courses-section section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="section-title text-center">
                                <p className="sub-title">Giảm giá cực sốc</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <Courseitem imgcourse={coursesweb1} imginstructor={instructor} nameinstructor="Tuan tu" star="(4.9)" reviews="(230)" price="$ 34 -> $ 1" title="Nike"/>
                        <Courseitem imgcourse={coursesweb2} imginstructor={instructor} nameinstructor="Xuan Dieu" star="(4.0)" reviews="(130)" price="$ 34 -> $ 1" title="Nike"/>
                        <Courseitem imgcourse={coursesweb3} imginstructor={instructor} nameinstructor="Sieu Nhan" star="(4.7)" reviews="(200)" price="$ 34 -> $ 1" title="Nike"/>
                        <Courseitem imgcourse={coursesweb2} imginstructor={instructor} nameinstructor="Ha Vy" star="(4.8)" reviews="(400)" price="$ 34 -> $ 1" title="Nike"/>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center mt-3">
                            <a href="courses.html" className="btn btn-theme">tất cả sản phẩm</a>
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
                                <h2 className="title">phản hồi của khách hàng</h2>
                                <p className="sub-title">Khách hàng là thành viên của cửa hàng</p>
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
                                            <p className="text-1">Giày Việt Nam chất lượng quốc tế</p>
                                            <h3>Quang Vũ</h3>
                                            <p className="text-2">TA z1</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-js-testimonial-img={testimonial4}>
                                        <div className="testimonials-item">
                                            <p className="text-1">Giày Việt Nam chất lượng quốc tế</p>
                                            <h3>Loan Trần</h3>
                                            <p className="text-2">TA z7</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-js-testimonial-img={testimonial3}>
                                        <div className="testimonials-item">
                                            <p className="text-1">Giày Việt Nam chất lượng quốc tế</p>
                                            <h3>Hoàng Lan</h3>
                                            <p className="text-2">Shat S1</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-js-testimonial-img={testimonial4}>
                                        <div className="testimonials-item">
                                            <p className="text-1">Giày Việt Nam chất lượng quốc tế</p>
                                            <h3>Phạm Nhật</h3>
                                            <p className="text-2">Shat 02</p>
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
                                            <p className="sub-title">Trở thành chi nhánh phân phối chính thức của hãng giày TAS</p>
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