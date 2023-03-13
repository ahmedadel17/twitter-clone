// import React, { useState } from 'react'

function Textarea(props) {
  
  return (
    <div>
      
<form >
<textarea onChange={props.onchange}
id="message" rows="4" value={props.value} class="block ml-24 w-1/2 text-lg text-gray-900 bg-gray-50 rounded-lg border-black  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:placeholder-gray-400 dark:text-white  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="What's on your mind?"></textarea>

</form>
    </div>
  )
}

export default Textarea
