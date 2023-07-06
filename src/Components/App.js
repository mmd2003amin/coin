import { useState } from "react";
import Navbar from "./navbar";
import Menu from "./menu";

const App = () => {

  const [openMenu , setOpenMenu] = useState(false);

  return (
    <div dir="rtl">
      <Navbar open={openMenu} setOpen={setOpenMenu}/>
      <Menu open={openMenu} setOpen={setOpenMenu} />
    </div>
  );
};

export default App;
