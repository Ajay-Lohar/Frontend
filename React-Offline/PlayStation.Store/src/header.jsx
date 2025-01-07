import React from 'react'
import './index.css'

const Header = () => {
  return (
    <header className="max-auto py-1 text-black flex border-[gray] border-[1px] sm:col-1">
        <div >
            <img className="h-[50px] px-5" src="https://gmedia.playstation.com/is/image/SIEPDC/ps5-black-badge-01-en-11sep20?$400px$" alt="" />
          </div>
          <div className="grow h-14  flex flex-center   justify-center">
            <ul className="style-none gap-5  flex  flex-center  font-bold ">
                <li className="place-content-center"><a href="index.html">PlayStation®5</a></li>
                <li className="place-content-center"><a href="games.html"> Games</a></li>
                <li className="place-content-center"><a href="accessories.html"> Accessories</a></li>
                <li className="place-content-center"><a href="#">Entertainment</a></li>
                <li className="place-content-center"><a href="productPage.html">Product page</a></li>
            </ul>
          </div>
          <div className="  flex flex-center  gap-5 px-5 justify-end ">
            <button className="flex  items-center place-content-center bg-[blue]  m-3 p-1 rounded-[5px] text-white font-bold">Sign In</button>
            <i className="fa-solid fa-magnifying-glass place-content-center"></i>
          </div>
       

    </header>
  )
}

export default Header