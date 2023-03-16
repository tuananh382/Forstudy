import React from "react";
import Footer from "./footer";
import Header from "./header";


function Contact() {
    return (
        <>
            <Header />
            <section class="contact-section section-padding">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="section-title">
                                <p class="sub-title">Thông tin liên hệ</p>
                            </div>
                            <div class="contact-items">
                                <div class="contact-item">
                                    <div class="icon-box"><i class="fas fa-map-marker-alt"></i></div>
                                    <h3>Địa chỉ</h3>
                                    <p>Nguyễn Huệ , Quận 1, Tp Hồ Chí Minh</p>
                                </div>
                                <div class="contact-item">
                                    <div class="icon-box"><i class="fas fa-phone"></i></div>
                                    <h3>Đường dây nóng</h3>
                                    <p>0909 8888</p>
                                </div>
                                <div class="contact-item">
                                    <div class="icon-box"><i class="fas fa-envelope"></i></div>
                                    <h3>Địa chỉ Email</h3>
                                    <p>TAShoe@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="contact-form box">
                                <h2 class="form-title text-center">Để lại tin nhắn</h2>
                                <form action="">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Họ và Tên" />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Email" />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Số điện thoại" />
                                    </div>
                                    <div class="form-group">
                                        <textarea class="form-control" placeholder="Tin nhắn"></textarea>
                                    </div>
                                    <button type="submit" class="btn btn-block btn-theme btn-form">Gửi</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Contact