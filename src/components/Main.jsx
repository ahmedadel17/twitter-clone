import React from 'react'
import Tweet from './Tweet'
import Post from './Post'
import posts from '../posts'
function Main() {
  return (
    <div className='container  lg:w-1/2 lg:ml-64 md:w-full md:ml-20 sm:w-full overflow-x-hidden border'>
   
       <div className='border flex'>

        <h2 className='text-start text-white font-bold text-xl ml-10 mt-5 mb-5'>Home</h2>
       </div>
       <div>
        <Tweet/>
       </div>
       {posts.map(post=> <Post tweet={post.tweet} src={post.Avatar} img={post.src} name={post.name}/>)}
      
    </div>
  )
}

export default Main
