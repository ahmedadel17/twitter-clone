import React from 'react'
import {SiTwitter} from "react-icons/si" 
import {BiHomeCircle} from "react-icons/bi"
import {CiHashtag} from "react-icons/ci"
import{HiOutlineBell} from "react-icons/hi"
import {BsEnvelope,BsBookmark} from "react-icons/bs"
import{FaRegListAlt} from "react-icons/fa"
import {MdPersonOutline} from "react-icons/md"
import {CgMoreO} from "react-icons/cg"
import Sidebaritem from './Sidebaritem';
import{CiDark} from "react-icons/ci"
import { useState } from 'react'
import { useEffect } from 'react'
function Sidebar() {
  const [theme,settheme]=useState("light");
  useEffect(()=>{
    if(theme==="dark"){
      document.documentElement.classList.add("dark")
    }
    else{
      document.documentElement.classList.remove("dark")

    }
  },[theme])

  const handletheme=()=>{
    settheme(theme==="dark"?"light":"dark");
  }
  return (
  <div className='container mx-auto'>


<button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span class="sr-only">Open sidebar</span>
   <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="sidebar-multi-level-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 opacity-90 dark:opacity-100">
   <h3><SiTwitter size="2rem" color='#1a56db'/></h3>
   <button type="button" data-drawer-hide="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" class=" lg:hidden md:hidden sm:hidden text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        <span class="sr-only">Close menu</span>
    </button>
   <ul class="space-y-2">
   <div className="relative my-4 lg:hidden ">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        
        <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search twitter" required/>
    </div>
        <Sidebaritem name="Home" icon={<BiHomeCircle size="2rem" color='#1a56db'/>}/>
        <Sidebaritem name="explore" icon={<CiHashtag size="2rem" color='#1a56db'/>}/>
        <Sidebaritem name="Notification" icon={<HiOutlineBell size="2rem" color='#1a56db'/>}/>
        <Sidebaritem name="Messages" icon={<BsEnvelope size="2rem" color='#1a56db'/>}/>
        <Sidebaritem name="Bookmarks" icon={<BsBookmark size="2rem" color='#1a56db'/>}/>
        <Sidebaritem name="Lists" icon={<FaRegListAlt size="2rem" color='#1a56db'/>}/>
        <Sidebaritem name="Profile" icon={<MdPersonOutline size="2rem" color='#1a56db'/>}/>
        <Sidebaritem name="More" icon={<CgMoreO size="2rem" color='#1a56db'/>}/>
        <Sidebaritem name="Darkmode" icon={<CiDark size="2rem" color='#1a56db'/>} onClick={handletheme}/>


      </ul>
      <button type="button" class="text-white mt-10 bg-blue-700 w-56 h-14 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold rounded-full text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">tweet</button>

   </div>
</aside>





    </div>
  )
}

export default Sidebar

