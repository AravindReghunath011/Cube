import React, { useContext } from 'react';
import { ActiveContext } from '../Contexts/isActiveContext';

interface Customer {
  name: string;
  title: string;
  address: string;
}

interface CustomerCardProps {
  i:number,
  customer:Customer
}

  // const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui facere nesciunt dolorem saepe voluptas quasi, consequuntur pariatur impedit error assumenda. Deleniti praesentium distinctio eum officiis illo optio accusamus reprehenderit ipsum voluptatem quisquam!'
  
const CustomerCard: React.FC<CustomerCardProps> = ({ i,customer }) => {
  const context = useContext(ActiveContext);
  if (!context) {
    throw new Error('CustomerCard must be used within an ActiveProvider');
  }
  const { activeIndex, setActiveIndex,setActiveCustomer } = context;
  const handleClick = (index: number, customer: Customer) => {
    setActiveIndex(index); 
    setActiveCustomer(customer);
  };
  return (

    <div onClick={() => handleClick(i, customer)} className={`w-full border border-b-2  ${activeIndex==i && 'bg-gray-200 border border-r border-black' } cursor-pointer h-[25vh]    border-gray-100 p-2 pl-4`}>
        <div className='h-[30%]'>
            <h1 className='text-2xl '> {customer?.name}</h1>
        </div>
        <div className='h-[70%] text-gray-600'>
            <p className=''>{customer?.address}</p>
        </div>

    </div>
  )
}

export default CustomerCard
