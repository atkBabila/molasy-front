import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

export const AppLayout = () => {
  return (
    <>
        <header className='max-w-screen-lg mx-auto'>
          <Navbar />
        </header>

        <main className='max-w-screen-lg mx-auto h-screen'>
          <Outlet/>
        </main>
    </>
  )
}
