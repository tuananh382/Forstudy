import React from "react";
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
import Header from "./header";
import Footer from "./footer";

function Course(props) {
    return (
        <div className="courses">
            <Header/>
            <section class="courses-section section-padding">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-8">
                            <div class="section-title text-center mb-4">
                                <h2 class="title">Khoá học của chúng tôi</h2>
                                <p class="sub-title">Tìm khóa học phù hợp với bạn</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <nav>
                                <div class="nav nav-tabs border-0 justify-content-center mb-4" id="nav-tab" role="tablist">
                                    <button class="nav-link active" id="web-development-tab" data-bs-toggle="tab" data-bs-target="#web-development" type="button" role="tab" aria-controls="web-development" aria-selected="true">Lập trình web</button>
                                    <button class="nav-link" id="health-tab" data-bs-toggle="tab" data-bs-target="#health" type="button" role="tab" aria-controls="health" aria-selected="false">Lập trình ứng dụng</button>
                                    <button class="nav-link" id="music-tab" data-bs-toggle="tab" data-bs-target="#music" type="button" role="tab" aria-controls="music" aria-selected="false">Trí tuệ nhân tạo</button>
                                </div>
                            </nav>
                            <div class="tab-content" id="nav-tabContent">
                                <div class="tab-pane fade show active" id="web-development" role="tabpanel" aria-labelledby="web-development-tab">
                                    <div class="row justify-content-left">
                                        <Courseitem imgcourse={coursesweb1} imginstructor={instructor} nameinstructor="Tuan tu" star="(4.9)" reviews="(230)" price="$ 49" />
                                        <Courseitem imgcourse={coursesweb2} imginstructor={instructor} nameinstructor="Xuan Dieu" star="(4.0)" reviews="(130)" price="$ 24" />
                                        <Courseitem imgcourse={coursesweb3} imginstructor={instructor} nameinstructor="Sieu Nhan" star="(4.7)" reviews="(200)" price="$ 43" />
                                        <Courseitem imgcourse={coursesweb4} imginstructor={instructor} nameinstructor="Ha Vy" star="(4.8)" reviews="(400)" price="$ 99" />
                                        <Courseitem imgcourse={coursesweb1} imginstructor={instructor} nameinstructor="Tuan tu" star="(4.9)" reviews="(230)" price="$ 49" />
                                        <Courseitem imgcourse={coursesweb2} imginstructor={instructor} nameinstructor="Xuan Dieu" star="(4.0)" reviews="(130)" price="$ 24" />
                                        <Courseitem imgcourse={coursesweb3} imginstructor={instructor} nameinstructor="Sieu Nhan" star="(4.7)" reviews="(200)" price="$ 43" />
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="health" role="tabpanel" aria-labelledby="health-tab">
                                    <div class="row justify-content-left">
                                        <Courseitem imgcourse={coursesweb1} imginstructor={instructor} nameinstructor="Tuan tu" star="(4.9)" reviews="(230)" price="$ 49" />
                                        <Courseitem imgcourse={coursesweb2} imginstructor={instructor} nameinstructor="Xuan Dieu" star="(4.0)" reviews="(130)" price="$ 24" />
                                        <Courseitem imgcourse={coursesweb3} imginstructor={instructor} nameinstructor="Sieu Nhan" star="(4.7)" reviews="(200)" price="$ 43" />
                                        <Courseitem imgcourse={coursesweb4} imginstructor={instructor} nameinstructor="Ha Vy" star="(4.8)" reviews="(400)" price="$ 99" />
                                        <Courseitem imgcourse={coursesweb1} imginstructor={instructor} nameinstructor="Tuan tu" star="(4.9)" reviews="(230)" price="$ 49" />
                                        <Courseitem imgcourse={coursesweb2} imginstructor={instructor} nameinstructor="Xuan Dieu" star="(4.0)" reviews="(130)" price="$ 24" />
                   
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="music" role="tabpanel" aria-labelledby="music-tab">
                                    <div class="row justify-content-left">
                                        <Courseitem imgcourse={coursesweb1} imginstructor={instructor} nameinstructor="Tuan tu" star="(4.9)" reviews="(230)" price="$ 49" />
                                        <Courseitem imgcourse={coursesweb2} imginstructor={instructor} nameinstructor="Xuan Dieu" star="(4.0)" reviews="(130)" price="$ 24" />
                                        <Courseitem imgcourse={coursesweb3} imginstructor={instructor} nameinstructor="Sieu Nhan" star="(4.7)" reviews="(200)" price="$ 43" />
                                        <Courseitem imgcourse={coursesweb4} imginstructor={instructor} nameinstructor="Ha Vy" star="(4.8)" reviews="(400)" price="$ 99" />
                                        <Courseitem imgcourse={coursesweb1} imginstructor={instructor} nameinstructor="Tuan tu" star="(4.9)" reviews="(230)" price="$ 49" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 mt-3">

                            <nav aria-label="Page navigation">
                                <ul class="pagination justify-content-center">
                                    <li class="page-item">
                                        <a class="page-link" href="#" aria-label="Previous">
                                            <i class="fas fa-chevron-left"></i>
                                        </a>
                                    </li>
                                    <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item"><a class="page-link" href="#">4</a></li>
                                    <li class="page-item disabled"><a class="page-link" href="#">...</a></li>
                                    <li class="page-item"><a class="page-link" href="#">40</a></li>
                                    <li class="page-item">
                                        <a class="page-link" href="#" aria-label="Next">
                                            <i class="fas fa-chevron-right"></i>
                                        </a>
                                    </li>
                                </ul>
                            </nav>

                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Course