import React from "react";
import Footer from "./footer";
import Header from "./header";


function Login() {
    return (
        <div>
            <Header />
            <section class="login-section section-padding">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-7 col-lg-6 col-xl-5">
                            <div class="login-form box">
                                <h2 class="form-title text-center">Đăng nhập tài khoản</h2>
                                <form action="">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Tên tài khoản" />
                                    </div>
                                    <div class="form-group">
                                        <div class="d-flex mb-2 justify-content-end"><a href="#">Quên mật khẩu ?</a></div>
                                        <input type="password" class="form-control" placeholder="Mật khẩu" />
                                    </div>
                                    <button type="submit" class="btn btn-theme btn-block btn-form">Đăng nhập</button>
                                    <p class="text-center mt-4 mb-0">Chưa có tài khoản ? <a href="sign-up.html">Đăng ký</a></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>

    )
}

export default Login