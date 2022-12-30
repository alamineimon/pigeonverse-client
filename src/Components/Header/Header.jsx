import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="hero h-[480px]" style={{ backgroundImage: `url("https://i.ibb.co/z8B2Gt1/20210929-homepage-header-staff-shortage-V11.webp")` }}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className=" px-32">
        <h1 className="mb-5 text-5xl font-bold uppercase">Pigeon Verse</h1>
        <p className="mb-5">A social networking service or SNS is an online platform which people use to build social networks or <br /> social relationships with other people who share similar personal or career content, interests, <br /> activities, backgrounds or real-life connections.</p>
        <Link to='/createpost' className="bg-white  border uppercase text-blue-400 font-semibold py-2 px-6 text-center hover:text-white hover:bg-blue-400 hover:border-blue-400">Getting Start</Link>
      </div>
    </div>
  </div>
  )
}

export default Header