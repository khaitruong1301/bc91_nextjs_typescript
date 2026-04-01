"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
type Props = {}

const DemoComponent = (props: Props) => {
    const Router = useRouter();
  return (
    <div>
        <h1>Demo Component</h1>
        <button onClick={() =>{
            Router.push("/admin/user")
        }}>Go to User Management</button>
    </div>
  )
}

export default DemoComponent