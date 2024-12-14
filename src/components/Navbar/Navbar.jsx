import React, { useRef, useState } from 'react'
import logo from '../../assets/images/logo.png'
import { NavLink , Link  } from "react-router-dom";
import search_icon from '../../assets/images/search_icon.png'
import menu_icon from '../../assets/images/menu_icon.png'
import close_icon  from '../../assets/images/cross_icon.png'
import profile from '../../assets/images/profile_icon.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import '../Navbar/Navbar.css'




function Navbar({line , useline}) {

  // const [line , useline] = useState('#home')

  const menuref = useRef()

const open_menu = ()=>{
  menuref.current.style.right = '0'
}
const close_menu = ()=>{
  menuref.current.style.right = '-450px'
}

const [search_line , setsearch] = useState(false)
const [proflie_line , setproflie] = useState(false)



  return (
    
    <div className='navbar z-[10]' >
      <div className='icon'>
            <img src={menu_icon} alt="" className='menu' onClick={()=>{open_menu();setsearch(false);setproflie(false)} } />
            <div className='search'>
            <img src={search_icon} alt="" onClick={() => {setsearch(!search_line);setproflie(false)}} />
            {search_line && (
              <div className="input-container">
                <img src={search_icon} alt="search icon" className="input-icon" />
                <input type="text" placeholder='ابحث عن المؤتمر الذي تريده' />
              </div>
            )}
          </div>

          <div className="profile">
          <img src={profile} alt="" onClick={()=>{setproflie(!proflie_line) ; setsearch(false)}} />
            {proflie_line &&(<div className="dropdown-content">
                <p>حسابي</p>
                <p>المؤتمرات المشارك فيها</p>
                <p>تسجيل الخروج</p>
            </div>)}
        </div>
          </div>
      <nav ref={menuref} >
                <img src={close_icon} alt=""  onClick={close_menu}/>
                <AnchorLink href="#home" onClick={()=>useline('#home') } className={line ==='#home' ? 'active':''}>الصفحة الرئيسية
                </AnchorLink>
                <AnchorLink href="#about"  onClick={()=>useline('#about') } className={line ==='#about' ? 'active':''}>تعرف علينا
                </AnchorLink>
                <AnchorLink href="#menu"  onClick={()=>useline('#menu')} className={line ==='#menu' ? 'active':''}>القائمة
                </AnchorLink>
                <AnchorLink href="#contact"  onClick={()=>useline('#contact') }className={line ==='#contact' ? 'active':''}>تواصل معنا
                </AnchorLink>
          </nav>
          
          <AnchorLink href='#home' onClick={()=>useline('#home') }className={line ==='#home' ? 'active':''}><img src={logo} alt="" /></AnchorLink>

        
    </div>
  )
}

export default Navbar
