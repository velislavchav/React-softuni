import React, {Fragment} from 'react';
import Header from '../header';
import { Link } from 'react-router-dom';
import data from '../data';

 
const ProductPage = (props) => {
    console.log(props);
    

    const product = data[props.match.params.id]
    return (
           <Fragment>
               <Header />
                 <div>  
                    <div> 
                        Product Page - {product.title}
                            <Link to='/'>
                             <br/>
                             GO BACK TO HOMEPAGE
                            </Link>
                    </div>
                 </div>
           </Fragment>
          
    )
}

export default ProductPage