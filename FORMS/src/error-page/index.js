import React, {Fragment} from 'react';
import Header from '../header';
import { Link } from 'react-router-dom';

 
const ErrorPage = () => {
    return (
           <Fragment>
               <Header />
                 <div>   
                 Error!  :(  
                    <Link to='/'>
                     <br/>
                     Go HOME !
                     </Link>
                 </div>
           </Fragment>  
    )
}

export default ErrorPage