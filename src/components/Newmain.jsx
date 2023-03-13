import React from 'react'
import Tweet from './Tweet'
import Post from './Post'
import posts from '../posts'
function Newmain() {
  return (
    <div>
      <div class="  sm:ml-64 flex-auto dark:bg-gray-800">
   <div class=" border border-gray-500 lg:w-full w-screen md:w-full sm:w-full ">
   <div className='border border-gray-500  flex'>

<h2 className='text-start text-blue-600 font-bold text-xl ml-10 mt-5 mb-5'>Home</h2>
</div>
<div>
<Tweet/>
</div>
{posts.map(post=> <Post tweet={post.tweet} src={post.Avatar} img={post.src} name={post.name}/>)}
   </div>
</div>
    </div>
  )
}

export default Newmain
