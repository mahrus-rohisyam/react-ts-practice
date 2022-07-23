import React from 'react'
import { Logo } from '../../assets'

const CHeader: React.FC = () => {
  
  return (
    <header>
        <nav className='flex items-center justify-center md:px-6 md:justify-between glass'>
          <a className='items-center' href="/"><img className='w-[50px]' src={Logo} alt="" /></a>
          <ul className='flex'>
            <li className='list-none'><a className='block p-3 hover:bg-orange-400 no-underline' href="#main-content">Home</a></li>
            <li className='list-none'><a className='block p-3 hover:bg-orange-400 no-underline' href="#about">About</a></li>
            <li className='list-none'><a className='block p-3 hover:bg-orange-400 no-underline' href="#contact">Contact</a></li>
            <li className='list-none'><a className='block p-3 hover:bg-orange-400 no-underline' href="/todos">Todo List</a></li>
          </ul>
        </nav>
    </header>
  )
}

export default CHeader