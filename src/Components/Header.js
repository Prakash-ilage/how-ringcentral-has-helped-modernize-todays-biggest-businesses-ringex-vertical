import React from 'react';
import Logo from '../assets/885ba304-ringcentral-logo-1_10go02i000000000000000.webp'

function Header() {
  return (
    <header>
        <nav className="bg-white mx-40 grid max-w-screen-xl p-4 md:grid-cols-4 lg:gap-8 lg:py-5 xl:gap-0">
          <div className="mx-auto flex p-4 max-w-screen-xl flex-wrap items-center justify-between">
              <img src={Logo} className="-ml-1.5 w-45" alt="Splunk Logo" />
          </div>
        </nav>
        <div className='flex  p-8 bg-sky-600 items-left justify-left'>
          <h1 className="my-2 mx-40 font-bold text-white lg:text-3xl text-center">How RingCentral has helped modernize today’s biggest
          businesses</h1>
        </div>
    </header>
  )
}

export default Header