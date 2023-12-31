import React from 'react';

import logo from "../images/logo-banner.webp"
import { AndroidDark, AndroidLight, IOSDark, IOSLight } from './SVG';

const Banner = ({dark}) => {
    return (
        <div className={`${dark ? "dark" : "text-black" } mt-16 flex 1120:max-w-[85%] 1120:mx-auto`}>

            <div className=" 1120:w-[60%]">
                <h1 className={`${dark ? "dark" : "text-gray-800" } font-vazirExtraBold text-2xl mx-auto mb-8 max-w-[90%] 500:max-w-[50%]
                 1120:max-w-[70%] 500:mr-16 500:ml-0 sm:text-[28px] 1120:text-[35px] leading-relaxed`}>
                    صرافی ارز دیجیتال همتاپی
                    خرید و فروش آسان ارزهای دیجیتال
                </h1>

                <p className="font-vazirRegular text-sm text-gray-500 mx-auto mb-10 max-w-[90%] sm:max-w-[60%]
                 1120:max-w-[70%] sm:mr-16 sm:ml-0 sm:text-[16px] 1120:text-[17px] leading-8">
                    با ثبت نام و احراز هویت آسان در صرافی آنلاین همتاپی لذت خرید و فروش
                    ارزهای دیجیتال را تجربه کنید. سطح متفاوتی از کیفیت خدمات را به سهولت
                    در خدمت گرفته و به کسب سود از فرصت‌های نامحدود دنیای رمزارزها بپردازید.
                </p>

                <div className="grid grid-cols-2 gap-1.5 mx-auto max-w-[90%] buttons-banner sm:max-w-[60%]
                 1120:max-w-[70%] sm:mr-16 sm:ml-0">

                    <div className="start-banner">شروع کنید</div>

                    <div className={`${dark ? "border-white" : "border-slate-900"} app-banner`}>
                        <span className="ml-2">
                            <span className={`${dark ? "flex" : "hidden"}`}><IOSLight /></span>
                            <span className={`${dark ? "hidden" : "flex"}`}><IOSDark /></span>
                        </span>
                        <p>دانلود وب اپلیکیشن IOS</p>
                    </div>

                    <div className={`${dark ? "border-white" : "border-slate-900"} app-banner`}>
                        <span className="ml-2">
                            <span className={`${dark ? "flex" : "hidden"}`}><AndroidLight /></span>
                            <span className={`${dark ? "hidden" : "flex"}`}><AndroidDark /></span>
                        </span>
                        <p>دانلود وب اپلیکیشن Android</p>
                    </div>

                </div>
            </div>

            <div className="hidden 1120:flex w-fuul">
                <img src={logo} alt="logo-banner"/>
            </div>

        </div>
    );
};

export default Banner;