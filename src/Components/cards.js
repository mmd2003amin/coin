import React, { useState } from 'react';

import { Card }from './Items';
import { dataCarts } from './data';

const Cards = ({dark}) => {
    const [ data , setData ] = useState(dataCarts);

    return (
        <div className={`${dark && "dark"} mt-32 mb-10 max-w-[90%] sm:max-w-[70%] 1120:max-w-[85%] mx-auto font-vazirMedium`}>
            <h1 className="text-center mb-7 text-[22px] 1120:text-[26px] font-black">پلتفرم حرفه ای خرید و فروش ارز دیجیتال</h1>
            <h5 className="text-center mb-14 text-sm 1120:text-lg text-gray-500 font-vazirRegular">چرا باید صرافی همتاپی را انتخاب کنیم ؟</h5>
            <div className="1120:flex">
                {data.map(item => <Card key={Math.random() * 100} image={item.image} dark={dark} about={item.about} header={item.header}/>)}
            </div>
        </div>
    );
};

export default Cards;