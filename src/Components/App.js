import { useState } from "react";

import Navbar from "./navbar";
import Menu from "./menu";
import Banner from "./banner";
import CoinList from "./coinList";
import Cards from "./cards"

const App = () => {

  const [openMenu , setOpenMenu] = useState(false);

  return (
    <div dir="rtl">
      <Navbar open={openMenu} setOpen={setOpenMenu}/>
      <Menu open={openMenu} setOpen={setOpenMenu} />
      <Banner />
      <CoinList />
      <Cards />
    </div>
  );
};

export default App;
