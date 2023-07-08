import React, { useState } from 'react';

import Card from './card';
import { dataCarts } from './data';

const Cards = () => {
    const [ data , setData ] = useState(dataCarts);

    return (
        <div>
            <h1>پلتفرم حرفه ای خرید و فروش ارز دیجیتال</h1>
            <h5>چرا باید صرافی همتاپی را انتخاب کنیم ؟</h5>
            <div>
                {data.map(item => <Card key={Math.random() * 100} image={item.image} about={item.about} header={item.header}/>)}
            </div>
        </div>
    );
};

export default Cards;