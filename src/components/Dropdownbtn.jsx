import React from 'react'

function Dropdownbtn(props) {
  return (
    <div className={props.class}>
      
<button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-blue-600 border rounded-full dark:bg-gray-800 dark:text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-4  text-center inline-flex items-center"   type="button">{props.item1} <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
{/* <!-- Dropdown menu --> */}
<div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-72 h-52 dark:bg-gray-800 border ">
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
    <li>
        
        <a href="https://twitter.com/home" className=" px-4 py-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white flex flex-row font-bold text-xl">Choose audience</a>
      </li>
      <li>
        
        <a href="https://twitter.com/home" className=" px-4 py-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white flex flex-row"><span>{props.icon1}</span> <span className='pt-2 pl-2'>{props.item1}</span></a>
      </li>
      <li>
      

        <a href="https://twitter.com/home" className="flex flex-row px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"><span>{props.icon2}</span> <span className='pt-2 pl-2'>{props.item2}   </span></a>
      </li>
     
    </ul>
</div>

    </div>
  )
}

export default Dropdownbtn
