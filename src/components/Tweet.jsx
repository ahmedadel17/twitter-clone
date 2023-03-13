
import React from 'react'
import Avatar from './Avatar'
import Dropdownbtn from './Dropdownbtn'
import {BiWorld} from "react-icons/bi"
import {BsFillPersonPlusFill} from "react-icons/bs";
import Textarea from './Textarea';
import {FaImage,FaPollH} from "react-icons/fa"
import {AiOutlineGif} from "react-icons/ai"
import {BsEmojiSmile} from "react-icons/bs"
// import {GrSchedulePlay} from "react-icons/gr"
import { useState } from 'react';
import posts from '../posts';
function Tweet() {
  const[tweettext,settweet]= useState("")
  
  return (
   <div className='dark:bg-gray-800 bg:gray-50'>
     <div className='flex flex-row '>
      <Avatar src="https://i.pinimg.com/originals/49/3f/a0/493fa0f13970ab3ef29375669f670451.jpg"/>
      <Dropdownbtn item1="Everyone" icon1={<BiWorld size="2rem" color='blue'/>} item2="Twitter Circle " icon2={<BsFillPersonPlusFill size="2rem" color='green'/>} class="ml-5 mt-5"/>
    </div>
    <div className='w-auto '>
    <Textarea onchange={e=>{settweet(e.target.value)}} value={tweettext}/>
    </div>
    <div className='w-auto  ml-16 mr-10 '>
    
   
    <button type="button" class="flex flex-row  text-blue-800  hover:bg-blue-100 border  border-blue-800 focus:outline-1 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm  text-center ml-8  mt-5 px-2 py-1 mb-2 dark:bg-gray-800 dark:text-white dark:hover:bg-blue-700 dark:focus:ring-blue-800"> 
    every one can reply
    </button>
    </div>
    <div className='flex flex-row  w-full   justify-evenly pt-2  mt-2  border-b border-t border-gray-500 dark:bg-gray-800'>
    <span className='px-2 py-2.5'><FaImage size="23px" color='#1c64f2'/></span>
    <span className='px-2 py-2.5'><AiOutlineGif size="23px" color='#1c64f2'/></span>
    <span className='px-2 py-2.5'><FaPollH size="23px" color='#1c64f2'/></span>
    <span className='px-2 py-2.5'><BsEmojiSmile size="23px" color='#1c64f2'/></span>
    {/* <span className='px-2 py-2.5'><GrSchedulePlay size="23px" color='3167df'/></span> */}
    <form >
    <button type="submit"  class="text-white   items-end bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 md:px-5 md:py-2.5 lg:ml-24 md:ml-10  text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
    onClick={(e)=>{
      posts.push(tweettext)
      console.log(posts)
      e.preventDefault()
    }}>Tweet</button>
    </form>

    


    </div>
    </div>
   
  )
}

export default Tweet
 