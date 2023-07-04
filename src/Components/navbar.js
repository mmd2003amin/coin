import React from 'react';

import { Arrow , Menu , Sun , Moon } from './SVG';
import logo from "../images/logo.jpg";

const Navbar = () => {
    return (
        <div>
            <img src={logo} alt="Logo"/>
            <div>
                <ul>
                    <li>
                        <p>قیمت ارزهای دیجیتال</p>
                        <span><Arrow /></span>
                    </li>
                    <li>
                        <p>خرید و فروش آسان</p>
                    </li>
                    <li>
                        <p>راهنمای استفاده</p>
                        <span><Arrow /></span>
                    </li>
                    <li>
                        <p>کسب درآمد</p>
                    </li>
                    <li>
                        <p>درباره همتاپی</p>
                        <span><Arrow /></span>
                    </li>
                </ul>
            </div>
            <div>
                <span><Menu /></span>
                <p>بلاگ</p>
                <span><Arrow /></span>
                <div>
                    <span><Sun/></span>
                    <span><Moon/></span>
                </div>
            </div>
            <div>
                <div>ورود</div>
                <div>ثبت نام</div>
            </div>
        </div>
    );
};

export default Navbar;