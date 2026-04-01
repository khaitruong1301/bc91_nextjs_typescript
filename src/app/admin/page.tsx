import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <header className='bg-dark text-white p-3 mb-4'>
            <h1>Admin Dashboard</h1>
        </header>
        <div className='container'>
            <p>Welcome to the admin dashboard. Here you can manage your application.</p>
        </div>


    </div>
  )
}

export default page