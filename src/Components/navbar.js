import { MenuLight , MenuDark , Sun , Moon , BitcoinDark , BitcoinLight } from './SVG';

const Navbar = ({open , setOpen , dark , setDark}) => {

    return (
        <div className={`${dark ? "dark " : "bg-white text-[#777]"} sticky top-0 z-20 shadow-2xl flex justify-between h-20 font-vazirMedium`}>

            <div className="flex items-center mr-14">
                <span className={`${dark ? "flex" : "hidden"} 1120:ml-5`}><BitcoinDark /></span>
                <span className={`${dark ? "hidden" : "flex"} 1120:ml-5`}><BitcoinLight /></span>

                <div className="hidden 1120:flex">
                    <ul className={`${dark ? "hover:text-whait" : "hover:text-[#222]"} flex items-center
                     justify-between items-navbar after:after-navbar`}>
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
                    <div className={`${dark ? "hover:bg-black" : "hover:bg-gray-100"} border border-solid
                     border-gray-200 rounded-full p-2 mr-7transition-all cursor-pointer hidden 1120:flex`}>
                        <span onClick={() => setDark(true)} className={`${dark ? "hidden" : ""}`}><Sun/></span>
                        <span onClick={() => setDark(false)} className={`${dark ? "" : "hidden"}`}><Moon/></span>
                    </div>
                    <span onClick={() => setOpen(true)} className={`${open ? "translate-x-[-110px] duration-700" : "duration-700"} mr-14 flex 1120:hidden`}>
                        <span className={`${dark ? "flex" : "hidden"}`}><MenuLight /></span>
                        <span className={`${dark ? "hidden" : "flex"}`}><MenuDark /></span>
                    </span>
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