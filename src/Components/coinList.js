import React,{ useEffect , useState } from 'react';

import { API } from './API';

const CoinList = () => {

    const [ coin , setCoin ] = useState([]);
    const [ search , setSearch ] = useState("");
    const [ showAll , setShowAll ] = useState(false);

    useEffect(async () => {
        const getData = await API() ;
        setCoin(getData)
    }, []);

    const searchHandler = (e) => {
        setSearch(e.target.value)
    };

    const searchCoins = coin.filter(item => item.name.toUpperCase().includes(search.toUpperCase()));
    const minPage = searchCoins.slice(0 , 9);

    return (
        <div>
            <input type="text" value={search} onChange={searchHandler} placeholder="جستجو ..."/>

            <div>

                <div>
                    <span>نماد</span>
                    <span>نام ارز</span>
                    <span>آخرین‌قیمت</span>
                    <span>تغییرات روزانه</span>
                </div>

                ‌{coin && showAll ? searchCoins.map(item => 
                    <div key={Math.random() * 100}>
                        <img src={item.image} alt="logo-coin"/>
                        <div>
                            <span>{item.name}</span>
                            <span>{item.symbol}</span>
                        </div>
                        <span>{item.current_price}</span>
                        <span>{item.market_cap_change_percentage_24h.toFixed(2)}</span>
                    </div>     
                ) :  minPage.map(item => 
                    <div key={Math.random() * 100}>
                        <img src={item.image} alt="logo-coin"/>
                        <div>
                            <span>{item.name}</span>
                            <span>{item.symbol}</span>
                        </div>
                        <span>{item.current_price}</span>
                        <span>{item.market_cap_change_percentage_24h.toFixed(2)}</span>
                    </div>     
                )}

            </div>

            <div onClick={() => setShowAll(true)}>مشاهده ارزهای بیشتر</div>
        </div>
    );
};

export default CoinList;