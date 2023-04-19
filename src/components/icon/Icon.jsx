import React from 'react';
import {CountContext, ProductsContext} from 'Store'
import { ReactComponent as BagIcon } from 'assets/img/bag.svg'

const Icon = () => {
  const [count, setCount] = React.useContext(CountContext)

  const [products, setProducts] = React.useContext(ProductsContext)
  const infinitеProducts = '9+'
  return (
   <div>
    {
      products.length > 3 ? (
        <div>
          <BagIcon></BagIcon>
          {infinitеProducts}
        </div>
      ) : (
        <div>
          <BagIcon></BagIcon>
          {products.length
          }
        </div>
      )
      }
  </div>
  )
}
// import {Container} from 'layouts';
// import { ReactComponent as LogoIcon } from 'assets/img/logo.svg'
// import { ReactComponent as BagIcon } from 'assets/img/bag.svg'
// import propTypes from 'prop-types';
// import classNames from 'classnames';
// import { NavLink } from "react-router-dom";
// import { nameSite } from '_config.js'

// import {CountContext} from 'Store'

// const menuLinks = [
//   {
//     title: 'Home',
//     alias: '/'
//   },
//   {
//     title: 'About',
//     alias: '/about'
//   },
//   {
//     title: <BagIcon />,
//     alias: '/checkout'
//   },
// ]

// const menuItem = menuLinks.map((item) => {
//   return  (
//     <li key={item.alias}>
//       <NavLink to={item.alias}>
//         <div className='ui-button isLink'>{item.title}</div>
//       </NavLink>
//     </li>
//   )
// })

// const menuList = <ul className='HeaderList'>{menuItem}</ul>


// const Header = ({isLogo, isFixed, className, ...attrs}) => {
//   const classes = classNames(
//     className,
//     {
//       isFixed
//     }
//   )

//   const [count, setCount] = React.useContext(CountContext)
//   // setTimeout(() => setCount(3333), 3000)

//   return (
//     <header className={classes} {...attrs}>
//     <Container className="test" title='12345'>
//       <div className='Header justify-between flex py-2 mb-4'>
//         <div className='Logo'>
//           {isLogo && <LogoIcon className="mr-2" />}
//           <span> {nameSite.name} </span>
//         </div>
//         <input type='text' value={count} onChange={(evt) => {setCount(evt.target.value)}}></input>
//         {count}
//         {menuList}
//       </div>
//     </Container>
//     </header>
//     );
// }

// Header.propTypes = {
//   isLogo: propTypes.bool,
//   isFixed: propTypes.any,
//   className: propTypes.string
// }

// Header.defaultProps = {
//   isLogo: true,
//   isFixed: false,
//   className: ''
// }

export default Icon;