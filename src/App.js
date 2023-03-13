
import Sidebar from './components/sidebar';
import './App.css';

import Search from './components/Search';
import Newmain from './components/Newmain';
function App() {
  return (
    // <div className="container lg:mx-auto md:mx-auto sm:mx-0 flex flex-row ">
    //    
    //   
    //   


    
    // </div>
    <div className=' dark:bg-gray-800 '>
      <Sidebar/>
     <div className='flex flex-row '>
     <Newmain/>
      <Search/> 

     </div>


   

    </div>
   
  );
}

export default App;
