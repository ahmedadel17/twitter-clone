import React from 'react'

function Sidebaritem(props) {
  return (
    <div onClick={props.onClick}>
      <li>
            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <h3>{props.icon}</h3>
               <span class="ml-3">{props.name}</span>
            </a>
         </li>
    </div>
  )
}

export default Sidebaritem
