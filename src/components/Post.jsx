import React, { useState } from 'react'
import Avatar from './Avatar'
import {AiOutlineHeart} from "react-icons/ai"
import {FaRetweet} from "react-icons/fa"
import {FaRegComment} from "react-icons/fa"
import {IoShareOutline}from "react-icons/io5"
import {RiNumbersFill} from "react-icons/ri"
function Post(props) {
  const [buttoncolor,setbuttoncolor]=useState("#3167df")
 const[count,setcount]=useState(20)
  const handleevent=()=>{
    if(buttoncolor==="#3167df"){
    setbuttoncolor("#e91e63")
    setcount(count+1)
    
    }
    else{
      setbuttoncolor("#3167df")
      setcount(count-1)
     
    }
  }
  return (
    <div className='bg-gray-50 dark:bg-gray-800'>
        
      <div className='flex flex-row'>
        <Avatar src={props.src}/>
        <h4 className='text-gray-800 dark:text-white text-lg mt-8 ml-2'>{props.name}</h4>
      </div> 
      <div>
        <h1 className='text-gray-800  dark:text-white text-lg ml-20 mb-5'> {props.tweet}</h1>
      </div>
    <div className='flex justify-center p-4'>
    <img src={props.img} alt="" className='w-full h-full lg:mx-36 md:mx-28 sm:mx-10 border rounded-lg'/>
    </div>
    <div className='text-gray-800 w-full  py-4 flex flex-row justify-evenly'>
     <div className='flex flex-row justify-evenly'> <AiOutlineHeart color={buttoncolor} size={"2rem"} className="mx-2" onClick={handleevent}/> <h1 className='text-lg dark:text-white'>{count}</h1> </div>
      <FaRetweet color="#3167df" size={"2rem"}  className="mx-2" />
      <FaRegComment color="#3167df" size={"2rem"} className="mx-2" />
      <IoShareOutline color="#3167df" size={"2rem"} className="mx-2" />
      <RiNumbersFill color="#3167df" size={"2rem"} className="ml-2" />




    </div>
    </div>
  )
}

export default Post
