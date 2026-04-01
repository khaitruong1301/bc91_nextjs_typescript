import Link from 'next/link'
import React from 'react'

type Props = {}

const Page = (props: Props) => {
  return (
    <div className='container'>
        <h3>Bấm vào đây để quay về trang chủ 
            <Link className='nav-link d-inline-block mx-2' style={{cursor:"pointer",color:"blue"}} href={"/"}>
          Trang chủ
        </Link></h3>
    </div>
  )
}

export default Page