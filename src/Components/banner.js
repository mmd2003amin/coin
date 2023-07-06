import React from 'react';

import logo from "../images/logo-banner.webp"
import { Android, IOS } from './SVG';

const Banner = () => {
    return (
        <div>

            <div>
                <h1>
                    صرافی ارز دیجیتال همتاپی
                    خرید و فروش آسان ارزهای دیجیتال
                </h1>

                <p>
                    با ثبت نام و احراز هویت آسان در صرافی آنلاین همتاپی لذت خرید و فروش
                    ارزهای دیجیتال را تجربه کنید. سطح متفاوتی از کیفیت خدمات را به سهولت
                    در خدمت گرفته و به کسب سود از فرصت‌های نامحدود دنیای رمزارزها بپردازید.
                </p>

                <div>

                    <div>شروع کنید</div>

                    <div>
                        <span><IOS /></span>
                        <p>دانلود وب اپلیکیشن IOS</p>
                    </div>

                    <div>
                        <span><Android /></span>
                        <p>دانلود وب اپلیکیشن Android</p>
                    </div>

                </div>
            </div>

            <div>
                <img src={logo} alt="logo-banner"/>
            </div>

        </div>
    );
};

export default Banner;