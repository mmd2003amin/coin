import React, { useState } from 'react';

import { FooterItems } from './Items';
import { dataFooter } from './data';

const Footer = ({dark}) => {
    const [ data , setData ] = useState(dataFooter);

    return (
        <div className={`${dark ? "bg-slate-800 text-white" : "bg-slate-100 mb-5"} grid grid-cols-1 500:grid-cols-2 
         1120:grid-cols-4 gap-12 mx-auto max-w-[90%] sm:max-w-[80%] rounded-md mt-16 text-center p-5`}>
                {data.map(item => 
                    <FooterItems key={Math.random() * 100} header={item.header} item1={item.item1}
                     item2={item.item2} item3={item.item3} item4={item.item4} item5={item.item5} item6={item.item6}    
                    />
                )}

                <h1 className="font-vazirExtraBold font-black mb-2.5 1120:mb-5 text-lg 1120:text-[20px]">از آخرین اخبار باخبر شوید</h1>
                <div className="max-w-[90%] mx-auto">
                    <input className="text-[11px] md:text-[12px] text-gray-600 w-[70%] h-9 sm:h-10 
                     border-l-0 border-gray-400 border border-solid rounded-s-md outline-none pr-2 
                     placeholder:text-gray-400 font-semibold"
                     type="text" placeholder="آدرس ایمیل ..."/>
                    <button className="rounded-e-md bg-red-500 h-9 sm:h-10 w-[30%] md:w-[25%] outline-none text-white font-normal text-sm">ارسال</button>
                </div>
        </div>
    );
};

export default Footer;