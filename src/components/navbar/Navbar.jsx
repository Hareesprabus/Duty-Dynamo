import React, { useEffect, useState } from 'react'
//import { Link } from "react-router-dom";
import './Navbar.scss';
const Navbar = () => {

  const [active,setActive] = useState(false)

  const isActive = ()=> {
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }
  
  useEffect(()=>{
    window.addEventListener("scroll", isActive);

    return ()=>{
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser= {
    id:1,
    username:"John Doe",
    isSeller:true
  }

  return (
    <div className={active ? "navbar active": "navbar"}>
      <div className='container'>
        <div className='logo'>
          {/*<link to="/" className="link">*/}
            <span className="text">Worklance</span>
           {/*</link>*/}
        </div>
        <div className='links'>
          <span>Worklance Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {!currentUser && <button>Join</button>}
          {currentUser && (
            <div className="user" onClick={()=>setOpen(!open)}>
              <img src="data:image/png;base64,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" alt="" />
              <span>{currentUser?.username}</span>
              {open && <div className="options">
                {currentUser?.isSeller && (
                  <>
                  <span>Gigs</span>
                  <span>Add New Gigs</span>
                  </>
                )}
                <span>Order</span>
                <span>Messages</span>
                <span>Logout</span>
              </div>}
            </div>
          )}
        </div>
        </div>
        {active && (
          <>
        <hr/>
        <div className="menu">
          <span>Test</span>
          <span>Test2</span>
      </div>
      </>
        )}
    </div>
  )
}

export default Navbar