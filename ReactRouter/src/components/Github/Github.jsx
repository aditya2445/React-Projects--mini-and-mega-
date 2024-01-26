import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data=useLoaderData()
    // const [data,setData]=useState([])

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(r=>r.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])

  return (
    <div className='text-center m-4 text-white p-4 text-3xl rounded-3xl bg-gray-800'>
      GitHub Followers:{data.followers}
      <img  className=" rounded-3xl" src={data.avatar_url} alt="Git Picture" width={300} />
    </div>
  )
}

export default Github

export const githubinfoloader= async()=>{
    const response=await fetch('https://api.github.com/users/aditya2445')
    return response.json()
}