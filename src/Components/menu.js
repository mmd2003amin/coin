import { CloseDark , Sun , Moon, CloseLight} from "./SVG";

const Menu = ({open ,setOpen , dark , setDark}) => {

    return (
        <div className={`${dark ? "dark" : "bg-white"} ${open ? "block translate-x-0 duration-700" : "translate-x-[850px] duration-700"} font-vazirMedium w-1/2 shadow-xl fixed z-40 top-0 1120:hidden`}>

            <span onClick={() => setOpen(false)} className="absolute top-5 left-5">
                <span className={`${dark ? "flex" : "hidden"}`}><CloseLight /></span>
                <span className={`${dark ? "hidden" : "flex"}`}><CloseDark /></span>
            </span>

            <ul className={`${dark ? "text-white" : "text-[#777]"} items-navbar hover:text-[#222] cursor-pointer transition-all mt-14 mr-5 menu-items`}>
                <li>قیمت ارزهای دیجیتال</li>
                <li>خرید و فروش آسان</li>
                <li>راهنمای استفاده</li>
                <li>کسب درآمد</li>
                <li>درباره همتاپی</li>
            </ul>

            <div className={`${dark ? "hover:bg-black" : "hover:bg-gray-100"} border border-solid
             border-gray-200 rounded-full p-2 hover:bg-gray-100 transition-all cursor-pointer w-fit mt-3 mx-auto`}>
                <span onClick={() => setDark(true)} className={`${dark ? "hidden" : ""}`}><Sun /></span>
                <span onClick={() => setDark(false)} className={`${dark ? "" : "hidden"}`}><Moon/></span>
            </div>

            <div className="500:flex items-center justify-center mt-6 mb-5 buttons-navbar">
                <div className="mx-auto 500:mx-0">ورود</div>
                <div className="bg-blue-500 border-blue-500 text-white mx-auto 500:mx-0 mt-2 500:mt-0">ثبت‌نام</div>
            </div>
            
        </div>
    );
};

export default Menu;