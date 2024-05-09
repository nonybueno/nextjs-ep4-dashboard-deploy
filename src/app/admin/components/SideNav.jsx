import Link from 'next/link'
import React from 'react'


function SideNav() {
  return (
    <nav className='shadow-lg p-10 rounded-lg'>
        <ul>
            <li><Link className='block my-3 p-3 rounded-lg' href="/admin">Dashboard</Link></li>
            <li><Link className='block my-3 p-3 rounded-lg' href="/admin/users">Users</Link></li>
            <li><Link className='block my-3 p-3 rounded-lg' href="/admin/posts">Posts</Link></li>
        </ul>
    </nav>
  )
}

export default SideNav