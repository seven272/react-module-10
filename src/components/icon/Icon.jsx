import React from 'react';
import {ProductsContext} from 'Store'
import { ReactComponent as BagIcon } from 'assets/img/bag.svg'
import  './icon.css'

const Icon = () => {
  const [products] = React.useContext(ProductsContext)
  const infinitеProducts = '9+'
  // console.log("выводи массив в консоль до изменнеий и группировки " + products)
  console.log(products)
  return (
   <div>
    {
      products.length > 9 ? (
        <div>
          <BagIcon></BagIcon>
          <span className='ui-badge'>{infinitеProducts}</span>
        </div>
      ) : (
        <div >
          <BagIcon></BagIcon>
          <span className='ui-badge'>{products.length
          }</span>
        </div>
      )
      }
  </div>
  )
}

export default Icon;