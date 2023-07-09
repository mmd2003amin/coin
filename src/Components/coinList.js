import React,{ useEffect , useState } from 'react';

import { API } from './API';

const CoinList = ({dark}) => {

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
    const minPage = searchCoins.slice(0 , 6);

    return (
        <div className={`${dark ? "dark" : "text-slate-900"} mt-20 sm:mt-36 font-vazirMedium text-sm`}>

            {/* Search */}
            <div className="max-w-[80%] 500:max-w-[60%] 1120:max-w-[50%] mx-auto">
                <input type="text" value={search} onChange={searchHandler} placeholder="جستجو ..." 
                 className={`${dark ? "bg-slate-800 text-white placeholder:text-slate-200" : "bg-slate-200 placeholder:text-slate-900"} w-full
                 outline-none h-12 500:h-14 1120:h-16 pr-2 rounded-lg 1120:text-[16px]`}/>
            </div>

            {/* ListCoin */}
            <div className="border border-solid border-gray-200 rounded-lg p-2.5 max-w-[90%] sm:max-w-[70%]
             shadow-xl mx-auto mt-10">

                <div className={`${dark ? "bg-slate-800" : "bg-slate-100"} hidden 1120:flex justify-between text-[16px] about-list-coin rounded-md
                 m-3 p-5`}>
                    <span>نماد</span>
                    <span>نام ارز</span>
                    <span>آخرین‌قیمت</span>
                    <span>تغییرات روزانه</span>
                </div>

                ‌{coin && showAll ? 
                    searchCoins.map(item => 
                        <div key={Math.random() * 100} className={`${dark ? "bg-slate-900 shadow-xl" : "bg-slate-100 1120:bg-white"} list-coin`}>
                            <img src={item.image} alt="logo-coin" className="w-12 sm:w-14"/>
                            <div className="flex items-center">
                                <span className="hidden sm:flex sm:text-sm text-gray-500 ml-4">{item.symbol}</span>
                                <span className="sm:text-[15px] 1120:text-[17px]">{item.name}</span>
                            </div>
                            <span className="text-gray-400 sm:text-[15px]">$  {item.current_price}</span>
                            <span className={`${item.market_cap_change_percentage_24h >= 0 ? "Positive" : "negative"}`} dir="ltr">
                                {item.market_cap_change_percentage_24h.toFixed(2)}
                            </span>
                        </div>     
                ) 
                :  
                    minPage.map(item => 
                        <div key={Math.random() * 100} className={`${dark ? "bg-slate-900 shadow-xl" : "bg-slate-100 1120:bg-white"} list-coin`}>
                            <img src={item.image} alt="logo-coin" className="w-12 sm:w-14" />
                            <div className="flex items-center">
                                <span className="hidden sm:flex sm:text-sm text-gray-500 ml-4">{item.symbol}</span>
                                <span className="sm:text-[15px] 1120:text-[17px]">{item.name}</span>
                            </div>
                            <span className="text-gray-400 sm:text-[15px]">$  {item.current_price}</span>
                            <span className={`${item.market_cap_change_percentage_24h >= 0 ? "Positive" : "negative"}`} dir="ltr">
                                {item.market_cap_change_percentage_24h.toFixed(2)}
                            </span>
                        </div>     
                )}

            </div>

            {/* ShowAllBotton */}
            <div onClick={() => setShowAll(!showAll)} className={`${showAll ? "bg-red-500 hover:bg-red-600" : "bg-blue-500 hover:bg-blue-600"} max-w-[80%] 500:max-w-[50%] 1120:max-w-[20%] cursor-pointer
             font-vazirMedium text-white 1120:text-[16px] h-14 rounded-lg flex justify-center items-center mx-auto mt-10 mb-5 transition-all`}>
                <p className={`${showAll ? "hidden" : "flex"}`}>مشاهده ارزهای بیشتر</p>
                <p className={`${showAll ? "flex" : "hidden"}`}>بستن</p>
            </div>
        </div>
    );
};

export default CoinList;