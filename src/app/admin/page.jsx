"use client"

import React, { useState, useEffect } from 'react'
import AdminNav from './components/AdminNav'
import Footer from './components/Footer'
import Container from './components/Container'
import SideNav from './components/SideNav'
import Content from './components/Content'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

function AdminPage() {

    const { data: session } = useSession()
    if(!session) redirect("/login")
    if(!session?.user?.role === 'admin') redirect("/welcome")

    const [totalUsersData,setTotalUsersData] = useState([])
    const [totalPostsData,setTotalPostsData] = useState([])

    console.log(totalUsersData);

    const getTotalUsers = async () => {
        try{

            const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/totalusers`, {
                cache: "no-store"
            })

            if(!res.ok){
                throw new Error("Failed to fetch user")
            }

            const data = await res.json()
            setTotalUsersData(data.totalUsers)

        }catch(err){
            console.log(err);
        }
    }

    const getTotalPosts = async () => {
        try{

            const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/totalposts`, {
                cache: "no-store"
            })

            if(!res.ok){
                throw new Error("Failed to fetch posts")
            }

            const data = await res.json()
            setTotalPostsData(data.totalPosts)

        }catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        getTotalUsers()
        getTotalPosts()
    },[])

  return (
    <Container>
        <AdminNav session={session}/>
            <div className='flex-grow'>
                <div className='container mx-auto'>
                    <div className='flex justify-between mt-10'>
                        <SideNav/>
                        <Content totalUsersData={totalUsersData} totalPostsData={totalPostsData}/>
                    </div>
                </div>
            </div>
        <Footer/>
    </Container>
  )
}

export default AdminPage