import React from 'react';
import {Container} from 'layouts';
import { ReactComponent as LogoIcon } from 'assets/img/logo.svg'
import propTypes from 'prop-types';
import classNames from 'classnames';
import { NavLink } from "react-router-dom";
import { nameSite } from '_config.js'
const menuLinks = [
  {
    title: 'Home',
    alias: '/'
  },
  {
    title: 'About',
    alias: '/about'
  },
]

const menuItem = menuLinks.map((item) => {
  return  (
    <li key={item.alias}>
      <NavLink to={item.alias}>
        <div className='ui-button isLink'>{item.title}</div>
        </NavLink>
    </li>
  )
})

const menuList = <ul className='HeaderList'>{menuItem}</ul>


const Header = ({isLogo, isFixed, className, ...attrs}) => {
  const classes = classNames(
    className,
    {
      isFixed
    }
  )
  return (
    <header className={classes} {...attrs}>
    <Container className="test" title='12345'>
      <div className='Header justify-between flex py-2 mb-4'>
        <div className='Logo'>
          {isLogo && <LogoIcon className="mr-2" />}
          <span> {nameSite.name} </span>
        </div>
        {menuList}
      </div>
    </Container>
    </header>
    );
}

Header.propTypes = {
  isLogo: propTypes.bool,
  isFixed: propTypes.any,
  className: propTypes.string
}

Header.defaultProps = {
  isLogo: true,
  isFixed: false,
  className: ''
}

export default Header;