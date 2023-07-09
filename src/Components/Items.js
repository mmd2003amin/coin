import React from 'react';

const Card = ({image , about , header , dark}) => {
    return (
        <div className={`${dark ? "bg-slate-800" : "bg-gray-100"} max-w-fit mx-auto 1120:m-4 rounded-3xl h-fit p-5 mb-7 border border-solid
        border-gray-300 hover:scale-110 duration-500`}>
            <img src={image} alt="image" className="mx-auto w-44 mt-6" />
            <h1 className="text-center font-black text-lg mt-8">{header}</h1>
            <p className="mx-auto mt-5 text-gray-400 font-vazirRegular text-sm text-center mb-6 max-w-[97%]">{about}</p>
        </div>
    );
};


const FooterItems = ({header , item1 , item2 , item3 , item4 , item5 , item6}) => {
    return(
        <div>
            <h1 className="font-vazirExtraBold font-black mb-2.5 1120:mb-5 text-lg 1120:text-[22px]">{header}</h1>
            <ul className="font-vazirRegular text-gray-600 text-sm 1120:text-[16px] footer-items">
                <li>{item1}</li>
                <li>{item2}</li>
                <li>{item3}</li>
                <li>{item4}</li>
                <li>{item5}</li>
                <li>{item6}</li>
            </ul>
        </div>
    );
};

export { Card , FooterItems };