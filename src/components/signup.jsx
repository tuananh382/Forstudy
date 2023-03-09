import React from "react";
import Footer from "./footer";
import Header from "./header";

function Signup() {
    return (
        <div>
            <Header />
            <section class="signup section-padding">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-7 col-lg-6 col-xl-5">
                            <div class="signup-form box">
                                <h2 class="form-title text-center"> Tạo tài khoản</h2>
                                <form action="">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Họ và tên" />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Email" />
                                    </div>
                                    <div class="form-group">
                                        <input type="password" class="form-control" placeholder="Mật khẩu" />
                                    </div>
                                    <button type="submit" class="btn btn-block btn-theme btn-form">Đăng ký</button>
                                    <p class="text-center mt-4 mb-0">Bạn đã có tài khoản ? <a href="log-in.html">Đăng nhập</a></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <Footer />
        </div >
    )
}

export default Signup