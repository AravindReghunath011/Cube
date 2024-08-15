import { useContext } from "react";
import { ActiveContext } from "../Contexts/isActiveContext";
import PhotoGrid from "./PhotoGrid"


const CustomerDetails = () => {
    const context = useContext(ActiveContext);
  if (!context) {
    throw new Error('CustomerCard must be used within an ActiveProvider');
  }
  const { activeCustomer} = context;
  return (
    <div className='w-full '>
        <div className='h-[30%] text-center '>
            <h1 className="text-3xl mt-10">{activeCustomer?.name} </h1>
            <p className="mt-5 w-[80%] m-auto = text-gray-600">{activeCustomer?.address}</p>
        </div>
        <div className="h-[70%] w-[80%] m-auto pt-10">
            <PhotoGrid/>
        </div>
    </div>
  )
}

export default CustomerDetails