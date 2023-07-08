import React, { useState } from 'react';

import { Menu , Sun , Moon } from './SVG';
import logo from "../images/logo.jpg";

const Navbar = ({open , setOpen}) => {

    const [ dark , setDark ] = useState(false);

    return (
        <div className="sticky top-0 z-20 bg-white shadow-xl flex justify-between h-20 font-vazirMedium text-[#777]">

            <div className="flex items-center mr-14">
                <img src={logo} alt="Logo" className="w-24"/>

                <div className="hidden 1120:flex">
                    <ul className="flex items-center justify-between items-navbar after:after-navbar">
                        <li>قیمت ارزهای دیجیتال</li>
                        <li>خرید و فروش آسان</li>
                        <li>راهنمای استفاده</li>
                        <li>کسب درآمد</li>
                        <li>درباره همتاپی</li>
                    </ul>
                </div>
            </div> 

            <div className="flex items-center ml-16 justify-between">
                <div className="flex items-center justify-between">
                    <div className="border border-solid border-gray-200 rounded-full p-2 mr-7 hover:bg-gray-100 transition-all cursor-pointer hidden 1120:flex">
                        <span onClick={() => setDark(true)} className={`${dark ? "hidden" : ""}`}><Sun/></span>
                        <span onClick={() => setDark(false)} className={`${dark ? "" : "hidden"}`}><Moon/></span>
                    </div>
                    <span onClick={() => setOpen(true)} className={`${open ? "translate-x-[-110px] duration-700" : "duration-700"} mr-14 flex 1120:hidden`}><Menu /></span>
                </div>

                <div className="items-center mr-14 buttons-navbar hidden 1120:flex">
                    <div>ورود</div>
                    <div className="bg-blue-500 border-blue-500 text-white">ثبت‌نام</div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;