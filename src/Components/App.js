import { useState } from "react";

import Navbar from "./navbar";
import Menu from "./menu";
import Banner from "./banner";
import CoinList from "./coinList";
import Cards from "./cards"
import Footer from "./footer";

const App = () => {

  const [openMenu , setOpenMenu] = useState(false);
  const [ dark , setDark ] = useState(false);

  return (
    <div dir="rtl" className={`${dark ? "dark" : ""}`}>
      <Navbar open={openMenu} setOpen={setOpenMenu} dark={dark} setDark={setDark}/>
      <Menu open={openMenu} setOpen={setOpenMenu} dark={dark} setDark={setDark}/>
      <Banner dark={dark} />
      <CoinList dark={dark} />
      <Cards dark={dark} />
      <Footer dark={dark} />
    </div>
  );
};

export default App;
