// import { useState } from 'react';
import './App.css';
import CustomerDetails from './Components/CustomerDetails';
import VirtualizedList from './Components/VirtualizedList';






function App() {
  

  return (
    <div className='h-[150vh] flex w-full font-poppins border '>
      <div className='w-[30%]  h-full'>
        <VirtualizedList
          
        />
      </div>
      <div className='w-[70%] border h-full'>
        <CustomerDetails/>
      </div>
    </div>
  );
}

export default App;
