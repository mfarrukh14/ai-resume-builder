import Header from '@/components/custom/Header'
import { UserButton, useUser } from '@clerk/clerk-react'
import React from 'react'

function Home() {
  return (
    <div>
      <Header />
      Landing Page
    </div>
  )
}

export default Home