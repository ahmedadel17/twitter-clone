import React from 'react'

function Search() {
  return (
    <div className='  lg:w-1/4 md:w-1/4 sm:w-0 lg:block md:hidden sm:hidden hidden relative dark:bg-gray-800'>
    <div className='fixed '>
    <div className='lg:mx-16 pt-5 md:mx-10 sm:mx-5 '>

<form>   
<label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
<div className="relative">
 <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
     <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
 </div>
 <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search twitter" required/>
</div>
</form>

</div>

<div class="mx-16 mt-10 h-96 text-gray-900 bg-white border border-gray-200 rounded-2xl  dark:bg-gray-800 dark:border-gray-600 dark:text-white">
<h3 className='text-lg text-white font-bold ml-4 mt-4'> What's happening?</h3>
<button type="button" class="relative inline-flex items-center w-full px-4 py-4 text-lg  font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
 #hello world
</button>
<button type="button" class="relative inline-flex items-center w-full px-4 py-4 text-lg  font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
#Mbappe get injured
</button>
<button type="button" class="relative inline-flex items-center w-full px-4 py-4 text-lg font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
#CNN News
</button>
<button type="button" class="relative inline-flex items-center w-full px-4 py-4 text-lg  font-medium rounded-b-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
#Mosalah become A legend       
</button>
</div>
<div class="mx-16 mt-10 h-96 text-gray-900 bg-white border border-gray-200 rounded-2xl  dark:bg-gray-800 dark:border-gray-600 dark:text-white">
<h3 className='text-lg text-white font-bold ml-4 mt-4'> Who to Follow?</h3>
<button type="button" class="relative inline-flex items-center w-full px-4 py-4 text-lg  font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
Trent Alexander Arnold
</button>
<button type="button" class="relative inline-flex items-center w-full px-4 py-4 text-lg  font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
Mosalah
</button>
<button type="button" class="relative inline-flex items-center w-full px-4 py-4 text-lg font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
Ibrahimovich
</button>
<button type="button" class="relative inline-flex items-center w-full px-4 py-4 text-lg  font-medium rounded-b-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
kylianMbappe     
</button>
</div>
    </div>
      
    </div>
  )
}

export default Search
