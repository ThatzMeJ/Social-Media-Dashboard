import { useState } from "react";
import { Twirl as Hamburger, Twirl } from 'hamburger-react'


const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="visible md:hidden"> 
      <Twirl toggled={open} size={20} toggle={setOpen}/>
    </div>
  )
}

export default MobileNav
