import React from 'react';
import {Container} from '../../layouts';
import { Link } from "react-router-dom";


const NotFoundPage = () => {
  return (
    <Container>
      <h1 className="ui-title-1 mb-4">404 Page</h1>
      <p>Page not found. Visit <Link className='ui-link' to='/'>Home Page</Link></p>
    </Container>
    );
}

export default NotFoundPage;