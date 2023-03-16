import React from "react";


function Footer () {
    return (
        <footer className="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-lg-3">
                                <div className="footer-item">
                                    <h3 className="footer-logo"><span>DATH</span>Study</h3>
                                    <ul>
                                        <li><a href="#">thông tin</a></li>
                                        <li><a href="#">chính sách</a></li>
                                        <li><a href="#">tuyển dụng</a></li>
                                        <li><a href="#">giấy chứng nhận</a></li>
                                        <li><a href="#">trang chia sẻ</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="footer-item">
                                    <h3>Sản phẩm</h3>
                                    <ul>
                                        <li><a href="#">đóng góp</a></li>
                                        <li><a href="#">chứng thực</a></li>

                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="footer-item">
                                    <h3>Khác</h3>
                                    <ul>
                                        <li><a href="#">quảng cáo</a></li>
                                        <li><a href="#">hỗ trợ</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="footer-item">
                                    <h3>liên kết</h3>
                                    <ul>
                                        <li><a href="#"><i className="fab fa-facebook social-icon"></i> facebook</a></li>
                                        <li><a href="#"><i className="fab fa-twitter social-icon"></i> twitter</a></li>
                                        <li><a href="#"><i className="fab fa-instagram social-icon"></i> instagram</a></li>
                                        <li><a href="#"><i className="fab fa-youtube social-icon"></i> youtube</a></li>
                                        <li><a href="#"><i className="fab fa-tiktok social-icon"></i> tiktok</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <p className="m-0 py-4 text-center">TAS</p>
                    </div>
                </div>
            </footer>
    )
}

export default Footer