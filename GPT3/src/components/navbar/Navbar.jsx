import React, {useState} from 'react'
import "./navbar.css"
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import logo from "../../assets/logo.svg"

const Menu=()=>(
  <>
    <p><a href="/home#home">Home</a></p>
    <p><a href="/home#whgpt3">What is GPT3?</a></p>
    <p><a href="/home#possibility">Open AI</a></p>
    <p><a href="/home#features">Case Studies</a></p>
    <p><a href="/home#blog">Library</a></p>
  </>
)

const Navbar = () => {
  const[toggleMenu,setToogleMenu]=useState(false);
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt="logo"/>
        </div>
        <div className='gpt3__navbar-links_container'>
          <Menu/>
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <a href="/signin"><p>Sign in</p></a>
        <a href="/signup"><button type='button'> Sign Up</button></a>
      </div>
      <div className='gpt3__navbar-menu'>
        {
          toggleMenu
          ?<RiCloseLine color="#fff" size={27} onClick={()=> setToogleMenu(false)} />
          :<RiMenu3Line color="#fff" size={27} onClick={()=> setToogleMenu(true)} />
        }
        {
          toggleMenu &&(
            <div className='gpt3__navbar-menu_container scale-up-center'>
              <div className='gpt3__navbar-menu_container-links'>
                <Menu/>
                <div className='gpt3__navbar-menu_container-links-sign'>
                <a href="/signin"><p>Sign in</p></a>
                  <a href="/signup"><button type='button'> Sign Up</button></a>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar 