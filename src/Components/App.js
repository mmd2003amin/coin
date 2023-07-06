import { useState } from "react";

import Navbar from "./navbar";
import Menu from "./menu";
import Banner from "./banner";

const App = () => {

  const [openMenu , setOpenMenu] = useState(false);

  return (
    <div dir="rtl">
      <Navbar open={openMenu} setOpen={setOpenMenu}/>
      <Menu open={openMenu} setOpen={setOpenMenu} />
      <Banner />
    </div>
  );
};

export default App;
