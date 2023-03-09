import React from "react";


function Header () {
    return (
        <header className="header">
                <div className="container">
                    <div className="header-main d-flex justify-content-between align-items-center">
                        <div className="header-logo">
                            <a href="/"><span>ForStudy</span></a>
                        </div>
                        <button type="button" className="header-hamburger-btn js-header-menu-toggler">
                            <span></span>
                        </button>
                        <div className="header-backdrop js-header-backdrop"></div>
                        <nav className="header-menu js-header-menu">
                            <button type="button" className="header-close-btn js-header-menu-toggler">
                                <i className="fas fa-times"></i>
                            </button>
                            <ul className="menu">
                                <li className="menu-item"><a href="/">trang chủ</a></li>
                                <li className="menu-item "><a href="course">khoá học</a></li>
                                <li className="menu-item menu-item-has-children">
                                    <a href="#" className="js-toggle-sub-menu">tài khoản<i className="fas fa-chevron-down"></i></a>
                                    <ul className="sub-menu js-sub-menu">
                                        <li className="sub-menu-item"><a href="login">đăng nhập</a></li>
                                        <li className="sub-menu-item"><a href="signup">đăng ký</a></li>
                                    </ul>
                                </li>
                                <li className="menu-item"><a href="contact">kết nối</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
    )
}

export default Header