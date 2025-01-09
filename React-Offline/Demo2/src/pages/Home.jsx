import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div>Home</div> <br /> <br />
    <Link to="/About">About</Link> <br /> <br />
    <Link to="/Contact">Contact</Link><br /> <br />
    <Link to="/Product/1">Product 1</Link><br /><br />
    <Link to="/Product/2">Product 2</Link><br /><br />
    <Link to="/Product/3">Product 3</Link><br /><br />
    </>
  )
}

export default Home