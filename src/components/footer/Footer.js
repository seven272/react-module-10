import React from 'react';
import {Container} from '../../layouts';

const Footer = () => {
  return (
    <footer className='Footer'>
      <Container>
        <div className="py-2 mt-6">
          <p className='text-center text-xs' style={{opacity: 0.6}}>
            Сделано на курсе Реакт с нуля до результата
          </p>
        </div>
      </Container>
    </footer>
    );
}


export default Footer