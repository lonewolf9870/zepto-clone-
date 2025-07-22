import React , {useContext} from 'react';
import { CustomerContext } from '../Context/CustomerContext';
function Home(){
    const {CustomerName,setCustomerName} = useContext(CustomerContext);    
    return(
        <h1>Hello {CustomerName}</h1>
    )
}

export default Home;