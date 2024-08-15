import { FixedSizeList as List, ListChildComponentProps } from 'react-window';
import CustomerCard from './CustomerCard';
import axios from 'axios';
import {  useEffect, useState } from 'react';
import {  useActiveContext } from '../Contexts/isActiveContext';

  
  const VirtualizedList = () => {
    const {setActiveCustomer,} = useActiveContext()
    interface Customer {
        name: string;
        title: string;
        address: string;
      }
    const [customers, setCustomers] = useState<Customer[]>([]);
    const fetchCustomers = async () => {
        const response = await axios.get('https://randomuser.me/api/?results=1000');
        let customerDatas =  response.data.results.map((user:any, index:number) => ({
          id: index + 1,
          name: `${user.name.first} ${user.name.last}`,
          title: "Customer Title", 
          address: `${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}`,
        }));
        console.log(customerDatas,'customerdatas')
        setCustomers(customerDatas)
        setActiveCustomer(customerDatas[0])
        
      };

      useEffect(()=>{
         fetchCustomers()
      },[])
    return (
    <List
      height={1.5*window.innerHeight} 
      itemCount={1000} 
      itemSize={0.25 * window.innerHeight} 
      width="100%"
    >
      {({ index, style }: ListChildComponentProps) => (
        <div style={style} className="w-full">
          <CustomerCard
            i={index}
            customer={customers[index]}
            
          />
        </div>
      )}
    </List>
  )};

export default VirtualizedList